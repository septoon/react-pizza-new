import React from 'react'
import './CatalogItem.css'

const CatalogItem = ({ id, image, title, composition, prices, isChange, onClickAddPizza }) => {
  const priceHolder = React.createRef()

  const [activeSize, setActiveSize] = React.useState('30 см')
  const [activePrice, setActivePrice] = React.useState(prices[0])

  const onAddPizza = () => {
    const obj = {
      id, title, image, activePrice, activeSize
    }
    onClickAddPizza(obj)
  }
  return (
     <div className="catalog_item" >
        <div className="catalog_item_block">
          <img src={image} alt={title} className="image" />
          <span className="name" >{title}</span>
          <span className="description" >Состав: {composition}</span>
        </div>
        <div className="catalog_item_block">
          <div className="size">
          
            <button onClick={ (e) => {
              isChange = true
              setActivePrice(prices[0])
              setActiveSize('30 см')
            } } onBlur={ () => { isChange = false}} className="size_item">Ø 30 см</button>

            <button onClick={ (e) => {
              isChange = true
              setActivePrice(prices[1])
              setActiveSize('40 см')
            } } onBlur={ () => { isChange = false}} className="size_item">Ø 40 см</button>
            
            <button onClick={ (e) => {
              isChange = true
              setActivePrice(prices[2])
              setActiveSize('50 см')
            } } onBlur={ () => { isChange = false}} className="size_item">Ø 50 см</button>

          </div>
          <span className="packing_item">+40₽ к стоимости за упаковку</span>
          <div className="price_holder">
            <span className="price pr_inp">
              <span className="price_count"> 
              <b ref={priceHolder} >{activePrice}&nbsp;</b> 
              ₽ </span>
            </span>
            <button className="btn_order" 
              onClick={ onAddPizza }
              >+ Добавить </button>
          </div>
        </div>

      </div>
  )
}

export default CatalogItem
