import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { incrementVal } from "../redux/actions/index";
const Comment = ({ child_val }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
    dispatch(incrementVal(event.target.value, child_val));
  };
  return (
    <div>
      <form>
        <TextField
          label="Comment"
          multiline
          rows={4}
          value={comment}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        {/* <Button type="submit" variant="contained" color="primary">
          Submit
        </Button> */}
      </form>
    </div>
  );
};

export default Comment;
