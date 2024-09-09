import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export const metadata: Metadata = {
  title: "Bean and Brew",
  description: "Coffee bean shopping page and cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-serif antialiased`}>
        <header className="flex items-center justify-around pt-12 pb-6 min-h-28 bg-gradient-to-r from-dark-green to-light-green">
            {/* <MenuButton/> */}
            <Menu/>
            <Link href="/"className="text-3xl">Bean & Brew</Link>
            <Link href="/cart">
              <Image
                className=""
                src="/images/bag.png"
                alt="bag logo"
                width={30}
                height={30}
              />
            </Link>
        </header>
        <h2 className="p-1 min-h-4 bg-[#EFF3EC] text-black text-center">Fresh roasted small-batch coffee beans</h2>
        {children}
      </body>
    </html>
  );
}
