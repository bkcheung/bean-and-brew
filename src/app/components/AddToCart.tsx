"use client";
interface addCartProps {
  id: number;
}
const AddToCart = ({ id }: addCartProps) => {
  function addToCart() {
    console.log(`Add ${id} to cart`);
  }
  return (
    <button
      className="bg-white p-2 m-2 rounded-sm hover:bg-light-green/50 w-[75%]"
      style={{ border: "2px, outset, rgb(200 200 200 / 0.85)" }}
      onClick={addToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
