# How the 5 Agents Work

*Genezio runs five types of AI conversations to understand your brand's presence. Each type answers a different question — and not all of them count toward your score. Here's why that's a feature, not a limitation.*

> **Think of it like this:** Imagine hiring five different mystery shoppers to evaluate your brand. Each one walks into a store (or asks an AI) with a different brief. The results they bring back reveal very different things about how you're perceived.

---

## Agent 1: Prompter Agent

**Counts toward: AI Visibility %**

**What it simulates:** A user at the top of the funnel — exploring a category, not yet committed to any brand. They ask open-ended discovery questions.

**Example queries:**
- "What are the best CRM tools for a startup?"
- "What software should I use for project management?"
- "What tools do marketing teams use for analytics?"

**Why it matters for you:** This is how most buyers start their research. If you're absent here, you're being filtered out before the shortlist even forms. Prompter conversations are the biggest driver of AI Visibility %.

**Content implication:** Category pillar pages · "Best of" content · In-depth guides · Original research

---

## Agent 2: Recommender Agent

**Counts toward: AI Recommendations % and AI Visibility %**

**What it simulates:** A user ready to make a decision. They've done some research and now they want the AI to pick something specific for their situation. These are often multi-step conversations.

**Example queries:**
- "I'm a solo founder with a team of 3. Recommend a CRM that's easy to set up and under $50/month."
- "What's the best project management tool for a remote design team of 10?"

**Why it matters for you:** This is the highest-intent moment in the AI buyer journey. If a user asks AI to recommend something and your name doesn't come up, you've lost a qualified lead. AI Recommendations % is your conversion metric.

**Content implication:** Use-case landing pages · Persona-specific content · ROI calculators

---

## Agent 3: Introspector Agent

**Does not count toward KPIs**

**What it simulates:** A user who already knows your brand and wants to learn more. They ask the AI directly about you by name.

**Example queries:**
- "What is HubSpot?"
- "What does Salesforce do?"
- "Tell me about Notion's pricing model."

**Why it doesn't count toward your score:** If the user mentions your brand in the question, the AI will almost always mention it in the answer — that's not meaningful. Including these would artificially inflate your Visibility score and make it useless as a benchmark.

**What it's useful for instead:** Understanding how AI describes your brand. What claims does it make? Are those claims accurate? This feeds directly into your Statements analysis — the accuracy layer underneath the score.

**Content implication:** Brand narrative analysis · Claim accuracy monitoring · Positioning audit

---

## Agent 4: Comparer Agent

**Does not count toward KPIs — this is a competitive analysis tool**

**What it simulates:** A user actively evaluating you against a specific competitor. They've narrowed their options and want a head-to-head verdict.

**Example queries:**
- "HubSpot vs Pipedrive: which is better for a startup?"
- "Notion vs Asana for a remote team?"
- "Should I use Salesforce or HubSpot?"

**Why it doesn't count toward your score:** Both brands are named in the question, so both will always appear in the answer. Like the Introspector, including these would distort your metrics.

**What it's actually for:** The Comparer is an **analysis tool**. It takes the brand-level KPIs that Genezio has already calculated from Prompter and Recommender conversations and puts them in competitive context. It also runs head-to-head AI conversations to reveal how answer engines frame you against specific competitors — what strengths it highlights, what weaknesses it mentions, and who it picks as the better fit.

Think of it this way: Prompter and Recommender tell you *your score*. Comparer tells you *why you're winning or losing against a specific rival*.

**Content implication:** Competitive intelligence · "vs" comparison page strategy · Win/loss narrative

---

## Agent 5: Fact Checker Agent

**Does not count toward KPIs — this is an accuracy measurement tool**

**What it simulates:** A factual probe. Instead of asking the answer engine open-ended questions, you give it specific verifiable claims about your brand (pricing, features, founding year, customer counts, certifications) and measure whether it confirms, contradicts, or dodges each one.

**Example claims:**
- "Our product offers a free tier."
- "We were founded in 2019."
- "We are SOC 2 Type II certified."

**Per-claim outcomes:**
- **True** — the engine confirms the claim
- **False** — the engine contradicts the claim
- **Indecisive** — the engine doesn't take a clear position

**Why it doesn't count toward your score:** The claims are stated in the prompt, so the conversation isn't measuring discovery. It's measuring accuracy — a different axis from visibility and recommendation.

**What it's actually for:** Fact Checker is most useful for brands where factual accuracy directly affects buyer trust or regulatory standing — security, financial services, healthcare, regulated industries. It also pairs with the [Knowledge Base](../core-concepts/knowledge-base.html) and [Grounded Statements](../core-concepts/statements.html) to form a complete accuracy stack: KB defines truth, Fact Checker actively tests whether answer engines confirm it, Grounded Statements show whether engines spontaneously match it.

**Content implication:** Update product/pricing/certification pages so the right facts are public and crawlable · Correct third-party listings · Publish authoritative reference content for high-risk claims

See [Fact Checker Agent](../genezio-agents/fact-checker-agent.html) for the full feature page.

---

## Quick Reference Summary

| Agent | User Intent | Brand Named? | Role | Best Used For |
| --- | --- | --- | --- | --- |
| **Prompter** | Exploring a category | No | ✓ Measures AI Visibility | Awareness measurement |
| **Recommender** | Ready to decide | No | ✓ Measures AI Recommendations + Visibility | Intent measurement |
| **Introspector** | Learning about a brand | Yes | Narrative analysis (not KPIs) | Narrative & accuracy audit |
| **Comparer** | Comparing options | Yes (both) | Competitive analysis (not KPIs) | Competitive positioning |
| **Fact Checker** | Verifying specific claims | Yes | Accuracy measurement (not KPIs) | Hallucination & factual monitoring |

> **Two agents measure. Three agents analyze.** Prompter and Recommender generate your KPIs. Introspector, Comparer, and Fact Checker help you understand the narratives, competitive dynamics, and factual accuracy behind those numbers. All five are essential — but they play different roles.

---

*Next: [From Data to Content Strategy](04-from-data-to-content-strategy.md)*