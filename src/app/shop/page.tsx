import Image from "next/image";
export default async function Shop(){
    const data = await fetch("https://fake-coffee-api.vercel.app/api");
    const beans = await data.json();

    // console.log(beans);
    const coffee = beans.map((coffee:coffeeType)=>{
        return(
            <div key={coffee.id} className="">
                <Image src={coffee.image_url} alt={coffee.name} width={50} height={50}/>
                <h2>{coffee.name}</h2>
                <h1>${coffee.price}</h1>
            </div>
        )
    })

    return(
        <div className=" flex flex-col justify-center">
           <h4 className="text-3xl py-8">Shop All</h4>
           <div className="grid grid-cols-2 gap-4">
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