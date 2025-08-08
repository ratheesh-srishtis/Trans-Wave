import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Transwave-Templates-css/New_Delivery_Note_Transwave.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const NewDeliveryNoteTranswave = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  const dataFromAPI = {
    date: "09/08/2025",
    referenceNo: "Reference No:",
    vesselName: "Vessel Name:",
    portName: "Port Name:",
    client: "Client:",
    customCode: "Custom Code :",
    items: [
      {
        description: "Description:\n",
        quantity: "Description:",
        remarks: "Remarks:\n",
      },
      {
        description: "Remarks:\n",
        quantity: "Remarks:",
        remarks: "Remarks:\n",
      },
    ],
  };
  // State for all required fields
  const [date, setDate] = useState(null);
  const [referenceNo, setReferenceNo] = useState("");
  const [vesselName, setVesselName] = useState("");
  const [portName, setPortName] = useState("");
  const [client, setClient] = useState("");
  const [customCode, setCustomCode] = useState("");

  // Array for Description, Quantity, Remarks
  const [items, setItems] = useState([
    { description: "", quantity: "", remarks: "" },
  ]);

  React.useEffect(() => {
    // Helper to convert dd/MM/yyyy string to Date object
    const parseDate = (str) => {
      if (!str) return null;
      const [day, month, year] = str.split("/");
      return new Date(`${year}-${month}-${day}`);
    };

    setDate(parseDate(dataFromAPI.date));
    setReferenceNo(dataFromAPI.referenceNo || "");
    setVesselName(dataFromAPI.vesselName || "");
    setPortName(dataFromAPI.portName || "");
    setClient(dataFromAPI.client || "");
    setCustomCode(dataFromAPI.customCode || "");
    setItems(
      Array.isArray(dataFromAPI.items) && dataFromAPI.items.length > 0
        ? dataFromAPI.items.map((item) => ({
            description: item.description || "",
            quantity: item.quantity || "",
            remarks: item.remarks || "",
          }))
        : [{ description: "", quantity: "", remarks: "" }]
    );
  }, []);

  const addItem = () => {
    setItems([...items, { description: "", quantity: "", remarks: "" }]);
  };

  const deleteItem = (idx) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== idx));
    }
  };

  const updateItem = (idx, field, value) => {
    setItems(
      items.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

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
      referenceNo,
      vesselName,
      portName,
      client,
      customCode,
      items: items.map((item) => ({ ...item })),
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
            <h5 className="twoktbsubhead"> DELIVERY NOTE</h5>
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
                <div> Reference No:</div>
                <input
                  type="text"
                  className="form-control answidth crewfontt"
                  value={referenceNo}
                  onChange={(e) => setReferenceNo(e.target.value)}
                  placeholder=""
                />

                <div className="invalid"></div>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-center">
            <h5 className="twoktbsubhead"> Collection Note</h5>
          </div>

          <div className="dear">
            <div className="twoktbpassangerdetails mt-2">
              <div className="date row mt-2">
                <div className="col-6 queheading">
                  <div> Vessel Name:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
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
                    className="form-control crewfontt"
                    value={portName}
                    onChange={(e) => setPortName(e.target.value)}
                    placeholder=""
                  />
                  <div className="invalid"></div>
                </div>
              </div>
              <div className="date row mt-2">
                <div className="col-5 queheading">
                  <div> Client:</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder=""
                  />
                  <div className="invalid"></div>
                </div>
                <div className="col-5 queheading">
                  <div> Custom Code :</div>
                  <input
                    type="text"
                    className="form-control crewfontt"
                    value={customCode}
                    onChange={(e) => setCustomCode(e.target.value)}
                    placeholder=""
                  />
                  <div className="invalid"></div>
                </div>
              </div>

              <div className="attention-section mt-2">
                <div className="row date"></div>
              </div>
            </div>
          </div>
          <div className="twoktbpassangerdetails mt-3">
            {items.map((item, idx) => (
              <div key={idx}>
                <div className="date row">
                  <div className="col-6 queheading">
                    <div> Description:</div>
                    <textarea
                      type="text"
                      className="form-control passwidth crewfontt "
                      rows="1"
                      placeholder=""
                      value={item.description}
                      onChange={(e) =>
                        updateItem(idx, "description", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-6 queheading">
                    <div> Quantity :</div>
                    <input
                      type="text"
                      className="form-control crewfontt"
                      placeholder=""
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(idx, "quantity", e.target.value)
                      }
                    />
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
                      value={item.remarks}
                      onChange={(e) =>
                        updateItem(idx, "remarks", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-2 d-flex align-items-end ">
                    <button
                      type="button"
                      className="btn btn-danger btndelte"
                      onClick={() => deleteItem(idx)}
                      disabled={items.length === 1}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {idx < items.length - 1 && <hr className="mt-3 mb-2" />}
              </div>
            ))}
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-info addmorebtn"
                onClick={addItem}
              >
                Add More
              </button>
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

export default NewDeliveryNoteTranswave;
