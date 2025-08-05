import React from "react";
import "./Transwave-Templates-css/AN_SHUN_Inward_Letterhead.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const AN_SHUN_Inward_Letterhead = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>AN SHUN Inward Letterhead</DialogTitle>
      <DialogContent>
        <div className="an-shun-inward-letterhead">
          {/* Content for AN SHUN Inward Letterhead goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AN_SHUN_Inward_Letterhead;
