import Link from "next/link";
import { getBeans } from "./utils/getBeans";
import ProductParallax from "./components/ProductParallax";

export default async function Home() {
  const beans = await getBeans();
  return (
    <main
      className="bg-[url('/images/cup.jpg')] bg-cover bg-center bg-fixed
      min-h-[100vh] flex-col justify-center">
      <h4 className="w-full fixed text-[2em] md:text-[2.5em] text-center top-[18%]">
        did someone say
      </h4>
      <Link
        className="fixed bg-[#F4F3EE] hover:bg-[#E3E1D6] text-center p-2 h-14 rounded-lg text-xl 
                   content-center w-[35vw] md:w-[15vw] lg:w-[12vw] shadow-lg top-[85%] left-1/2 -translate-x-1/2"
        href="/shop"
      >
        Shop All
      </Link>
      <div className="h-[60vh] w-[100vw]" />
      <ProductParallax beans={beans}/>
      <div className="bg-[url('/images/silk.jpg')] bg-cover h-[20vh] w-[100vw] flex justify-center 
                       align-text-bottom">
        <h4 className="text-[2.5em] pt-auto pb-12 self-end">we got you.</h4>
      </div>
    </main>
    
  );
}
