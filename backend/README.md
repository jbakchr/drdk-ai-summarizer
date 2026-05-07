# Backend – drdk-ai-summarizer

FastAPI backend for the **drdk-ai-summarizer** Chrome extension.

This service receives article content, sends it to a local AI model (via Ollama), and returns a concise summary.

---

## ✨ What it does

The backend exposes a single endpoint:

```

POST /summarize

```

It:

1. Receives article text
2. Sends it to an Ollama model
3. Returns a 3-point Danish summary

---

## 🧠 Example

### Request

```json
{
  "text": "Lang dansk nyhedsartikel..."
}
```

### Response

```json
{
  "summary": "- Punkt 1\n- Punkt 2\n- Punkt 3"
}
```

---

## 🏗️ Architecture

    FastAPI
       ↓
    Ollama API (localhost:11434)
       ↓
    LLM (e.g. llama3 / gpt-oss)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pip install -r requirements.txt
```

---

### 2. Start Ollama

Install Ollama:

<https://ollama.com/>

Start the service:

```bash
ollama serve
```

Pull a model:

```bash
ollama pull llama3
```

---

### 3. Run the API

```bash
uvicorn main:app --reload --port 8002
```

API will be available at:

    http://127.0.0.1:8002

---

### 4. Test the endpoint

Open:

    http://127.0.0.1:8002/docs

Use the interactive Swagger UI to test `/summarize`.

---

## ⚙️ Configuration

### Ollama endpoint

Default:

```python
http://127.0.0.1:11434/api/generate
```

---

### Model

Configured in:

    app/services/ollama.py

Example:

```python
"model": "llama3"
```

You can change this to:

- `mistral`
- `phi3`
- `gpt-oss:120b-cloud`

---

### Prompt

The summarization prompt is defined in:

    app/services/ollama.py

Example:

```text
Du er en professionel nyhedsanalytiker...

Opsummer artiklen i 3 korte punkter...
```

---

## 📁 Structure

    backend/
    ├── main.py
    ├── requirements.txt
    └── app/
        ├── routes/
        │   └── summarize.py
        └── services/
            └── ollama.py

---

## ⚠️ Notes

- Requires Ollama running locally
- First request may be slow (model loading)
- Large inputs can increase response time
- No authentication (local dev only)

---

## 🔮 Future improvements

- Streaming responses
- Better error handling
- Prompt tuning / customization
- Input size control
- Caching summaries

---

## 🧑‍💻 Purpose

This backend is intentionally simple and focused:

- Demonstrates FastAPI + LLM integration
- Designed for local-first AI applications
- Keeps architecture minimal and understandable

---

## 📄 License

MIT
