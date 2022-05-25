import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.allWizards.map((wizard) => {
        return wizard.first_name + " " + wizard.last_name;
      })}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Wizard Names" />}
    />
  );
}
