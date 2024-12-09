import Image from "next/image";
import FoodItems from "./components/fooditems";
import Experience from "./components/experience";
import Hero from "./components/hero";
import About from "./components/about";
import Choose from "./components/choose";
import Dishes from "./components/dishes";
import Chef from "./components/chef";
import Test from "./components/test";
import Rest from "./components/rest";
import Blogs from "./components/blogs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <FoodItems/>
      <Choose/>
      <Experience/>
      <Dishes/>
      <Chef/>
      <Test/>
      <Rest/>
      <Blogs/>
      <Footer/>
      
    </div>
  );
}
