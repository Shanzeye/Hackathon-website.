import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";
import { MdOutlineStar } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { BsPersonCircle } from "react-icons/bs";




export default function Blogs () {
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
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Blog List</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Blog</span> 
    </div>
  </div>
</section>













            <section className="w-full min-h-screen bg-white py-12 px-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/images/b1.png" alt="Blog Image" className="w-full h-48 object-cover rounded-lg"/>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
            <IoCalendarNumber className="fas fa-calendar-alt text-orange-500"/>
              <span className="text-sm text-gray-500">Feb 14, 2024 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <TiMessages className="fas fa-comments text-orange-500"/>
              <span className="text-sm text-gray-500">3 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <BsPersonCircle className="fas fa-user text-orange-500"/>
              <span className="text-sm text-gray-500">Admin</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-4">10 Reasons To Do A Digital Detox Challenge</h3>
          <div className="border-t-2 border-gray-200 my-4"></div>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="flex items-center text-orange-500 mt-4">
            <span>Read More</span>
            <MdArrowOutward />
          </button>
        </div>









        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/images/b2.png" alt="Blog Image" className="w-full h-48 object-cover rounded-lg"/>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
            <IoCalendarNumber className="fas fa-calendar-alt text-orange-500"/>
              <span className="text-sm text-gray-500">Feb 14 , 2022 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <TiMessages className="fas fa-comments text-orange-500"/>
              <span className="text-sm text-gray-500">3 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <BsPersonCircle className="fas fa-user text-orange-500"/>
              <span className="text-sm text-gray-500">Admin</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Traditional Soft Pretzels with Sweet Beer Cheese</h3>
          <div className="border-t-2 border-gray-200 my-4"></div>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="flex items-center text-orange-500 mt-4">
            <span>Read More</span>
            <MdArrowOutward />
          </button>
        </div>











        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/images/b3.png" alt="Blog Image" className="w-full h-48 object-cover rounded-lg"/>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
            <IoCalendarNumber className="fas fa-calendar-alt text-orange-500"/>
              <span className="text-sm text-gray-500">Feb 14, 2024 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <TiMessages className="fas fa-comments text-orange-500"/>
              <span className="text-sm text-gray-500">3 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <BsPersonCircle className="fas fa-user text-orange-500"/>
              <span className="text-sm text-gray-500">Admin</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-4">The Ultimate Hangover Burger: Egg in a Hole Burger</h3>
          <div className="border-t-2 border-gray-200 my-4"></div>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="flex items-center text-orange-500 mt-4">
            <span>Read More</span>
            <MdArrowOutward />
          </button>
        </div>








        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/images/b4.png" alt="Blog Image" className="w-full h-48 object-cover rounded-lg"/>
          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
            <IoCalendarNumber className="fas fa-calendar-alt text-orange-500"/>
              <span className="text-sm text-gray-500">Feb 14, 2024 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <TiMessages className="fas fa-comments text-orange-500"/>
              <span className="text-sm text-gray-500">3 /</span>
            </div>
            <div className="flex items-center space-x-2">
            <BsPersonCircle className="fas fa-user text-orange-500"/>
              <span className="text-sm text-gray-500">Admin</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-4">My Favorite Easy Black Pizza Toast Recipe</h3>
          <div className="border-t-2 border-gray-200 my-4"></div>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="flex items-center text-orange-500 mt-4">
            <span>Read More</span>
            <MdArrowOutward />
          </button>
        </div>


















      </div>

      </div>

    <div className="space-y-8">
      <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center w-full">
          <input type="text" className="w-full p-2 border rounded-l-lg focus:outline-none" placeholder="Search..."/>
          <button className="bg-orange-500 text-white p-2 rounded-r-lg">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      

      <div className="flex justify-center items-center bg-gray-100">
  <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
    <img src="/images/b9.png" alt="Testimonial Image" className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>

    <h4 className="font-semibold text-gray-800 text-xl mb-2">Prince Miyako</h4>
    <p className="font-semibold text-gray-800 text-sm mb-2">Blogger/Photographer</p>


    <div className="flex justify-center items-center text-orange-500 mb-2">
    <MdOutlineStar />
    <MdOutlineStar />
    <MdOutlineStar />
    <MdOutlineStar />
    <MdOutlineStar /> 
     
    </div>

    <p className="text-sm text-gray-600 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."</p>

    <div className="flex justify-center space-x-4">
      <a href="#" className="text-gray-600 hover:text-blue-500">
      <FaFacebookF />
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-500">
      <GrTwitter/>
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-500">
      <FaInstagram/>
      </a>
      <a href="#" className="text-gray-600 hover:text-blue-500">
      <FaPinterest />
      </a>
    </div>
  </div>
</div>



<div className="space-y-6">
        <h3 className="font-semibold text-xl text-gray-800">Recent Posts</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/images/b5.png" alt="Recent Post" className="w-20 h-20 "/>
            <div>
              <p className="text-sm text-gray-500">Feb 14, 2024</p>
              <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>


      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/images/b6.png" alt="Recent Post" className="w-20 h-20 "/>
            <div>
              <p className="text-sm text-gray-500">Feb 14, 2024</p>
              <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>




      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/images/b7.png" alt="Recent Post" className="w-20 h-20 "/>
            <div>
              <p className="text-sm text-gray-500">Feb 14, 2024</p>
              <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>




      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/images/b8.png" alt="Recent Post" className="w-20 h-20"/>
            <div>
              <p className="text-sm text-gray-500">Feb 14, 2024</p>
              <p className="text-lg text-gray-800">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>

   


      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl text-gray-800">Filter By Menu</h3>
        <div className="space-y-4 mt-4">
          <div className="flex items-center space-x-4">
            <img src="/images/b7.png" alt="Item" className="w-16 h-16 object-cover rounded-lg"/>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Pizza</h4>
              <p className="text-sm text-gray-500">$15.00</p>


              





            </div>

            


            


            

            
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl text-gray-800">Popular Tags</h3>
        <div className="flex flex-wrap gap-4 mt-4">
        <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Sandwich</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Tikka</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Bbq</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Restaurant</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Chicken Sharma</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Health</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Fastfood</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Food</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Pizza</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Burger</span>
          <span className="bg-gray-200 text-sm px-4 py-2 rounded-lg">Chicken</span>
        </div>
      </div>





{/* 


      <div className="space-y-6">
        <h3 className="font-semibold text-xl text-gray-800">Photo Gallery</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <img src="https://via.placeholder.com/200x200" alt="Gallery Image 1" className="w-full h-48 object-cover rounded-lg"/>
          <img src="https://via.placeholder.com/200x200" alt="Gallery Image 2" className="w-full h-48 object-cover rounded-lg"/>
          <img src="https://via.placeholder.com/200x200" alt="Gallery Image 3" className="w-full h-48 object-cover rounded-lg"/>
          <img src="https://via.placeholder.com/200x200" alt="Gallery Image 4" className="w-full h-48 object-cover rounded-lg"/>
          <img src="https://via.placeholder.com/200x200" alt="Gallery Image 5" className="w-full h-48 object-cover rounded-lg"/>
          <img src="https://via.placeholder.com/200x200" alt="Gallery Image 6" className="w-full h-48 object-cover rounded-lg"/>
        </div>
      </div>
    </div> */}

    



       
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-semibold text-xl text-gray-800">Follow Us</h3>
        <div className="flex space-x-6 mt-4">
        <FaFacebookF />
      
      <GrTwitter/>
      
      <FaInstagram/>
      
      <FaPinterest />
     
      
        </div>
      </div>
    </div>
    </div>

</section>



















        </div>
    )
}