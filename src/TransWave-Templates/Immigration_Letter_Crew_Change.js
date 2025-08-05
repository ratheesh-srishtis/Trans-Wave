import React from "react";
import "./Transwave-Templates-css/Immigration_Letter_Crew_Change.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const ImmigrationLetterCrewChange = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Immigration Letter Crew Change</DialogTitle>
      <DialogContent>
        <div className="immigration-letter-crew-change">
          <h1>Immigration Letter Crew Change</h1>
          {/* Additional content for the Immigration Letter Crew Change template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImmigrationLetterCrewChange;
