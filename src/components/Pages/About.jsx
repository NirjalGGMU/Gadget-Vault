import React from 'react';
import Heading from '../Shared/Heading';

const About = () => {
  return (
    <div className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Heading title="About Us" subtitle="Learn more about our store" />
        
        <div className="max-w-3xl mx-auto mt-10 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome to Gadget Vault
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your premier destination for cutting-edge technology and electronics. 
              We pride ourselves on offering a carefully curated selection of high-quality gadgets and accessories.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our mission is to provide tech enthusiasts with the latest and greatest in electronic innovations, 
              backed by exceptional customer service and expert knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the leading provider of premium technology solutions, making innovative gadgets 
                accessible to everyone while maintaining the highest standards of quality and service.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Why Choose Us
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Premium Quality Products</li>
                <li>Expert Customer Support</li>
                <li>Secure Shopping Experience</li>
                <li>Fast & Reliable Shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;