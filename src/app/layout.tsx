import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { CartProvider } from "./context";
import { getBeans } from "./utils/getBeans";
import { ToastContainer } from "react-toastify";

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
          <ToastContainer
            autoClose={2000}
            hideProgressBar={true}
            position="bottom-right"
            limit={2}
            pauseOnHover
          />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
