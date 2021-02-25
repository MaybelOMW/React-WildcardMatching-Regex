import React from "react";
import { Grid } from "@material-ui/core";
import Search from "./Search";

const sampleData = [
  {
    name: "aab"
  },
  {
    name: "ab"
  },
  {
    name: "acdeb"
  },
  {
    name: "caaby"
  },
  {
    name: "c!t"
  },
  {
    name: "c@i"
  },
  {
    name: "c#y"
  },
  {
    name: "c$y"
  },
  {
    name: "c%i"
  },
  {
    name: "c^y"
  },
  {
    name: "c&y"
  },
  {
    name: "c(i"
  },
  {
    name: "c)y"
  },
  {
    name: "c-y"
  },
  {
    name: "c_i"
  },
  {
    name: "c+y"
  },
  {
    name: "c=y"
  },
  {
    name: "c{y"
  },
  {
    name: "c}y"
  },
  {
    name: "c[i"
  },
  {
    name: "c]y"
  },
  {
    name: "c|y"
  },
  {
    name: "c\\y"
  },
  {
    name: "c:y"
  },
  {
    name: "c;y"
  },
  {
    name: "c'y"
  },
  {
    name: "c<y"
  },
  {
    name: "c>y"
  },
  {
    name: "c?y"
  },
  {
    name: "c/y"
  },
  {
    name: "c,y"
  },
  {
    name: "c.y"
  }
];

const App = () => {
  return (
    <Grid
      container
      direction="row"
      style={{ display: "inline-block" }}
      justify="center"
      alignItems="center"
    >
      <Search sampleData={sampleData} />
    </Grid>
  );
};
export default App;
