(function () {
  // Prevent injecting the button multiple times
  if (document.getElementById("ai-summary-fab")) return;

  // --- Inject styles (only once) ---
  const style = document.createElement("style");
  style.textContent = `
    #ai-summary-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      z-index: 999999;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ai-modal-content {
      background: white;
      width: 90%;
      max-width: 500px;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      position: relative;
      font-family: system-ui, Arial, sans-serif;
    }

    .ai-close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: transparent;
      font-size: 18px;
      cursor: pointer;
    }

    .ai-summary-text {
      margin-top: 10px;
      line-height: 1.6;
      font-size: 15px;
      max-height: 300px;
      overflow-y: auto;
    }

    .ai-summary-text ul {
      padding-left: 20px;
    }

    .ai-summary-text li {
      margin-bottom: 8px;
    }
  `;
  document.head.appendChild(style);

  // --- Modal function ---
  function createModal(summaryText) {
    const existing = document.getElementById("ai-summary-modal");
    if (existing) existing.remove();

    // Convert summary to bullet list
    const bulletPoints = summaryText
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => `<li>${line}</li>`)
      .join("");

    const overlay = document.createElement("div");
    overlay.id = "ai-summary-modal";

    overlay.innerHTML = `
      <div class="ai-modal-content">
        <button class="ai-close-btn">✖</button>
        <h2>🧠 AI Resumé</h2>
        <div class="ai-summary-text">
          <ul>${bulletPoints}</ul>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Close on button
    overlay.querySelector(".ai-close-btn").onclick = () => overlay.remove();

    // Close on background click
    overlay.onclick = (e) => {
      if (e.target === overlay) overlay.remove();
    };

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modal = document.getElementById("ai-summary-modal");
        if (modal) modal.remove();
      }
    });
  }

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
    try {
      button.innerText = "⏳";

      // --- 1. Extract article ---
      const article = document.querySelector("article");

      const title = article.querySelector("h1")?.innerText || "";

      const paragraphs = Array.from(article.querySelectorAll("p"))
        .map((p) => p.innerText.trim())
        .filter((t) => t.length > 40);

      const articleText = [title, ...paragraphs].join("\n\n");

      // --- 2. Call backend ---
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

      // --- 3. Show modal ---
      createModal(data.summary);

      button.innerText = "✨";
    } catch (err) {
      console.error("❌ Error:", err);
      button.innerText = "❌";
    }
  });

  // --- Append to DOM ---
  document.body.appendChild(button);
})();
