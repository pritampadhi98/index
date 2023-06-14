import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import SubLayoutComponenet from "./SubLayoutComponenet";
import { emotionalData } from "../Component/data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductEvaluationLayout from "./ProductEvaluationLayout";

const MeaningComponenet = ({ brandData }) => {
  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Meaning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProductEvaluationLayout data={emotionalData} val_data={brandData} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MeaningComponenet;
