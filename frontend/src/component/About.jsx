import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: About Text */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              <span className="font-semibold text-gray-800">Our Story</span>
              <br />
              At <span className="font-semibold text-indigo-600">eCom</span>, we’re
              passionate about delivering an exceptional online shopping
              experience to our customers. Our journey began with a simple
              goal – to bring you a diverse and curated selection of products,
              all in one convenient place.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-gray-800">Our Mission</span>
              <br />
              Our mission is to provide an outstanding online shopping experience.
              We carefully curate a wide range of high-quality products to ensure
              convenience and satisfaction for our valued customers.
            </p>
          </div>
          {/* Right Section: Image Cards */}
          <div className="md:w-1/2 md:pl-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                  alt="Our Story"
                  className="w-full h-48 object-cover transform transition duration-500 hover:scale-105"
                />
              </div>
              {/* Card Group with Two Cards */}
              <div className="flex flex-col gap-6">
                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Our Mission"
                    className="w-full h-48 object-cover transform transition duration-500 hover:scale-105"
                  />
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Teamwork"
                    className="w-full h-48 object-cover transform transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
