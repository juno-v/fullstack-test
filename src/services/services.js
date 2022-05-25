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
        alert("Successfully sent off your new wizard. On to the next one!");
      }
      if (!response.ok) {
        alert("Error sending off new wizard, please try again");
      }
    })
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", JSON.stringify(response)));
};

export const deleteWizard = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/wizards/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.status === 200 || response.status === 204) {
      alert("Successfully delete wizard");
    } else {
      alert("Error deleting wizard. Please try again.");
    }
    const result = {
      status: response.status + "-" + response.statusText,
      headers: { "Content-Type": response.headers.get("Content-Type") },
      data: data,
    };
  } catch (err) {}
};
