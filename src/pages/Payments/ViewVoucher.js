// ResponsiveDialog.js
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { generateVoucherPDF } from "../../services/apiPayment";
import { saveAs } from "file-saver";
import "../../css/viewvoucher.css";
import brandConfig from "../../config/brandConfig";
const { ToWords } = require("to-words");
const toWords = new ToWords();
const ViewVoucher = ({ open, onClose, getvoucher }) => {
  const [voucher, setVoucherNumber] = useState("");
  const [through, setThrough] = useState("");
  const [amount, setAmount] = useState("");
  const [particulars, setParticulars] = useState("");
  const [accountof, setAccountof] = useState("");
  const [dateofPay, setDateofPay] = useState("");

  useEffect(() => {
    if (getvoucher) {
      console.log("getvoucher", getvoucher);
      setVoucherNumber(getvoucher.voucher);
      setThrough(getvoucher.throughs);
      setAmount(getvoucher.amount);
      setParticulars(getvoucher.particulars);
      setAccountof(getvoucher.accountof);
      setDateofPay(getvoucher.dateofPay);
    }
  }, [getvoucher]);
  const getWordRepresentation = (value, currency) => {
    console.log(value, currency, "getWordRepresentation");
    if (
      value === undefined ||
      value === null ||
      isNaN(Number(value)) ||
      value === "N/A" ||
      value === ""
    ) {
      return "Zero";
    }

    const amountInWords = toWords.convert(Number(value)); // "One Hundred"

    let currencyFullName = "";
    let currencyUnit = "";

    switch (currency?.toUpperCase()) {
      case "USD":
        currencyFullName = "United States Dollar";
        currencyUnit = "Dollars";
        break;
      case "OMR":
        currencyFullName = "Omani Rial";
        currencyUnit = "Rials";
        break;
      default:
        currencyFullName =
          currency?.toUpperCase() === "AED" ? "Dirham" : currency;
        currencyUnit = "";
    }

    return `${currencyFullName} ${amountInWords} ${currencyUnit} Only`;
  };

  const downloadVoucher = async () => {
    try {
      let payload = { pettyId: getvoucher._id };
      const voucherPdf = await generateVoucherPDF(payload);
      const fileUrl = process.env.REACT_APP_ASSET_URL + voucherPdf.pdfPath;
      const fileName = "PettyCash.pdf";
      // Fetch the file and save it
      fetch(fileUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.blob();
        })
        .then((blob) => {
          if (blob.type !== "application/pdf") {
            throw new Error("File is not a PDF");
          }
          saveAs(blob, fileName);
        })
        .catch((error) => console.error("Download error:", error));
    } catch (error) {
      console.error("Error fetching the voucher PDF:", error);
    }
  };

  return (
    <>
      <Dialog
        sx={{
          width: 1000,
          margin: "auto",
          borderRadius: 2,
        }}
        open={open}
        onClose={(event, reason) => {
          if (reason === "backdropClick") {
            // Prevent dialog from closing when clicking outside
            return;
          }
          onClose(); // Allow dialog to close for other reasons
        }}
        fullWidth
        maxWidth="lg"
      >
        <div className="d-flex justify-content-between " onClick={onClose}>
          <DialogTitle></DialogTitle>
          <div className="closeicon">
            <i className="bi bi-x-lg "></i>
          </div>
        </div>
        <DialogContent style={{ marginBottom: "40px" }}>
          <div className="">
            <table className="vouchertablebody">
              <thead>
                <tr>
                  <th colspan="6" className=" tableimage ">
                    <img
                      className="logoimg"
                      src={brandConfig?.templateHeaderOne}
                    ></img>

                    <img
                      className="sublogoimg"
                      src={brandConfig?.templateHeaderTwo}
                    ></img>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="voucherpadding">
              <div className=" headheadvoucher">
                <div className="headvoucher">Petty</div>

                <div className="downloadbutnvoucher">
                  <button
                    className="btn btn-info infobtn"
                    onClick={downloadVoucher}
                  >
                    {" "}
                    Download Petty
                  </button>
                </div>
              </div>
              <div className="voucherdateandnumber">
                <div>No: {voucher}</div>
                <div>Date: {dateofPay}</div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="voucherpart text-center">Particulars</th>
                    <th className="voucherpartone text-center"> Amounts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="voucherpartthree"></td>
                    <td className="voucherpartfour"></td>
                  </tr>
                  <tr>
                    <td className="voucheraccount">Account:</td>
                    <td className="voucherpartfour"></td>
                  </tr>
                  <tr>
                    <td className="voucherprinting">{particulars}</td>
                    <td className="voucheramountrate text-center">{amount}</td>
                  </tr>
                  <tr>
                    <td className="voucherpartthree">
                      <div className="voucheraccount">Vendor:</div>{" "}
                      <div className="voucherprinting">
                        {" "}
                        {getvoucher?.vendorName || "N/A"}
                      </div>
                    </td>
                    <td className="voucherpartfour"></td>
                  </tr>

                  <tr>
                    <td className="voucheraccount">Through:</td>
                    <td className="voucherpartfour"></td>
                  </tr>
                  <tr>
                    <td className="voucherprinting">{`${through}_Petty`}</td>
                    <td className="voucherpartfour"></td>
                  </tr>
                  <tr>
                    <td className="voucheraccount">On Account of:</td>
                    <td className="voucherpartfour"></td>
                  </tr>
                  <tr>
                    <td className="voucherprinting">{accountof}</td>
                    <td className="voucherpartfour"></td>
                  </tr>
                  <tr>
                    <td className="voucheraccount">Amount(in words):</td>
                    <td className="voucherpartfour"></td>
                  </tr>
                  <tr>
                    <td className="voucherprinting">
                      {getWordRepresentation(amount, "Dirham")}
                    </td>
                    <td className="voucheramountrate text-center">
                      {brandConfig?.currencyName} {amount}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <table className="tabstyle">
            <thead>
              <tr>
                <th colspan="12" className=" tableimage ">
                  <img
                    className="footimgviewvoucher"
                    src={brandConfig?.templateFooter}
                  ></img>
                </th>
              </tr>
            </thead>
          </table>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewVoucher;
