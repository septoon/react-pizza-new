import React from 'react'
import classes from './AboutUs.module.css'

const AboutUs = (props) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>О нас</h1>
      <span>Пиццерия "Виват" это широкий ассортимент пиццы,
        разливного пива а также напитки и десерты.</span><br/>
      <span>Бесплатная доставка пиццы по городу бесплатно! В кафе WIFI бесплатно!</span><br/>
      <span>Мы ждем вас по адресу: Алушта, ул. Горького, 54-а (возле фирменного магазина "Массандра")</span><br/>
      <span>КОНТАКТНЫЙ ТЕЛЕФОН: <a href="tel:+79787048806">+7 978 704 88 06</a> </span>
    </div>
  )
}

export default AboutUs
