import React from 'react'
import './CategoryItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const CategoryItem =  ({category}) =>{
const {item, Imgurl} = category
return (
  <div className="category-container">
    <div className="background-image" style={{ backgroundImage: `url(${Imgurl})` }}/>
    <div className="category-body-container">
      <h2>{item}</h2>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  </div>
)
};
export default CategoryItem;