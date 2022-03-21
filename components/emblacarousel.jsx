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
        <div className={styles.embla__slide}>Slide 1</div>
        <div className={styles.embla__slide}>Slide 2</div>
        <div className={styles.embla__slide}>Slide 3</div>
      </div>
    </div>
  )
}
export default EmblaCarousel
