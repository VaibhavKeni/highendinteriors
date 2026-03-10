import { useState, useEffect, useCallback } from 'react'
import './Slider.css'

interface Slide {
  title: string
  subtitle: string
  img: string
}

const slides: Slide[] = [
  {
    title: 'Living Room',
    subtitle: 'Modern Design',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80',
  },
  {
    title: 'Kitchen',
    subtitle: 'Luxury Modular',
    img: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1600&q=80',
  },
  {
    title: 'Bedroom',
    subtitle: 'Elegant Space',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80',
  },
  {
    title: 'Office',
    subtitle: 'Contemporary',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
  },
  {
    title: 'Dining',
    subtitle: 'Premium Interior',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80',
  },
]

const IMAGE_PARTS = 4
const AUTOCHANGE_TIME = 10000

export default function CitiesSlider() {
  const [activeSlide, setActiveSlide] = useState(-1)
  const [prevSlide, setPrevSlide] = useState(-1)
  const [sliderReady, setSliderReady] = useState(false)

  const changeSlides = useCallback((change: number) => {
    setPrevSlide(activeSlide)
    setActiveSlide((prev) => {
      let next = prev + change
      if (next < 0) next = slides.length - 1
      if (next >= slides.length) next = 0
      return next
    })
  }, [activeSlide])

  useEffect(() => {
    setTimeout(() => {
      setActiveSlide(0)
      setSliderReady(true)
    }, 0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlides(1)
    }, AUTOCHANGE_TIME)
    return () => clearInterval(interval)
  }, [changeSlides])

  return (
    <div className={`slider ${sliderReady ? 's--ready' : ''}`}>
      <p className="slider__top-heading">HIGH END <span style={{ fontFamily: "Mistral, cursive", textTransform: 'none', fontSize: '40px',letterSpacing: 0 }}>Interiors</span></p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={`slider__slide ${activeSlide === index ? 's--active' : ''} ${prevSlide === index ? 's--prev' : ''}`}
            key={slide.title}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">{slide.subtitle}</h3>
              <h2 className="slider__slide-heading">
                {slide.title.split('').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              {/* <p className="slider__slide-readmore">Explore More</p> */}
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill(0)].map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
    </div>
  )
}
