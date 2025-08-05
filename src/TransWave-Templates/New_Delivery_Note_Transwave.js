import React from "react";
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
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>New Delivery Note - Transwave</DialogTitle>
      <DialogContent>
        <div className="new-delivery-note-transwave">
          <h1>New Delivery Note - Transwave</h1>
          {/* Additional content for the delivery note can be added here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewDeliveryNoteTranswave;
