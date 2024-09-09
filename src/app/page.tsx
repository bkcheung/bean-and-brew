
import Link from "next/link";

export default function Home() {
  return (
      <main 
        className="text-black bg-[url('/images/bkg.jpg')] bg-cover min-h-[calc(100vh-8rem)] 
                   flex justify-center">
        <Link 
          className="bg-white/80 text-center p-2 h-14 rounded-lg text-3xl w-6/12 mt-[60vh]"
          href="/shop"
        >Shop Now</Link>
      </main>
  );
}
