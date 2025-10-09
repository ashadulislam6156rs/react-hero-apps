
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useTrendingApps = () => {
    const [trendingApps,setTrendingApps] = useState([])
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        axios('/TrendingAppps.json')
            .then(data => setTrendingApps(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        
        
    }, [])

    return {
        trendingApps,
        loading,
        error
    }
    
};

export default useTrendingApps;