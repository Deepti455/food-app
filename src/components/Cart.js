import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = ()=>{
    const cartItems = useSelector(store=>store.cart.items)
    return (
        <div className='flex flex-wrap m-6'>
            {cartItems.map((item)=><CartItem key={item.id} {...item}/>)}
        </div>
    );
}

export default Cart;