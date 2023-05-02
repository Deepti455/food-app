export const filterRestaurant = (searchInput, restaurants)=>{
    const data = restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase()))
    return data
}