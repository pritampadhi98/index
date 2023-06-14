import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";

import SubLayoutComponenet from "./SubLayoutComponenet";
import ProductEvaluationLayout from "../Component/ProductEvaluationLayout";
import {
  UsabilityData,
  EvolutionData,
  purchaseData,
  PostPurchaseData,
  overAllData,
} from "../Component/data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AestheticComponenet = ({ brandData }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Aesthetic</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton sx={{ backgroundColor: "gray" }}>
            <ListItemText primary="Over-All" />
          </ListItemButton>
          <ProductEvaluationLayout
            data={overAllData}
            val_data={(brandData["OverAll"] = {})}
          />

          <ListItemButton sx={{ backgroundColor: "gray" }}>
            <ListItemText primary="Product Discovery" />
          </ListItemButton>
          <ProductEvaluationLayout
            data={UsabilityData}
            val_data={(brandData["ProductDiscovery"] = {})}
          />
          <ListItemButton sx={{ backgroundColor: "gray" }}>
            <ListItemText primary="Product Evaluation" />
          </ListItemButton>
          <ProductEvaluationLayout
            data={EvolutionData}
            val_data={(brandData["ProductEvaluation"] = {})}
          />
          <ListItemButton sx={{ backgroundColor: "gray" }}>
            <ListItemText primary="Purchase" />
          </ListItemButton>
          <ProductEvaluationLayout
            data={purchaseData}
            val_data={(brandData["Purchase"] = {})}
          />
          <ListItemButton sx={{ backgroundColor: "gray" }}>
            <ListItemText primary="Post-Purchase" />
          </ListItemButton>
          <ProductEvaluationLayout
            data={PostPurchaseData}
            val_data={(brandData["PostPurchase"] = {})}
          />
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default AestheticComponenet;
