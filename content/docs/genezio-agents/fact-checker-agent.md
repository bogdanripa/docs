# Fact Checker Agent

The **Fact Checker Agent** is the third major axis of measurement in Genezio, alongside Visibility and Recommendation.

Visibility asks *how often you appear*. Recommendation asks *how often you're picked*. Fact Checker asks a different question:

> **When answer engines talk about your brand, do they get the facts right?**

You feed in specific verifiable claims about your brand — pricing, features, founding year, customer counts, certifications, anything that can be true or false — and the platform tests them against every supported answer engine.

---

## Why Fact Checker Exists

Answer engines hallucinate. They mix outdated information with current. They confuse brands with similar ones. For most brands this is annoying. For some — security companies, financial services, regulated industries, healthcare, anyone whose product details *have to* be accurate — it's a real risk.

Until Fact Checker, there was no way to systematically monitor what answer engines are saying about specific facts. You'd find out about a hallucinated claim only when a customer mentioned it, or when someone happened to ask the right question.

Fact Checker turns that into measurement: you list the claims you care about, and the platform reports, per claim, per engine, whether each engine confirms it, contradicts it, or doesn't engage with it.

---

## How It Works

A Fact Checker topic carries a set of **claims to verify** — statements you assert are true about your brand. For each claim, the platform runs conversations with every supported answer engine and classifies the response into one of three outcomes:

* **True** — the engine confirms the claim
* **False** — the engine contradicts the claim
* **Indecisive** — the engine doesn't take a clear position either way

This three-state outcome is per-claim **and** per-engine, so a single claim can be confirmed by ChatGPT, contradicted by Perplexity, and ignored by Claude — and you'd see that in the platform.

---

## Where Claims Come From

You have two ways to feed claims into a Fact Checker topic:

### From the Knowledge Base

Pull claims from your brand's [Knowledge Base](../core-concepts/knowledge-base.html) — the documents, URLs, and snippets that already represent your source of truth. This is the natural way to operate once your KB is populated: the truth is already documented, and Fact Checker just measures whether answer engines reflect it.

### Custom Claims

Type in claims directly on the Fact Checker topic. Useful for one-off measurements ("does ChatGPT know we acquired Company X last quarter?"), for testing claims that aren't yet in the KB, or for monitoring specific high-risk facts (a certification, a regulatory status, a pricing detail).

You can mix both on a single topic — some claims sourced from the KB, others typed in directly.

---

## Where You See Results

### On the Conversation

Each conversation has a dedicated **Fact Checker tab** showing which claims the answer engine claimed and which it didn't. Cards show a clean **CLAIMED / NOT CLAIMED** label so you can scan a single conversation quickly.

### On the Topic and Scenario Drawers

Open the **View More** drawer on a topic or scenario and you'll find Fact Checker charts, including a **"Claimed metric by answer engine"** breakdown — which engines back your claims and which ones don't. This is the view you want when reporting up: a snapshot of whose facts are being confirmed across the engine landscape.

---

## KPI Impact

Fact Checker conversations **do not count toward AI Visibility or AI Recommendations**.

The brand and the claims are named explicitly in the prompt, so the conversations don't measure organic discovery — they measure accuracy. Including them in the KPIs would distort the metrics.

Like Introspector and Comparer, Fact Checker is a **measurement tool of its own**: separate from visibility and recommendation, but every bit as useful for the right brand.

---

## The Accuracy Stack

Fact Checker is the final piece of Genezio's accuracy stack:

1. **[Knowledge Base](../core-concepts/knowledge-base.html)** — defines what's true about your brand
2. **[Grounded Statements](../core-concepts/statements.html)** — show whether claims pulled from organic conversations match your KB
3. **Fact Checker** — actively tests whether answer engines confirm specific claims when asked

Together, these give you a complete view of accuracy:

* the **KB** is the source of truth
* **Grounded Statements** measure what answer engines *spontaneously* say about you
* **Fact Checker** measures what answer engines say *when asked directly*

The first observes; the second probes. Read them together and you know both the narrative answer engines volunteer and the answers they give when pushed.

---

## When to Use Fact Checker

Fact Checker is most valuable for brands where factual accuracy directly affects buyer trust or regulatory standing:

* **Security and financial services** — where misstatements about certifications, compliance, or features can cost trust
* **Healthcare and regulated industries** — where claims about products carry legal weight
* **Brands with frequently-confused competitors** — where engines mix your facts with someone else's
* **Brands after a major change** — new pricing, an acquisition, a rebrand — where stale information lingers in answer engines for months
* **Any brand worried about hallucinated misinformation** — Fact Checker turns that worry into a measured signal

---

## Typical Workflow

1. **Populate the Knowledge Base** (or have it ready) — the truth source you'll measure against.
2. **Create a Fact Checker topic** — attach KB-sourced claims, custom claims, or both.
3. **Run the topic** — conversations execute against every supported answer engine.
4. **Read the results** — Conversation tab for individual outcomes; topic/scenario drawer charts for cross-engine summaries.
5. **Act on false outcomes** — fix the underlying public content (your website, your docs, third-party listings) so answer engines have the right information to retrieve next time.
6. **Re-run periodically** — answer engines evolve. Yesterday's confirmed claim can become tomorrow's contradiction.

---

## Related Pages

* [Core Concepts -> Knowledge Base](../core-concepts/knowledge-base.html)
* [Core Concepts -> Statements](../core-concepts/statements.html)
* [Prompter Agent](prompter-agent.html)
* [Recommender Agent](recommender-agent.html)
* [Introspector Agent](introspector-agent.html)
* [Comparer Agent](comparer-agent.html)
