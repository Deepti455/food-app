import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId)=>{
    const [restaurantDetails, setRestaurantDetails] = useState(null)
    
    const getRestaurantDetails = async()=>{
        const data = await fetch(FETCH_MENU_URL(resId));
        const json = await data.json();
        setRestaurantDetails(json?.data);
    }

    useEffect(()=>{
        getRestaurantDetails();
    },[])

    return restaurantDetails;
    
}

export default useRestaurant;