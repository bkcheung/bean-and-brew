import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { CartProvider } from "./context";

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
      <body className="font-serif antialiased">
        <Header />
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
