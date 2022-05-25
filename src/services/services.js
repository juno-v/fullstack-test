export const postWizard = (newWizard) => {
  fetch(`http://localhost:8080/wizards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWizard),
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", JSON.stringify(response)));
};
