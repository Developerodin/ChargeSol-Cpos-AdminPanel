import React from 'react'
import StationHeader from './Components/StationHeader'
import { KTCard } from '../../../../_metronic/helpers'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import MapLocation from '../../../MapLocation/MapLocation'
import { Button, Switch } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import ChaletIcon from '@mui/icons-material/Chalet';
import { useNavigate } from 'react-router-dom'


const ChargingStations = () => {

  const navigate = useNavigate();

  const handelClick=(e) => {
    console.log("🚀 ~ file: Chargers.jsx:22 ~ handelClick ~ e:", e.target)
     navigate("/chargerdetails/", {state:{_id:"akshay"}});
    //  <Navigate to="/chargerdetails" state={{todos:[]}} replace={true}/>
  
  }

  const column=[
    {name:"Name"},
    {name:"Location"},
    {name:"Unit Consumed"},
    {name:"Address"},
    {name:"State"},
    {name:"City"},
    {name:"Access Type"},
    {name:"Opening Hours"},
    {name:"Functional"},
    {name:"     "},
    {name:"     "}
  ]
  const rows=[
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:"test-01",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"Unit Consumed":"0","Address":"2nd Fir,Shri Krishna","State":"Haryana","City":"Gurgoon","Access Type":"public","Opening Hours":"24 Hours",Functional:<Switch/>,"Icon":<ChaletIcon/>,Update:<DriveFileRenameOutlineIcon/>}
  
  ]



 const data = "26.509904,75.410153";
  return (
    
    <div>
     <StationHeader/>
    <KTCard>
    
    <GenralTabel rows={rows} column={column}/>
    </KTCard>
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">Location</h5>
       
         
    
    </div>
    <div className="modal-body" style={{"height":"400px"}}>
      <MapLocation data={data}/>
    </div>
    <div className="modal-footer" >
      <button type="button" className="btn btn-primary mt-5" data-bs-dismiss="modal">Close</button>
   
    </div>
  </div>
</div>
</div>
  </div>
  )
}

export default ChargingStations
