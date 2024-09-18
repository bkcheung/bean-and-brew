// 'use client'
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/app/components/AddToCart";
import { getBeans, coffeeType } from "@/app/utils/getBeans";
// import { useState } from "react";

export default async function coffeePage({
  params,
}: {
  params: { id: number };
}) {
  const beans = await getBeans();
  const coffee = beans.filter(
    (bean: coffeeType) => bean.id === Number(params.id),
  )[0];
  const tastes = coffee.flavor_profile.join(", ");
  return (
    <div className="flex flex-col">
      <Link
        href="/shop"
        className="p-4 text-gray-700 hover:text-dark-green hover:underline"
      >
        ↩ Back
      </Link>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="relative w-[80vw] h-[50vh] lg:w-[40vw] lg:h-[80vh]">
          <Image
            fill
            src={coffee.image_url}
            alt={coffee.name}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col md:justify-center items-end">
          <div className="flex-1 px-8 md:flex-none">
            <div className="text-2xl">{coffee.name}</div>
            <div className="py-2">{coffee.description}</div>
            <div className="text-gray-700 py-2">Tasting notes: {tastes}</div>
          </div>
          <div className="p-4 flex flex-col items-end w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mr-8">
            <div className="text-gray-500 py-2">
              ${coffee.price}/{coffee.weight}g
            </div>
            <AddToCart id={coffee.id} style="items-end" />
          </div>
        </div>
      </div>
    </div>
  );
}
