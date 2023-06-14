import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import Comment from "./Comment";
import StarRatting from "./StarRatting";
import { TextField, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { incrementVal } from "../redux/actions/index";
import { Margin } from "@mui/icons-material";

const INITIAL_STATE_VALUE = {
  attachment: "",
  rating: 0,
  comment: "",
};

const Layout = ({ datas, primaryText, contentVal, usability_key, val }) => {
  const dispatch = useDispatch();
  const [layoutState, setLayoutState] = useState(INITIAL_STATE_VALUE);
  const [value, setValue] = useState(0);
  const [base64Image, setBase64Image] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setBase64Image(base64String);
      setLayoutState((prev) => ({
        ...prev,
        attachment: base64String,
      }));
    };

    reader.readAsDataURL(file);
  };
  const [comment, setComment] = useState({});

  const handleChange = (event) => {
    setLayoutState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const prt = {};

  useEffect(() => {
    prt[usability_key] = layoutState;

    if (datas[primaryText]) {
      datas[primaryText] = { ...datas[primaryText], ...prt };
    } else {
      datas[primaryText] = prt;
    }
  }, [layoutState]);

  return (
    <div style={{ paddingLeft: "70px" }}>
      <Box
        sx={{
          // pl: "70px",
          display: "flex",
          height: "60px !important",
          marginBottom: "10px ",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            width: "120px !important",
            marginRight: "20px",
          }}
        >
          <Typography>{usability_key} </Typography>
        </Box>
        <Box>
          <Typography>{contentVal}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "60px !important",
        }}
      >
        <Box
          sx={{
            width: "120px !important",
            marginRight: "20px",
          }}
        >
          <Typography>attachment :</Typography>
        </Box>
        <Box>
          <input type="file" name="attachment" onChange={handleFileUpload} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "60px !important",
        }}
      >
        <Box
          sx={{
            width: "120px !important",
            marginRight: "20px",
          }}
        >
          <Typography>ratting:</Typography>
        </Box>
        <Box>
          <Rating
            value={layoutState?.rating}
            name="rating"
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "120px !important",
            marginRight: "20px",
          }}
        >
          <Typography>comment:</Typography>
        </Box>
        <Box>
          <TextField
            label="Comment"
            multiline
            rows={4}
            name="comment"
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
