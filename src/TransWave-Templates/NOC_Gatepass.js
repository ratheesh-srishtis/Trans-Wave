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
      <DialogTitle>NOC Gatepass</DialogTitle>
      <DialogContent>
        <div className="noc-gatepass">
          <h1>NOC Gatepass</h1>
          {/* Additional content for the NOC Gatepass template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NOCGatepass;
