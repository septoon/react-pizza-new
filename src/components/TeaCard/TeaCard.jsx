import React from 'react'
import classes from './TeaCard.module.css'

const TeaCard = ({ teaCardPage }) => {
  const cardData = teaCardPage.teaCardData
  const cardDataKeys = Object.keys(cardData)
  return (
    <div className={classes.teaCard_wrapper}>
      {cardDataKeys.map(c => <div className={classes.card_wrap} key={c.id}>
        {
          cardData[c]
          .map((el, index) => (
          <div className={classes.card_items} key={index} >
            <h1 className={classes.teaCard_title}>{el.header}</h1>
            <div className={classes.card_item}>
              <div className={classes.item} >
                <h3>{el.title}</h3>
                <span>{el.description}</span>
              </div>
            </div>
          </div>
          ))
        }
      </div> )}
    </div>
  )
}

export default TeaCard
