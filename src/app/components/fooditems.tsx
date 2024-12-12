export default function FoodItems () {
    return (
        <div>
            <section className="py-16 bg-black">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-[GreatVibes] text-[32px] text-orange-500">Food Categories</h2>
    
  </div>

  <div className="text-center mb-8">
    <h3 className="text-4xl font-semibold text-gray-700">
    <span className="text-orange-500">Ch</span>
    <span className="text-white">oose Food Items</span>
    </h3>
  </div>

  <div className="flex flex-wrap justify-center gap-8">
    <div
      className="relative w-64 h-64 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('/images/fooditems1.jpg')" }} // Correct inline style
    >
      <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50 rounded-lg">
        <span className="bg-white text-orange-500 text-xl font-bold rounded-lg">Save 30%</span>
      </div>
 
     <div className="bg-orange-500 absolute top-[65%] transform -translate-y-1/2 text-white font-bold text-xl">
        Fast Food Dish
      </div> 

      

    </div>

    <div
      className="relative w-64 h-64 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('/images/fooditems2.jpg')" }} 
    >
      
    </div>

    <div
      className="relative w-64 h-64 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('/images/fooditems3.jpg')" }} // Correct inline style
    >
      {/* Add any overlay or text here if necessary */}
    </div>

    <div
      className="relative w-64 h-64 bg-cover bg-center rounded-lg"
      style={{ backgroundImage: "url('/images/fooditems4.jpg')" }} // Correct inline style
    >
      {/* Add any overlay or text here if necessary */}
    </div>
  </div>
</section>

        </div>
    )
}