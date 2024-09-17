import Image from "next/image";
import { coffeeType } from "../utils/getBeans";
interface cartProps {
  coffee: coffeeType;
}
const CartProduct = ({ coffee }: cartProps) => {
  return (
    <div className="flex items-center justify-around">
      <div className="relative w-[30vw] h-[30vh]">
        <Image
          fill
          src={coffee.image_url}
          alt={coffee.name}
          sizes="30vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col">
        <div>{coffee.name}</div>
        <div className="flex">
          <button onClick={() => console.log("- qty")}>-</button>
          <div> 1 </div>
          <button onClick={() => console.log("+ qty")}>+</button>
          <div className="ml-auto">{coffee.price}</div>
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
