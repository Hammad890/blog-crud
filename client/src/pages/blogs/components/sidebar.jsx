import React, { useState, useEffect } from 'react';
import useGetBlogs from '../hooks/useGetBlogs';

const Sidebar = ({ onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
 const { categories } = useGetBlogs(selectedCategories);
  useEffect(() => {
    setSelectedCategories([]); 
  }, [categories]);

  const handleCheckboxChange = (category) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(item => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedSelectedCategories);
    onCategoryChange(updatedSelectedCategories);
  };
  const reversedCategories = categories.slice().reverse();
  return (
    <aside className="w-64 bg-purple-600 text-white shadow-md p-6 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Filter by Categories</h2>
      <ul className="space-y-2">
        {reversedCategories.map((category, index) => (
          <li key={category} className="flex items-center">
            <input
              type="checkbox"
              id={`category-${index}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="h-4 w-4 text-white border-gray-300 rounded"
            />
            <label htmlFor={`category-${index}`} className="ml-2 text-gray-200">
              {category}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
