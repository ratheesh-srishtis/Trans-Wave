import React from "react";
import "./Transwave-Templates-css/Transportation_Slip.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const TransportationSlip = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return; // Prevent closing on backdrop click
    }
    onClose(event, reason);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <div
        className="d-flex justify-content-between "
        onClick={() => onClose()}
      >
        {" "}
        <DialogTitle></DialogTitle>

        <div className="closeicon">
          <i className="bi bi-x-lg "></i>
        </div>
      </div>
      <DialogContent>
        <div className="mainoktb ">
          <div className=" d-flex justify-content-center">
            <h5 className="twoktbsubhead mb-3"> TRANSPORTATION SLIP
            </h5>
          </div>
          <div className="cont row d-flex  ">
            <div className="col-4 queheading">
              <div> Job:</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-4 queheading">
              <div> Reference No  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
            <div className="col-4 queheading">
              <div> Date  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
          </div>
          <div className="cont row d-flex justify-content-between mt-2">
            <div className="col-6 queheading">
              <div> Vehicle Plate No  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
            <div className="col-6 queheading">
              <div> Vssel / Customer  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
          </div>
          <div className="cont row d-flex justify-content-between mt-2 ">
            <div className="col-3 queheading">
              <div> From  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
            <div className="col-3 queheading">
              <div> Time</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
            <div className="col-3 queheading">
              <div> To :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
            <div className="col-3 queheading">
              <div> Time</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
          </div>

          <div className="cont row d-flex justify-content-between mt-2">
            <div className="col-12 queheading">
              <div> Details of Passangers/ Cargo  :</div>
              <textarea
                type="text"
                className="form-control passwidth crewfontt "
                id="exampleFormControlInput1"
                rows="1"
                placeholder=""
              ></textarea>
            </div>
          </div>
          <div className="cont row d-flex justify-content-between mt-2">
            <div className="col-12 queheading">
              <div> Remarks  :</div>
              <textarea
                type="text"
                className="form-control passwidth crewfontt "
                id="exampleFormControlInput1"
                rows="1"
                placeholder=""
              ></textarea>
            </div>
          </div>

       <div className="cont row d-flex justify-content-between mt-2 ">
            <div className="col-6 queheading">
              <div> Name & Sign of Passenger  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>

          </div>
<div className="mt-3"> 
  Additional:
</div>


 <div className="dear">

            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-6 queheading">
                  <div>  Waiting:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-6 queheading">
                  <div>  From	:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>

              </div>
              <div className="date row mt-2">
                <div className="col-6 queheading">
                  <div>  To:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-3 queheading">
                  <div>  Hrs	:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                  <div className="col-2 d-flex align-items-end">
                    <button
                      type="button"
                      className="btn btn-danger">
                      Delete
                    </button>
                  </div>


              </div>

              <div className="attention-section mt-2">
                <div className="row date">

                </div>
              </div>
              <div className="mt-2">
                <button
                  type="button"
                  className="btn btn-info addmorebtn" >
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div className="footer-button d-flex justify-content-center mt-3">
            <button
              type="button"
              className="btn btncancel"

            >
              Cancel
            </button>
            <button
              type="button"
              className="btn generate-buttona"

            >
              Save
            </button>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Close</Button>

      </DialogActions>
    </Dialog>
  );
};

export default TransportationSlip;
