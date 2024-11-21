import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { coffeeType } from "../utils/getBeans";

interface productProps {
  coffee: coffeeType;
  bubble:boolean
}
const Product = ({ coffee, bubble }: productProps) => {
  return (
    <div key={coffee.id} className="flex group flex-col items-center">
      <Link
        href={`/shop/${coffee.id}`}
        title={`${coffee.name}`}
        className="relative w-[50vw] h-[45vh] md:w-[30vw] md:h-[42vh] z-10"
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
      {bubble &&
        <div className="absolute min-w-[42vh] min-h-[42vh]">
          <Image
            fill
            src="/images/bubble.png"
            alt="bubble"
            sizes="32vh"
            className="opacity-35 -z-10 object-contain"
            priority
          />
        </div>
      }
      {!bubble &&
        <>
          <h2 className="group-hover:text-[#888781] group-hover:underline">
            {coffee.name}
          </h2>
          <h1>${coffee.price}</h1>
          <AddToCart id={coffee.id} style="items-center" />
        </>
      }
    </div>
  );
};
export default Product;
