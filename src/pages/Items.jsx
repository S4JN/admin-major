import {useEffect, useState} from 'react'
import './items.css'
import Sidebar from '../Sidebar';
import axios from 'axios';


const Items = () => {  
  const [visibility,setVisibility]=useState(false);
  const handleSubmit=()=>{
    window.location.href = 'http://localhost:5173/';
  }
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

      const [items,setItems]= useState([]);

      const getItems=async ()=>{
        try {
          const {data}= await axios.get("http://localhost:8000/api/admin/inventory/all")
          console.log(data);
          setItems(data.inventories)
          console.log(data.inventories);
        } catch (error) {
          console.log(error);
        }
      }


      const handleDelete=async(_id)=>{
        try {
          const {data}= await axios.post("http://localhost:8000/api/admin/inventory/delete",_id)
          console.log(data);
          setItems(data.inventories)
          console.log(data.inventories);
        } catch (error) {
          console.log(error);
        }        

      }

      useEffect(()=>{
        getItems();
      },[])
     
  return (
    <>  
    <div>
    {visibility && (
      <div className='overlay'>
        <div className='second-detail' style={{ backgroundColor: "white", height: "400px", width: "400px" }}>

          <div className='second-content'>
            <h2>Message of Report:</h2>
            <h4>report message daalna hai</h4>
          </div>
          <div className='showdet-btn'>
            <button onClick={()=>{handleSubmit();}}>View on Site</button>
            <button onClick={() =>{setVisibility(false)}}>Close</button>
          </div>
        </div>
        </div>
      )}
    
    </div>
      
        <Sidebar />
        <div className='outer'>
        {items.map((item, index) => (
            <div key={index} className='item-card'>
                <div className='details'>
                    <p>Name: {item.name}</p>
                    <p> _id: {item._id}</p>
                    
                </div>
                <div className='del-btn'>
                  <button onClick={()=>{setVisibility(true)}}>View</button>
                  <button onClick={()=>handleDelete(item._id)}>Delete</button>
                </div>
            </div>
      ))}
        </div>
        
    </>

  )
}

export default Items