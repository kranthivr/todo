import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { filter } from "../features/todoSlice";
import { useSelector } from "react-redux";

function FilterList() {
  const [isComplete, setIsComplete] = useState("all");
  const dispatch = useDispatch();

  const handleFilter = (e, toggleValue) => {
    setIsComplete(toggleValue);
    dispatch(filter(toggleValue));
  };

  return (
    <ToggleButtonGroup
      exclusive
      value={isComplete}
      size="small"
      sx={{
        marginBottom: "10px",
      }}
      onChange={handleFilter}
    >
      <ToggleButton value={true}>Completed</ToggleButton>
      <ToggleButton value={false}>Incomplete</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default FilterList;
