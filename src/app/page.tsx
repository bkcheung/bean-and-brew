import { getBeans } from "./utils/getBeans";
import Hero from "./components/Hero";

export default async function Home() {
  const beans = await getBeans();
  return <Hero beans={beans} />;
}
