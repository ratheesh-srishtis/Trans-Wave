import React from "react";
import "./Transwave-Templates-css/Crane_Tally.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const CraneTally = ({
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
      <DialogTitle>Crane Tally</DialogTitle>
      <DialogContent>
        <div className="mainoktb ">
          <div className=" d-flex justify-content-center">
            <h5 className="twoktbsubhead"> TIME SHEET </h5>
          </div>
          <div className="cont row d-flex justify-content-between ">
            <div className="col-6 queheading">
              <div> Ref No.:</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-6 queheading">
              <div> Date :</div>
              <textarea
                type="text"
                className="form-control passwidth crewfontt "
                id="exampleFormControlInput1"
                rows="1"
                placeholder=""
              ></textarea>
            </div>
          </div>
          <div className="cont row d-flex justify-content-between ">
            <div className="col-6 queheading">
              <div> Vessel Name:</div>
              <input
                type="number"
                className="form-control answidth crewfontt"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-6 queheading">
              <div> Port Name:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
          </div>

          <div className="dear">

            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-4 queheading">
                  <div> Equipment :</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  >
                  </input>
                </div>
                <div className="col-2 queheading">
                  <div>  Capacity:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-2 queheading">
                  <div> Hours Trip:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  >
                  </input>
                </div>
                                <div className="col-4 queheading">
                  <div> From :</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  >
                  </input>
                </div>
              </div>
                            <div className="date row mt-2">
                                              <div className="col-4 queheading">
                  <div>  To:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-6 queheading">
                  <div>  Remarks:</div>
                  <textarea
                    type="text"
                    className="form-control passwidth crewfontt "
                    id="exampleFormControlInput1"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
                  <div className="col-2 d-flex align-items-end ">
                    <button
                      type="button"
                      className="btn btn-danger twremovecrane ">
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
                  className="btn btn-info addmorebtn"
                >
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

      </DialogActions>
    </Dialog>
  );
};

export default CraneTally;
