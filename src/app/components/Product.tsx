import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { coffeeType } from "../utils/getBeans";

interface productProps {
  coffee: coffeeType;
  bubble: boolean;
}
const Product = ({ coffee, bubble }: productProps) => {
  return (
    <div key={coffee.id} className="flex group flex-col items-center">
      <Link
        href={`/shop/${coffee.id}`}
        title={`${coffee.name}`}
        className="relative w-[30vw] h-[35vw] group-hover:scale-110 transition-transform"
      >
        <Image
          fill
          src={coffee.image_url}
          alt={coffee.name}
          sizes="50vw"
          className="object-cover"
          priority
        />
      </Link>
      {bubble && (
        <div className="absolute w-[38vw] h-[38vw] -z-10">
          <Image
            fill
            src="/images/bubble.png"
            alt="bubble"
            sizes="32vh"
            className="opacity-20 object-contain drop-shadow-md"
            priority
          />
        </div>
      )}
      {!bubble && (
        <>
          <h2 className="group-hover:text-[#888781] group-hover:underline">
            {coffee.name}
          </h2>
          <h1>${coffee.price}</h1>
          <AddToCart id={coffee.id} style="items-center" />
        </>
      )}
    </div>
  );
};
export default Product;
