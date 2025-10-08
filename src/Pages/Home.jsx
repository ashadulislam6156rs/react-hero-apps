import Banner from "../Components/Banner";
import TrendingApps from "../Components/TrendingApps";


const Home = () => { 
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <div className="md:px-7 px-2">
          <TrendingApps></TrendingApps>
        </div>
          </div>
    </>
  );
};

export default Home;
