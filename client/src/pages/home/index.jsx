import React from 'react';
import useGetBlogs from '../blogs/hooks/useGetBlogs';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { blogs, isLoading } = useGetBlogs();
    const navigate = useNavigate();

   
    return (
        <div className="text-center">
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-purple-700 mb-4">About Our Blog</h2>
                    <p className="text-lg text-gray-600 mb-8">We are passionate about sharing insights, tips, and stories with our readers. Stay informed and inspired with our carefully curated content.</p>
                </div>
            </section>
            <section className="py-16 px-6 bg-gray-50">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">Latest Blogs</h2>
        {isLoading ? (
            <p>Loading blogs...</p>
        ) : (
            blogs && blogs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.slice(0, 6).map(blog => (
                        <div key={blog._id} className="bg-white shadow-md rounded p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                            <p className="text-gray-600">{blog.content}</p>
                            <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition duration-300"
                            onClick={() => navigate(`/blogs/${blog._id}`)}
                            >
                                View
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No blogs available.</p>
            )
        )}
    </div>
</section>

            <section className="py-16 px-6 bg-purple-700 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
                    <p className="text-lg mb-6">Subscribe to our newsletter and get the latest posts directly to your inbox.</p>
                    <form className="flex justify-center">
                        <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-md text-gray-700" />
                        <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-r-md hover:bg-yellow-600 transition duration-300">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;
