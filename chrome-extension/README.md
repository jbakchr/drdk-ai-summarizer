# Chrome Extension – drdk-ai-summarizer

A Chrome extension that adds AI-powered summaries to DR.dk news articles.

---

## ✨ What it does

When you visit a DR.dk article, the extension:

1. Injects a floating ✨ button into the page
2. Extracts the article content (title + text)
3. Sends it to a local AI backend
4. Displays a 3-point summary in a clean modal UI

👉 The goal is simple: **understand articles in seconds**

---

## 🎥 Demo

![Demo](../docs/demo.gif)

---

## ✅ Features

- Floating action button (FAB) on DR.dk articles
- Clean extraction of article content
- AI-powered summarization (via backend + Ollama)
- Simple and clean modal UI
- Fully local setup (no external APIs required)

---

## 🚀 Installation

### 1. Clone repository

```bash
git clone <your-repo-url>
cd drdk-ai-summarizer
```

---

### 2. Load extension in Chrome

1.  Open Chrome
2.  Go to: `chrome://extensions`
3.  Enable **Developer mode** (top right)
4.  Click **Load unpacked**
5.  Select:

<!---->

    chrome-extension/

---

### 3. Start backend

👉 The extension requires the backend to be running.

See:

    ../backend/README.md

---

## 🧪 How to use

1.  Open a DR.dk news article
2.  Click the ✨ button (bottom-right corner)
3.  Wait a moment
4.  Read the AI summary in the modal

---

## ⚙️ Configuration

### Backend endpoint

The extension calls:

```js
http://127.0.0.1:8002/summarize
```

You can change this in:

    scripts/content.js

---

## 🧠 How it works

    Page (DR.dk)
        ↓
    Content script (this extension)
        ↓
    FastAPI backend
        ↓
    Ollama (LLM)
        ↓
    Summary returned
        ↓
    Modal UI

---

## 📁 Structure

    chrome-extension/
    ├── manifest.json
    └── scripts/
        └── content.js

---

## ⚠️ Limitations

- Works only on DR.dk (based on DOM structure)
- Requires backend + Ollama running
- Summary quality depends on selected model
- Large articles may take a few seconds

---

## 🔮 Future ideas

- Support more news sites
- Add “Copy to clipboard” button
- Keyboard shortcut for quick summary
- Improve UI/UX (animations, theming)
- Save summary history

---

## 🧑‍💻 Purpose

This extension is part of the **drdk-ai-summarizer** project, exploring:

- Chrome extension development
- Local-first AI tools
- Practical everyday AI use

---

## 📄 License

MIT
