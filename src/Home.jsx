import { useEffect, useState } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  }
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [invCount, setInvCount] = useState("0");
  const [serviceCount, setServiceCount] = useState("0");
  const [userCount, setUserCount] = useState("0");




  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const data = [
    {
      name: '',
      // uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      // uv: 3000,
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

  const getInv = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/admin/inventory/count")
      console.log(data);
      setInvCount(data.count);
    } catch (error) {
      console.log(error);
    }
  }

  const getService = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/admin/service/count")
      console.log(data);
      setServiceCount(data.count);
    } catch (error) {
      console.log(error);
    }
  }

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/admin/users/count")
      console.log(data);
      setUserCount(data.count);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInv();
    getService();
    getUsers();
  }, [])



  return (
    <>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className='main-container'>
        <div className='main-title'>
          <h3>DASHBOARD</h3>
        </div>

          <div className='main-cards'>
            <div className='card' onClick={() => { handleClick("/items"); }}>
              <div className='card-inner'>
                <h3>Items</h3>
                <BsFillArchiveFill className='card_icon' />
              </div>
              <h1>{invCount}</h1>
            </div>
            <div className='card' >
              <div className='card-inner'>
                <h3>Mails Sent</h3>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
              <h1>12</h1>
            </div>
            <div className='card' onClick={() => { handleClick("/users"); }}>
              <div className='card-inner'>
                <h3>Users</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>{userCount}</h1>
            </div>
            <div className='card' onClick={() => { handleClick("/services"); }}>
              <div className='card-inner'>
                <h3>Services</h3>
                <BsPeopleFill className='card_icon' />
              </div>
              <h1>{serviceCount}</h1>
            </div>
          </div>
          


      </main>
    </>

  )
}

export default Home