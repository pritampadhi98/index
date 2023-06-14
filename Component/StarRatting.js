import React, { useState } from "react";
import Rating from "@mui/material/Rating";

import { useDispatch } from "react-redux";
import { incrementVal } from "../redux/actions/index";
const StarRatting = ({ child_val }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div>
      {" "}
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);

          dispatch(incrementVal(newValue, child_val));
        }}
      />
    </div>
  );
};

export default StarRatting;
