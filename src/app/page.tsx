import Link from "next/link";
import { getBeans } from "./utils/getBeans";
import ProductParallax from "./components/ProductParallax";

export default async function Home() {
  const beans = await getBeans();
  return (
    <main
      className="bg-[url('/images/cup.jpg')] bg-cover bg-center bg-fixed
                 min-h-[100vh] w-[100vw] flex flex-col items-center"
    >
      <h4 className="absolute md:fixed w-full text-[2em] md:text-[2.5em] text-center pt-[3em] ">
        did someone say
      </h4>
      <Link
        className="absolute md:fixed z-40 bg-[#F4F3EE] hover:bg-[#E3E1D6] text-center p-2 h-14 rounded-lg text-xl 
                   content-center w-[35vw] md:w-[15vw] lg:w-[12vw] shadow-lg top-[85%] left-1/2 -translate-x-1/2"
        href="/shop"
      >
        Shop All
      </Link>
      <div className="h-[100vh] md:h-[30vh] w-[100vw]" />
      <ProductParallax beans={beans} />
    </main>
  );
}
