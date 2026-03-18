# ClassifyRight

Contractor misclassification risk scanner for US businesses.

Answer 10 plain-English questions about your contractor relationship and get an instant IRS & DOL risk assessment — before an audit does it for you.

---

## The Problem

Misclassifying an employee as an independent contractor is one of the most common and costly compliance mistakes US businesses make. The IRS and DOL use overlapping, often contradictory tests (the 20-factor IRS test, the DOL's economic reality test, the ABC test used by many states) to determine worker classification. Getting it wrong means back taxes, penalties, and unpaid benefits liability.

Most businesses don't find out until an audit — by which point the penalties are already compounding.

---

## What It Does

ClassifyRight walks you through a short questionnaire about your contractor relationship — covering control, financial independence, integration, and permanency — then scores your risk against the IRS common-law test and DOL economic reality test and returns:

- **Risk level** — Low / Medium / High / Critical
- **Which factors are working against you** — plain-English breakdown
- **Recommended next steps** — concrete actions, not legal boilerplate

Free to scan. No sign-up required.

---

## Getting Started

### Local

```bash
git clone https://github.com/Gabangxa/classifyright.git
cd classifyright
npm install
node server.js
```

Open `http://localhost:3000`.

### Replit

1. Import repo at [replit.com/new](https://replit.com/new) → paste `https://github.com/Gabangxa/classifyright`
2. Click **Run** — no environment variables required

Server binds to `0.0.0.0:${PORT || 3000}`.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/scan` | Risk assessment questionnaire |
| `/results` | Risk score and recommendations |

---

## Stack

- **Backend:** Node.js + Express (static file server)
- **Frontend:** Static HTML + Tailwind CSS (CDN)
- **No build step** — runs directly on Replit

---

## Project Structure

```
classifyright/
├── server.js        — Express static server
├── package.json
└── public/
    ├── index.html   — Landing page
    ├── scan.html    — Questionnaire
    └── results.html — Risk results
```

---

## Legal Disclaimer

ClassifyRight is an informational tool, not legal advice. Results are based on commonly applied IRS and DOL classification factors and should not substitute for consultation with a qualified employment attorney or tax professional.

---

## Roadmap

- [ ] State-level ABC test support (California AB5, NJ, MA)
- [ ] Exportable PDF risk report
- [ ] Multi-contractor batch assessment
- [ ] Remediation checklist generator
- [ ] Slack / email alert when a contractor's risk profile changes
