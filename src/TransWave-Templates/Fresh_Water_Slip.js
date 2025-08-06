import React from "react";
import "./Transwave-Templates-css/Fresh_Water_Slip.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const FreshWaterSlip = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <div className="d-flex justify-content-between " onClick={onClose}>      <DialogTitle></DialogTitle>
        <div className="closeicon">
          <i className="bi bi-x-lg "></i>
        </div></div>

      <DialogContent>
        <div className="mainoktb ">
          <div className=" d-flex justify-content-center">
            <h5 className="twoktbsubhead"> FRESH WATER RECEIPT</h5>
          </div>
<div className="deartw mt-3 mb-3" >
            <div className="cont row d-flex justify-content-between ">
            <div className="col-6 queheading">
              <div> Date:</div>

              <input
                type="email"
                className="form-control answidth crewfontt"

              ></input>
              <div className="invalid"></div>
            </div>

            <div className="col-6 queheading">
              <div> Tally No:</div>
              <input
                type="number"
                className="form-control answidth crewfontt"

                placeholder=""

              ></input>

              <div className="invalid"></div>

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
          <div className="cont row d-flex justify-content-between ">
            <div className="col-3 queheading">
              <div> Position:</div>

              <input
                type="number"
                className="form-control answidth crewfontt"
                placeholder=""

              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-3 queheading">
              <div> N:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""

              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-3 queheading">
              <div> E:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""

              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-3 queheading">
              <div> NM:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""

              ></input>
              <div className="invalid"></div>
            </div>

          </div>
          <div className="cont row d-flex justify-content-between ">
            <div className="col-4 queheading">
              <div> Flag:</div>

              <input
                type="number"
                className="form-control answidth crewfontt"
                placeholder=""

              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-4 queheading">
              <div> Agent:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-4 queheading">
              <div> Owner:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""></input>
              <div className="invalid"></div>
            </div>
          </div>
</div>
          <div className="dear">
            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-6 queheading">
                  <div> Description:</div>
                  <textarea
                    type="text"
                    className="form-control passwidth crewfontt "
                    id="exampleFormControlInput1"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="col-6 queheading">
                  <div> Qunatity Delivered:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                  <div className="invalid"></div>
                </div>
              </div>
              <div className="date row">
                <div className="col-10 queheading">
                  <div> Remarks:</div>
                  <textarea
                    type="text"
                    className="form-control passwidth crewfontt "
                    id="exampleFormControlInput1"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="col-2 d-flex align-items-end">
                  <button
                    type="button"
                    className="btn btn-danger"   >
                    Delete
                  </button>
                </div>
              </div>
              <div className="attention-section mt-2">
                <div className="row date">
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-info addmorebtn">
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex twoktbpassangerdetails mt-3 mb-3">
            <div>
              Tender Along Side:
            </div>
            <div class="form-check mx-3">
              <input class="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                <label class="form-check-label" for="checkDefault">
                  Started
                </label>
            </div>
                        <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                <label class="form-check-label" for="checkDefault">
                  Completed
                </label>
            </div>
          </div>




          <div className="footer-button d-flex justify-content-center mt-3">
            <button
              type="button"
              className="btn btncancel">
              Cancel
            </button>
            <button
              type="button"
              className="btn generate-buttona">
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

export default FreshWaterSlip;
