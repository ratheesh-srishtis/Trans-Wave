// ResponsiveDialog.js
import React, { useState, useEffect } from "react";
import "../../css/reports/costcenterbreakup.css";
import {
  getCostCentreBreakupReport,
  getAllJobIds,
  costCentreBreakupReportPDF,
} from "../../services/apiService";
import { DataGrid } from "@mui/x-data-grid";
import "react-datepicker/dist/react-datepicker.css";
import Loader from "../Loader";
import brandConfig from "../../config/brandConfig";
const CostCenterBreakup = () => {
  const Group = require("../../assets/images/reporttttt.png");
  const [reportList, setReportList] = useState([]);
  const [jobIdList, setJobIdList] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedJobNo, setSelectedJobNo] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [totalAmountOMR, setTotalAmountOMR] = useState("");
  const [vesselName, setVesselName] = useState("");
  const [portName, setPortName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const XLSX = require("xlsx");

  const getReport = async () => {
    let payload = {
      pdaId: selectedJobNo,
    };
    setIsLoading(true);
    try {
      setIsLoading(false);

      const response = await getCostCentreBreakupReport(payload);
      setInvoiceId(response?.pda?.invoiceId);
      setServices(response?.pdaServices);
      setVesselName(response?.pda?.vesselId?.vesselName);
      setPortName(response?.pda?.portId?.portName);
      console.log("getCostCentreBreakupReport", response);
    } catch (error) {
      setIsLoading(false);

      console.error("Failed to fetch quotations:", error);
    }
  };

  useEffect(() => {
    console.log(invoiceId, "invoiceId");
    console.log(services, "services");
  }, [invoiceId, services]);

  const getAllJobIDS = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      const response = await getAllJobIds();
      setJobIdList(response?.jobs);
      console.log("getPettyCashReport", response);
    } catch (error) {
      setIsLoading(false);
      console.error("Failed to fetch quotations:", error);
    }
  };
  useEffect(() => {
    getAllJobIDS();
  }, []);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "jobNo":
        setSelectedJobNo(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(selectedJobNo, "selectedJobNo");
    if (selectedJobNo) {
      getReport();
    }
  }, [selectedJobNo]);

  // useEffect(() => {
  //   console.log(jobIdList, "jobIdList");
  //   setSelectedJobNo(jobIdList[0]?._id);
  // }, [jobIdList]);

  const totalCustomerAmount = services.reduce(
    (sum, s) => sum + s.customerOMR + s.customerVAT,
    0
  );
  // const totalVendorAmount = services.reduce(
  //   (sum, s) => sum + s.vendorOMR + s.vendorVAT,
  //   0
  // );

  const totalVendorAmount = services.reduce((sum, s) => {
    // Sum all vendorOMR and vendorVAT for each vendor slot
    const omrKeys = ["vendorOMR", "vendor2OMR", "vendor3OMR", "vendor4OMR"];
    const vatKeys = ["vendorVAT", "vendor2VAT", "vendor3VAT", "vendor4VAT"];
    let vendorTotal = 0;
    for (let i = 0; i < omrKeys.length; i++) {
      const omr =
        typeof s[omrKeys[i]] === "number"
          ? s[omrKeys[i]]
          : parseFloat(s[omrKeys[i]]) || 0;
      const vat =
        typeof s[vatKeys[i]] === "number"
          ? s[vatKeys[i]]
          : parseFloat(s[vatKeys[i]]) || 0;
      vendorTotal += omr + vat;
    }
    return sum + vendorTotal;
  }, 0);
  const profitOrLoss = (totalCustomerAmount - totalVendorAmount).toFixed(
    brandConfig?.currencyName === "OMR" ? 3 : 2
  );
  console.log(totalCustomerAmount, "totalCustomerAmount_checkamount");
  console.log(totalVendorAmount, "totalVendorAmount_checkamount");

  const columns = [
    {
      field: "invoiceDisplay",
      headerName: "Sales",
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        if (params.value === "Total Amount") {
          return <span className="bold-label">Total Amount</span>;
        }
        return params.value || "";
      },
    },
    {
      field: "customerAmount",
      headerName: "Amount",
      flex: 1,
      sortable: false,
      renderCell: (params) =>
        params.value && !isNaN(params.value)
          ? `${brandConfig?.currencyName} ${Number(params.value).toFixed(
              brandConfig?.currencyName === "OMR" ? 3 : 2
            )}`
          : "",
    },
    {
      field: "vendorName",
      headerName: "Purchase",
      flex: 1,
      sortable: false,
      renderCell: (params) =>
        params.value === "Total Amount" ? (
          <span className="bold-label">{params.value}</span>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              whiteSpace: "pre-line",
              gap: "2px", // Reduce gap between vendor names
            }}
          >
            {params.value.split("\n").map((line, idx) => (
              <span key={idx} style={{ lineHeight: "1.2", margin: 0 }}>
                {line}
              </span>
            ))}
          </div>
        ),
    },
    {
      field: "vendorAmount",
      headerName: "Amount",
      flex: 1,
      sortable: false,
      renderCell: (params) =>
        params.value === "Total Amount" ? (
          <span className="bold-label">{params.value}</span>
        ) : params.value ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              whiteSpace: "pre-line",
              gap: "2px",
            }}
          >
            {String(params.value)
              .split("\n")
              .map((line, idx) => (
                <span key={idx} style={{ lineHeight: "1.2", margin: 0 }}>
                  {line}
                </span>
              ))}
          </div>
        ) : (
          ""
        ),
    },
  ];

  // Add footer rows dynamically
  const rows = services.map((service, index) => ({
    id: service._id || index,
    invoiceDisplay: index === 0 ? `Invoice No : ${invoiceId}` : "", // Only show invoiceId in first row
    customerAmount: service.customerOMR + service.customerVAT,
    vendorName: (() => {
      const vendorNames = [
        service?.vendorId?.vendorName,
        service?.vendor2Id?.vendorName,
        service?.vendor3Id?.vendorName,
        service?.vendor4Id?.vendorName,
      ].filter(Boolean);
      if (vendorNames.length > 1) {
        return vendorNames.map((name, idx) => `${idx + 1}. ${name}`).join("\n");
      } else if (vendorNames.length === 1) {
        return vendorNames[0];
      } else {
        return "";
      }
    })(),
    vendorAmount: (() => {
      // Array of vendor OMR and VAT keys
      const omrKeys = ["vendorOMR", "vendor2OMR", "vendor3OMR", "vendor4OMR"];
      const vatKeys = ["vendorVAT", "vendor2VAT", "vendor3VAT", "vendor4VAT"];
      // Get vendor names for count
      const vendorNames = [
        service?.vendorId?.vendorName,
        service?.vendor2Id?.vendorName,
        service?.vendor3Id?.vendorName,
        service?.vendor4Id?.vendorName,
      ].filter(Boolean);

      // Always show all amounts if there are multiple vendor names
      const amounts = omrKeys
        .map((omrKey, idx) => {
          const omr =
            typeof service[omrKey] === "number"
              ? service[omrKey]
              : parseFloat(service[omrKey]) || 0;
          const vat =
            typeof service[vatKeys[idx]] === "number"
              ? service[vatKeys[idx]]
              : parseFloat(service[vatKeys[idx]]) || 0;
          // Show value even if 0, if vendor name exists
          if (vendorNames[idx]) {
            return `${brandConfig?.currencyName} ${(omr + vat).toFixed(
              brandConfig?.currencyName === "OMR" ? 3 : 2
            )}`;
          }
          return null;
        })
        .filter((v, idx) => vendorNames[idx]); // Only for slots with vendor name

      if (amounts.length > 1) {
        return amounts.map((amt, idx) => `${idx + 1}. ${amt}`).join("\n");
      } else if (amounts.length === 1) {
        return amounts[0];
      } else {
        return "";
      }
    })(),
  }));

  rows.push(
    {
      id: "TotalCustomerVendorAmount",
      invoiceDisplay: "Total Amount",
      customerAmount: totalCustomerAmount,
      vendorName: "Total Amount",
      vendorAmount: totalVendorAmount,
      isFooter: true,
    },
    {
      id: "ProfitOrLoss",
      invoiceDisplay: "",
      customerAmount: "",
      vendorName: profitOrLoss >= 0 ? "Profit" : "Loss",
      vendorAmount: profitOrLoss,
      isFooter: true,
      isLoss: profitOrLoss < 0,
    }
  );

  useEffect(() => {
    console.log(rows, "rows");
    console.log(services, "services");
  }, [rows, services]);

  const getPDF = async () => {
    let payload = {
      pdaId: selectedJobNo,
    };
    console.log(payload, "payload_getReport");
    try {
      const response = await costCentreBreakupReportPDF(payload);
      console.log("getPettyCashReport", response);

      if (response?.pdfPath) {
        const pdfUrl = `${process.env.REACT_APP_ASSET_URL}${response.pdfPath}`;
        // Fetch the PDF as a Blob
        const pdfResponse = await fetch(pdfUrl);
        const pdfBlob = await pdfResponse.blob();
        const pdfBlobUrl = URL.createObjectURL(pdfBlob);
        // Create a hidden anchor tag to trigger the download
        const link = document.createElement("a");
        link.href = pdfBlobUrl;
        link.setAttribute("download", "Cost Centre Breakup Report.pdf"); // Set the file name
        document.body.appendChild(link);
        link.click();
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(pdfBlobUrl);
      }
    } catch (error) {
      console.error("Failed to fetch quotations:", error);
    }
  };

  // Create Excel for Cost Center Breakup
  const createExcel = () => {
    if (!services || services.length === 0) return;
    const excelData = services.map((service, index) => ({
      Sales: index === 0 ? `Invoice No : ${invoiceId}` : "",
      Amount: (service.customerOMR + service.customerVAT).toFixed(
        brandConfig?.currencyName === "OMR" ? 3 : 2
      ),
      Purchase: (() => {
        const vendorNames = [
          service?.vendorId?.vendorName,
          service?.vendor2Id?.vendorName,
          service?.vendor3Id?.vendorName,
          service?.vendor4Id?.vendorName,
        ].filter(Boolean);
        if (vendorNames.length > 1) {
          return (
            vendorNames.map((name, idx) => `${idx + 1}. ${name}`).join("\r\n") +
            "\r\n"
          );
        } else if (vendorNames.length === 1) {
          return vendorNames[0];
        } else {
          return "";
        }
      })(),
      "Amount ": (() => {
        // Array of vendor OMR and VAT keys
        const omrKeys = ["vendorOMR", "vendor2OMR", "vendor3OMR", "vendor4OMR"];
        const vatKeys = ["vendorVAT", "vendor2VAT", "vendor3VAT", "vendor4VAT"];
        // Get vendor names for count
        const vendorNames = [
          service?.vendorId?.vendorName,
          service?.vendor2Id?.vendorName,
          service?.vendor3Id?.vendorName,
          service?.vendor4Id?.vendorName,
        ].filter(Boolean);

        // Always show all amounts if there are multiple vendor names
        const amounts = omrKeys
          .map((omrKey, idx) => {
            const omr =
              typeof service[omrKey] === "number"
                ? service[omrKey]
                : parseFloat(service[omrKey]) || 0;
            const vat =
              typeof service[vatKeys[idx]] === "number"
                ? service[vatKeys[idx]]
                : parseFloat(service[vatKeys[idx]]) || 0;
            // Show value even if 0, if vendor name exists
            if (vendorNames[idx]) {
              return `${brandConfig?.currencyName} ${(omr + vat).toFixed(
                brandConfig?.currencyName === "OMR" ? 3 : 2
              )}`;
            }
            return null;
          })
          .filter((v, idx) => vendorNames[idx]); // Only for slots with vendor name

        if (amounts.length > 1) {
          return amounts
            .map((amt, idx) => `${idx + 1}. ${amt}`)
            .join("\r\n\r\n");
        } else if (amounts.length === 1) {
          return amounts[0];
        } else {
          return "";
        }
      })(),
    }));
    // Add Total Amount row
    excelData.push({
      Sales: "Total Amount",
      Amount: totalCustomerAmount.toFixed(
        brandConfig?.currencyName === "OMR" ? 3 : 2
      ),
      Purchase: "Total Amount",
      "Amount ": totalVendorAmount.toFixed(
        brandConfig?.currencyName === "OMR" ? 3 : 2
      ),
    });
    // Add Profit/Loss row
    excelData.push({
      Sales: "",
      Amount: "",
      Purchase: profitOrLoss >= 0 ? "Profit" : "Loss",
      "Amount ": Number(profitOrLoss).toFixed(
        brandConfig?.currencyName === "OMR" ? 3 : 2
      ),
    });
    const XLSX = require("xlsx");
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    worksheet["!cols"] = [
      { wch: 25 }, // Sales
      { wch: 15 }, // Amount
      { wch: 100 }, // Purchase (wider for vendor list)
      { wch: 10 }, // Amount
    ];

    // Set wrapText for the Purchase column
    // Object.keys(worksheet).forEach((cell) => {
    //   if (cell.startsWith("C") && worksheet[cell] && worksheet[cell].v) {
    //     if (!worksheet[cell].s) worksheet[cell].s = {};
    //     worksheet[cell].s.alignment = { wrapText: true };
    //   }
    // });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "CostCenterBreakup");
    XLSX.writeFile(workbook, "Cost Center Breakup Report.xlsx");
  };

  return (
    <>
      <div className="p-2 ">
        <div className="row g-3 mt-3 mb-3">
          <div className=" col-md-2 col-12 d-flex align-items-center">
            <label htmlFor="input" className="col-form-label costcenterinput">
              Job No:
            </label>

            <select
              className="form-select vesselboxcostcenter"
              aria-label="Small select example"
              name="jobNo"
              onChange={handleSelectChange}
              value={selectedJobNo}
            >
              <option value="">Select Job No.</option>
              {jobIdList?.map((job) => (
                <option key={job?._id} value={job?._id}>
                  {job?.jobId}
                </option>
              ))}
            </select>
          </div>
          {vesselName && (
            <>
              <div className="col-md-3 col-12 d-flex align-items-center ">
                <label
                  htmlFor="input"
                  className=" col-3 col-form-label costcenterinput me-2"
                >
                  Vessel Name:
                </label>

                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control costcenterfontsize"
                  placeholder=""
                  readOnly
                  value={vesselName}
                ></input>
              </div>
            </>
          )}
          {portName && (
            <>
              <>
                <div className=" col-md-3 col-12  d-flex align-items-center ">
                  <label
                    htmlFor="input"
                    className=" col-2 form-label costcenterport me-2"
                  >
                    Port Name:
                  </label>

                  <input
                    type="text"
                    id="inputPassword6"
                    className="form-control costcenterfontsize"
                    placeholder=""
                    readOnly
                    value={portName}
                  ></input>
                </div>
              </>
              <>
                <div className=" col-md-3 col-12 d-flex align-items-center gap-2 ">
                  <button
                    className="btn btn-info filbtnjobccbrkup"
                    onClick={() => {
                      getPDF();
                    }}
                  >
                    Download PDF
                  </button>
                  <button
                    className="btn btn-info filbtnjobccbrkup"
                    onClick={createExcel}
                  >
                    Download Excel
                  </button>
                </div>
              </>
            </>
          )}
        </div>
        <div className="charge">
          <div className="rectangle"></div>
          <div>
            <img src={Group}></img>
          </div>
        </div>
        {/* {selectedJobNo && (
          <>
            <div className=" p-3">
              <table className="table tablepay">
                <thead className="">
                  <tr className="createtable">
                    <th className=" paytexthead marginpay">SALES </th>
                    <th className="paytexthead marginpay ">AMOUNT</th>
                    <th className="paytexthead marginpay">PURCHASE</th>
                    <th className="paytexthead marginpay ">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={service._id}>
                      <td className="paytexthead marginpay">
                        {index === 0 ? invoiceId : ""}
                      </td>
                      <td className="paytexthead marginpay">
                        OMR{" "}
                        {(service.customerOMR + service.customerVAT).toFixed(2)}
                      </td>
                      <td className="paytexthead marginpay">
                        {service.vendorId.vendorName}
                      </td>
                      <td className="paytexthead marginpay">
                        OMR {(service.vendorOMR + service.vendorVAT).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bold-row">
                    <td className="paytexthead marginpay resultpay">
                      Total Customer Amount
                    </td>
                    <td className="paytexthead marginpay resultpay">
                      OMR{" "}
                      {services
                        .reduce(
                          (sum, s) => sum + s.customerOMR + s.customerVAT,
                          0
                        )
                        .toFixed(2)}
                    </td>
                    <td className="paytexthead marginpay resultpay">
                      Total Vendor Amount
                    </td>
                    <td className="paytexthead marginpay resultpay">
                      OMR{" "}
                      {services
                        .reduce((sum, s) => sum + s.vendorOMR + s.vendorVAT, 0)
                        .toFixed(2)}
                    </td>
                  </tr>
                  <tr className="bold-row">
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td
                      className={`paytexthead marginpay resultpay ${
                        profitOrLoss >= 0 ? "text-success" : "text-danger"
                      }`}
                    >
                      {profitOrLoss >= 0 ? "Profit" : "Loss"}
                    </td>
                    <td
                      className={`paytexthead marginpay resultpay ${
                        profitOrLoss >= 0 ? "text-success" : "text-danger"
                      }`}
                    >
                      OMR {profitOrLoss.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )} */}
        {selectedJobNo && (
          <>
            <DataGrid
              rows={rows}
              columns={columns.map((col) =>
                window.innerWidth <= 600
                  ? {
                      ...col,
                      flex: undefined,
                      minWidth: 180,
                      width: 180,
                    }
                  : col
              )}
              autoHeight
              hideFooter={false} // Ensure footer is visible
              pagination
              paginationMode="client" // Enable client-side pagination
              autoPageSize={false} // Prevents automatic page size
              pageSizeOptions={[5, 10, 20, 50, 100]} // Defines available page sizes
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10, // Default page size
                    page: 0, // Default page index
                  },
                },
              }}
              getRowClassName={(params) => {
                console.log(params, "paramscvcv");
                // if (params.row.isFooter) return "footer-row"; // Apply class for footer
                if (params?.row?.vendorName === "Loss") return "loss-row"; // Apply class for loss row
                if (params?.row?.vendorName === "Profit") return "profit-row"; // Apply class for profit row
                return "";
              }}
              getRowHeight={() => 90} // <-- Add this line for fixed row height
              // ...existing code...
              // getRowHeight={(params) => {
              //   if (!params || !params.row) return 48; // Default height if row is undefined
              //   if (params.row.isFooter) return 48;
              //   const vendorLines = params.row.vendorName
              //     ? params.row.vendorName.split("\n").length
              //     : 1;
              //   return Math.max(48, vendorLines * 28);
              // }}
              // ...existing code...
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#eee !important", // Header background color
                  color: "#000 !important", // Header text color
                  fontWeight: "bold !important",
                },
                "& .MuiDataGrid-footerContainer": {
                  backgroundColor: "#eee !important", // Footer background matches header
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold !important",
                },
                "& .MuiDataGrid-cell": {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                },
                // Footer Row Styling
                "& .footer-row .MuiDataGrid-cell": {
                  fontWeight: "bold !important", // Make footer text bold
                  color: "#000 !important", // Ensure text is black
                },
                // Profit Row Styling (Green)
                "& .profit-row .MuiDataGrid-cell": {
                  color: "green !important",
                  fontWeight: "bold !important",
                },
                // Loss Row Styling (Red)
                "& .loss-row .MuiDataGrid-cell": {
                  color: "red !important",
                  fontWeight: "bold !important",
                },
                // ✅ Apply bold style **only** to "Total Customer Amount" & "Total Vendor Amount"
                "& .bold-label": {
                  color: "#000 !important",
                  fontWeight: "bold !important",
                  fontSize: "14px !important",
                },
                "& .MuiTablePagination-toolbar": {
                  alignItems: "baseline", // Apply align-items baseline
                },
              }}
            />
          </>
        )}

        {!selectedJobNo && (
          <>
            <p>Please select a job first</p>
          </>
        )}
      </div>
      <Loader isLoading={isLoading} />
    </>
  );
};

export default CostCenterBreakup;
