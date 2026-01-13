import React from 'react'
import styles from "./UnifiedAbout.module.css"
import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'


export const UnifiedAbout = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>

                        </div>

                    })

                }
                </div>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={"assets/about/game_dev.png"} alt="Server icon" className={styles.image} />
                        <div>
                            <h3>Game Developer</h3>
                            <p>
                                I love builing games in Uniny, and hope to use Unreal in my next game
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={"assets/about/computer.png"} alt="Cursor icon" className={styles.image} />
                        <div>
                            <h3>Front End Developer</h3>
                            <p>
                                I'm a frontend developer with experience building
                                multiple webistes
                            </p>
                        </div>
                    </li>
                    {/* <li className = {styles.aboutItem}>
                                <img src={"assets/about/prototype.png"} alt="Server icon" className={styles.image}/>
                                <div>
                                    <h3>Backend Developer</h3>
                                    <p>
                                    I've developed back end system, databases and APIs
                                    </p>
                                </div>
                            </li> */}
                    <li className={styles.aboutItem}>
                        <img src={"assets/about/android.png"} alt="Cursor icon" className={styles.image} />
                        <div>
                            <h3>Android Developer</h3>
                            <p>
                                I have designed multiple android applications
                            </p>
                        </div>
                    </li>
                </ul>


            </div>


        </section>
    )
}
