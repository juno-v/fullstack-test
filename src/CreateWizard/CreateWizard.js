import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { postWizard } from "../services/services";

export default function BasicTextFields() {
  const [newWizard, setNewWizard] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    house: "",
  });

  const [toggleWizardSorting, setToggleWizardSorting] = React.useState(false);
  React.useEffect(() => {
    // any time the first and last name is entered, automatically generate an email for the wizard
    setNewWizard((prevState) => ({
      ...prevState,
      email:
        newWizard.first_name.toLowerCase() +
        "." +
        newWizard.last_name.toLowerCase() +
        "@hogwarts.com",
    }));
  }, [newWizard.first_name, newWizard.last_name]);

  const handleWizardChange = (event) => {
    const { name, value } = event.target;
    setNewWizard((prevState) => ({
      ...prevState,
      [name]: value.toLowerCase(),
    }));
  };
  const onSubmitWizardName = () => {
    setToggleWizardSorting(!toggleWizardSorting);
    // update new wizards object every time new house sorted for Wizard
    const hogwartsHouseList = [
      "hogwarts",
      "ravenclaw",
      "hufflepuff",
      "slytherin",
    ];
    const generateRandomHouse =
      hogwartsHouseList[(Math.random() * hogwartsHouseList.length) | 0];
    setNewWizard((prevState) => ({
      ...prevState,
      house: generateRandomHouse,
    }));
  };

  const onSubmitWizardData = () => {
    postWizard(newWizard);
    setToggleWizardSorting(!toggleWizardSorting);
    setNewWizard(() => ({
      first_name: "",
      last_name: "",
      email: "",
      house: "",
    }));
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <InputLabel
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          textAlign: "center",
          width: "50%",
          color: "black",
        }}
      >
        <h3>
          Enter Your Wizards First and Last Name to Begin the Sorting Hat
          Process
        </h3>
      </InputLabel>
      <TextField
        value={newWizard.first_name}
        onChange={handleWizardChange}
        label="First Name"
        name={"first_name"}
        variant="outlined"
        required
      />
      <TextField
        value={newWizard.last_name}
        onChange={handleWizardChange}
        label="Last Name"
        name={"last_name"}
        variant="outlined"
        required
      />
      <Button
        disabled={
          newWizard.last_name.length === 0 || newWizard.first_name.length === 0
        }
        onClick={onSubmitWizardName}
        variant="contained"
      >
        Put The Sorting Hat on Your New Wizard!
      </Button>
      {toggleWizardSorting ? (
        <Box sx={{ width: "100%" }}>
          Your Wizard Goes to House: {newWizard.house.toUpperCase()}
          <Box>
            <Button
              sx={{ height: "5vh", width: "30vw", marginTop: "2vh" }}
              onClick={onSubmitWizardData}
              variant="contained"
            >
              Assign Your Wizard to {newWizard.house.toUpperCase()} and sort a
              new Wizard!
            </Button>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
