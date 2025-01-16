import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">© 2025 Your Blog, All Rights Reserved</p>
        <div className="flex justify-center space-x-4">
          <a href="facbook" className="text-gray-400 hover:text-white">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="twitter" className="text-gray-400 hover:text-white">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="instagram" className="text-gray-400 hover:text-white">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
