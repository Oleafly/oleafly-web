---
title: "Set up AI"
description: "Bring your own key from built-in providers or a custom OpenAI-compatible endpoint, or run fully local with Ollama. Personas, default models, and where your keys live."
---

Oleafly's AI is bring-your-own. You connect a provider you already use (or a model on your machine). Your key stays on disk, encrypted. Requests go from the app straight to that provider. There is no Oleafly server in the middle and no markup on your tokens.

Open **Settings → AI Assistant**, or use **Connect a provider** from the chat panel. AI settings are split into three tabs: **Providers and keys**, **Instructions**, and **Personas**.

## Built-in providers

| Provider | Notes |
|---|---|
| **OpenAI** | GPT-4o family, GPT-4.1 family, o-series when available |
| **Anthropic** | Claude models (Sonnet, Haiku, and current lineups) |
| **Google Gemini** | Gemini models from Google AI |
| **Perplexity** | Perplexity chat models |
| **Z.AI (GLM)** | GLM coding and chat models |
| **Groq** | Fast Llama and related models |
| **OpenRouter** | Routed access to many hosted models |
| **DeepSeek** | Chat and reasoner (R1) models |
| **Mistral** | Large, Codestral, Small, and related |
| **xAI (Grok)** | Grok models |
| **Ollama (local)** | Whatever you have pulled on this machine |

Model lists update when you save a key: Oleafly validates the key and loads that provider's current catalog. Each card still has a **Get key** link to the right signup page. Reasoning models (for example GLM and DeepSeek R1) can stream a thinking phase into chat; see [Chat & tools](/docs/ai-chat/#reasoning-models-think-out-loud).

## Connecting a provider

1. Open **Providers and keys**.
2. Expand a provider, paste the API key, and save.
3. Oleafly checks the key and refreshes the model list. A green **Connected** badge appears.
4. Under **Instructions**, set the **default chat model** if you want a standing preference. The chat panel can still switch models for a single conversation without changing that default.

You can connect several providers at once. Every connected provider shows the same green **Connected** badge. You do not need a second click to make a saved provider usable. Pick models from the chat header or the default-model control. Use the trash control on a card to remove a key.

You can also toggle individual models on or off per provider, add a model by id, delete with confirmation, or restore that provider's built-in list.

![Provider cards in Settings, AI Assistant](https://cdn.oleafly.com/images/screenshots/desktop/settings-ai.png)

## Custom providers (OpenAI-compatible)

If you run a local server (LM Studio, a self-hosted gateway, another Ollama-compatible OpenAI API) or any other OpenAI-style base URL:

1. Add a **custom provider**.
2. Enter the base URL and, if needed, an API key.
3. Save. Oleafly validates the endpoint the same way as built-in providers when possible.

Use this when your endpoint is not one of the built-in brands. For the standard local Ollama install, the dedicated Ollama card is usually simpler.

## Going local with Ollama

1. Install [Ollama](https://ollama.com) and pull a model, for example `ollama pull llama3.2`.
2. On the Ollama card, click **Check for Ollama**. Oleafly finds the local server and lists installed models.
3. Pick a model. No cloud key is involved.

If Ollama is not running, the card shows what to run and a **Re-check** button. A custom host for Ollama on another machine lives under advanced host settings on that card.

## Instructions

The **Instructions** tab holds standing preferences for chat and inline edits, for example: "Prefer British English. Keep answers short. Use enumitem for lists."

Those preferences are sandboxed. They steer tone and style. They cannot override tools, approval rules, or safety behavior.

The tools catalog and the **Allow PDF page capture** toggle also live here. PDF capture is what lets the assistant rasterize pages for vision checks; leave it off if you do not want that.

## Personas

**Personas** are named instruction presets with a color. Create them under **Personas**, then switch them from the chat **Prompts** menu. A create shortcut can deep-link into Settings when you want a new persona mid-work.

Use personas for roles you reuse: "strict reviewer", "clearer prose", "notation cop". They stack with your global instructions in a controlled way; the in-app labels show which is active.

## Where your keys live

- Keys sit in AES-256-GCM encrypted, owner-restricted files under `~/.oleafly/`. They leave the machine only toward the provider they belong to. Encryption stops plain-text on disk. It does not protect you from someone who already controls your user account.
- Requests go app → provider over HTTPS, or app → localhost for Ollama and many custom endpoints.
- Attachment bytes are not stored in chat history; only names and types are.

## What the assistant can do once connected

The tools list (read, edit with approval diffs, compile, log, literature search, and more) is documented on [Chat & tools](/docs/ai-chat/). Every file-changing action still waits for your approval.
