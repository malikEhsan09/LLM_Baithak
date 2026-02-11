"""Configuration for the LLM Council."""

import os
from dotenv import load_dotenv

load_dotenv()

# OpenRouter API key
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

if not OPENROUTER_API_KEY:
    print("WARNING: OPENROUTER_API_KEY not found in environment variables.")
    print("Please create a .env file with: OPENROUTER_API_KEY=sk-or-v1-...")
    print("Get your API key at https://openrouter.ai/")

# Council members - list of OpenRouter model identifiers
COUNCIL_MODELS = [
    # "openai/gpt-5.1",
    # "meta-llama/llama-3.3-70b-instruct",
    # "anthropic/claude-sonnet-4.5",
    # "x-ai/grok-4",
    # "meta-llama/llama-3.3-70b-instruct",
    # "meta-llama/llama-3.3-70b-instruct",
    # "meta-llama/llama-3.3-70b-instruct",
    # "meta-llama/llama-3.3-70b-instruct",
    "google/gemma-3-27b-it:free",
    "nvidia/nemotron-3-nano-30b-a3b:free",
    "liquid/lfm-2.5-1.2b-instruct:free",
    "openrouter/aurora-alpha"
]

# Chairman model - synthesizes final response
CHAIRMAN_MODEL = "meta-llama/llama-3.3-70b-instruct"

# OpenRouter API endpoint
OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"

# Data directory for conversation storage
DATA_DIR = "data/conversations"
