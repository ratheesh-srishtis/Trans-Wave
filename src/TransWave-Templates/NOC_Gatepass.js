import React from "react";
import "./Transwave-Templates-css/NOC_Gatepass.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const NOCGatepass = ({
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
            <h5 className="twoktbsubhead"> NOC GATEPASS </h5>
          </div>
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
              <div> Address :</div>
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
              <div> Attn:</div>
              <input
                type="number"
                className="form-control answidth crewfontt"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-6 queheading">
              <div> CC:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 queheading">
              <div>Subject:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
            </div>
          </div>
          <div className="dear">
            <div className="mt-3">
              Dear Sir,<p className="mt-2">With reference to the above, you are kindly requested to allow the below persons entry/exit to the vessel  <strong>“MT NARSIMHAA”</strong> in Port <strong>Khalid CREEK</strong> from <strong> 05.09.2024 </strong> to <strong> 11.09.2024 </strong>
              </p></div>
            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-4 queheading">
                  <div>  Name:</div>
                  <textarea
                    type="text"
                    className="form-control passwidth crewfontt "
                    id="exampleFormControlInput1"
                    rows="1"
                    placeholder=""
                  ></textarea>
                </div>
                <div className="col-4 queheading">
                  <div>  Nationality:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div> EID No:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  >
                  </input>
                </div>
              </div>
              <div className="attention-section mt-2">
                <div className="row date">
                  <div className="col-2 d-flex align-items-end">
                    <button
                      type="button"
                      className="btn btn-danger">
                      Delete
                    </button>
                  </div>
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
          <div className="cont row d-flex justify-content-between mt-3 ">
            <div className="col-3 queheading">
              <div> Purpose:</div>
              <input
                type="number"
                className="form-control answidth crewfontt"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-5 queheading">
              <div> Sharjah Port Registration Card No.:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-4 queheading">
              <div> Company Name:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
          </div>

          <div className="mt-3 mb-3">
          <strong>Thank you and looking forward for your best co-operation.</strong>
          <p className="mb-0">
            Sincerely yours,
          </p>
          <p className="mb-0 mt-0">
            For TRANS WAVE MARINE SHIPPING SERVICES LLC SHJ BR
  AS AGENT

          </p>
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

export default NOCGatepass;
