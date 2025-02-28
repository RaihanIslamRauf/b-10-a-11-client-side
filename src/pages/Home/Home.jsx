import Banner from "./Banner";
import HomeMarathons from "./HomeMarathons";
import UpcomingMarathons from "./UpcomingMarathons";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeMarathons></HomeMarathons>
            <UpcomingMarathons></UpcomingMarathons>
        </div>
    );
};

export default Home;