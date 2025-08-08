import React from "react";
import "./Transwave-Templates-css/Proforma_Invoice.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const ProformaInvoice = ({
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
      <DialogTitle>Proforma Invoice</DialogTitle>

      <DialogContent>
        <div className="mainoktb ">
          <div className=" d-flex justify-content-center">
            <h5 className="twoktbsubhead"> PROFORMA INVOICE </h5>
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
              <div> Vessel Name :</div>
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
              <div> Port Name:</div>
              <input
                type="number"
                className="form-control answidth crewfontt"
                placeholder=""
              ></input>
              <div className="invalid"></div>
            </div>
            <div className="col-6 queheading">
              <div> Client Company:</div>
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
            <div className="col-6 queheading">
              <div>Invoice No:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
            </div>
            <div className="col-6 queheading">
              <div>Currency :</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                id="exampleFormControlInput1"
                placeholder=""
              ></input>
            </div>
          </div>
          <div className="dear">

            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-4 queheading">
                  <div>  Sl No:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div>  Description:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div> Quantity:</div>
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
                  <div>  Price:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    id="exampleFormControlInput1"
                    placeholder=""
                  ></input>
                </div>
                <div className="col-4 queheading">
                  <div>  Total:</div>
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
        <Button onClick={() => onClose()}>Close</Button>

      </DialogActions>
    </Dialog>
  );
};

export default ProformaInvoice;
