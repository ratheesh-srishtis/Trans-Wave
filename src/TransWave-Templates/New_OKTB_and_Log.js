import React from "react";
import "./Transwave-Templates-css/New_OKTB_and_Log.css";
import DatePicker from "react-datepicker";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const NewOKTBAndLog = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
    <div className="d-flex justify-content-between " onClick={onClose}>      <DialogTitle>New OKTB and Log</DialogTitle>
      <div className="closeicon">
        <i className="bi bi-x-lg "></i>
      </div></div>

      <DialogContent>
        <div className="mainoktb ">
          <div className=" d-flex justify-content-center">
            <h5 className="twoktbsubhead"> TELEFAX MESSAGE</h5>
          </div>
          <div className="cont row d-flex justify-content-between ">
            <div className="col-6 queheading">
              <div> To:</div>

              <input
                type="email"
                className="form-control answidth crewfontt"

              ></input>
              <div className="invalid"></div>
            </div>

            <div className="col-6 queheading">
              <div> Attn:</div>
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
              <div> Date:</div>

              <input
                type="number"
                className="form-control answidth crewfontt"
                placeholder=""

              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-6 queheading">
              <div> Subject:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""

              ></input>
              <div className="invalid"></div>
            </div>

          </div>

          {/* <div className="date  ">
                <div className="col-4 queheading ">
                  <div> Date:</div>
                  <DatePicker
                    dateFormat="dd/MM/yyyy" 
                    
                    className="form-control answidth date-input dateheight"
                    id="date-picker"
                    placeholderText=""
                    autoComplete="off"
                  />
                 <div className="invalid"></div>
                </div>
               
              </div> */}


          <div className=" d-flex justify-content-center mt-3 mb-3">
            <h5 className="twoktbsubhead">O.K. TO BOARD REQUEST</h5>
          </div>
          <div className="dear">
            <div>
              The following passenger is scheduled to travel from <strong>LKO</strong>  →  <strong>DXB</strong> on your flight as per the details below:
            </div>
            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-4 queheading">
                  <div> Passanger Name:</div>
                  <textarea
                    type="text"
                    className="form-control passwidth crewfontt "
                    id="exampleFormControlInput1"
                    rows="1"
                    placeholder=""

                  ></textarea>
                </div>
                <div className="col-4 queheading">
                  <div> Flight No:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""

                  ></input>

                  <div className="invalid"></div>

                </div>
                <div className="col-4 queheading">
                  <div> Route:</div>
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
                <div className="col-4 queheading">
                  <div> Departure:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""

                  ></input>

                  <div className="invalid"></div>

                </div>
                <div className="col-4 queheading">
                  <div> Arrival:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""

                  ></input>

                  <div className="invalid"></div>

                </div>
                <div className="col-4 queheading">
                  <div> PNR:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""

                  ></input>

                  <div className="invalid"></div>

                </div>

              </div>
              <div className="attention-section mt-2">
                <div className="row date">

                  <div className="col-2 d-flex align-items-end">

                    <button
                      type="button"
                      className="btn btn-danger"

                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-info addmorebtn"

                >
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <strong>Request:</strong> Kindly flash the ‘OK TO BOARD’ message, confirming that we will meet the above-mentioned passenger upon arrival at Dubai International Airport and assist him in embarking on the vessel.
          </div>
          <div className=" d-flex justify-content-center mt-2">
            <h5 className="twoktbsubhead">LETTER OF GUARANTEE</h5>
          </div>
          <div className="concern">
            TO WHOM IT MAY CONCERN
          </div>
          <div className="row mt-3 mb-3 twoktbpassangerdetails">
            <div className="col-6 queheading d-flex align-items-center">
              <div className="col-4"> Vessel Name:</div>
              <input
                type="text"
                className="form-control crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
          </div>
          <div>
            We confirm that we are the protective agents for the above vessel, currently at ‘Fujairah Port , and the following personnel will be joining:
          </div>
          <div className="twoktbpassangerdetails mt-3 mb-3">
            <div className="date row mt-2">
              <div className="col-6 queheading">
                <div> Name:</div>
                <textarea
                  type="text"
                  className="form-control passwidth crewfontt "
                  id="exampleFormControlInput1"
                  rows="1"
                  placeholder=""

                ></textarea>
              </div>
              <div className="col-6 queheading">
                <div> Flight No:</div>
                <input
                  type="text"
                  className="form-control crewfontt"
                  id="exampleFormControlInput1"
                  placeholder=""
                ></input>
                <div className="invalid"></div>
              </div>
            </div>
            <div className="date row mt-2">
              <div className="col-6 queheading">
                <div> Departure:</div>
                <input
                  type="text"
                  className="form-control crewfontt"
                  id="exampleFormControlInput1"
                  placeholder=""
                ></input>
                <div className="invalid"></div>
              </div>
              <div className="col-6 queheading">
                <div> Arrival:</div>
                <input
                  type="text"
                  className="form-control crewfontt"
                  id="exampleFormControlInput1"
                  placeholder=""
                ></input>
                <div className="invalid"></div>
              </div>
            </div>
            <div className="attention-section mt-2">
              <div className="row date">

                <div className="col-2 d-flex align-items-end">

                  <button
                    type="button"
                    className="btn btn-danger"

                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-info addmorebtn"

              >
                Add More
              </button>
            </div>
          </div>
          <div>
            <strong>Confirmation:</strong> We confirm the arrangements of all immigration formalities upon arrival at Dubai Airport. As attending agents, on behalf of the managers, we will bear all expenses incurred during their stay, including medical expenses and repatriation if necessary, and take full responsibility for the above personnel.
          </div>
          <div className="mt-3">
            Sincerely,<p className="mt-0 mb-0">Safna Thoombil</p>
            <p className="mt-0 mb-0">+971 52 134 7452</p>
            <p className="mt-0 mb-0 ">Crew Department</p>
            <p className="mt-0  mb-0">Transwave Marine Shipping Services LLC</p>


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

export default NewOKTBAndLog;
