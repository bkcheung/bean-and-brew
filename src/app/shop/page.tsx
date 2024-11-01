import { coffeeType, getBeans } from "../utils/getBeans";
import Product from "../components/Product";

export default async function Shop() {
  const filteredBeans = await getBeans();
  const coffee = filteredBeans.map((coffee: coffeeType) => {
    return <Product key={coffee.id} coffee={coffee} />;
  });
  return (
    <div className=" flex flex-col items-center">
      <h4 className="text-3xl py-8">Shop All</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16">{coffee}</div>
    </div>
  );
}
