
import { FaCheck } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center py-10 px-6 bg-black">
        {/* Left Section: Text Content */}
        <div className="ml-0 md:ml-20 md:w-1/2 text-center md:text-left md:pr-12">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">About Us</h2>

          <div className="text-4xl font-bold text-white">
            <span className="text-orange-500">We </span>
            <span className="text-white">Create the best </span>
            <div>
              <span className="text-white">foody product </span>
            </div>
          </div>

          <p className="text-white mb-6 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
            tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
            Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>

          <div className="space-y-2 mb-6">
            <p className="text-white">
              <FaCheck /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-white">
              <FaCheck /> Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.
            </p>
            <p className="text-white">
              <FaCheck /> Maecenas ligula massa, varius a, semper congue.
            </p>
          </div>

          <a
            href="#"
            className="inline-block px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full text-lg transition"
          >
            Read More
          </a>
        </div>

        {/* Right Section: Images */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            {/* Large Image */}
            <img
              src="/images/about1.png"
              alt="Food Image 1"
              className="w-full h-[330px] object-cover rounded-lg mb-4"
            />
            {/* Smaller Images */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 w-full">
              <img
                src="/images/about2.png"
                alt="Food Image 2"
                className="w-[322px] h-[194px] object-cover rounded-lg mb-4"
              />
              <img
                src="/images/about3.png"
                alt="Food Image 3"
                className="w-[322px] h-[194px] object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
