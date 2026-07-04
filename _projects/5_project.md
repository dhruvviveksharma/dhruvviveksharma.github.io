---
layout: page
title: WeInvest — Autonomous Research &amp; Portfolio Optimization
description: A self-directing research pipeline and signal-driven portfolio optimizer for quantitative trading
img: assets/img/3.jpg
importance: 2
category: work
---

At **WeInvest**, I worked as a Software Engineer Intern building the systems behind a quantitative trading research platform — replacing manual backtesting and manual portfolio-construction inputs with autonomous, self-directing pipelines.

---

## ✨ What I Built

### Autonomous Research System
Replaced manual backtesting experiment design with a fully autonomous, self-directing pipeline that explored **1,152 parameter configurations with zero analyst input**. The system runs a 4-phase cycle end-to-end — **generate → execute → synthesize → update memory** — across three research phases:

- **Phase 1 — Direction classification**: predicts binary forward returns across the target universe.
- **Phase 2 — Regime detection**: classifies market regimes (up / neutral / down) from forward returns against configurable thresholds, sweeping model families (linear regime scoring, threshold recalibration, HMM-based regime detection) and feature windows.
- **Phase 3 — Composite signals**: synthesizes Phase 1 and Phase 2 outputs into a unified signal for portfolio allocation.

Each phase is driven by a **declarative YAML spec** — feature transforms, target/threshold definitions, and rolling refit schedules (training window, retrain cadence, purge gap) are all config, not code — with results tracked in **campaign state** that scores every candidate on five sub-scores (prediction quality, shape calibration, stability, strategy performance, robustness).

### Exploration-Exploitation Sampler
Engineered a **KDTree-backed sampler** combining Latin Hypercube Search with dead-zone enforcement and winner-region local sampling, with a `ZoneClassifier` that routes results into persistent campaign memory across iterations — letting later rounds concentrate search where earlier rounds found signal.

### Shared Research Infrastructure
Cut model discovery time from **3 days to 6 hours (8× speedup)** by architecting a shared campaign-state module that serves both a **Streamlit research dashboard** and a **chatbot backend**, eliminating manual configuration handoffs between research and reporting. The dashboard supports cross-candidate, cross-run, and cross-phase comparison — momentum discovery pages, Black-Litterman and mean-variance backtests, HRP and risk-budgeting analysis — over a unified schema so any asset or phase can be visualized the same way.

### Portfolio Optimization Refactor
Refactored a **37,000-line Python trading codebase** to eliminate all manual analyst inputs to a Black-Litterman / mean-variance optimizer across an **80–100 ETF universe**, replacing them with a three-phase signal pipeline: **conviction scoring → regime detection → CVXPY-based weight allocation**.

---

## 🛠️ Tech Stack

Python · YAML-driven configuration · CVXPY · KDTree · Black-Litterman / MVO · Hidden Markov Models · Streamlit · LLM orchestration for the research chatbot

---

## 🚀 Why It Matters

Manual backtesting doesn't scale — every new hypothesis meant an analyst hand-configuring a run, waiting on results, and hand-updating a dashboard. Turning that into a declarative, self-directing pipeline meant research iteration became bounded by compute, not analyst time, while the portfolio optimization refactor removed the last manual, subjective inputs from how capital gets allocated across the ETF universe.
