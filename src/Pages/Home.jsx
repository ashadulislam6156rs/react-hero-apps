import Banner from "../Components/Banner";
import Loading from "../Components/Loading/Loading";
import TrendingApps from "../Components/TrendingApps";
import useTrendingApps from "../Hooks/useTrendingApps";


const Home = () => { 
  const {loading} = useTrendingApps();
  return (
    <>
      {
        loading ? <Loading /> : 
          <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <div className="md:px-7 px-2">
          <TrendingApps></TrendingApps>
        </div>
          </div>
      }
    </>
  );
};

export default Home;
