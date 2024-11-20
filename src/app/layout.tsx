import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { CartProvider } from "./context";
import { Providers } from "./providers";
import { getBeans } from "./utils/getBeans";

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
        <CartProvider beans={getBeans()}>
          <Header />
          <Providers>
            {children}
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
