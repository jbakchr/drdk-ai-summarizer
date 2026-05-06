from fastapi import APIRouter
from pydantic import BaseModel

from app.services.ollama import summarize_text

router = APIRouter()

class ArticleRequest(BaseModel):
    text: str


@router.post("/summarize")
async def summarize(req: ArticleRequest):
    summary = summarize_text(req.text)

    return {
        "summary": summary
    }