import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
      <header className="flex items-center justify-evenly pt-12 pb-6 bg-gradient-to-r from-dark-green to-light-green">
          <button>
            <Image
              className=""
              src="/images/menu.png"
              alt="menu logo"
              width={30}
              height={30}
            />
          </button>
          <h3 className="text-3xl">Bean & Brew</h3>
          <button>
            <Image
              className=""
              src="/images/bag.png"
              alt="bag logo"
              width={30}
              height={30}
            />
          </button>
        </header>
        <h2 className="p-4">Fresh roasted small-batch coffee beans</h2>
        {children}
      </body>
    </html>
  );
}
