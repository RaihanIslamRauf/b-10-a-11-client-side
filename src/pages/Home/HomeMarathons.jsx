import { useEffect, useState } from "react";
import MarathonsCard from "./MarathonsCard";

const HomeMarathons = () => {
    const [marathons, setMarathons] = useState([]);
    console.log(marathons);

    useEffect(()=>{
        fetch('https://b-10-a-11-server-side.vercel.app/marathons/home')
        .then(res => res.json())
        .then(data =>{
            setMarathons(data)
        })
    },[])

    return (
       <div className="mx-auto py-6 px-4">
         <h1 className="text-4xl font-bold text-white text-center mb-8">Marathons</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                marathons.map(marathon=> <MarathonsCard key={marathon._id} marathon={marathon}></MarathonsCard>)
            }
        </div>
       </div>
    );
};

export default HomeMarathons;