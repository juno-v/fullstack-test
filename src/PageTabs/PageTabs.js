import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGrid from "../DataGrid/DataGrid.js";
import CreateWizard from "../CreateWizard/CreateWizard";
import WizardAutoComplete from "../WizardAutoComplete/WizardAutoComplete";
import { styled } from "@mui/material/styles";

const PREFIX = "BasicTabs";
const classes = {
  header: `${PREFIX}-header`,
};

const Header = styled("div")(({ theme }) => ({
  [`&.${classes.header}`]: {
    border: "1px solid black",
    borderRadius: "5px",
    textAlign: "center",
    padding: "10px 0",
    height: "5vhvh",
    width: "100%",
    color: "black",
    marginBottom: "1vh",
    fontWeight: "bold",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
  const {
    allWizards,
    gryffindorWizards,
    ravenclawWizards,
    hufflepuffWizards,
    slytherinWizards,
  } = props;
  // although event is not used here, it is required as to utilize material ui basic tabs switching
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Gryffindor" {...a11yProps(0)} />
          <Tab label="Ravenclaw" {...a11yProps(1)} />
          <Tab label="Hufflepuff" {...a11yProps(2)} />
          <Tab label="Slytherin" {...a11yProps(3)} />
          <Tab label="Sorting Hat" {...a11yProps(4)} />
          <Tab label="Find Wizard Information" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Header className={classes.header}>Gryffindor</Header>
        <DataGrid wizards={gryffindorWizards} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Header className={classes.header}>Ravenclaw</Header>
        <DataGrid wizards={ravenclawWizards} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Header className={classes.header}>Hufflepuff</Header>
        <DataGrid wizards={hufflepuffWizards} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Header className={classes.header}>Slytherin</Header>
        <DataGrid wizards={slytherinWizards} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CreateWizard />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Header className={classes.header}>Find Wizard Information</Header>
        <WizardAutoComplete allWizards={allWizards} />
      </TabPanel>
    </Box>
  );
}
