// pages/report.js
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { addedBrandVal, addedSelectVal } from "../../redux/actions/index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch, useSelector } from "react-redux";

import {
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import {
  UsabilityData,
  EvolutionData,
  purchaseData,
  PostPurchaseData,
  overAllData,
  exprienceData,
  emotionalData,
} from "../../Component/data";
import CheckedButton from "./CheckedButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MyTable from "./MyTable";
import GenerateButton from "./GenerateButton";

const INITIAL_STATE_VALUE = {
  OverAll: false,
  ProductDiscovery: false,
  ProductEvaluation: false,
  ProductDiscovery: false,
  Purchase: false,
  PostPurchase: false,
};

export default function Report() {
  const dispatch = useDispatch();
  const [brands, setBrands] = useState([]);
  const [fields, setFields] = useState([]);
  const [checked2, setChecked2] = useState(false);
  const [checkedVal, setCheckedVal] = useState(INITIAL_STATE_VALUE);
  const [cVal, setcVal] = useState({});
  const [result, setResult] = useState({});
  const [tablesShow, setTablesShow] = useState(false);

  const datas = useSelector((state) => state.contentPayLoad);
  const dataofChecked = useSelector((state) => state.contentCheckPayLoad);
  const handleChangeCheck = (event) => {
    const { name } = event.target;

    // Dispatch the updateAesthetic action
    dispatch(addedSelectVal(`aesthetic.${name}`));
    setCheckedVal((prev) => ({
      ...prev,
      [name]: event.target.checked,
    }));
  };
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setcVal(value);
    dispatch(addedBrandVal(value));
  };
  // Fetch brands and fields data from the API
  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        setBrands(data.response);
      })
      .catch((error) => console.error(error));
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve selected brands and fields
    const selectedBrands = brands.filter((brand) => brand.selected);
    const selectedFields = fields.filter((field) => field.selected);

    // Generate report using selected brands and fields
    const report = generateReport(selectedBrands, selectedFields);

    // Display the generated report
  };

  // Generate the report based on selected brands and fields
  const generateReport = (selectedBrands, selectedFields) => {
    // Implement your report generation logic here
    // You can format the data, perform calculations, etc.

    return {
      selectedBrands,
      selectedFields,
    };
  };

  // Render the page
  return (
    <div>
      {tablesShow ? (
        <MyTable value={result} setResult={setResult} brandNames={cVal} />
      ) : (
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
              color: "#d63897",
              fontWeight: "500px",
              textAlign: "center",
              paddingBottom: "40px",
            }}
          >
            Generate Report
          </Typography>

          <FormControl sx={{ width: "100%", mb: 4 }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select Brands</em>;
                }

                return selected.join(", ");
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Select Brands</em>
              </MenuItem>
              {brands.map((name) => (
                <MenuItem key={name.brandName} value={name.brandName}>
                  <Checkbox checked={personName.indexOf(name.brandName) > -1} />
                  <ListItemText primary={name.brandName} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Aesthetic</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup sx={{ backgroundColor: "gray" }}>
                <FormControlLabel
                  control={
                    <Checkbox name="OverAll" onChange={handleChangeCheck} />
                  }
                  label="Over-All"
                />
              </FormGroup>
              <CheckedButton
                data={overAllData}
                checkedVal={checkedVal.OverAll}
                checked2={checked2}
                setChecked2={setChecked2}
                subVal="aesthetic.OverAll"
              />
              <FormGroup sx={{ backgroundColor: "gray" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="ProductDiscovery"
                      onChange={handleChangeCheck}
                    />
                  }
                  label="ProductDiscovery"
                />
              </FormGroup>
              <CheckedButton
                data={UsabilityData}
                checkedVal={checkedVal.ProductDiscovery}
                subVal="aesthetic.ProductDiscovery"
              />

              <FormGroup sx={{ backgroundColor: "gray" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="ProductEvaluation"
                      onChange={handleChangeCheck}
                    />
                  }
                  label="ProductEvaluation"
                />
              </FormGroup>
              <CheckedButton
                data={EvolutionData}
                checkedVal={checkedVal.ProductEvaluation}
                subVal="aesthetic.ProductEvaluation"
              />

              <FormGroup sx={{ backgroundColor: "gray" }}>
                <FormControlLabel
                  control={
                    <Checkbox name="Purchase" onChange={handleChangeCheck} />
                  }
                  label="Purchase"
                />
              </FormGroup>
              <CheckedButton
                data={purchaseData}
                checkedVal={checkedVal.Purchase}
                subVal="aesthetic.Purchase"
              />

              <FormGroup sx={{ backgroundColor: "gray" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="PostPurchase"
                      onChange={handleChangeCheck}
                    />
                  }
                  label="PostPurchase"
                />
              </FormGroup>
              <CheckedButton
                data={PostPurchaseData}
                checkedVal={checkedVal.PostPurchase}
                subVal="aesthetic.PostPurchase"
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6"> Meaning</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CheckedButton data={exprienceData} subVal="meaning" />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Emotional</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CheckedButton data={emotionalData} subVal="emotional" />
            </AccordionDetails>
          </Accordion>
          <GenerateButton
            brandNames={cVal}
            setResult={setResult}
            setTablesShow={setTablesShow}
          />
        </Box>
      )}
    </div>
  );
}
