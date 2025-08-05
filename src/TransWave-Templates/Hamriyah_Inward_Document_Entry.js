import React from "react";
import "./Transwave-Templates-css/Hamriyah_Inward_Document_Entry.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const HamriyahInwardDocumentEntry = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Hamriyah Inward Document Entry</DialogTitle>
      <DialogContent>
        <div className="hamriyah-inward-document-entry">
          <h1>Hamriyah Inward Document Entry</h1>
          {/* Additional content for the Hamriyah Inward Document Entry template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default HamriyahInwardDocumentEntry;
