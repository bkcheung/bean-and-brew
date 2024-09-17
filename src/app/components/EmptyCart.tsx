import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center">
      <div>Your cart is empty</div>

      <Image
        className="m-6"
        src="/images/cart.png"
        alt="empty cart"
        height={100}
        width={100}
      />
      <Link href={"/shop"} className="hover:text-dark-green hover:underline">
        Click here to shop now!
      </Link>
    </div>
  );
};
export default EmptyCart;
