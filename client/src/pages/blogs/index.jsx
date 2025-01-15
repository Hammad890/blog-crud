import React from 'react'
import Sidebar from './components/sidebar'
import Pagination from './components/pagenation'
import { useState } from 'react';
import  { Link } from 'react-router-dom';

export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; 

    const handlePageChange = (page) => {
        setCurrentPage(page);
        
    };
  return (
    <div className="flex relative">
    <Sidebar className="w-full md:w-1/4" />
    <div className="w-full md:w-3/4 p-4">
    <button className="absolute top-4 right-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
    <Link to="/blogs/new" className="text-white">
    Create Blog
    </Link>
</button>
      <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
</div>
</div>
  )
}
