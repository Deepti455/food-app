import {Link} from 'react-router-dom';
import { restaurantList, SWIGGY_API } from "../config";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from 'react';
import Shimmer from "./Shimmer";
import { filterRestaurant } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = ()=>{
    const [searchInput, setSearchInput] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const isOnline = useOnline();

    const fetchRestaurants = async()=>{
        const data = await fetch(SWIGGY_API)
        const json = await data.json()
        const restaurantData = json?.data?.cards[2]?.data?.data?.cards;
        setAllRestaurants(restaurantData);
        setFilteredRestaurants(restaurantData);
    }

    useEffect(()=>{
        fetchRestaurants()
    },[])

    if(!isOnline) return <h1>Offline...Please check your internet connection!!</h1>

    if (!allRestaurants) return null;      //Not rendered Component (early return)

    return allRestaurants.length===0?<Shimmer/>:(
        <div>
            <div className='flex my-4 py-5 bg-pink-50 justify-center'>
                <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className='w-3/4 rounded-l-xl'/>
                    <button className='py-3 px-6 bg-green-700 rounded-r-xl' 
                        onClick={()=>{
                            const data = filterRestaurant(searchInput, allRestaurants); setFilteredRestaurants(data)
                         }}>
                        Search
                    </button>
            </div>
            <div className='flex flex-wrap w-full px-4'>
                {filteredRestaurants?.length===0?
                    <h1>No Restaurant match your filter!!</h1>: 
                    filteredRestaurants.map((restaurant)=>
                        <Link to={"/restaurant/"+restaurant.data.id} className='link-card'>
                            <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                        </Link>
                    )
                }    
            </div>    
        </div>
    );

};

export default Body;