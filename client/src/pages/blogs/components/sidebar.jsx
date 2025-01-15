import React, { useState } from 'react';

const Sidebar = () => {
    const [categories, setCategories] = useState([
        { name: 'XYZ1', checked: false },
        { name: 'XYZ2', checked: false },
        { name: 'XYZ3', checked: false },
    ]);

    const handleCheckboxChange = (index) => {
        const updatedCategories = [...categories];
        updatedCategories[index].checked = !updatedCategories[index].checked;
        setCategories(updatedCategories);
    };

    return (
        <aside className="w-64 bg-purple-600 text-white shadow-md p-6 min-h-screen">
            <h2 className="text-xl font-bold mb-4">Filter by Categories</h2>
            <ul className="space-y-2">
                {categories.map((category, index) => (
                    <li key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`category-${index}`}
                            checked={category.checked}
                            onChange={() => handleCheckboxChange(index)}
                            className="h-4 w-4 text-white border-gray-300 rounded"
                        />
                        <label htmlFor={`category-${index}`} className="ml-2 text-gray-200">
                            {category.name}
                        </label>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;