import React from "react";
import "./Transwave-Templates-css/Sanitation_Renewal_Request_Letter.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const SanitationRenewalRequestLetter = ({
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
            <h5 className="twoktbsubhead"> SANITATION RENEWAL REQUEST
            </h5>
          </div>
          <div className="cont row d-flex  ">
            <div className="col-3 queheading">
              <div> Date:</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-4 queheading">
              <div> To  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
            <div className="col-5 queheading">
              <div> Attn  :</div>
              <input
                type="email"
                className="form-control answidth crewfontt"
              ></input>
            </div>
          </div>
          <div className="cont row d-flex justify-content-between ">
            <div className="col-12 queheading">
              <div> Subject  :</div>
              <textarea
                type="text"
                className="form-control passwidth crewfontt "
                id="exampleFormControlInput1"
                rows="1"
                placeholder=""
              ></textarea>
            </div>

          </div>

          <div className="mt-3 mb-3">
            Kindly arrange to issue Ship Sanitation Control Exemption Certificate for the subject Vessel.
          </div>
          <div>
            Attached please find herewith the ship particulars.
          </div>


          

          <div className="dear">

            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-4 queheading">
                  <div>  Vessel’s Name:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div>  Type of vessel	:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div> Port of registry:</div>
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
                <div className="col-5 queheading">
                  <div>  FLAG:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-3 queheading">
                  <div>  IMO Number	:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
<div className="col-2 queheading">
                  <div>  G.R.T		:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-2 queheading">
                  <div>  N.R.T		:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>

              </div>
                            <div className="date row mt-2">
                <div className="col-4 queheading">
                  <div>  Arrival Condition:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div>  Master Name		:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div> ID No:</div>
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
                  className="btn btn-info addmorebtn" >
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
           Vessel is already arrived at <strong>Khorfakkan anchorage</strong>  on  <strong>09/06/2023</strong>  at<strong>0030HRS.</strong>  
          </div>
<div className="mt-3 mb-3">
  Original old Ship Sanitation Control Exemption certificate and disinfection and deratisation carried our onboard also enclosed.
</div>
<div>
  Charges applicable to be debited to our account.
</div>
<div className="mt-3">
  FOR,	<p className="mt-2">
TRANS WAVE MARINE SHIPPING SERVICES LLC SHJ-BR</p>

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

export default SanitationRenewalRequestLetter;
