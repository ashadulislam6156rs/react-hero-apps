import React, { useState } from 'react';
import useTrendingApps from '../Hooks/useTrendingApps';
import TreandingApp from './TreandingApp';
import { Link } from 'react-router';


const TrendingApps = () => {
    const {trendingApps} = useTrendingApps();
    // console.log(trendingApps);
    const [handleShowApps,setHandleShowApps] = useState(false);
    // const handleShowApps = () => {
        
    // }
    const trendingAppsSlice = trendingApps.slice(0, 8);
    
    return (
        <>
            <div>
                <div className='text-center py-10'>
                <h1 className='text[#001931] font-bold text-4xl pb-2'>Trending Apps</h1>
                <p className='text-[#627382] text-base'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10'>
                    {
                        trendingAppsSlice.map((treindindApp ,id) => <TreandingApp key={id} treindindApp={treindindApp}></TreandingApp>)
                    }

                    </div>
                    <div className='flex justify-center items-center pb-10'>
                        <Link to={"/appspage/"} onClick={() => {
                            setHandleShowApps(!handleShowApps);
                            window.scrollTo(0,0); 
                        }} className="text-white text-xl font-semibold px-8 py-3 rounded-md cursor-pointer bg-[linear-gradient(77deg,_#632EE3,_#9F62F2)] hover:bg-[linear-gradient(100deg,_#9F62F2,_#632EE3)] transition-all ease-in-out duration-700">Show All</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TrendingApps;