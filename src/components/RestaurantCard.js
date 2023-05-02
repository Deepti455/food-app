import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}, key)=>{
    return(   
    <div className='w-64 h-96 bg-pink-50 px-3 py-4 mx-1 my-3 rounded-lg shadow-xl hover:bg-pink-200' key={key}>  
        <img src={IMG_CDN_URL + cloudinaryImageId} href="image"/>
        <h3 className='text-xl mt-2 font-semibold'>{name}</h3>
        <p className='mt-2 '>{cuisines.join(", ")}</p>
        <p className='mt-5 font-semibold'>{avgRating} stars</p>
       
    </div>
    );
};

export default RestaurantCard;