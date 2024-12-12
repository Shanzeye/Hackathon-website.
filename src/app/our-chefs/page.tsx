import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { PiHandbag } from "react-icons/pi";

export default function Chefs () {
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
      <a className="mr-9 hover:text-orange-500">Menu</a>
      <a className="mr-9 hover:text-orange-500">Blog</a>
      <a className="mr-9 hover:text-orange-500">Pages</a>
      <a className="mr-9 hover:text-orange-500">About</a>
      <a className="mr-9 hover:text-orange-500">Shop</a>
      <a className="mr-9 hover:text-orange-500">Contact</a>
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
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Our Chef</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Chef</span> 
    </div>
  </div>
</section>





<div className="bg-white pb-96">

  <section className="text-gray-600 body-font">
    <div className="container mx-auto px-5 py-24">

      <div className="flex flex-wrap -m-4">
        
        {/* Team Member 1 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="/images/c1.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Tahmina Rumi</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="/images/c2.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Jorina Begam</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c3.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">M. Mohammad</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c4.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Munna Kathy</h2>
              <h3 className="text-gray-500 mb-3">UI Developer</h3>
            </div>
          </div>
        </div>

        {/* Team Member 5 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c5.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Tahmina Rumi</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 6 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c6.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Bisnu Devgon</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 7 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c7.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Motin Molladsf</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 8 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c8.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">William Rumi</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 9 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c9.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Kets William Roy</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 10 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c10.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Mahmud Kholil</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 11 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c11.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Ataur Rahmen</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

        {/* Team Member 12 */}
        <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center mb-4" src="images/c12.png"/>
            <div className="w-full">
              <h2 className="title-font font-bold text-lg text-gray-900">Monalisa Holly</h2>
              <h3 className="text-gray-500 mb-3">Chef</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</div>



        </div>
    )
}