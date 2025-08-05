import React from "react";
import "./Transwave-Templates-css/On_Signers_Attestation.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const On_Signers_Attestation = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>On Signers Attestation</DialogTitle>
      <DialogContent>
        <div className="on-signers-attestation">
          {/* Content for On Signers Attestation template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default On_Signers_Attestation;
