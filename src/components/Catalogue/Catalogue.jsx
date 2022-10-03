import React from 'react'
import CatalogItem from './CatalogItem/CatalogItem'
import classes from './Catalogue.module.css'
import {useSelector, useDispatch} from 'react-redux'

import { addCatalogList, toggleIsActive } from "../../redux/catalog-reducer"
import { addPizzaToCartAC } from "../../redux/cart-reducer"
import catalogList from '../../common/json/catalog-list'

const Catalogue = props => {
  const dispatch = useDispatch()
  const { catalogData, isActive } = useSelector(({ catalogPage }) => ({
    catalogData: catalogPage.catalogData,
    isActive: catalogPage.isActive
  }))

  React.useEffect(() => { 
    dispatch(addCatalogList(catalogList))
  }, [dispatch])
  
  const addPizzaToCart = (obj) => {
    dispatch(addPizzaToCartAC(obj))
  }
  
  
  return (
    <div className={classes.catalog_wrapper} >
      <div className={classes.wrapper} >
        {catalogData.map(item => {
              return (<CatalogItem key={item.id}
                          onClickAddPizza={addPizzaToCart}
                          {...item}
                          toggleIsActive={toggleIsActive}
                          isActive={isActive} />)
        })}
      </div>  
    </div>
  )
}

export default Catalogue
