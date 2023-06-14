import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import AestheticComponenet from "../Component/AestheticComponenet";
import MeaningComponenet from "../Component/MeaningComponenet";
import EmotionalComponenet from "../Component/EmotionalComponenet";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
export default function Home() {
  const state = useSelector((state) => state?.contentToPreview);

  const [brandData, setBrandData] = useState({
    aesthetic: {},
    emotional: {},
    meaning: {},
  });

  const handleChange = (event) => {
    brandData.brandName = event.target.value;
  };
  const addData = async (nextedVAl) => {
    try {
      const response = await fetch("/api/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brandData),
      });

      const data = await response.json();
      alert("Data saved");
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <div>
      {/* <input type="file" onChange={handleImageUpload} /> */}
      <Box
        sx={{
          marginLeft: "20%",
          marginRight: "20%",
          marginTop: "2%",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            lineHeight: "40px",
            color: "green",
            fontWeight: "500px",
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          Experience index
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Typography sx={{ margin: "auto" }}>BrandName:</Typography>
          <TextField
            fullWidth
            id="fullWidth"
            placeholder="BrandName"
            onChange={handleChange}
          />
        </Box>
        <AestheticComponenet brandData={brandData.aesthetic} />
        <MeaningComponenet brandData={brandData.emotional} />
        <EmotionalComponenet brandData={brandData.meaning} />
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
              backgroundColor: "green !important",
              width: "200px",
              color: "white !important",

              fontSize: "15px",
              lineHeight: "20px",
              fontWeight: "500",
            }}
            onClick={addData}
          >
            Save
          </Button>
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
        </Box>
      </Box>
    </div>
  );
}
