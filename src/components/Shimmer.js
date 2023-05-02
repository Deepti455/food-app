
const Shimmer = ()=>{
    return (
    <div className='flex flex-wrap justify-between p-6'>
        <div className='w-full h-24 bg-gray-200 shadow-xl'></div>
        {Array(15).fill("").map((e, index)=><div key={index} className='w-64 h-96 bg-gray-200 shadow-xl my-6'></div>)}
        
    </div>
    );
}

export default Shimmer;