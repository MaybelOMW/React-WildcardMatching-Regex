import React from "react";
import { Grid } from "@material-ui/core";
import Search from "./Search";
import SAMPLE_DATA from "./Constants";

const App = () => {
  return (
    <Grid
      container
      direction="row"
      style={{ display: "inline-block" }}
      justify="center"
      alignItems="center"
    >
      <Search sampleData={SAMPLE_DATA} />
    </Grid>
  );
};
export default App;
