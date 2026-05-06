# drdk-ai-summarizer

A Chrome extension that summarizes DR.dk news articles using AI.

---

## Overview

drdk-ai-summarizer is a small, focused tool designed to extract and summarize news articles from [https://www.dr.dk/](https://www.dr.dk/).  
The extension enables users to quickly understand the key points of an article without reading the full content.

---

## Features

✅ **Implemented**

- Injects a floating action button (FAB) into DR.dk article pages
- Extracts article title and paragraph content directly from the DOM
- Cleans and structures the extracted text for AI processing

🚧 **Planned**

- Send extracted article content to a FastAPI backend
- Generate summaries using an AI model (via Ollama)
- Display summaries in a user-friendly UI (modal or side panel)

---

## Architecture

The project consists of three main components:

### **Chrome Extension**

- Injects UI (floating action button) into DR.dk pages
- Handles user interaction
- Extracts article content from the page DOM

### **Backend (FastAPI)**

- Provides an API for processing article text
- Handles communication with the AI model

### **Ollama**

- Used to access AI models for summarization
- Runs locally or via cloud

---

## How it works (current flow)

1. A user visits a DR.dk article
2. The Chrome extension injects a floating button into the page
3. The user clicks the button
4. The extension extracts:
   - Article title (`<h1>`)
   - Article paragraphs (`<p>`)
5. The extracted content is logged and prepared for AI processing

---

## How it will work (next steps)

1. Extract article content (✅ done)
2. Send content to FastAPI backend
3. Generate summary using Ollama
4. Return summary to extension
5. Display summary in UI (modal or side panel)

---

## Project scope

The current scope is intentionally limited:

- Supports only DR.dk articles
- Focuses on summarization
- No persistence, accounts, or personalization
- Designed as a minimal, end-to-end implementation

---

## Status

The project is in early development.

✅ Completed:

- Floating action button injected into pages
- Article extraction (title + paragraphs)

🚧 In progress:

- Backend integration (FastAPI)
- AI summarization (Ollama)

🔜 Planned:

- UI for displaying summaries
- Improved article extraction robustness

---

## Running the project

Setup instructions will be added as development progresses.

Expected setup:

- Run the FastAPI backend
- Ensure Ollama is available (local or cloud)
- Load the extension in Chrome (developer mode)

---

## License

MIT
