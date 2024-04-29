import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="category-filter">
      <h5>Category filters</h5>
      {categories && categories.map((category) => (
        <button 
          key={category} 
          onClick={() => handleCategoryClick(category)}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
