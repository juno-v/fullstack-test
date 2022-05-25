import * as React from "react";
import PageTabs from "../PageTabs/PageTabs";
function App() {
  const [allWizards, setAllWizards] = React.useState([]);
  const [gryffindorWizards, setGryffindorWizards] = React.useState([]);
  const [ravenclawWizards, setRavenclawWizards] = React.useState([]);
  const [hufflepuffWizards, setHufflepuffWizards] = React.useState([]);
  const [slytherinWizards, setSlytherinWizards] = React.useState([]);
  React.useEffect(() => {
    const baseUrl = "http://localhost:8080/wizards";

    fetch(`http://localhost:8080/wizards`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setAllWizards(response));
    fetch(`${baseUrl}?house=gryffindor`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setGryffindorWizards(response));
    fetch(`${baseUrl}?house=ravenclaw`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setRavenclawWizards(response));
    fetch(`${baseUrl}?house=hufflepuff`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setHufflepuffWizards(response));
    fetch(`${baseUrl}?house=slytherin`)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setSlytherinWizards(response));
  }, []);

  return (
    <div>
      <PageTabs
        allWizards={allWizards}
        gryffindorWizards={gryffindorWizards}
        ravenclawWizards={ravenclawWizards}
        hufflepuffWizards={hufflepuffWizards}
        slytherinWizards={slytherinWizards}
      />
    </div>
  );
}

export default App;
