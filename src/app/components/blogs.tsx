import { LuThumbsUp } from "react-icons/lu";
import { RiMessage2Line } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Blogs () {
    return (
        <div>
            <section className="py-16 bg-black">
    <div className="container mx-auto px-4">
        {/* Blog Post Heading */}
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-500">Blog Post</h1>
            <h2 className="text-4xl font-semibold mt-4 text-white">
                <span className="text-orange-500">La</span>test News & Blog
            </h2>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {/* Blog Post 1 */}
            <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                <img src="/images/blog1.png" alt="Blog 1" className="w-[423px] h-[349px] object-cover" />
                <div className="p-6 w-[423px] h-[349px]">
                    <p className="text-orange-500 text-sm mb-4">10 February 2022</p>
                    <p className="text-white text-lg mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-white font-semibold">Learn More</a>
                        <div className="flex space-x-2">
                        <LuThumbsUp className="w-6 h-6 text-white"/> 
                        <RiMessage2Line className="w-6 h-6 text-orange-500"/>
                        <IoShareSocialOutline className="w-6 h-6 text-white"/>

                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                <img src="/images/blog2.png" alt="Blog 2" className="w-[423px] h-[349px] object-cover" />
                <div className="p-6 w-[423px] h-[349px]">
                    <p className="text-orange-500 text-sm mb-4">10 February 2022</p>
                    <p className="text-white text-lg mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-white font-semibold">Learn More</a>
                        <div className="flex space-x-2">
                        <LuThumbsUp className="w-6 h-6 text-white"/> 
                        <RiMessage2Line className="w-6 h-6 text-orange-500"/>
                        <IoShareSocialOutline className="w-6 h-6 text-white"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                <img src="/images/blog3.png" alt="Blog 3" className="w-[423px] h-[349px] object-cover" />
                <div className="p-6 w-[423px] h-[349px]">
                    <p className="text-orange-500 text-sm mb-4">10 February 2022</p>
                    <p className="text-white text-lg mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-white font-semibold">Learn More</a>
                        <div className="flex space-x-2">
                        <LuThumbsUp className="w-6 h-6 text-white"/> 
                        <RiMessage2Line className="w-6 h-6 text-orange-500"/>
                        <IoShareSocialOutline className="w-6 h-6 text-white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="py-16 bg-black border-b-4 border-orange-500">
    <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl font-bold text-orange-500">
                    St<span className="text-white">ill You Need Our Support ?</span> 
                </h1>
                <p className="text-white mt-4 text-lg">
                    Dont't wait make a smart & logical quote here. Its pretty easy. 
                </p>
            </div>

            <div className="lg:w-1/2">
    <div className="flex w-[459px] h-[56px] border border-gray-300">
        <input
            type="text"
            className="placeholder-white w-full h-full px-6 border-0 bg-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter Your Email"
        />
        <button className="w-[200px] h-full bg-white text-orange-500 flex items-center justify-center px-6">
            Subscribe Now
        </button>
    </div>
</div>      
        </div>
    </div>
</section>
</div>
    )
}