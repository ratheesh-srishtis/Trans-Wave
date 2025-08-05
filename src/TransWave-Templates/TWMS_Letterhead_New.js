import React from "react";
import "./Transwave-Templates-css/TWMS_Letterhead_New.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const TWMS_Letterhead_New = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>TWMS Letterhead - New</DialogTitle>
      <DialogContent>
        <div className="twms-letterhead-new">
          {/* Content for TWMS Letterhead - New template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TWMS_Letterhead_New;
