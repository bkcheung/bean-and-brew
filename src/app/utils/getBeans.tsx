export async function getBeans(): Promise<coffeeType[]> {
  const data = await fetch("https://fake-coffee-api.vercel.app/api");
  if (!data.ok) {
    throw new Error("Error, check request");
  }
  const beans = await data.json();
  return beans.filter(
    (bean: coffeeType) => bean.id !== 5 && bean.id !== 11 && bean.id !== 16 && bean.id !== 17,
  );
}

export type coffeeType = {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  roast_level: number;
  flavor_profile: string[];
  grind_option: string[];
  image_url: string;
};
