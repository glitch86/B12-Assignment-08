import React from 'react';
import useData from '../../Hooks/useData';
import Cards from './Cards';

const TrendingApp = () => {
    const {datas} = useData()
    console.log(datas)
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {datas.map(data => <Cards key={data.id} data={data}></Cards>)}
        </div>
    );
};

export default TrendingApp;