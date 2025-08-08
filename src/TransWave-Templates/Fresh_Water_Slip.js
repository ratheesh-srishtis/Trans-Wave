import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  // State for all required fields

  const dataFromApi = {
    date: "08/08/2025",
    tallyNo: "10",
    vesselName: "Vessel Name:",
    portName: "Port Name:",
    position: "Position:",
    n: "n",
    e: "e",
    nm: "nm",
    flag: "Flag:",
    agent: "Agent:",
    owner: "Owner:",
    description: "Description:\n",
    quantityDelivered: "Qunatity Delivered:",
    remarks: "Remarks:\n",
  };
  const [date, setDate] = useState(null);
  const [tallyNo, setTallyNo] = useState("");
  const [vesselName, setVesselName] = useState("");
  const [portName, setPortName] = useState("");
  const [position, setPosition] = useState("");
  const [n, setN] = useState("");
  const [e, setE] = useState("");
  const [nm, setNM] = useState("");
  const [flag, setFlag] = useState("");
  const [agent, setAgent] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [quantityDelivered, setQuantityDelivered] = useState("");
  const [remarks, setRemarks] = useState("");

  // Example static data for edit
  const dataFromAPI = {
    date: "08/08/2025",
    tallyNo: "12345",
    vesselName: "Vessel Name",
    portName: "Port Name",
    position: "Position",
    n: "N Value",
    e: "E Value",
    nm: "NM Value",
    flag: "Flag Value",
    agent: "Agent Name",
    owner: "Owner Name",
    description: "Description here",
    quantityDelivered: "1000",
    remarks: "Some remarks",
  };

  React.useEffect(() => {
    // Helper to convert dd/MM/yyyy string to Date object
    const parseDate = (str) => {
      if (!str) return null;
      const [day, month, year] = str.split("/");
      return new Date(`${year}-${month}-${day}`);
    };

    setDate(parseDate(dataFromAPI.date));
    setTallyNo(dataFromAPI.tallyNo || "");
    setVesselName(dataFromAPI.vesselName || "");
    setPortName(dataFromAPI.portName || "");
    setPosition(dataFromAPI.position || "");
    setN(dataFromAPI.n || "");
    setE(dataFromAPI.e || "");
    setNM(dataFromAPI.nm || "");
    setFlag(dataFromAPI.flag || "");
    setAgent(dataFromAPI.agent || "");
    setOwner(dataFromAPI.owner || "");
    setDescription(dataFromAPI.description || "");
    setQuantityDelivered(dataFromAPI.quantityDelivered || "");
    setRemarks(dataFromAPI.remarks || "");
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return; // Prevent closing on backdrop click
    }
    onClose(event, reason);
  };

  // Collect all values for API payload
  const handleSave = () => {
    const payload = {
      date: date ? date.toLocaleDateString("en-GB") : null,
      tallyNo,
      vesselName,
      portName,
      position,
      n,
      e,
      nm,
      flag,
      agent,
      owner,
      description,
      quantityDelivered,
      remarks,
    };
    console.log("API Payload:", payload);
    // TODO: Pass payload to API
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
            <h5 className="twoktbsubhead"> FRESH WATER RECEIPT</h5>
          </div>
          <div className="deartw mt-3 mb-3">
            <div className="cont row d-flex justify-content-between ">
              <div className="col-6 queheading">
                <div> Date:</div>

                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={date}
                  onChange={setDate}
                  className="form-control answidth crewfontt"
                  placeholderText="Select date"
                  autoComplete="off"
                />
                <div className="invalid"></div>
              </div>

              <div className="col-6 queheading">
                <div> Tally No:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={tallyNo}
                  onChange={(e) => setTallyNo(e.target.value)}
                  placeholder=""
                />

                <div className="invalid"></div>
              </div>
            </div>
            <div className="cont row d-flex justify-content-between ">
              <div className="col-6 queheading">
                <div> Vessel Name:</div>

                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={vesselName}
                  onChange={(e) => setVesselName(e.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
              <div className="col-6 queheading">
                <div> Port Name:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={portName}
                  onChange={(e) => setPortName(e.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
            </div>
            <div className="cont row d-flex justify-content-between ">
              <div className="col-3 queheading">
                <div> Position:</div>

                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
              <div className="col-3 queheading">
                <div> N:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={n}
                  onChange={(e) => setN(e.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
              <div className="col-3 queheading">
                <div> E:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={e}
                  onChange={(ev) => setE(ev.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
              <div className="col-3 queheading">
                <div> NM:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={nm}
                  onChange={(ev) => setNM(ev.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
            </div>
            <div className="cont row d-flex justify-content-between ">
              <div className="col-4 queheading">
                <div> Flag:</div>

                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={flag}
                  onChange={(e) => setFlag(e.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
              <div className="col-4 queheading">
                <div> Agent:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={agent}
                  onChange={(e) => setAgent(e.target.value)}
                  placeholder=""
                />
                <div className="invalid"></div>
              </div>
              <div className="col-4 queheading">
                <div> Owner:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder=""
                />
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
                    rows="1"
                    placeholder=""
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="col-6 queheading">
                  <div> Qunatity Delivered:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    placeholder=""
                    value={quantityDelivered}
                    onChange={(e) => setQuantityDelivered(e.target.value)}
                  />
                  <div className="invalid"></div>
                </div>
              </div>
              <div className="date row">
                <div className="col-10 queheading">
                  <div> Remarks:</div>
                  <textarea
                    type="text"
                    className="form-control passwidth crewfontt "
                    rows="1"
                    placeholder=""
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                  />
                </div>
              </div>
              <div className="attention-section mt-2">
                <div className="row date"></div>
              </div>
            </div>
          </div>

          <div className="footer-button d-flex justify-content-center mt-3">
            <button
              type="button"
              className="btn btncancel"
              onClick={() => onClose()}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn generate-buttona"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default FreshWaterSlip;
