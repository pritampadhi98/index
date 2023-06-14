import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { addedSelectVal } from "../../redux/actions/index";
import FormGroup from "@mui/material/FormGroup";
import { List } from "@mui/material";

const CheckedButton = ({ data, checkedVal, subVal }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState({});
  const handleChangeCheck = (e, subVal) => {
    dispatch(addedSelectVal(`${subVal}.${e.target.name}`));
    setChecked((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const dataofChecked = useSelector((state) => state.contentCheckPayLoad);
  console.log(dataofChecked, "dataofChecked");

  return (
    <div>
      {" "}
      {data?.map((vales, index) => {
        return (
          <List component="div" sx={{ pl: 4 }} key={vales.primaryText}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedVal || checked[vales.primaryText]}
                    onChange={(e) => handleChangeCheck(e, subVal)}
                    name={vales.primaryText}
                  />
                }
                label={vales.primaryText}
              />

              {vales?.subLayout?.map((subVales, index) => {
                return (
                  <FormGroup
                    key={subVales?.usability_key}
                    sx={{ paddingLeft: "70px" }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            checkedVal ||
                            checked[vales.primaryText] ||
                            checked[subVales?.usability_key]
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handleChangeCheck(
                              e,
                              `${subVal}.${vales.primaryText}`
                            )
                          }
                          name={subVales?.usability_key}
                        />
                      }
                      label={subVales?.usability_key}
                    />
                  </FormGroup>
                );
              })}
            </FormGroup>
          </List>
        );
      })}{" "}
    </div>
  );
};

export default CheckedButton;
