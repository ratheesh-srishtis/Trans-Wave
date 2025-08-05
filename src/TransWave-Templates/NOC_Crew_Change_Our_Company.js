import React from "react";
import "./Transwave-Templates-css/NOC_Crew_Change_Our_Company.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const NOC_Crew_Change_Our_Company = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>NOC Crew Change (Our Company)</DialogTitle>
      <DialogContent>
        <div className="noc-crew-change-our-company">
          {/* Content for NOC Crew Change (Our Company) template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NOC_Crew_Change_Our_Company;
