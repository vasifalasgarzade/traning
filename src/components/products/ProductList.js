import React, { Component } from 'react'
import { connect } from "react-redux"
import { Badge, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"

class ProductList extends Component {


  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    return (
      <div>
        <h4>Products---
          <Badge color='success'>{this.props.currentCategory.categoryName}</Badge>

        </h4>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>unit price</th>
              <th>quantity per unit</th>
              <th>unit in stock</th>

            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map
                (
                  product =>
                  (
                    <tr key={product.id}>
                      <th scope="row">{product.id}</th>
                      <td >{product.productName}</td>
                      <td>{product.unitPrice}</td>
                      <td>{product.quantityPerUnit}</td>
                      <td>{product.unitsInStock}</td>
                    </tr>
                  )
                )
            }

          </tbody>
        </Table>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReduser,
    products: state.productListReduser

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  }


}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)