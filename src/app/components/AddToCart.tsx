'use client'
const AddToCart = () => {
    function addToCart(){
        console.log("add")
    }
    return(
        // <button className="bg-light-green/50 p-2 m-2 rounded-md text-xs invisible group-hover:visible"
        <button className="bg-white p-2 m-2 rounded-sm hover:bg-light-green/50 w-[75%]"
                style={{border: '2px, outset, rgb(200 200 200 / 0.85)'}}
                onClick={addToCart}>Add to Cart
        </button>
    )
}

export default AddToCart