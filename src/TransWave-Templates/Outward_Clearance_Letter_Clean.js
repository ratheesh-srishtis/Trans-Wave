import React from "react";
import "./Transwave-Templates-css/Outward_Clearance_Letter_Clean.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const Outward_Clearance_Letter_Clean = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Outward Clearance Letter - Clean</DialogTitle>
      <DialogContent>
        <div className="outward-clearance-letter-clean">
          {/* Content for Outward Clearance Letter - Clean template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Outward_Clearance_Letter_Clean;
