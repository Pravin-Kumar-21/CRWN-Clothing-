import React from 'react'
import './CategoryItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const CategoryItem =  ({id, item, Imgurl}) =>{
console.log(id)
console.log(item)
console.log(Imgurl)
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