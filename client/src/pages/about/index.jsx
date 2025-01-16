import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-purple-50 py-12">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-8">
                <h2 className="text-4xl font-extrabold text-center text-purple-900 mb-6">
                    About Us
                </h2>
                <div className="flex items-center justify-center space-x-8">
                    <div className="w-1/2 p-4 bg-pink-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            At Blogs, our mission is simple – to provide high-quality content that educates, entertains, and empowers readers. We believe in creating a space where stories are told, ideas are shared, and inspiration flows.
                        </p>
                    </div>
                    <div className="w-1/2 p-4 bg-pink-50 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Values</h3>
                        <p className="text-gray-600">
                            We value creativity, authenticity, and community. Our goal is to create engaging, well-researched content that resonates with our diverse audience. Every article we produce is crafted with care to provide real value.
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Team</h3>
                    <div className="flex justify-center space-x-4">
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl">
                            T
                        </div>
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl">
                            J
                        </div>
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-white text-xl">
                            A
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600">Meet our passionate team of creators, writers, and strategists who work tirelessly to bring you engaging content!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;