import * as React from "react";
import PageTabs from "../PageTabs/PageTabs";
function App() {
  const [gryffindorWizards, setGryffindorWizards] = React.useState([]);
  const [ravenclawWizards, setRavenclawWizards] = React.useState([]);
  const [hufflepuffWizards, setHufflepuffWizards] = React.useState([]);
  const [slytherinWizards, setSlytherinWizards] = React.useState([]);
  React.useEffect(() => {
    const baseUrl = "http://localhost:8080/wizards";
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
        gryffindorWizards={gryffindorWizards}
        ravenclawWizards={ravenclawWizards}
        hufflepuffWizards={hufflepuffWizards}
        slytherinWizards={slytherinWizards}
      />
    </div>
  );
}

export default App;
