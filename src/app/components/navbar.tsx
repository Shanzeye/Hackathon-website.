import Link from "next/link";
import { CiSearch } from "react-icons/ci";

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
      <Link href="/" className=" hover:text-orange-500">Home</Link>
      <Link href="/our-menu" className="hover:text-orange-500">Menu</Link>
      <Link href="/our-blogs" className=" hover:text-orange-500">Blog</Link>
      <Link href="/faq-page" className="hover:text-orange-500">Pages</Link>
      <Link href="/about-us" className="hover:text-orange-500">About</Link>
      <Link href="/our-shop" className=" hover:text-orange-500">Shop</Link>
      <Link href="#contact" className=" hover:text-orange-500">Contact</Link>

    </nav>
<div className="flex items-center ml-auto mt-4 md:mt-0 mr-36 bg-black p-2 rounded-full border-2 border-orange-500 ">
  <input 
    type="text" 
    placeholder="Search..." 
    className="p-2 rounded-l-full text-white bg-transparent border-none outline-none placeholder-white"
  />
  
        <CiSearch />
        
</div>

  </div>
</header>
        </div>
    </header>
        </div>
    )
}