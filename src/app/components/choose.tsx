
export default function ChooseUs() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center py-10 px-6 bg-black">
        {/* Left Section: Images */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center flex-col items-center">
          {/* First Set of Images */}
          <div className="flex flex-wrap justify-center space-x-2 space-y-4 mb-6">
            <img
              src="/images/choose1.png"
              alt="Food"
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
            <img
              src="/images/choose2.png"
              alt="Food"
              className="w-[240px] h-[200px] object-cover rounded-lg"
            />
          </div>

          {/* Second Set of Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <img
              src="/images/choose3.png"
              alt="Food"
              className="w-[240px] h-[300px] object-cover rounded-lg"
            />
            <img
              src="/images/choose4.png"
              alt="Food"
              className="w-[220px] h-[230px] object-cover rounded-lg"
            />
            <img
              src="/images/choose5.png"
              alt="Food"
              className="w-[160px] h-[170px] object-cover rounded-lg"
            />
          </div>

          {/* Third Set of Images */}
          <div className="flex justify-center mt-4">
            <img
              src="/images/choose6.png"
              alt="Food"
              className="w-[160px] h-[170px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section: Text and CTA */}
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <h3 className="text-xl text-orange-600 font-semibold mb-4">Extra Ordinary Taste and Experienced</h3>
          <p className="text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, erat a sollicitudin volutpat,
            ante erat euismod risus, a pellentesque erat dui ac lectus. Vivamus convallis orci ac ex tristique, at
            faucibus odio dictum. Sed ut leo augue.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-6">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img
                src="/images/choose0.png"
                alt="Fast Food"
                className="w-[102px] h-[100px] mb-2"
              />
              <p className="text-white">Fast Food</p>
            </div>
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img
                src="/images/choose0.png"
                alt="Lunch"
                className="w-[102px] h-[100px] mb-2"
              />
              <p className="text-white">Lunch</p>
            </div>
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <img
                src="/images/choose0.png"
                alt="Dinner"
                className="w-[102px] h-[100px] mb-2"
              />
              <p className="text-white">Dinner</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <a
            href="#"
            className="inline-block px-10 py-3 bg-white text-orange-500 text-lg font-semibold transition hover:bg-orange-600 w-[306px] md:w-auto text-center"
          >
            30+ 
            <span className="font-bold pl-2 text-black">Years of Experience</span>
          </a>
        </div>
      </section>
    </div>
  );
}
