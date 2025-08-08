import React from "react";
import "./Transwave-Templates-css/NOC_Crew_Change.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const NOC_Crew_Change = ({
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
      <DialogTitle>NOC Crew Change</DialogTitle>
      <DialogContent>
        <div className="noc-crew-change">
          <h1>NOC Crew Change</h1>
          {/* Additional content for the NOC Crew Change template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NOC_Crew_Change;
