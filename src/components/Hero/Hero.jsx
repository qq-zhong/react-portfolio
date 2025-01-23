import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  const imageUrl = getImageUrl("hero/peter6.jpg");

  // Log the final URL being requested for debugging purposes
  console.log(`Image URL requested: ${imageUrl}`);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Peter</h1>

        <p className={styles.description}>SFU Computer Science</p>
        <p className={styles.description}>UBC Physics</p>
        <a href="mailto:peter.qq.zhong@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>

      {/* Log when image loading fails or succeeds */}
      {/* <img 
        src={imageUrl} 
        alt="hero image of me" 
        className={styles.heroImg}
        onError={(e) => console.log(`Failed to load image: ${e.target.src}`)}
        onLoad={(e) => console.log(`Successfully loaded image: ${e.target.src}`)}
      /> */}

      <img src="assets/hero/peter6.jpg" alt="peter"  className={styles.heroImg}/>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
