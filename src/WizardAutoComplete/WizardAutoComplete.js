import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DataGrid from "../DataGrid/DataGrid";

export default function ComboBox(props) {
  const [wizardIsSelected, setWizardIsSelected] = React.useState(false);
  const handleFindWizardChange = (event) => {
    setWizardIsSelected(!wizardIsSelected);
    // console.log(props.allWizards);
    // TO DO : find the name, concat it into all lower case and put it into @hogwarts email, return object matching that and delete using that ID
  };
  return (
    <>
      <Autocomplete
        name={"hello"}
        disablePortal
        onChange={(event) => handleFindWizardChange(event)}
        options={props.allWizards.map((wizard) => {
          return wizard.first_name + " " + wizard.last_name;
        })}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Wizard Names" />}
      />
      {/* {wizardIsSelected ? (
        <DataGrid wizards={} />
      ) : (
        <div> no wizard found</div>
      )} */}
    </>
  );
}
