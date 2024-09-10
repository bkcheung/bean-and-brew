import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/app/components/AddToCart";

export default async function coffeePage({params}:{params:{id:string}}){
    const res = await fetch(`https://fake-coffee-api.vercel.app/api/${params.id}`);
    if (!res.ok) return undefined
    const coffeeRes = await res.json();
    const coffee = coffeeRes[0];
    const tastes = coffee.flavor_profile.join(', ');
    return(
        <div className="flex flex-col">
            <Link href="/shop" className="p-4 text-gray-700"> ↩ Back</Link>
            <div className="flex flex-col items-center lg:flex-row">
                <div className="relative w-[80vw] h-[50vh] lg:w-[40vw] lg:h-[80vh]">
                    <Image fill src={coffee.image_url} alt={coffee.name} 
                    sizes='100vw' style={{'objectFit':"cover"}}/>
                </div>
                <div className="flex flex-col md:justify-center">
                    <div className="flex-1 px-8 md:flex-none">
                        <div className="text-2xl">{coffee.name}</div>
                        <div className="py-2">{coffee.description}</div>
                        <div className="text-gray-700 py-2">Tasting notes: {tastes}</div>
                    </div>
                    <div className="p-4 flex flex-col items-end">
                        <div className="text-gray-500 py-2">${coffee.price}/{coffee.weight}g</div>
                        <AddToCart />
                    </div>
                </div>
            </div>
        </div>
    )
}