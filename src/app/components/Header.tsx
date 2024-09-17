import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 z-40" aria-label="header">
      <div className="flex items-center justify-around pt-12 pb-6 min-h-28 bg-[url('/images/leaf.jpg')] bg-cover">
        <Menu />
        <Link href="/" className="text-3xl text-white">
          Bean & Brew
        </Link>
        <Link href="/cart">
          <Image
            className=""
            src="/images/bag.png"
            alt="bag logo"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <h2 className="p-1 min-h-4 bg-light-grey text-center">
        Freshly roasted small-batch coffee beans
      </h2>
    </div>
  );
};

export default Header;
