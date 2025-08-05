import React from "react";
import "./Transwave-Templates-css/Mashreq_AED_IBAN_Letter.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const MashreqAEDIBANLetter = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Mashreq AED IBAN Letter</DialogTitle>
      <DialogContent>
        <div className="mashreq-aed-iban-letter">
          {/* Content for Mashreq AED IBAN Letter goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MashreqAEDIBANLetter;
