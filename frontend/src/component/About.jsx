import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              <span className="font-semibold text-gray-800">Our Story</span>
              <br />
              At <span className="font-semibold text-amber-600">CadNCart</span>, we’re passionate about delivering an exceptional online shopping experience to our customers. Our journey began with a simple goal – to bring you a diverse and curated selection of products, all in one convenient place.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="font-semibold text-gray-800">Our Mission</span>
              <br />
              Our mission is to provide an outstanding online shopping experience. We carefully curate a wide range of high-quality products to ensure convenience and satisfaction for our valued customers.
            </p>
          </div>


          
          <div className="flex flex-col gap-8 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121993443-9d4fbc308de3?q=80&w=1887&auto=format&fit=crop"
                alt="Our Story"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-500"
              />
              <img
                src="https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Our Mission"
                className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-500"
              />
            </div>


            
            <div className="text-center bg-gray-500/10 p-6 rounded-lg shadow-xl w-full max-w-sm">
              <img
                src="cdc1.jpg"
                alt="Developer"
                className="w-32 h-32 rounded-full border-4 border-amber-600 shadow-lg mx-auto hover:scale-105 transition duration-500 object-fill"
              />
              <h2 className="mt-4 text-xl font-bold text-gray-800">Amarjeet Kumar</h2>
              <p className="text-gray-600">MERN Stack Developer</p>

              
              <div className="flex justify-center gap-4 mt-4 text-indigo-600 text-2xl">
                <a href="https://github.com/Amarjeet113" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition text-white duration-300 bg-amber-500 rounded-md p-2">
Github                </a>
                <a href="https://www.linkedin.com/in/amarjeet-kumar-293252228/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition text-white duration-300 bg-amber-500 rounded-md p-2">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
