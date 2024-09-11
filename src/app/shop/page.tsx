import Image from "next/image";
import Link from "next/link";
import AddToCart from "../components/AddToCart";

export default async function Shop(){
    const data = await fetch("https://fake-coffee-api.vercel.app/api");
    const beans = await data.json();
    const filteredBeans = beans.filter((bean:coffeeType)=>bean.id!==5&&bean.id!==11&&bean.id!==16)
    const coffee = filteredBeans.map((coffee:coffeeType)=>{
        return(
            <div key={coffee.id} className="flex flex-col items-center">
                <div className="group flex flex-col items-center">
                    <Link href={`/shop/${coffee.id}`} 
                        className="relative w-[50vw] h-[45vh] md:w-[30vw] md:h-[42vh]">
                        <Image fill src={coffee.image_url} alt={coffee.name}
                                sizes="50vw" style={{'objectFit':"cover"}}/>
                    </Link>
                    <h2 className="group-hover:text-dark-green group-hover:underline">{coffee.name}</h2>
                </div>
                <h1>${coffee.price}</h1>
                <AddToCart/>
            </div>
        )
    })
    return(
        <div className=" flex flex-col items-center">
           <h4 className="text-3xl py-8">Shop All</h4>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
             {coffee}
           </div>
        </div>
    )
}

type coffeeType = {
    id: number,
    name: string,
    description: string,
    price: number,
    region: string,
    weight: number,
    roast_level: number,
    flavor_profile: string[],
    grind_option: string[],
    image_url: string
}