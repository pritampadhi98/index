import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import SubLayoutComponenet from "./SubLayoutComponenet";

import { exprienceData } from "../Component/data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductEvaluationLayout from "./ProductEvaluationLayout";

const EmotionalComponenet = ({ brandData }) => {
  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Emotional</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProductEvaluationLayout data={exprienceData} val_data={brandData} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default EmotionalComponenet;
