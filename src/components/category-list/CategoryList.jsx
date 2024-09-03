import React from 'react';
import './CategoryList.scss'
import CategoryItem from '../category-item/CategoryItem';
import ImageSlider from '../image-slider/ImageSlider';
const CategoryList = ({ categories }) => {
  return (
  
    <div className="categories-container">
    <ImageSlider/>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />    
      ))}
    </div>
  );
};

export default CategoryList;
