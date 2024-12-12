import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";
import { IoPlayOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { PiCoffeeBold } from "react-icons/pi";
import { PiPerson } from "react-icons/pi";

export default function About () {
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
    <h1 className="text-5xl md:text-5xl font-bold mb-2">About Us</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>About</span> 
    </div>
  </div>
</section>










<section className="py-24 pb-24 bg-white w-full h-auto flex justify-center items-center">
  <div className="flex flex-col md:flex-row max-w-screen-xl w-full px-4">
    <div className="md:w-1/3 flex justify-center">
      <img src="/images/ab1.png" alt="Image 1" className="w-full max-w-[336px] h-[536px] rounded-lg" />
    </div>

    <div className="md:w-1/3 flex flex-col space-y-4 justify-center items-center">
      <div className="w-full">
        <img src="/images/ab2.png" alt="Image 2" className="w-full max-w-[309px] h-auto rounded-lg" />
      </div>
      <div className="w-full">
        <img src="/images/ab3.png" alt="Image 3" className="w-full max-w-[309px] h-auto rounded-lg" />
      </div>
    </div>

    <div className="md:w-1/3 flex flex-col space-y-6 justify-center items-center md:items-start">
      <h2 className="text-xl font-bold text-orange-500 text-center md:text-left">About Us _______</h2>
      <h3 className="text-4xl font-semibold text-center md:text-left">Food is an important part Of a balanced Diet</h3>
      <p className="text-lg text-gray-600 leading-relaxed text-center md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices nisi sed leo scelerisque, sit amet volutpat urna fermentum. Proin auctor libero non ligula fermentum. Aliquam erat volutpat.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
        <Link href="/our-menu">
        <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 w-full md:w-auto">
          Show More
        </button> </Link>
        <button className="bg-orange-500 flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-900 hover:text-white transition duration-300  md:w-auto">
        <IoPlayOutline  className="material-icons text-white font-bold"/>
          
        </button>
        <span className="text-base  font-bold">Watch Video</span>
      </div>
    </div>
  </div>
</section>
  




 

<section className="bg-white py-12 px-4 flex justify-center items-center">
  <div className="max-w-screen-xl w-full text-center">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us</h2>
      <p className="text-lg text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        <br />
        Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </div>

    <div className="mb-8">
      <img
        src="/images/ab4.png" 
        alt="Why Choose Us Image"
        className="w-full max-w-[1320px] h-[286px] object-cover mx-auto"
      />
    </div>

    <div className="flex flex-col md:flex-row justify-between gap-6">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
        <PiStudent  className="w-16 h-16 mb-4"/>
           
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Best Chef</h3>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <PiCoffeeBold className="w-16 h-16 mb-4"/>
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">120 Items Food</h3>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
        <PiPerson  className="w-16 h-16 mb-4"/>
          
        </div>
        <h3 className="text-xl font-semibold text-black mb-2">Clean Environment</h3>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="bg-white">
<div className="relative w-full" style={{ height: '686px' }}>
      {/* Background Image */}
      <div className="w-full h-[460px] bg-cover bg-center absolute top-0" 
           style={{ backgroundImage: 'url("/images/ab5.png")' }} />
      
      {/* Content Section (Heading and Description) */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-12 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Team Member</h2>
        <p className="text-lg md:text-xl text-white max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue
        </p>
      </div>



      {/* Images are Half inside and Half out of the background */}
      <div className="mb-24 absolute top-[200px] left-0 right-0 flex justify-center items-center z-20 space-x-6">
        <div className="relative w-[312px] h-[398px] translate-x-8">
          <img src="/images/ab6.png" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
          <div className="mt-4 text-center">
            <h3 className="font-bold text-xl text-black">Merk Henry</h3>
            <p className="text-sm text-black">Owner</p>
          </div>
        </div>
        <div className="relative w-[312px] h-[398px] translate-x-8">
          <img src="/images/ab6.png" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
          <div className="mt-4 text-center">
            <h3 className="font-bold text-xl text-black">Lucky Helen</h3>
            <p className="text-sm text-black">Chef</p>
          </div>
        </div>
        <div className="relative w-[312px] h-[398px] translate-x-8">
          <img src="/images/ab6.png" alt="Image 3" className="w-full h-full object-cover rounded-lg" />
          <div className="mt-4 text-center">
            <h3 className="font-bold text-xl text-black">Moon Henry</h3>
            <p className="text-sm text-black">Founder</p>
          </div>
        </div>
        <div className="relative w-[312px] h-[398px] translate-x-8">
          <img src="/images/ab6.png" alt="Image 4" className="w-full h-full object-cover rounded-lg" />
          <div className="mt-4 text-center">
            <h3 className="font-bold text-xl text-black">Tom Monrow</h3>
            <p className="text-sm text-black">Specialist</p>
          </div>
        </div>
      </div>
    </div>




     

</section>



        </div>
    )
}