import Banner from "./Banner";
import HomeMarathons from "./HomeMarathons";
import JoinNow from "./JoinNow";
import Testimonials from "./Testimonials";
import UpcomingMarathons from "./UpcomingMarathons";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeMarathons></HomeMarathons>
            <UpcomingMarathons></UpcomingMarathons>
            <JoinNow></JoinNow>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;