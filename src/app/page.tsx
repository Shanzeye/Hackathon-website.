import Image from "next/image";
import FoodItems from "./components/fooditems";
import Experience from "./components/experience";
import Hero from "./components/hero";
import About from "./components/about";
import Choose from "./components/choose";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <FoodItems/>
      <Choose />
      <Experience />
      
    </div>
  );
}
