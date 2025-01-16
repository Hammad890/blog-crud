import React from 'react';
import useCreate from '../hooks/useCreate';

export default function BlogForm() {
    const { title, content, category,author, handleInputChange, handleSubmit } = useCreate();

    return (
        <div className="mt-16">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={content}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                        Category:
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a category</option>
                        <option value="xyz1">xyz1</option>
                        <option value="xyz2">xyz2</option>
                        <option value="xyz3">xyz3</option>
                    </select>
                    <div className="mb-4">
                    <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
                        Author:
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Blog
                    </button>
                </div>
            </form>
        </div>
    );
}