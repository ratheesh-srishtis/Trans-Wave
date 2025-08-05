import React from "react";
import "./Transwave-Templates-css/Master_Agent_Declaration.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const MasterAgentDeclaration = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Master Agent Declaration</DialogTitle>
      <DialogContent>
        <div className="master-agent-declaration">
          <h1>Master Agent Declaration</h1>
          {/* Add your content here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MasterAgentDeclaration;
