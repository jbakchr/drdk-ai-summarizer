(function () {
  // Prevent injecting the button multiple times
  if (document.getElementById("ai-summary-fab")) return;

  // --- Create button ---
  const button = document.createElement("button");
  button.id = "ai-summary-fab";
  button.innerText = "✨";

  // --- Style button ---
  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "9999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, background-color 0.2s ease",
  });

  // --- Hover effect ---
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    button.style.backgroundColor = "#0056b3";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
    button.style.backgroundColor = "#007bff";
  });

  // --- Click handler ---
  button.addEventListener("click", async () => {
    console.log("FAB clicked 🚀");

    // TEMP: Replace later with your backend call
    alert("Summarizing article...");

    // Example (future backend call):
    // const articleText = document.body.innerText;
    // const res = await fetch("http://localhost:8000/summarize", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ text: articleText })
    // });
    // const data = await res.json();
    // console.log(data.summary);
  });

  // --- Append to DOM ---
  document.body.appendChild(button);
})();
