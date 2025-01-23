import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id = "contact" className={styles.container}>
        <div className= {styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className= {styles.links}>
            <li className= {styles.link}>
                <img src={"assets/contact/emailIcon.png"} alt="Email icon" />
                <a href="mailto:peter.qq.zhong@gmail.com">peter.qq.zhong@gmail.com</a>
            </li>
            <li className= {styles.link}>
                <img src={"assets/contact/linkedinIcon.png"} alt="Email icon" />
                <a href="https://www.linkedin.com/qqzhong">linkedin.com</a>
            </li>
            <li className= {styles.link}>
                <img src={"assets/contact/emailIcon.png"} alt="Email icon" />
                <a href="https://www.githumb.com/qqzhong">www.githumb.com/qqzhong</a>
            </li>
        </ul>
    </footer>
  )
}
