import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { filter } from "../features/todoSlice";
import { useSelector } from "react-redux";

function FilterList() {
  const [isComplete, setIsComplete] = useState(null);
  const dispatch = useDispatch();

  const handleFilter = (e, toggleValue) => {
    setIsComplete(toggleValue);
    dispatch(filter({ toggleValue: toggleValue }));
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
      <ToggleButton
        sx={{ "&.Mui-selected": { backgroundColor: "#81c784" } }}
        value={true}
      >
        Completed
      </ToggleButton>
      <ToggleButton
        sx={{ "&.Mui-selected": { backgroundColor: "#e57373" } }}
        value={false}
      >
        Incomplete
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default FilterList;
