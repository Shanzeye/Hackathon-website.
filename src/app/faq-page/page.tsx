import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";

export default function () {
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
    <h1 className="text-5xl md:text-5xl font-bold mb-2">FAQ'S Page</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Faq</span> 
    </div>
  </div>
</section>





            <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Questions Looks Here</h2>

      <p className="mx-auto max-w-screen-md text-center text-black md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
    </div>
  
    <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
     
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How we serve food?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center  text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
     
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How can we get in touch with you?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
            <RiSubtractLine />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How is our food quality?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>
      

      
      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">What will be delivered? And When?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center  text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>



      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">How do we give home delivery?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p>
      </div>



      <div className="rounded-lg bg-gray-50 p-5">
        <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
          <h3 className="font-semibold text-black sm:text-lg md:text-xl">Is this restaurant 24 hours open?</h3>

          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center text-black">
          <IoAddSharp />
          </span>
        </div>

        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?.</p>
      </div>
      
    </div>
  </div>
</div>
        </div>
    )
}