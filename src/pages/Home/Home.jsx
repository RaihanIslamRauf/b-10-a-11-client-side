import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import HomeMarathons from "./HomeMarathons";
import JoinNow from "./JoinNow";
import StatsCount from "./StatsCount";
import Testimonials from "./Testimonials";
import UpcomingMarathons from "./UpcomingMarathons";

const Home = () => {
  useTitle();

  return (
    <div className="px-4 md:px-8"> {/* Added padding to Home component */}
      <Banner />
      <HomeMarathons />
      <UpcomingMarathons />
      <JoinNow />
      <StatsCount />
      <Testimonials />
    </div>
  );
};

export default Home;
