import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
// import { FriendList } from "./FriendList";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
export default function AddUser() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    border: "none",
    p: 4,
  };
 

  const [count, setCount] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const initalValues = {
    FullName: "",
    Email: "",
    PhoneNumber: "",
   
  };

  const inputs = {
    minWidth: "100%",
    background: "#f4f5f7",
    border: "1px solid #f4f5f7 ",
    padding: "10px 5px",
  };
  const inputsL = {
    maxWidth: "100%",
    background: "#f4f5f7",
    border: "1px solid #f4f5f7 ",
    padding: "10px 5px",
  };

  const { values, error, handleChange, handleSubmit } = useFormik({
    initialValues: initalValues,
    onSubmit: (value, { resetForm }) => {
      console.log(value);
      resetForm();
    },
  });

 
  return (
    <div>
    
      <Button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1234"
        style={{border:"none"}}
        onClick={handleOpen}
      >
       <LibraryAddIcon/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: "scroll" }}
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h3>Add EV Owner</h3>
                  <hr />
                </div>
                <div className="col-12 mt-3">
                  <h5>Fill the details</h5>
                  
                </div>
              </div>



              <div className="row mt-2">
                {/* <div className="col-md-4">
                  <div className="row">
                    <div className="col-12 mb-2">Charger Name</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="ChargerName"
                        id="ChargerName"
                        placeholder="ChargerName"
                        value={values.ChargerName}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div> */}
                <div className="col-md-12 mb-4">
                  <div className="row">
                    <div className="col-12 mb-2">Full Name</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="FullName"
                        onChange={handleChange}
                        value={values.FullName}
                        id="FullName"
                        placeholder="Full Name"
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>

              </div>
              <div className="row justify-content-around mt-2">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Email</div>
                    <div className="col-12">
                      <input
                        type="email"
                        name="Email"
                        id="Email"
                        placeholder="Email"
                        value={values.Email}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-12">Phone Number</div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="PhoneNumber"
                        id="PhoneNumber"
                        placeholder="PhoneNumber"
                        value={values.PhoneNumber}
                        onChange={handleChange}
                        style={inputs}
                      />
                    </div>
                  </div>
                </div>
                
              </div>


              
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <button type="submit" className=" btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
