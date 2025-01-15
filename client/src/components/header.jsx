import React from 'react';
import  { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4">
            <div className="container mx-auto flex justify-center items-center">
                <nav className="flex space-x-8 items-center">
                    <Link to="/" className="hover:text-yellow-200 transition duration-300">Home</Link>
                    <Link to="/blogs" className="hover:text-yellow-200 transition duration-300">Blogs</Link>
                    <Link to="/contact" className="hover:text-yellow-200 transition duration-300">Contact Us</Link>
                    <Link to="/about" className="hover:text-yellow-200 transition duration-300">About Us</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

