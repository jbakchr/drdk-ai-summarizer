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
  button.addEventListener("click", () => {
    try {
      // --- 1. Find main article container ---
      const article = document.querySelector("article");

      if (!article) {
        console.error("No <article> element found");
        return;
      }

      // --- 2. Extract headline ---
      const titleElement = article.querySelector("h1");
      const title = titleElement ? titleElement.innerText.trim() : "";

      // --- 3. Extract all paragraphs ---
      const paragraphElements = article.querySelectorAll("p");

      const paragraphs = Array.from(paragraphElements)
        .map((p) => p.innerText.trim())
        .filter((text) => text.length > 0);

      // --- 4. Combine into one clean text ---
      const articleText = [title, ...paragraphs].join("\n\n");

      console.log("✅ Extracted article:");
      console.log(articleText);
    } catch (err) {
      console.error("Extraction error:", err);
    }
  });

  // --- Append to DOM ---
  document.body.appendChild(button);
})();
