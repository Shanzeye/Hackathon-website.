import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


export default function Footer () {
    return (
        <div>

        <footer className="bg-black py-5 font-sans tracking-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8">
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">About Us</h4>
            <p className="text-white text-base">orporate clients and leisure travelers has been relying on Groundlink for dependab safe,and professional
              chauffeured car service in major cities across World. </p>
              
          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Useful Links</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="text-white hover:text-orange-500 text-base">About</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-orange-500 text-base">News</a>
              </li>
              <li><a href="javascript:void(0)" className="text-white hover:text-orange-500 text-base">Partners</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-orange-500 text-base">Team</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-orange-500 text-base">Menu</a></li>
              <li><a href="javascript:void(0)" className="text-white hover:text-orange-500 text-base">Contacts</a></li>

            </ul>
          </div>
  
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6 text-white">Help?</h4>
            <p className="text-white text-base">FAQ</p>
            <p className="text-white text-base">Term & Conditions</p>
            <p className="text-white text-base">Reporting</p>
            <p className="text-white text-base">Documentation</p>
            <p className="text-white text-base">Support</p>
            <p className="text-white text-base">Privacy</p>

          </div>
  
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Recent Post</h4>
  
        
          </div>
  

    

        </div>

        <div className="bg-gray-600 flex flex-col lg:flex-row justify-between items-center p-4">
    <p className="ml-4 text-white text-base text-left mb-4 lg:mb-0">
        Copyright © 2022. All Rights Reserved.
    </p>

    <div className="flex space-x-4 mr-4">
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
            <FaFacebookF className="fas fa-bell text-gray-800"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <GrTwitter className="fas fa-bell text-gray-800"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaInstagram className="fas fa-bell text-gray-800"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaYoutube className="fas fa-bell text-orange-500"/>

        </div>
        
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
        <FaPinterest  className="fas fa-bell text-gray-800"/>

             
        </div>
    </div>
</div>
 <div className="bg-black border-b-4 border-orange-500"> </div>
      </footer>

        </div>
    )
}