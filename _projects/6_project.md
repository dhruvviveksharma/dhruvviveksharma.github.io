---
layout: page
title: Primare — On-Prem AI Infrastructure
description: Infrastructure-as-code and observability for deploying on-premise LLM inference clusters
img: assets/img/6.jpg
importance: 3
category: work
---

**Primare** builds infrastructure for deploying private, on-premise LLM inference clusters directly at customer sites — an alternative to routing inference through third-party cloud APIs. I worked on the infrastructure-as-code and operations tooling that makes those deployments reproducible and observable across a growing customer fleet.

---

## ✨ What I Worked On

- **Infrastructure-as-code**: Ansible-driven playbooks and Docker Compose orchestration for provisioning multi-node GPU inference clusters, so a new customer deployment is reproducible rather than hand-configured.
- **Model serving &amp; routing**: Clusters serve quantized LLMs via **vLLM**, fronted by an API proxy layer for request routing and per-customer key management.
- **Secure connectivity**: Customer-facing inference endpoints exposed through **Cloudflare Tunnel** behind a reverse proxy, with operator access to clusters over a **Tailscale** VPN mesh — no infrastructure directly exposed to the public internet.
- **Fleet-wide observability**: Extended the platform's monitoring from single-cluster to fleet-wide, standing up centralized **Prometheus** metrics collection with per-customer **Grafana** dashboards so operators can see the health of every deployed cluster from one place.
- **Secrets &amp; access hardening**: Contributed to the per-customer secrets management model and operational runbooks as the customer fleet scaled.

---

## 🛠️ Tech Stack

Ansible · Docker Compose · vLLM · Prometheus &amp; Grafana · Cloudflare Tunnel · Tailscale · Python &amp; YAML automation

---

## 🚀 Why It Matters

Enterprise customers adopting LLMs often can't send data to a third-party API — they need inference running on hardware they control. That shifts the hard problem from "call an API" to "reliably deploy and operate a fleet of GPU clusters across many customer sites," which is what this infrastructure and observability layer is built to solve.
