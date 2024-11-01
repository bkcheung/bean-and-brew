import Link from "next/link";

export default function Home() {
  return (
    <main
      className="bg-[url('/images/bkg.jpg')] bg-cover bg-center
                   min-h-[calc(85vh-1rem)] flex justify-center"
    >
      <Link
        className="bg-white/80 text-center p-2 h-14 rounded-lg text-3xl 
                     min-w-[160px] w-[45vw] max-w-[250px] mt-[60vh]"
        href="/shop"
      >
        Shop Now
      </Link>
    </main>
  );
}
