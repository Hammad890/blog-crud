import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import useGetBlogs from '../hooks/useGetBlogs';
import useDelete from '../hooks/useDelete';

const BlogDetails = () => {
    const { id } = useParams();
    const { blog, isLoadingBlog, getBlogDataById } = useGetBlogs();
    const { handleDelete } = useDelete();
    const navigate = useNavigate();

    useEffect(() => {
        getBlogDataById(id);
    },[]);

    if (isLoadingBlog) {
        return <p>Loading blog details...</p>;
    }

    if (!blog) {
        return <p>Blog not found.</p>;
    }
    const handleEdit = () => {
        navigate(`/blogs/${id}/edit`, { state: { blog } });
    };
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h2>
                <p className="text-lg text-gray-600 mb-4">{blog.content}</p>
                <p className="text-sm text-gray-500">By {blog.author}</p>

                <div className="mt-6">
                    <button
                     onClick={handleEdit}
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(id)}
                        className="bg-red-500 text-white px-6 py-2 ml-4 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
