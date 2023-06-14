import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Layout from "./Layout";
const SubLayoutComponenet = () => {
  const Data = [
    {
      usability_key: "SSL Certificate",
      contentVal: "The URL begins with HTTPS instead of HTTP",
      child_val: "SSL_CERTIFICATE",
    },
    {
      usability_key: "PCI-DSS Compliance      ",
      contentVal:
        "If the site handles Credit cards (no 3rd party payment partner),  it should be PCI DSS compliant       ",
      child_val: "PCI_DSS_COMPLIANCE",
    },
    {
      usability_key: "GDPR Compliance      ",
      contentVal:
        "If operating  in the European Union (EU) or handle EU customer data, ensure compliance with GDPR regulations. Obtain user consent for data collection and processing.       ",
      child_val: "GDPR_COMPLIANCE",
    },
    {
      usability_key: "Tax Compliance      ",
      contentVal:
        "calculate and collect the appropriate sales tax during the checkout process.       ",
      child_val: "TAX_COMPLIANCE",
    },
    {
      usability_key: "Cookie Consent       ",
      contentVal:
        "Provides clear information about the types of cookies used, their purpose, and obtains user consent before placing non-essential cookies      ",
      child_val: "COOKIE_CONSENT",
    },
  ];
  return (
    <div>
      <List component="div" disablePadding sx={{ pl: 4 }}>
        <ListItemButton>
          <ListItemText primary="Performance" />
        </ListItemButton>
        <Layout
          usability_key="pageLoadSpeed"
          contentVal="Loading Speed (less than 3 sec to prevent high bounce rate) 53% of mobile users leave a website that takes longer than three seconds to load."
          child_val="PAGELOAD"
        />
        <ListItemButton>
          <ListItemText primary="Responsiveness" />
        </ListItemButton>
        <Layout
          usability_key="Mobile Responsive Design "
          contentVal="Navigation is responsive and adapts well to mobile screens"
          child_val="RESPONSIVE"
        />
        <ListItemButton>
          <ListItemText primary="Compliance" />
        </ListItemButton>
        {Data?.map((vals, index) => {
          return (
            <Layout
              key={index}
              usability_key={vals?.usability_key}
              contentVal={vals?.contentVal}
              child_val={vals?.child_val}
            />
          );
        })}
      </List>
    </div>
  );
};

export default SubLayoutComponenet;
