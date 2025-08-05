import React from "react";
import "./Transwave-Templates-css/QQ_Form.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const QQForm = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>QQ Form</DialogTitle>
      <DialogContent>
        <div className="qq-form">
          <h1>QQ Form</h1>
          {/* Add your form elements here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default QQForm;
