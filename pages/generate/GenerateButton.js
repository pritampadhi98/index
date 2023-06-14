import React from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { useEffect } from "react";

const GenerateButton = ({ brandNames, setResult, setTablesShow }) => {
  const datas = useSelector((state) => state.contentPayLoad);

  const dataofChecked = useSelector((state) => state.contentCheckPayLoad);
  const data = {
    barnddata: [],
    payloadData: dataofChecked,
  };
  const handleClick = async () => {
    if (brandNames?.length > 1) {
      const data = {
        barnddata: [],
        payloadData: dataofChecked,
      };
      brandNames?.map((val) => {
        data.barnddata.push({ ["brandName"]: val });
      });

      try {
        const response = await fetch("/api/test/Generate", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          // Handle the response data...
          console.log(result);
          setResult(result);
          setTablesShow(true);
        } else {
          // Handle the error response...
          console.error("Request failed with status:", response.status);
        }
      } catch (error) {
        // Handle any network or other errors...
        console.error("Request error:", error);
      }
    } else {
      alert("minimum 2 brand name select");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
        gap: "10px !important",
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white !important",
          width: "200px",
          color: "black !important",
          border: "1px solid black",
          fontSize: "15px",
          lineHeight: "20px",
          fontWeight: "500",
        }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#d63897 !important",
          width: "200px",
          color: "white !important",

          fontSize: "15px",
          lineHeight: "20px",
          fontWeight: "500",
        }}
        onClick={handleClick}
        disabled={brandNames?.length === 0}
      >
        Generate
      </Button>
    </Box>
  );
};

export default GenerateButton;
