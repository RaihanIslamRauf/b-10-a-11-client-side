import { useEffect, useState } from "react";
import MarathonsCard from "../Home/MarathonsCard";


const Marathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/marathons')
            .then(res => res.json())
            .then(data => setMarathons(data))
            .catch(error => console.error("Error fetching marathons:", error));
    }, []);

    return (
        <div className="mx-auto py-6 px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-8">All Marathons</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                {marathons.map(marathon => (
                    <MarathonsCard key={marathon._id} marathon={marathon} />
                ))}
            </div>
        </div>
    );
};

export default Marathons;
