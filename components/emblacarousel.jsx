import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './styles/emblacarousel.module.css'
import Autoplay from 'embla-carousel-autoplay'

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <p className={styles.homepage_p}>Web Developer</p>
        </div>
        
        <div className={styles.embla__slide}>
          <p className={styles.homepage_p}>Digital Marketer</p>
        </div>
        <div className={styles.embla__slide}>
          <p className={styles.homepage_p}> Graphic Designer</p>
        </div>
        <div className={styles.embla__slide}>
          <p className={styles.homepage_p}>Entrepreneur</p>
        </div>
        <div className={styles.embla__slide}>
          <p className={styles.homepage_p}>Building Construction Technician</p>
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel
