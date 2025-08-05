import React from "react";
import "./Transwave-Templates-css/Proforma_Invoice.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const Proforma_Invoice = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Proforma Invoice</DialogTitle>
      <DialogContent>
        <div className="proforma-invoice">
          {/* Content for Proforma Invoice goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Proforma_Invoice;
