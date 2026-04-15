// scripts/fetch-reviews.js
const https = require('https')
const fs = require('fs')
const path = require('path')

const API_KEY = process.env.GOOGLE_PLACES_API_KEY

if (!API_KEY) {
  console.error('GOOGLE_PLACES_API_KEY is not set')
  process.exit(1)
}

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(JSON.parse(data)))
    }).on('error', reject)
  })
}

async function main() {
  // Step 1: Find Place ID by searching business name + location
  const searchQuery = encodeURIComponent('HIGHEND INTERIORS Vile Parle Mumbai')
  const searchUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchQuery}&inputtype=textquery&fields=place_id,name,rating&key=${API_KEY}`

  console.log('Searching for place...')
  const searchResult = await get(searchUrl)
  console.log('Search response status:', searchResult.status)

  if (searchResult.status !== 'OK' || !searchResult.candidates?.length) {
    console.error('Could not find place:', JSON.stringify(searchResult))
    process.exit(1)
  }

  const placeId = searchResult.candidates[0].place_id
  console.log('Found Place ID:', placeId)
  console.log('Business name:', searchResult.candidates[0].name)

  // Step 2: Fetch place details + reviews
  const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${API_KEY}`

  console.log('Fetching reviews...')
  const details = await get(detailsUrl)
  console.log('Details response status:', details.status)

  if (details.status !== 'OK') {
    console.error('Places details error:', details.status, details.error_message)
    process.exit(1)
  }

  const result = details.result
  const output = {
    rating: result.rating,
    total: result.user_ratings_total,
    reviews: (result.reviews || []).map(r => ({
      name: r.author_name,
      avatar: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      date: new Date(r.time * 1000).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
      url: r.author_url,
    })),
    fetchedAt: new Date().toISOString(),
  }

  const outPath = path.join(__dirname, '..', 'public', 'reviews.json')
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2))
  console.log(`Saved ${output.reviews.length} reviews — rating: ${output.rating} (${output.total} total)`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
