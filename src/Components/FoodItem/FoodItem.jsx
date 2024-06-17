import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
const FoodItem = ({id,name,price,description,image}) => {
const [itemCount, setItemCount] = useState(0)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt="" />
            {!itemCount
            ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon} alt="" />
            :<div className='food-item-counter'>
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_black} alt="" />
                </div>
            }
      </div>
      <div className="food-iteminfo">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.stars} alt="" />
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">
            ${price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
