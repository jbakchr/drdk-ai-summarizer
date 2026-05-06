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

  button.addEventListener("click", async () => {
    try {
      // --- 1. Extract article ---
      const article = document.querySelector("article");

      const title = article.querySelector("h1")?.innerText || "";

      const paragraphs = Array.from(article.querySelectorAll("p"))
        .map((p) => p.innerText.trim())
        .filter((t) => t.length > 40);

      const articleText = [title, ...paragraphs].join("\n\n");

      console.log("📤 Sending to backend...");

      // --- 2. Call FastAPI backend ---
      const response = await fetch("http://127.0.0.1:8002/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: articleText,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      // --- 3. Handle response ---
      console.log("✅ Summary:");
      console.log(data.summary);
    } catch (err) {
      console.error("❌ Error:", err);
    }
  });

  // --- Append to DOM ---
  document.body.appendChild(button);
})();
