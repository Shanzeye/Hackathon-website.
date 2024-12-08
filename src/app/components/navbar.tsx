import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar () {
    return (
        <div className="font-sans bg-gray-100">
            
    <header className="bg-black shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center text-2xl font-bold justify-center w-full">
                <span className="text-orange-500">Food</span>
                <span className="text-white">tuck</span>
            </div>
        </div>
         
         <div>

         <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
    {/* Navbar links aligned to the left */}
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base justify-start space-x-8">
      <a className=" hover:text-orange-500">Home</a>
      <a className="hover:text-orange-500">Menu</a>
      <a className=" hover:text-orange-500">Blog</a>
      <a className="hover:text-orange-500">Pages</a>
      <a className="hover:text-orange-500">About</a>
      <a className=" hover:text-orange-500">Shop</a>
      <a className=" hover:text-orange-500">Contact</a>

    </nav>


<div className="flex items-center ml-auto mt-4 md:mt-0 mr-36 bg-black p-2 rounded-full border-2 border-orange-500 ">
  <input 
    type="text" 
    placeholder="Search..." 
    className="p-2 rounded-l-full text-white bg-transparent border-none outline-none placeholder-white"
  />
  
        <CiSearch />
        
</div>
<HiOutlineShoppingBag/>

  </div>
</header>
        </div>
    </header>
        </div>
    )
}