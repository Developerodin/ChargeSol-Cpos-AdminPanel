import { Box ,Typography} from '@mui/material'
import {useState,useEffect,useContext} from 'react'
import UserContext from '../../../../Context/UserContext';
import axios from 'axios';
import { BASE_URL } from '../../../Config/BaseUrl';
import { Button } from 'react-bootstrap';

const StationLogs = () => {
  const token =sessionStorage.getItem('token');
  const [data,setData]=useState([]);
  const {userData}=useContext(UserContext);
  const[StationData,setStationData]=useState([]);
  const addStringToState = () => {
    const fixedString = "[2023-07-26 10:15] DEBUG: Charger Status - Connected | Battery Level - 80% | Charging State - In Progress | Power Input - 5V | Charging Rate - 2.1A | Time Since Connected - 00:15:23 | Time Remaining - 01:45:12 | Temperature - 37°C | Voltage - 4.9V | Current - 1.9A | Device ID - ABC1234XYZ | Manufacturer - XYZ Corp. | Model - SuperCharge 2000 | Firmware Version - v2.5.3 | Serial Number - CHG98765432 | Health Status - Good | Last Maintenance - 2023-06-15 | Next Maintenance Due - 2024-01-15";
    setData(prevData => [...prevData, fixedString]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      addStringToState();
    }, 2000);

    
    return () => clearInterval(interval);
  }, [])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/stations/stationsbyCpoId/${userData._id}`, {
          headers: { Authorization: `${token}` },
        });
        // Assuming the response data is an array of objects with the required properties
        
        const data = response.data;
        // const ChargerData=data.data.chargers;
        console.log("response stations==>", data);
        setStationData(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
       
      }
    };
  
    // console.log("UserData", userData);
    fetchData();
  },[])
  
  return (
    <div>
      {/* <Box border="1px solid red">
        {StationData.map((el,index)=>{
             return <Box key={index}> 
             <Button>
              {el.StationName}
             </Button>
             </Box>
        })}
      </Box> */}
     <Box sx={{backgroundColor:"black",height:"100vh",overflow:"auto"}}>
            {
              data.map((el,index)=>{
                return <Typography style={{color:"green",marginTop:"20px",padding:"7px"}}>{el}</Typography>
              })
            }
     </Box>
    </div>
  )
}

export default StationLogs
