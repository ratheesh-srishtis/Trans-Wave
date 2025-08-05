import React from "react";
import "./Transwave-Templates-css/Fresh_Water_Slip.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const FreshWaterSlip = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Fresh Water Slip</DialogTitle>
      <DialogContent>
        <div className="fresh-water-slip">
          {/* Content for Fresh Water Slip template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FreshWaterSlip;
