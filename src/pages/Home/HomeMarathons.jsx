import { useEffect, useState } from "react";
import MarathonsCard from "./MarathonsCard";

const HomeMarathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/marathons')
        .then(res => res.json())
        .then(data =>{
            setMarathons(data)
        })
    },[])

    return (
       <div className="mx-auto py-6 px-4">
         <h1 className="text-4xl font-bold text-white text-center mb-8">Marathons</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                marathons.map(marathon=> <MarathonsCard key={marathon._id} marathon={marathon}></MarathonsCard>)
            }
        </div>
       </div>
    );
};

export default HomeMarathons;