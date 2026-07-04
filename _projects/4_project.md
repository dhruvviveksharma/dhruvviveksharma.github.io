---
layout: page
title: QiitaExplore
description: An agentic research console for microbiome study discovery
img: assets/img/qiita-explore.png
importance: 1
category: work
related_publications: true
---

**QiitaExplore** is a research console that sits in front of [Qiita](https://qiita.ucsd.edu/)'s database of thousands of public microbiome studies. Built during my time as an AI/ML Engineering Intern at the **Knight Lab (UC San Diego)**, it replaces manual, one-study-at-a-time browsing with natural-language search, an agentic chat assistant, and a workspace for curating and merging study data — now used by **15+ researchers** across **600+ Qiita studies**, and actively supporting an in-progress publication.

---

## ✨ Features

- **Agentic study chat** — A tool-calling LLM loop with four domain-specific tools (`search_studies`, `get_study_report`, `pin_study`, `search_by_sample`) that streams results over Server-Sent Events, rendering inline tool-call cards in document order as the agent reasons through a query.
- **Combined text + sample-metadata search** — Expands keyword variants (e.g. mouse ↔ mice), auto-detects data types (shotgun/WGS → metagenomic), and probes per-study JSONB sample metadata directly rather than scanning full tables, with results ranked by relevance.
- **Model-aware fallback** — Detects whether the configured LLM backend supports tool calling and falls back to a keyword-search planner when it doesn't, so the same interface works across 7+ backend models.
- **Project-based curation** — Group studies into projects, hold project-scoped chat history, and pin individual studies for later reference — all updated live from the response body without a page refresh.
- **BIOM merge workspace** — Select studies and samples across a workspace, validate compatibility, and merge them into a single downloadable BIOM artifact for downstream analysis.
- **Lazy-loaded, cached study detail** — Per-study metadata (preps, artifacts, sample counts) loads on first view and is cached locally for 6 hours to keep the UI responsive.

---

## 🛠️ Tech Stack

- **Backend**: Flask served by Gunicorn (gthread workers to support concurrent SSE streaming) · Python
- **Frontend**: React (Babel standalone — no build step) · vanilla JS SSE handling
- **Data**: Read-only access to the production Qiita PostgreSQL schema · SQLite for local state (projects, chats, merge workspace, detail cache)
- **LLM Integration**: OpenAI-compatible client against an NRP-Nautilus endpoint, with per-model tool-calling capability detection and context-window-aware budgeting
- **Microbiome tooling**: pandas, numpy, biom-format, qiita-files for BIOM artifact merging

---

## 🚀 Why It Matters

Qiita's own interface only lets researchers browse studies by title, abstract, and PI name — there's no way to search by what's actually *in* a study's sample metadata. QiitaExplore closes that gap: a researcher can ask a natural-language question and get back studies ranked by relevance, with an agent that can look up sample-level detail on demand instead of requiring the researcher to open each study manually.
