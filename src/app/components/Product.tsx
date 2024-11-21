import Link from "next/link";
import Image from "next/image";
import AddToCart from "./AddToCart";
import { coffeeType } from "../utils/getBeans";

interface productProps {
  coffee: coffeeType;
}
const Product = ({ coffee }: productProps) => {
  return (
    <div key={coffee.id} className="flex flex-col items-center">
      <div className="group flex flex-col items-center">
        <Link
          href={`/shop/${coffee.id}`}
          className="relative w-[50vw] h-[45vh] md:w-[30vw] md:h-[42vh]"
        >
          <Image
            fill
            src={coffee.image_url}
            alt={coffee.name}
            sizes="50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </Link>
        <h2 className="group-hover:text-[#888781] group-hover:underline">
          {coffee.name}
        </h2>
      </div>
      <h1>${coffee.price}</h1>
      <AddToCart id={coffee.id} style="items-center" />
    </div>
  );
};
export default Product;
