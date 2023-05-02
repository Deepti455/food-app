import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import {useDispatch} from 'react-redux';
import {addItem} from '../utils/cartSlice'

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const restaurantDetails = useRestaurant(resId);
    const dispatch = useDispatch()

    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }
    

    return !restaurantDetails ? <Shimmer/> :(
        <div className='flex justify-around my-5 bg-pink-50 py-10 px-7'>
            <div className='w-1/3'>
                {/* <button onClick={()=>handleAddItem()}>Add Item</button> */}
                <h1 className='text-xl font-bold'>Restaurant Id: {resId}</h1>
                <h1 className='text-2xl font-bold my-3'>{restaurantDetails.cards[0].card.card.info.name}</h1>
                <img src={IMG_CDN_URL+restaurantDetails.cards[0].card.card.info.cloudinaryImageId} alt="restaurnt img" className='my-3 rounded-xl shadow-xl'/>
                <h3 className='text-xl font-semibold'>Locality: {restaurantDetails.cards[0].card.card.info.locality}</h3>
                <h3 className='text-xl font-semibold my-4'>City: {restaurantDetails.cards[0].card.card.info.city}</h3>
                <h3 className='text-lg font-bold my-5'>{restaurantDetails.cards[0].card.card.info.avgRating} stars</h3>
                <h3 className='text-lg font-semibold'>{restaurantDetails.cards[0].card.card.info.costForTwoMessage}</h3>
            </div>
            <div className='w-3/4'>
                <h3 className='text-xl font-bold my-5'>Menu Items</h3>
                <div>
                {restaurantDetails.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((card,index)=>{
                    return (
                        
                        <div key={index} className='mx-5'>
                            <h4 className='text-lg font-semibold my-3'>{card?.card?.card?.title}</h4>
                            <ul >
                                {card?.card?.card?.itemCards?.map((item)=>{
                                    return (
                                    <li key={item?.card?.info?.id} className='p-1'>{item?.card?.info?.name}<button onClick={()=>handleAddItem(item?.card?.info)} className='mx-3 px-2 py-1 bg-green-900 rounded-lg text-white'>Add</button></li>
                                    )
                                })}
                            </ul>
                        </div>
                    )   
                })}
            </div>
            </div>
        </div>
    );
}

export default RestaurantMenu;