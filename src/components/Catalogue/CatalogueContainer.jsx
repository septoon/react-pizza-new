import React from 'react'
import { connect } from 'react-redux'
import Catalogue from './Catalogue'
import { addCatalogList, toggleIsActive } from "../../redux/catalog-reducer"
import { addPizzaToCartAC, setTotalCountAC } from "../../redux/cart-reducer"
import catalogList from '../../common/json/catalog-list'

class CatalogueContainer extends React.Component {
  componentDidMount() {
    this.props.addCatalogList(this.props.list)
   }
  
  addPizzaToCart(obj) {
    debugger
    this.props.addPizzaToCartAC(obj)
    console.log(obj);
  }

  render() {
    return (
      <Catalogue catalogData={this.props.catalogData}
                 addPizzaToCart={this.addPizzaToCart}
                 toggleIsActive={this.props.toggleIsActive}
                 isActive={this.props.isActive} />
    )
  }
}

const mapStateToProps = (state) => ({
  catalogData: state.catalogPage.catalogData,
  list: catalogList,
  isActive: state.catalogPage.isActive,
  cartItems: state.cart.items
})

export default connect(
  mapStateToProps, 
  { addCatalogList, toggleIsActive, addPizzaToCartAC, setTotalCountAC }
) (CatalogueContainer)
