import React, { useState } from "react";
import "./Transwave-Templates-css/New_OKTB_and_Log.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  // State for passenger entries in O.K. TO BOARD section

  const dataFromAPI = {
    to: "to",
    attn: "attn",
    date: "08/08/2025",
    subject: "subject",
    vesselName: "vessel name",
    passengers: [
      {
        passengerName: "passenger name 01",
        flightNo: "fligh no 01",
        route: "route 01",
        departure: "10/08/2025",
        arrival: "11/08/2025",
        pnr: "pnr 01",
      },
      {
        passengerName: "passenger name 02",
        flightNo: "fligh no 02",
        route: "route 02",
        departure: "03/09/2025",
        arrival: "04/09/2025",
        pnr: "pnr 02",
      },
    ],
    crewMembers: [
      {
        name: "name 01",
        flightNo: "flight 01",
        departure: "01/01/2001",
        arrival: "01/01/2001",
      },
      {
        name: "name 02",
        flightNo: "flight 02",
        departure: "29/08/2025",
        arrival: "01/02/2001",
      },
    ],
  };

  // Populate form fields from dataFromAPI on mount
  React.useEffect(() => {
    // Helper to convert dd/MM/yyyy string to Date object
    const parseDate = (str) => {
      if (!str) return null;
      const [day, month, year] = str.split("/");
      return new Date(`${year}-${month}-${day}`);
    };

    setFormData({
      to: dataFromAPI.to || "",
      attn: dataFromAPI.attn || "",
      date: parseDate(dataFromAPI.date),
      subject: dataFromAPI.subject || "",
      vesselName: dataFromAPI.vesselName || "",
    });

    setPassengers(
      (dataFromAPI.passengers || []).map((p) => ({
        ...p,
        departure: parseDate(p.departure),
        arrival: parseDate(p.arrival),
      }))
    );

    setCrewMembers(
      (dataFromAPI.crewMembers || []).map((c) => ({
        ...c,
        departure: parseDate(c.departure),
        arrival: parseDate(c.arrival),
      }))
    );
  }, []);

  const [passengers, setPassengers] = useState([
    {
      passengerName: "",
      flightNo: "",
      route: "",
      departure: null, // Changed to null for DatePicker
      arrival: null, // Changed to null for DatePicker
      pnr: "",
    },
  ]);

  // State for crew entries in LETTER OF GUARANTEE section
  const [crewMembers, setCrewMembers] = useState([
    {
      name: "",
      flightNo: "",
      departure: null, // Changed to null for DatePicker
      arrival: null, // Changed to null for DatePicker
    },
  ]);

  // State for form header fields
  const [formData, setFormData] = useState({
    to: "",
    attn: "",
    date: null, // Changed to null for DatePicker
    subject: "",
    vesselName: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      return; // Prevent closing on backdrop click
    }
    onClose(event, reason);
  };

  // Functions for passenger management
  const addPassenger = () => {
    const newPassenger = {
      passengerName: "",
      flightNo: "",
      route: "",
      departure: null, // Changed to null for DatePicker
      arrival: null, // Changed to null for DatePicker
      pnr: "",
    };
    setPassengers([...passengers, newPassenger]);
  };

  const deletePassenger = (index) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter((_, i) => i !== index));
    }
  };

  const updatePassenger = (index, field, value) => {
    setPassengers(
      passengers.map((passenger, i) =>
        i === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  // Functions for crew member management
  const addCrewMember = () => {
    const newCrewMember = {
      name: "",
      flightNo: "",
      departure: null, // Changed to null for DatePicker
      arrival: null, // Changed to null for DatePicker
    };
    setCrewMembers([...crewMembers, newCrewMember]);
  };

  const deleteCrewMember = (index) => {
    if (crewMembers.length > 1) {
      setCrewMembers(crewMembers.filter((_, i) => i !== index));
    }
  };

  const updateCrewMember = (index, field, value) => {
    setCrewMembers(
      crewMembers.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      )
    );
  };

  // Function to update form header fields
  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to get all form data
  const getAllFormData = () => {
    return {
      headerData: formData,
      passengers: passengers,
      crewMembers: crewMembers,
    };
  };

  // Function to handle save action
  const handleSave = () => {
    const formPayload = {
      to: formData.to,
      attn: formData.attn,
      date: formData.date ? formData.date.toLocaleDateString("en-GB") : null, // Format as dd/MM/yyyy
      subject: formData.subject,
      vesselName: formData.vesselName,
      passengers: passengers.map((passenger) => ({
        ...passenger,
        departure: passenger.departure
          ? passenger.departure.toLocaleDateString("en-GB")
          : null,
        arrival: passenger.arrival
          ? passenger.arrival.toLocaleDateString("en-GB")
          : null,
      })),
      crewMembers: crewMembers.map((member) => ({
        ...member,
        departure: member.departure
          ? member.departure.toLocaleDateString("en-GB")
          : null,
        arrival: member.arrival
          ? member.arrival.toLocaleDateString("en-GB")
          : null,
      })),
    };

    console.log("Form Payload:", formPayload);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <div
        className="d-flex justify-content-between "
        onClick={() => onClose()}
      >
        {" "}
        <DialogTitle>New OKTB and Log</DialogTitle>
        <div className="closeicon">
          <i className="bi bi-x-lg "></i>
        </div>
      </div>

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
                value={formData.to}
                onChange={(e) => updateFormData("to", e.target.value)}
                placeholder="Enter email address"
              ></input>
              <div className="invalid"></div>
            </div>

            <div className="col-6 queheading">
              <div> Attn:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                placeholder="Enter attention to"
                value={formData.attn}
                onChange={(e) => updateFormData("attn", e.target.value)}
              ></input>
              <div className="invalid"></div>
            </div>
          </div>
          <div className="cont row d-flex justify-content-between ">
            <div className="col-6 queheading">
              <div> Date:</div>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={formData.date}
                onChange={(selectedDate) =>
                  updateFormData("date", selectedDate)
                }
                className="form-control answidth crewfontt"
                placeholderText="Select date"
                autoComplete="off"
              />
              <div className="invalid"></div>
            </div>
            <div className="col-6 queheading">
              <div> Subject:</div>
              <input
                type="text"
                className="form-control answidth crewfontt"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={(e) => updateFormData("subject", e.target.value)}
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
              The following passenger is scheduled to travel from{" "}
              <strong>LKO</strong> → <strong>DXB</strong> on your flight as per
              the details below:
            </div>
            <div className="twoktbpassangerdetails mt-2">
              {passengers.map((passenger, index) => (
                <div key={index} className="passenger-entry">
                  <div className="date row mt-2">
                    <div className="col-4 queheading">
                      <div> Passenger Name:</div>
                      <textarea
                        type="text"
                        className="form-control passwidth crewfontt "
                        rows="1"
                        placeholder=""
                        value={passenger.passengerName}
                        onChange={(e) =>
                          updatePassenger(
                            index,
                            "passengerName",
                            e.target.value
                          )
                        }
                      ></textarea>
                    </div>
                    <div className="col-4 queheading">
                      <div> Flight No:</div>
                      <input
                        type="text"
                        className="form-control crewfontt"
                        placeholder=""
                        value={passenger.flightNo}
                        onChange={(e) =>
                          updatePassenger(index, "flightNo", e.target.value)
                        }
                      ></input>
                      <div className="invalid"></div>
                    </div>
                    <div className="col-4 queheading">
                      <div> Route:</div>
                      <input
                        type="text"
                        className="form-control crewfontt"
                        placeholder=""
                        value={passenger.route}
                        onChange={(e) =>
                          updatePassenger(index, "route", e.target.value)
                        }
                      ></input>
                      <div className="invalid"></div>
                    </div>
                  </div>
                  <div className="date row">
                    <div className="col-4 queheading">
                      <div> Departure:</div>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={passenger.departure}
                        onChange={(selectedDate) =>
                          updatePassenger(index, "departure", selectedDate)
                        }
                        className="form-control crewfontt"
                        placeholderText="Select departure date"
                        autoComplete="off"
                      />
                      <div className="invalid"></div>
                    </div>
                    <div className="col-4 queheading">
                      <div> Arrival:</div>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={passenger.arrival}
                        onChange={(selectedDate) =>
                          updatePassenger(index, "arrival", selectedDate)
                        }
                        className="form-control crewfontt"
                        placeholderText="Select arrival date"
                        autoComplete="off"
                      />
                      <div className="invalid"></div>
                    </div>
                    <div className="col-4 queheading">
                      <div> PNR:</div>
                      <input
                        type="text"
                        className="form-control crewfontt"
                        placeholder=""
                        value={passenger.pnr}
                        onChange={(e) =>
                          updatePassenger(index, "pnr", e.target.value)
                        }
                      ></input>
                      <div className="invalid"></div>
                    </div>
                  </div>
                  {passengers.length > 1 && (
                    <div className="attention-section mt-2">
                      <div className="row date">
                        <div className="col-2 d-flex align-items-end">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deletePassenger(index)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {index < passengers.length - 1 && (
                    <hr className="mt-3 mb-2" />
                  )}
                </div>
              ))}
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-info addmorebtn"
                  onClick={addPassenger}
                >
                  Add More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 mb-3">
            <strong>Request:</strong> Kindly flash the ‘OK TO BOARD’ message,
            confirming that we will meet the above-mentioned passenger upon
            arrival at Dubai International Airport and assist him in embarking
            on the vessel.
          </div>
          <div className=" d-flex justify-content-center mt-2">
            <h5 className="twoktbsubhead">LETTER OF GUARANTEE</h5>
          </div>
          <div className="concern">TO WHOM IT MAY CONCERN</div>
          <div className="row mt-3 mb-3 twoktbpassangerdetails">
            <div className="col-6 queheading d-flex align-items-center">
              <div className="col-4"> Vessel Name:</div>
              <input
                type="text"
                className="form-control crewfontt"
                placeholder="Enter vessel name"
                value={formData.vesselName}
                onChange={(e) => updateFormData("vesselName", e.target.value)}
              ></input>
              <div className="invalid"></div>
            </div>
          </div>
          <div>
            We confirm that we are the protective agents for the above vessel,
            currently at ‘Fujairah Port , and the following personnel will be
            joining:
          </div>
          <div className="twoktbpassangerdetails mt-3 mb-3">
            {crewMembers.map((member, index) => (
              <div key={index} className="crew-entry">
                <div className="date row mt-2">
                  <div className="col-6 queheading">
                    <div> Name:</div>
                    <textarea
                      type="text"
                      className="form-control passwidth crewfontt "
                      rows="1"
                      placeholder=""
                      value={member.name}
                      onChange={(e) =>
                        updateCrewMember(index, "name", e.target.value)
                      }
                    ></textarea>
                  </div>
                  <div className="col-6 queheading">
                    <div> Flight No:</div>
                    <input
                      type="text"
                      className="form-control crewfontt"
                      placeholder=""
                      value={member.flightNo}
                      onChange={(e) =>
                        updateCrewMember(index, "flightNo", e.target.value)
                      }
                    ></input>
                    <div className="invalid"></div>
                  </div>
                </div>
                <div className="date row mt-2">
                  <div className="col-6 queheading">
                    <div> Departure:</div>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={member.departure}
                      onChange={(selectedDate) =>
                        updateCrewMember(index, "departure", selectedDate)
                      }
                      className="form-control crewfontt"
                      placeholderText="Select departure date"
                      autoComplete="off"
                    />
                    <div className="invalid"></div>
                  </div>
                  <div className="col-6 queheading">
                    <div> Arrival:</div>
                    <DatePicker
                      dateFormat="dd/MM/yyyy"
                      selected={member.arrival}
                      onChange={(selectedDate) =>
                        updateCrewMember(index, "arrival", selectedDate)
                      }
                      className="form-control crewfontt"
                      placeholderText="Select arrival date"
                      autoComplete="off"
                    />
                    <div className="invalid"></div>
                  </div>
                </div>
                {crewMembers.length > 1 && (
                  <div className="attention-section mt-2">
                    <div className="row date">
                      <div className="col-2 d-flex align-items-end">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteCrewMember(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {index < crewMembers.length - 1 && <hr className="mt-3 mb-2" />}
              </div>
            ))}
            <div className="mt-3">
              <button
                type="button"
                className="btn btn-info addmorebtn"
                onClick={addCrewMember}
              >
                Add More
              </button>
            </div>
          </div>
          <div>
            <strong>Confirmation:</strong> We confirm the arrangements of all
            immigration formalities upon arrival at Dubai Airport. As attending
            agents, on behalf of the managers, we will bear all expenses
            incurred during their stay, including medical expenses and
            repatriation if necessary, and take full responsibility for the
            above personnel.
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

export default NewOKTBAndLog;
