import React from 'react'
import Show from './Items';
import Sidebar from '../Sidebar';

const Services = () => {
    const data = [
        {
          name: 'Page A',
          uv: 0,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <>
        <Sidebar/>
        <div className='outer'>
        {data.map((item, index) => (
            <div key={index} className='item-card'>
                <div className='details'>
                    <p>Name: {item.name}</p>
                    <p> UV: {item.uv || 'N/A'}</p>
                    <p> PV: {item.pv}</p>
                    <p> AMT: {item.amt}</p>
                </div>
                <div className='del-btn'>
                  <button>View</button>
                  <button>Delete</button>
                </div>
            </div>
      ))}
        </div>
    </>
  )
}

export default Services