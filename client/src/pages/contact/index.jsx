import React, { useState } from 'react';

const ContactUsPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted!');
    };

    return (
        <div className="min-h-screen bg-purple-50 py-12">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-8">
                <h2 className="text-4xl font-extrabold text-center text-purple-900 mb-6">Contact Us</h2>
                <div className="flex justify-between items-center space-x-12">
                    <div className="w-1/2">
                        <h3 className="text-2xl font-semibold text-purple-800 mb-4">We'd love to hear from you!</h3>
                        <p className="text-gray-600">
                            Whether you have a question, feedback, or just want to say hello, feel free to get in touch with us. We're always happy to connect!
                        </p>
                    </div>
                    <div className="w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    rows="4"
                                    placeholder="Your Message"
                                />
                            </div>
                            <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;