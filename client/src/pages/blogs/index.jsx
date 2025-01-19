import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Pagination from './components/pagination';
import useGetBlogs from './hooks/useGetBlogs';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { blogs, isLoading } = useGetBlogs(selectedCategories);

  const totalPages = Math.ceil(blogs.length / 6);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    setCurrentPage(1);
  };
  const filteredBlogs = selectedCategories.length
    ? blogs.filter(blog => selectedCategories.includes(blog.category))
    : blogs;
  return (
    <div className="flex relative">
      <Sidebar className="w-full md:w-1/4" onCategoryChange={handleCategoryChange} />
      <div className="w-full md:w-3/4 p-4">
        <button className="absolute top-4 right-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">
          <Link to="/blogs/new" className="text-white">Create Blog</Link>
        </button>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            filteredBlogs.slice((currentPage - 1) * 6, currentPage * 6).map(blog => (
              <div key={blog._id} className="bg-white p-4 shadow-md rounded-lg">
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <Link to={`/blogs/${blog._id}`} className="text-purple-600">Read More</Link>
              </div>
            ))
          )}
        </div>
  
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
