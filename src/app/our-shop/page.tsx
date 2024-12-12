import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";

export default function Menu () {
    return (
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl"></span>
      <div className="flex items-center text-2xl font-bold justify-center w-full">
                <span className="text-orange-500">Food</span>
                <span className="text-white">tuck</span>
            </div>

            

    </a>
    <nav className="text-white md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/" className="mr-9 text-orange-500 hover:text-white">Home</Link>
      <Link href="/our-menu" className="mr-9 hover:text-orange-500">Menu</Link>
      <Link href="/our-blogs" className="mr-9 hover:text-orange-500">Blog</Link>
      <Link href="/faq-page" className="mr-9 hover:text-orange-500">Pages</Link>
      <Link href="/about-us" className="mr-9 hover:text-orange-500">About</Link>
      <Link href="/our-shop" className="mr-9 hover:text-orange-500">Shop</Link>
      <Link href="#contact" className="mr-9 hover:text-orange-500">Contact</Link>
    </nav>

    <div className="flex col">
    <CiSearch className="mr-4 text-white font-bold text-2xl"/>
    <GoPerson className="mr-4 text-white font-bold text-2xl"/>
    <PiHandbag className="mr-4 text-white font-bold text-2xl"/>

    </div>
  </div>
</header>



<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Our Shop</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Shop</span> 
    </div>
  </div>
</section>


<section className="flex justify-center items-center w-full min-h-screen bg-white p-6">
  <div className="w-full max-w-screen-lg flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
    {/* Left Side */}
    <div className="w-full lg:w-[60%] flex flex-col space-y-6">
      {/* Dropdown Buttons */}
      <div className="flex flex-wrap space-x-6">
        <select className="px-4 py-2 border rounded-lg w-full sm:w-auto">
          <option>Sort by</option>
          <option>Price</option>
          <option>Popularity</option>
          <option>Rating</option>
        </select>
        <select className="px-4 py-2 border rounded-lg w-full sm:w-auto">
          <option>Show</option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>

      {/* 15 Image Containers in 3 rows and 5 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Container 1 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s1.png" alt="Image 1" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Fresh Lime</h3>
          <p className="text-sm text-orange-500">$38.00</p>
        </div>
        {/* Container 2 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s2.png" alt="Image 2" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Chocolate Muffin</h3>
          <p className="text-sm text-orange-500">$28.00</p>
        </div>
        {/* Container 3 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s3.png" alt="Image 3" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Burger</h3>
          <p className="text-sm text-orange-500">$21.00</p>
        </div>
        {/* Container 4 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s4.png" alt="Image 4" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Country Burger</h3>
          <p className="text-sm text-orange-500">$45.00</p>
        </div>
        {/* Container 5 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s5.png" alt="Image 5" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Drink</h3>
          <p className="text-sm text-orange-500">$23.00</p>
        </div>
        {/* Container 6 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s6.png" alt="Image 6" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Pizza</h3>
          <p className="text-sm text-orange-500">$43.00</p>
        </div>
        {/* Container 7 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s7.png" alt="Image 7" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Cheese Butter</h3>
          <p className="text-sm text-orange-500">$10.00</p>
        </div>
        {/* Container 8 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s8.png" alt="Image 8" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Sandwiches</h3>
          <p className="text-sm text-orange-500">$25.00</p>
        </div>
        {/* Container 9 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s9.png" alt="Image 9" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Chicken Chup</h3>
          <p className="text-sm text-orange-500">$12.00</p>
        </div>
        {/* Container 10 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s4.png" alt="Image 10" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Country Burger</h3>
          <p className="text-sm text-orange-500">$45.00</p>
        </div>
        {/* Container 11 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s5.png" alt="Image 11" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Drink</h3>
          <p className="text-sm text-orange-500">$23.00</p>
        </div>
        {/* Container 12 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s6.png" alt="Image 12" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Pizza</h3>
          <p className="text-sm text-orange-500">$43.00</p>
        </div>
        {/* Container 13 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s7.png" alt="Image 13" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Cheese Butter</h3>
          <p className="text-sm text-orange-500">$10.00</p>
        </div>
        {/* Container 14 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/s8.png" alt="Image 14" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Sandwiches</h3>
          <p className="text-sm text-orange-500">$25.00</p>
        </div>
        {/* Container 15 */}
        <div className="flex flex-col space-y-4">
          <img src="/images/c9.png" alt="Image 15" className="w-full h-[200px] object-cover rounded-lg" />
          <h3 className="font-bold text-xl text-gray-800">Chicken Chup</h3>
          <p className="text-sm text-orange-500">$12.00</p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="w-full lg:w-[32%] space-y-6 ml-0 lg:ml-6">
      {/* Search Bar */}
      <div className="flex items-center border rounded-lg px-4 py-2">
        <input type="text" placeholder="Search products" className="w-full outline-none border-none px-2 py-1" />
        <button className="text-gray-600 px-4 py-2"><i className="fa fa-search"></i></button>
      </div>

      {/* Category Section with 8 Checkboxes */}
      <div>
        <h3 className="font-bold text-lg mb-4">Category</h3>
        <div className="space-y-2">
          {['Pizza', 'Burger', 'Tandoori Chicken', 'Cupcake', 'Cookies', 'Pasta', 'Salads', 'Drinks'].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <input type="checkbox" id={category} />
              <label htmlFor={category} className="text-sm">{category}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Product Image with Price and Shop Now */}
      <div className="border rounded-lg p-6">
        <div className="relative w-full h-[300px] mb-4">
          <img src="/images/s11.png" alt="Product" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-black">
            <h3 className="font-bold text-2xl">Delicious Pizza</h3>
            <p className="text-lg">$20.99</p>
            <button className="mt-4 px-6 py-2 bg-yellow-500 rounded-full text-white flex items-center">
              <i className="fa fa-shopping-cart mr-2"></i> Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg mt-6">Latest Products</h3>
        <div className="flex flex-col items-start space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-row items-center space-x-4">
              <img src="/images/s10.png" alt={`Product ${index + 1}`} className="w-[100px] h-[100px] object-cover rounded-lg" />
              <div className="space-y-2">
                <p className="text-gray-600 font-medium">Product {index + 1}</p>
                <p className="text-gray-400">$20.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>








</div>

)
}