import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox(props) {
  const [wizardID, setWizardID] = React.useState(null);
  const [wizardMatchingNameData, setWizardMatchingNameData] = React.useState(
    []
  );
  const [toggleNameSelector, setToggleNameSelector] = React.useState(false);

  const handleFindWizardChange = async (event) => {
    let name = "";
    setToggleNameSelector(!toggleNameSelector);
    if (event.type === "click") {
      name = event.target.innerText.toLowerCase().trim();
    }
    if (event.type === "keydown") {
      // unable to retrieve event.target.value properly, will stick to just the click selector for now instead of down key as well
      console.log(`event.type = 'keydown' , defaultValue`, event.target.value);
    }
    const findMatchingNameID = await props.allWizards.find(
      (wizard) =>
        wizard.first_name.toLowerCase() +
          " " +
          wizard.last_name.toLowerCase() ===
        name
    )?.id;
    setWizardID(findMatchingNameID);
    await setWizardID((state) => {
      fetchWizardByID(state);
    });
  };

  const fetchWizardByID = (id) => {
    fetch(`http://localhost:8080/wizards/${id}`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setWizardMatchingNameData(response));
  };

  return (
    <>
      <Autocomplete
        disablePortal
        onChange={(event) => handleFindWizardChange(event)}
        options={props.allWizards.map((wizard) => {
          return wizard.first_name + " " + wizard.last_name;
        })}
        sx={{ width: 300, marginTop: "2vh" }}
        renderInput={(params) => <TextField {...params} label="Wizard Names" />}
      />
      {wizardID !== null ? (
        <div>
          <p>
            Name:{" "}
            {wizardMatchingNameData.first_name +
              " " +
              wizardMatchingNameData.last_name}
          </p>
          <p>Email: {wizardMatchingNameData.email.toUpperCase()}</p>
          <p>House: {wizardMatchingNameData.house.toUpperCase()}</p>
        </div>
      ) : null}
      <br />
    </>
  );
}
