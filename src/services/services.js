export const postWizard = (newWizard) => {
  fetch(`http://localhost:8080/wizards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWizard),
  })
    .then((response) => {
      response.json();
      if (response.ok) {
        alert("successfully sent off your new wizard. on to the next one!");
      }
      if (!response.ok) {
        alert("error sending off new wizard, please try again");
      }
    })
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", JSON.stringify(response)));
};
