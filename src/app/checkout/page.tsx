import Image from "next/image";
import Link from "next/link";
export default function Checkout() {
  return (
    <div className="flex flex-col items-center m-8">
      <h4 className="text-3xl m-4">Congratulations!</h4>
      <h3>You have successfully checked out~</h3>
      <Image
        className="m-6"
        src="/images/confetti.gif"
        alt="confetti"
        height={150}
        width={150}
      />
      <h3>Good vibes are coming your way!</h3>
      <h3 className="text-center">
        ...not coffee beans though, this is a fake store after all
      </h3>
      <Link
        href={"/shop"}
        className="hover:text-dark-green hover:underline m-4"
      >
        Back to shop!
      </Link>
    </div>
  );
}
