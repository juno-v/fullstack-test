import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox(props) {
  const handleFindWizardChange = (event) => {
    let name = "";
    if (event.type === "click") {
      console.log(event.target.innerHTML);
      name = event.target.innerText.toLowerCase().trim();
    }
    if (event.type === "keydown") {
      console.log(`defaultValue`, event.target.value);
      console.log("keydown");
    }
    const findMatchingNameID = props.allWizards.find(
      (wizard) =>
        wizard.first_name.toLowerCase() +
          " " +
          wizard.last_name.toLowerCase() ===
        name
    )?.id;
    console.log(findMatchingNameID);
  };
  return (
    <>
      <Autocomplete
        disablePortal
        onChange={(event) => handleFindWizardChange(event)}
        options={props.allWizards.map((wizard) => {
          return wizard.first_name + " " + wizard.last_name;
        })}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Wizard Names" />}
      />
    </>
  );
}
