from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import summarize

app = FastAPI()

# --- CORS (important for Chrome extension) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- include routes ---
app.include_router(summarize.router)