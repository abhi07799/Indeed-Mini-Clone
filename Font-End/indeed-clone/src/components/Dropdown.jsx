import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function Dropdown({
  label,
  id,
  value,
  name,
  handleChange,
  options,
  ...props
}) {
  return (
    <>
      <FormControl>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          label={label}
          value={value}
          onChange={handleChange}
          name={name}
          {...props}
        >
          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
