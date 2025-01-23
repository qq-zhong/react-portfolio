import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Peter</h1>
      
      {/* <p className = {styles.description}>I'm a developer looking for an internship, 
          reach out if you'd like to learn more!</p> */}
          <p className = {styles.description}>SFU Computer Science</p>
          <p className = {styles.description}>UBC Physics</p>
      <a href="mailto:peter.qq.zhong@gmail.com" className={styles.contactBtn}>
          Contact me
      </a>
    </div>
    <img src={getImageUrl("hero/peter6.jpg")} alt="hero image of me" className={styles.heroImg} />
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}
