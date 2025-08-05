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
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Sanitation Renewal Request Letter</DialogTitle>
      <DialogContent>
        <div className="sanitation-renewal-request-letter">
          <h1>Sanitation Renewal Request Letter</h1>
          {/* Add content specific to the Sanitation Renewal Request Letter here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SanitationRenewalRequestLetter;
