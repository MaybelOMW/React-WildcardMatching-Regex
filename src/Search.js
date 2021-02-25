import React, { useState, useRef, useEffect } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  Tooltip,
  IconButton,
  Popover,
  Hidden
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import DataTable from "./DataTable";

const Search = (props) => {
  const { sampleData } = props;
  const [Result, setResult] = useState(sampleData);
  const resultRef = useRef();
  resultRef.current = Result;
  useEffect(() => console.log("Result:", Result), [Result]);

  // filter Popover
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  // Wildcard Handler
  function wildTest(wildcard, str) {
    let w = wildcard.replace(/[!@#%?-_;:'"<>/.+^${}()|[\]\\]/g, "\\$&"); // regexp escape
    const re = new RegExp(
      // `^${w.replace(/\*/g, ".*").replace(/\?/g, ".")}$`, "i"
      `^${w.replace(/\*/g, ".*")}$`,
      "i"
    );
    return re.test(str); // remove last 'i' above to have case sensitive
  }

  // Filter Handler
  const FilterHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "") {
      let filteredData = sampleData.filter((item) =>
        wildTest(e.target.value, item.material_name)
      );
      setResult(filteredData);
    } else setResult(sampleData);
  };

  return (
    <>
      {!open ? (
        <Hidden xsDown>
          <FormControl>
            <InputLabel>Search</InputLabel>
            <Input
              id="product_name"
              onChange={FilterHandler}
              // value={
              //   sampleData.product_name === 0 ? "" : sampleData.product_name
              // }
            />
          </FormControl>
        </Hidden>
      ) : null}

      <Tooltip title="Filter list">
        <IconButton onClick={handleClick} aria-label="Filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>

      <Popover
        id="simple-popper"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        style={{ width: "100%" }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: "20px", minWidth: "20vw" }}
        >
          <FormControl>
            <InputLabel>Search</InputLabel>
            <Input id="product_name" onChange={FilterHandler} />
          </FormControl>
        </Grid>
      </Popover>

      <DataTable sampleData={resultRef.current} />
    </>
  );
};
export default Search;
