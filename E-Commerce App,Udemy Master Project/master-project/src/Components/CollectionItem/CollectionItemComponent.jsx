import React from 'react'
import { connect } from "react-redux"
import { addItem } from "../../Redux/cart/cart-actions"
import "./CollectionItemComponentStyle.scss"
import CustomButton from "../CustomButtonComponent/CustomButtonComponent"

const CollectionItemComponent = ({ item,addItem}) => {
    const {name, price, imageUrl } = item;
    
    return (
    <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick = {() => addItem(item)} inverted = "true"> ADD TO CART </CustomButton>
    </div>
    )
}

const mapDispatchToProps = dispatch => {
  return { 
      addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItemComponent);
