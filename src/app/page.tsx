import Link from "next/link";
import { getBeans } from "./utils/getBeans";
import ProductParallax from "./components/ProductParallax";

export default async function Home() {
  const beans = await getBeans();
  return (
    <main
      className="bg-[url('/images/cup.jpg')] bg-[length:auto_100vh] bg-[center_top_-5em] bg-no-repeat md:bg-cover md:bg-center md:bg-fixed
                 min-h-[100vh] w-[100vw] flex flex-col items-center"
    >
      <h4 className="absolute md:fixed w-full text-[2em] md:text-[2.5em] text-center pt-[1.5em] ">
        did someone say
      </h4>
      <Link
        className="absolute md:fixed z-30 bg-[#F4F3EE] hover:bg-[#E3E1D6] text-center p-2 h-14 rounded-lg text-xl 
                   content-center w-[35vw] md:w-[15vw] lg:w-[12vw] shadow-lg top-[85%] left-1/2 -translate-x-1/2"
        href="/shop"
      >
        Shop All
      </Link>
      <div className="h-[88vh] md:h-[5vh] w-[100vw]" />
      <ProductParallax beans={beans} />
    </main>
  );
}
