import React from 'react'
import css from './Profile.module.css'
import { useTheme } from '../../hooks'

export const Profile = () => {

  const { theme } = useTheme()

  return (
    <div className={css.Profile}>
        <img src="src/images/Profile_Img.jpg" className={theme === 'dark' ? css.ImageDark : css.ImageLight} alt=""/>
        <div className={css.Name_Detail}>
          <h1>Gibran Yahel San Luis Sanchez</h1>
          <p>Full-Stack - React - JavaScript - UI/UX</p>
        </div>
        <div className={css.Presentation}>
            <strong>Hello!</strong>, my name is <strong>Gibran Yahel</strong> and I am a Full-Stack developer. I like to be creative in the products 
            I create to stand out and give unique experiences, 
              I strive for authenticity in each interface and in my animations.
            
            <p>I like to discover new ways to transmit different missions, visions and values ​​on each website, I believe in healthy competition 
              and that understanding the consumer is the best way to offer a service and a product, regardless of the target.
            </p>
        </div>
    </div>
  )
}