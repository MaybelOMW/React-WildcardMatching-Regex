import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      root: {
        "&:last-child": {
          textAlign: "end"
        }
      },
      head: {
        "&:last-child": {
          paddingRight: "29px"
        }
      },
      body: {
        "&:last-child": {
          paddingRight: "25px"
        }
      }
    }
  }
});

export default function TableTemplate({ data, columns }) {
  console.log("Data:", data);
  const TableTemplateHead = (
    <TableHead>
      <TableRow>
        {columns.map((columnData) => (
          <TableCell key={columnData.label} style={{ fontSize: "15px" }}>
            {columnData.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  return (
    <MuiThemeProvider theme={theme}>
      <Table style={{ backgroundColor: "white" }}>
        {TableTemplateHead}
        <TableBody>
          {data.map((data, rowIndex) => {
            return (
              <TableRow key={`${rowIndex}`}>
                {columns.map((col, colIndex) => {
                  let displayValue;

                  if (typeof col.render === "function") {
                    // This is how you do dynamic column rendering.
                    displayValue = col.render(data, col, rowIndex, colIndex); // This is the function signature.
                  } else {
                    switch (typeof data[col.key]) {
                      case "string":
                      case "number":
                        displayValue = data[col.key];
                        break;

                      default:
                        displayValue = "No Data.";
                        break;
                    }
                  }

                  return (
                    <TableCell key={`${rowIndex}:${colIndex}`}>
                      {displayValue}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </MuiThemeProvider>
  );
}
