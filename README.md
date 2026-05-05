# drdk-ai-summarizer

A Chrome extension that summarizes DR.dk news articles using AI.

---

## Overview

`drdk-ai-summarizer` is a small, focused tool designed to extract and summarize news articles from https://www.dr.dk/.

The extension enables users to quickly understand the key points of an article without reading the full content.

---

## Features

- Extracts article content directly from DR.dk pages
- Generates concise summaries using an AI model (via Ollama)
- Presents the result in a simple browser extension interface

---

## Architecture

The project consists of three main components:

- **Chrome Extension**
  - Handles user interaction
  - Extracts article content from the page DOM

- **Backend (FastAPI)**
  - Provides an API for processing article text
  - Handles communication with the AI model

- **Ollama**
  - Used to access AI models for summarization

---

## How it works

1. A user visits an article on DR.dk
2. The Chrome extension extracts the article content
3. The content is sent to the backend API
4. The backend generates a summary using an AI model
5. The summary is returned and displayed in the extension

---

## Project scope

The current scope is intentionally limited:

- Supports only DR.dk articles
- Focuses on summarization (no additional features such as storage or personalization)
- Designed as a minimal, end-to-end implementation

The project focuses on a minimal, well-defined implementation rather than a feature-complete solution.

---

## Status

The project is in early development.

Planned milestones:

- [ ] Article extraction from DR.dk
- [ ] Integration with AI summarization via Ollama
- [ ] Display of summaries in the extension UI

---

## Running the project

Setup instructions will be added as development progresses.

Expected setup:

1. Run the FastAPI backend
2. Ensure Ollama is available (local or cloud)
3. Load the extension in Chrome (developer mode)

---

## License

MIT
