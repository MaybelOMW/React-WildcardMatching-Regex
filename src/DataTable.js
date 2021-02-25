import React from "react";
import TableTemplate from "./TableTemplate";
import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const DataTable = (props) => {
  const { sampleData } = props;

  const renderButton = (data, col, rowIndex, colIndex) => {
    return (
      <IconButton aria-label="edit">
        <Edit />
      </IconButton>
    );
  };

  const columns = [
    {
      label: "Name",
      key: "name",
      render: undefined
    },
    {
      label: "Action",
      key: "",
      render: renderButton
    }
  ];

  /* 3 - Display Table. */
  return <TableTemplate data={sampleData} columns={columns} />;
};

export default DataTable;
