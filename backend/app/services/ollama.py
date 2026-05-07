import requests

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"


def summarize_text(text: str) -> str:
    prompt = f"""
Du er en professionel nyhedsanalytiker.

Opsummer nedenstående danske nyhedsartikel i præcis 3 korte punkter.

Krav:
- Hvert punkt skal beskrive en vigtig pointe eller udvikling
- Fokusér på hvad der er sket, hvorfor det er vigtigt, og eventuelle konsekvenser
- Undgå citater og unødvendige detaljer
- Ingen introduktion eller afsluttende tekst
- Skriv kun de 3 bullet points
- Skriv på dansk

Artikel:
{text}
"""

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": "gpt-oss:120b-cloud",
            "prompt": prompt,
            "stream": False
        }
    )

    data = response.json()

    return data.get("response", "").strip()