import Link from "next/link";

export default function Home() {
  return (
    <main
      className="bg-[url('/images/cup.jpg')] bg-cover bg-center
      min-h-[calc(85vh-1rem)] flex justify-center">
      <h4 className="absolute text-[2em] md:text-[2.5em] text-center top-[28vh]">did someone say</h4>
      <Link
        className="absolute bg-[#F4F3EE] hover:bg-[#E3E1D6] text-center p-2 h-14 rounded-lg text-xl 
                   content-center w-[35vw] md:w-[15vw] lg:w-[12vw] shadow-lg top-[85vh]"
        href="/shop"
      >
        Shop All
      </Link>
    </main>
    
  );
}
