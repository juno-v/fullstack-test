import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGrid from "../DataGrid/DataGrid.js";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  // TO DO : consider consildating this into something smaller to maintain all since it's repeating
  const [gryffindorWizards, setGryffindorWizards] = React.useState([]);
  const [ravenclawWizards, setRavenclawWizards] = React.useState([]);
  const [hufflepuffWizards, setHufflepuffWizards] = React.useState([]);
  const [slytherinWizards, setSlytherinWizards] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:8080/wizards?house=gryffindor`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setGryffindorWizards(response));
    fetch(`http://localhost:8080/wizards?house=ravenclaw`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setRavenclawWizards(response));
    fetch(`http://localhost:8080/wizards?house=hufflepuff`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setHufflepuffWizards(response));
    fetch(`http://localhost:8080/wizards?house=slytherin`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setSlytherinWizards(response));
  }, []);

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
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Gryffindor
        <DataGrid wizards={gryffindorWizards} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Ravenclaw
        <DataGrid wizards={ravenclawWizards} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Hufflepuff
        <DataGrid wizards={hufflepuffWizards} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Slytherin
        <DataGrid wizards={slytherinWizards} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Sorting Hat (stretch goal, randomize data and post into wizards
        database)
      </TabPanel>
    </Box>
  );
}
