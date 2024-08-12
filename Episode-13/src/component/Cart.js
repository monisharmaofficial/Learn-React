import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return <div className="m-5 p-5 text-center">
        <h1 className="text-5xl font-semibold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="px-4 mt-4 py-1 font-semibold rounded-lg bg-red-200 text-red-600 text-lg " onClick={handleClearCart}>Clear Cart</button>

        {cartItems.length===0 && (<h1>Cart is empty. Add item to the Cart!!</h1>)}
            <ItemList items = {cartItems}/>
        </div>
        </div>
};

export default Cart;