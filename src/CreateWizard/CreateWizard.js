import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import Button from "@mui/material/Button";

export default function BasicTextFields() {
  const [createNewWizard, setCreateNewWizard] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    house: "",
  });
  const [toggleWizardSorting, setToggleWizardSorting] = React.useState(false);
  React.useEffect(() => {
    // any time the first and last name is entered, automatically generate an email for the wizard
    setCreateNewWizard((prevState) => ({
      ...prevState,
      email:
        createNewWizard.firstName.toLowerCase() +
        "." +
        createNewWizard.lastName.toLowerCase() +
        "@hogwarts.com",
    }));
  }, [createNewWizard.firstName, createNewWizard.lastName]);

  const handleWizardChange = (event) => {
    const { name, value } = event.target;
    setCreateNewWizard((prevState) => ({
      ...prevState,
      [name]: value.toLowerCase(),
    }));
  };
  const onCreateNewWizardSubmit = () => {
    setToggleWizardSorting(!toggleWizardSorting);

    const hogwartsHouseList = [
      "hogwarts",
      "ravenclaw",
      "hufflepuff",
      "slytherin",
    ];
    const generateRandomHouse =
      hogwartsHouseList[(Math.random() * hogwartsHouseList.length) | 0];
    setCreateNewWizard((prevState) => ({
      ...prevState,
      house: generateRandomHouse,
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
        <h1>Enter Your Wizards First and Last Name to Enable Sorting</h1>
      </InputLabel>
      <TextField
        value={createNewWizard.firstName}
        onChange={handleWizardChange}
        label="First Name"
        name={"firstName"}
        variant="outlined"
        required
      />
      <TextField
        value={createNewWizard.lastName}
        onChange={handleWizardChange}
        label="Last Name"
        name={"lastName"}
        variant="outlined"
        required
      />
      <Button
        disabled={
          createNewWizard.firstName.length === 0 &&
          createNewWizard.lastName.length === 0
        }
        onClick={onCreateNewWizardSubmit}
        variant="contained"
      >
        Put The Sorting Hat on Your New Wizard!
      </Button>
      {toggleWizardSorting ? (
        <h3>
          {" "}
          Your Wizard Goes to House: {createNewWizard.house.toUpperCase()}
        </h3>
      ) : null}
    </Box>
  );
}
