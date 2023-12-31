import React from 'react'
import { KTCard } from '../../../../../_metronic/helpers'
import { styled } from '@mui/system';
import { Box, Button, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';



import StationFilter from './StationFilter';
import AddStation from './AddStation';

const MyBox = styled('Button')({
    width:'100%',
    color: 'white',
    backgroundColor: 'crimson',
    padding: 8,
    borderRadius: 4,
    border:"none"
  });


const StationHeader = ({state}) => {
  return (
    <KTCard>
        <Box    justifyContent={"space-between"} p={"10px"} display='flex' sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex",xl:"flex"}, alignItems:"center"}} >

            <Box display={'flex'}   justifyContent={"space-evenly"} alignItems={"center"} sx={{width:{xs:"100%",md:"45%",lg:"45%",xl:"45%"}}}>
           

            
            </Box>
            
            {/* ===================================================================== */}
            

            <Box display={'flex'}   justifyContent={"space-evenly"} alignItems={"center"} sx={{width:{xs:"100%",md:"45%",lg:"45%",xl:"45%"}}}>

            <Box sx={{display:"flex", width:"40%"}}>
            {/* <TextField fullWidth label="Search" /> */}
            
            <TextField
          label="Search"
          id="outlined-start-adornment"
          size='small'
          sx={{ m: 1, width: '100%' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
        />
            </Box>


            <Box sx={{display:"flex", alignItems:"center",width:"40%",justifyContent:"space-evenly"}}>

                <StationFilter/>
               
            
            
                <IconButton aria-label="Download" color="primary">
                <CloudDownloadIcon  fontSize='large'/> 
                 </IconButton>
           
                 <Box sx={{ marginLeft:"10px", display:'flex', alignItems:"center"}}>
            <Typography sx={{color:"gray",marginTop:"5px",display:{xs:"none",sm:"none",md:"none",lg:"none",xl:"block"}}}variant="subtitle1" component="h6">Add Station</Typography>
            <IconButton  ><AddStation setUpdate={state}/></IconButton>
           
            </Box>
            </Box>

            
            
            </Box>




           
        </Box>
        </KTCard>
    
  )
}

export default StationHeader
