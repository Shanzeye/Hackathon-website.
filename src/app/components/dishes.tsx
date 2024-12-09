export default function Dish () {
    return (
        <div>
     <section className="bg-black container mx-auto px-4 py-16">
    <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-orange-500">Choose & Pick</h1>
        <h2 className="text-xl font-medium text-white mt-2">From Our Menu</h2>
    </div>

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-center mb-8">
        <ul className="flex justify-center space-x-8 ">
            <li><a href="#" className="text-lg text-white hover:text-gray-600">Breakfast</a></li>
            <li><a href="#" className="text-lg text-white hover:text-gray-600">Lunch</a></li>
            <li><a href="#" className="text-lg text-white hover:text-gray-600">Dinner</a></li>
            <li><a href="#" className="text-lg text-white hover:text-gray-600">Dessert</a></li>
            <li><a href="#" className="text-lg text-white hover:text-gray-600">Drinks</a></li>
            <li><a href="#" className="text-lg text-white hover:text-gray-600">Snacks</a></li>
            <li><a href="#" className="text-lg text-white hover:text-gray-600">Soups</a></li>
        </ul>
    </nav>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div className="flex justify-center items-center">
            <img src="/images/dish.png" alt="Dish Image" className="bg-black w-full max-w-sm rounded-lg shadow-lg" />
        </div>

        {/* Right Dishes Section - 8 Dishes in One Row */}
        <div className="grid grid-cols-2 gap-2 mr-24">
            {/* Dish 1 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish1.png" alt="Dish 1" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Lettuce Leaf</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">12.5$</p>
                </div>
            </div>

            {/* Dish 2 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish2.png" alt="Dish 2" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Clow Cheese</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">12.5$</p>
                </div>
            </div>

            {/* Dish 3 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish3.png" alt="Dish 3" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Fresh Breakfast</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">14.5$</p>
                </div>
            </div>

            {/* Dish 4 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish4.png" alt="Dish 4" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Italian Pizza</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">14.5$</p>
                </div>
            </div>

            {/* Dish 5 - Same as Dish 1 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish5.png" alt="Dish 5" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Mild Butter</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">12.5$</p>
                </div>
            </div>

            {/* Dish 6 - Same as Dish 2 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish6.png" alt="Dish 6" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Sllice Beef</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">12.5$</p>
                </div>
            </div>

            {/* Dish 7 - Same as Dish 3 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish7.png" alt="Dish 7" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Fresh Bread</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">12.5$</p>
                </div>
            </div>

            {/* Dish 8 - Same as Dish 4 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4">
                <img src="/images/dish8.png" alt="Dish 8" className="w-24 h-24 object-cover rounded-lg" />
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">Mushaom Pizza</h3>
                    <p className="text-white">Lacus nisi,at ac dapibus velit in consequat.</p>
                    <p className="text-orange-500 font-bold">12.5$</p>
                </div>
            </div>
        </div>
    </div>
</section>




























        </div>
    )
}