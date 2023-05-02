import { IMG_CDN_URL } from "../config";


const CartItem = ({imageId, name, price, ratings})=>{
    return (
        <div className='w-64 h-96 bg-pink-50 shadow-xl mx-3'>
            <img src={IMG_CDN_URL+(imageId.replace(/"/g,""))} alt={name} className='w-64 p-3'/>
            <p className='text-lg font-semibold px-3 py-2'>{name}</p>
            <p className='text-lg px-3'>Price- {price/100}</p>
            <p className='text-lg font-semibold px-3 py-5'>{ratings.aggregatedRating.rating} stars</p>
        </div>
    );
}

export default CartItem;