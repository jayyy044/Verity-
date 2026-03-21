# Verity Intelligence

> Private company intelligence for investment analysts — live-researched, structured, and Sagard-aware in under 60 seconds.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_API-D97757?style=for-the-badge&logo=anthropic&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## Overview and Project Context 

Built as a take-home assignment for the Sagard AI Enablement Internship, March 2026. The brief required a system that takes on real cognitive work, connects to at least two external tools, and preserves a meaningful human decision point. Verity meets all three requirements and is built entirely on Claude and Exa — two of Sagard's preferred tools for the assignment.

Verity is a deal screening tool built for the investment team at Sagard, a multi-strategy alternative asset manager ($33B+ AUM) focused on FinTech, Healthcare, and Technology. An analyst inputs any private company name and receives a fully structured intelligence brief alongside an interactive ecosystem map, drawing from six parallel live web searches synthesized by Claude.

The core problem it solves: Whenever an analyst wants to review a new potential investment they need to spend hours organizing data about the new company. They need to scour web and then piece together bits and pieces of information from Google, LinkedIn, press databases, and internal records with no consistency and no guarantee of completeness. Verity collapses that into under 60 seconds.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express |
| Frontend | React, Next.js, Tailwind CSS |
| Ecosystem Map | React Flow |
| Search | Exa API |
| AI Reasoning | Claude Haiku (gap detection) + Claude Sonnet (synthesis) |
| Transport | Server-sent events for real-time pipeline progress |
| Cache | Three-tier filesystem cache |
| Hosting | Vercel |

---

## Known Limitations and What Breaks at Scale

**Data sparsity on small companies.** Research quality degrades significantly for obscure or early-stage private companies where public web coverage is thin. The identity search returns rich entity cards for well-documented companies like Wealthsimple or Cohere Health, but may return little for a 10-person pre-seed company. At production scale this requires a structured data provider like PitchBook or Crunchbase to anchor identity and funding fields before web search layers on top.

**Rate limits under batch load.** Exa's `/search` endpoint has a 5 QPS limit. The current architecture handles one company at a time comfortably. If the tool were extended to process a full deal pipeline in batch, a queuing layer would be required to stay within limits.

**Portfolio JSON freshness.** The Sagard portfolio file is statically curated. In production this would be replaced by a live CRM API feed (Salesforce or Allvue) to ensure portfolio cross-references reflect the current state of the fund.

---

## Environment Variables

```bash
ANTHROPIC_API_KEY=your_anthropic_key
EXA_API_KEY=your_exa_key
```

---

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/verity-intelligence

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install

# Start the backend
cd ../backend && node server.js

# Start the frontend
cd ../frontend && npm run dev
```

---

