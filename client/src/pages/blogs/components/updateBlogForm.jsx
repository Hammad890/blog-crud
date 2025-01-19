import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUpdateBlog from "../hooks/useEdit";
import { useLocation } from 'react-router-dom';

const UpdateBlogForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { blog } = location.state || {};

    const [isBlogLoaded, setIsBlogLoaded] = useState(false);
    const { title, content, author, handleTitleChange, handleContentChange, handleAuthorChange, handleSubmit, isLoading, error, updatedBlog } = useUpdateBlog(id, blog);

    const onSuccess = (updatedBlog) => {
        navigate(`/blogs/${blog._id}`);
    };

    if (!isBlogLoaded) {
        setIsBlogLoaded(true);
    }

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Update Blog</h2>
            {isLoading ? (
                <p>Updating...</p>
            ) : (
                <form onSubmit={(e) => handleSubmit(e, onSuccess)} className="bg-white shadow-lg rounded-lg p-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Blog Title"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="content">
                            Content
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={handleContentChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Blog Content"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="author">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={handleAuthorChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            placeholder="Blog Author"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        disabled={isLoading}
                    >
                        {isLoading ? "Updating..." : "Update Blog"}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error.message}</p>}
                </form>
            )}

            {updatedBlog && (
                <div>
                    <h3>Updated Blog:</h3>
                    <p>Title: {updatedBlog.title}</p>
                    <p>Content: {updatedBlog.content}</p>
                    <p>Author: {updatedBlog.author}</p>
                </div>
            )}
        </div>
    );
};

export default UpdateBlogForm;
