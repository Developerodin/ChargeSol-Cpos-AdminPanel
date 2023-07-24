import React from 'react'
import { Button ,Switch} from '@mui/material'
import MapLocation from '../../../MapLocation/MapLocation'
import { KTCard } from '../../../../_metronic/helpers'
import { UsersListHeader } from '../../Internal-Cpo-Managment/AllCpos/UsersListHeader'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import ActiveStatus from '../../../ActiveStatusComponents/ActiveStatus'
import ChargersHeader from './Components/ChargersHeader'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import { useNavigate,Navigate } from 'react-router-dom'




const Chargers = () => {

  const navigate = useNavigate();

  const handelClick=(e) => {
    console.log("🚀 ~ file: Chargers.jsx:22 ~ handelClick ~ e:", e.target)
     navigate("/chargerdetails/", {state:{_id:"akshay"}});
    //  <Navigate to="/chargerdetails" state={{todos:[]}} replace={true}/>
  
  }



  const column=[
    {name:"Charger Name"},
    {name:"Station Name"},
    {name:"Location"},
    {name:"OCPP ID"},
    {name:"Address"},
    {name:"Status"},
    {name:"City"},
    {name:"CPOs"},
    {name:"Charger Type"},
    {name:"Power Rating"},
    {name:"Connectors"},
    {name:"Functional"},
    {name:"Update"}
  ]
  const rows=[
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    {Name:<Button variant="text" onClick={handelClick}>Mark-1</Button>,"Station Name":"Tata-Ev",Location:<Button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter"  variant='text'>12.11 ,123.22</Button>,"OCPP ID":"ChargeSol2dc80","Address":"2nd Fir,Shri Krishna","Status":"Active","City":"Gurgaon","CPOS":"ChargeSol","Charger Type":"DC","Power Rating":"60.00KW","Connectors":"CCS / GBT/ TYPE 2",Functional:<Switch/>,Update:<DriveFileRenameOutlineIcon/>},
    
  
  ]



 const data = "26.509904,75.410153";
  return (
    <div>
      <ChargersHeader/>
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

export default Chargers
