'use client'
const AddToCart = () => {
    function addToCart(){
        console.log("add")
    }
    return(
        <button className="bg-light-green p-2 rounded-lg"
                onClick={addToCart}>Add to Cart
        </button>
    )
}

export default AddToCart