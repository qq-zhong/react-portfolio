import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="me sitting with a laptop" className={styles.aboutImage} />
        
            <ul className = {styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <img src={getImageUrl("about/game_dev.png")} alt="Cursor icon"  className={styles.image} />
                    <div>
                        <h3>Game Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building
                            and optimizing sties
                        </p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img src={getImageUrl("about/computer.png")} alt="Cursor icon"  className={styles.image} />
                    <div>
                        <h3>Front End Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building
                            and optimizing sties
                        </p>
                    </div>
                </li>
                {/* <li className = {styles.aboutItem}>
                    <img src={getImageUrl("about/prototype.png")} alt="Server icon" className={styles.image}/>
                    <div>
                        <h3>Backend Developer</h3>
                        <p>
                        experience developing and optimising back end system and APIs
                        </p>
                    </div>
                </li> */}
                <li className = {styles.aboutItem}>
                    <img src={getImageUrl("about/android.png")} alt="Cursor icon"  className={styles.image}/>
                    <div>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages and have systems as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
