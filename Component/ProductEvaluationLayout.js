import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Layout from "./Layout";

const ProductEvaluationLayout = ({ data, val_data }) => {
  return (
    <div>
      {data?.map((vales, index) => {
        return (
          <List component="div" disablePadding sx={{ pl: 4 }} key={index}>
            <ListItemButton>
              <ListItemText
                primary={vales?.primaryText}
                sx={{
                  color: "black",
                  fontSize: "24px",
                  fontWeight: "700 !important",
                }}
              />
            </ListItemButton>
            {vales?.subLayout?.map((subVales, index) => {
              return (
                <>
                  <Layout
                    usability_key={subVales?.usability_key}
                    contentVal={subVales?.contentVal}
                    key={index}
                    primaryText={vales?.primaryText}
                    datas={val_data}
                    val="Aesthetic"
                  />
                </>
              );
            })}
          </List>
        );
      })}
    </div>
  );
};

export default ProductEvaluationLayout;
