import React from "react";
import "./Transwave-Templates-css/New_OKTB_and_Log.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const NewOKTBAndLog = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>New OKTB and Log</DialogTitle>
      <DialogContent>
        <div className="new-oktb-and-log">
          <h1>New OKTB and Log</h1>
          {/* Additional content for the New OKTB and Log template goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewOKTBAndLog;
