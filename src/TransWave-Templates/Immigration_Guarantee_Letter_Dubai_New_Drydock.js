import React from "react";
import "./Transwave-Templates-css/Immigration_Guarantee_Letter_Dubai_New_Drydock.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const ImmigrationGuaranteeLetterDubaiNewDrydock = ({
  open,
  onClose,
  charge,
  selectedTemplateName,
  selectedTemplate,
  pdaResponse,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Immigration Guarantee Letter - Dubai New - Drydock
      </DialogTitle>
      <DialogContent>
        <div className="immigration-guarantee-letter">
          {/* Content for Immigration Guarantee Letter - Dubai New - Drydock goes here */}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImmigrationGuaranteeLetterDubaiNewDrydock;
