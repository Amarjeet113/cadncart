import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white mb-3">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              New
              <span className="text-orange-600 p-4">
                <span className="text-[6rem]">S</span>
                eason.
              </span>
              <br />
              New
              <span className="text-orange-600 p-4">
                <span className="text-[4.2rem]">M</span>
                ood.
              </span>
              <br />
              New
              <span className="text-orange-600 p-4">You.</span>
            </h1>
            <p className="mt-4 flex text-xl text-gray-500">
              It's Time To Turn Over A New Leaf🌿
            </p>
            <Link
              to="/product"
              className="inline-block rounded-md border border-transparent bg-orange-600 px-8 py-3 text-center font-medium text-white hover:bg-orange-700 mt-4"
            >
              Explore Now 🌿
            </Link>
          </div>
          <div className="mt-10">
            <div className="sm:absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  {/* Image 1 */}
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0587/0531/3990/files/Next_to_the_quote.png?v=1685424000"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Image 2 */}
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://th.bing.com/th/id/OIP.4Zqok2cCD0d1R-iHDgJQ1QHaHa?rs=1&pid=ImgDetMain"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 sm:gap-y-4">
                  {/* Image 3 */}
                  <div className="h-60 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://th.bing.com/th/id/R.f10597b60b61c7e88f2164bc70cbf440?rik=cVbw4F00Toh6lg&riu=http%3a%2f%2fworthingtoncf.com%2fwp-content%2fuploads%2f2013%2f10%2fproducts_image21.jpg&ehk=5EEzn8Dr2QkSu%2bSxfhq1HuHxFzFUH8%2ffVQ6b0psLbck%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  {/* Image 4 */}
                  <div className="h-60 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://i.pinimg.com/originals/9f/b6/20/9fb620aea26d1551e3d105959dba72e9.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  {/* Image 5 */}
                  <div className="h-60 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://th.bing.com/th/id/OIP.4kDzFBWb0wagUN0ZslMv8wHaId?rs=1&pid=ImgDetMain"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 sm:gap-y-4">
                  {/* Image 6 */}
                  <div className="h-60 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://th.bing.com/th/id/OIP.2Du2uREMvQsz0PwyV_Vu0QHaHa?rs=1&pid=ImgDetMain"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  {/* Image 7 */}
                  <div className="h-60 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-lg shadow-orange-900 transform hover:scale-110 transition-transform duration-300">
                    <img
                      src="https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_1280.jpg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
