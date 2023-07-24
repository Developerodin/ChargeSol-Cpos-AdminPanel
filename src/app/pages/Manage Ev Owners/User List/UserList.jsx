import React from 'react'
import UserHeader from './Components/UserHeader'


import { KTCard } from '../../../../_metronic/helpers'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import MapLocation from '../../../MapLocation/MapLocation'
import { Button, Switch } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import ChaletIcon from '@mui/icons-material/Chalet';
import { useNavigate } from 'react-router-dom'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { UserWalletModal } from './Components/UserWalletModal'
import AddVehicle from './Components/AddVehicle'

const UserList = () => {
  const column=[
    {name:"User ID"},
    {name:"Name"},
    {name:"Email"},
    {name:"Phone"},
    
    {name:"Charge Duration"},
    {name:"Available Credits"},
    
    {name:" "},
    {name:"Vehicles"},
    {name:"Active"},
    {name:"VIN"},
    {name:"     "},
    {name:"     "},
    {name:"     "}
  ]
  const rows=[
    {UserID:"17905",Name:"Olivia","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"Tata Nexon EV",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17906",Name:"Ethan","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"kia EV6",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17907",Name:"Sophia","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"Audi e-tron",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17908",Name:"Liam","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"Tata Nexon EV",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17909",Name:"Ava","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"kia EV6",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17910",Name:"Noah","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"Tata Nexon EV",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17911",Name:"Emma","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"kia EV6",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17912",Name:"Mason","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"Tata Nexon EV",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17913",Name:"Isabella","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"Audi e-tron",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
    {UserID:"17914",Name:"Alexander","Email":"test@gmail.com","Phone":"+37-9090909090","Charge Duration":"00:37:23","Credits":"100","":<UserWalletModal/>,"Vehicles":"kia EV6",Active:<Switch/>,VIN:"","Icon":<AddVehicle/>,"Icon2":<EnergySavingsLeafIcon/>,Update:<DriveFileRenameOutlineIcon/>},
  
  ]



 const data = "26.509904,75.410153";
  return (
    <div>
    <UserHeader/>
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

export default UserList
