# Geo Assistant

**Geo** is the conversational layer of the Genezio platform — a chat-with-your-data assistant, embedded in the dashboard, with live access to every metric, conversation, citation, competitor, statement, and SWOT entry Genezio has collected for your brand.

The name comes from **GEO** — Generative Engine Optimization, the AI-era counterpart to SEO. Genezio is a GEO platform; Geo is the assistant on top of it.

---

## Why Geo Exists

A typical brand running on Genezio accumulates a lot of data — hundreds of topics, thousands of LLM conversations per month, citations from dozens of sources, competitor mentions across multiple answer engines, sentiment trends per region, persona, and language.

Manually pivoting through that to answer day-to-day business questions is slow. Geo turns those questions into a chat. You ask in plain language; Geo runs the right queries against your data and answers, citing what it used.

Typical questions:

* "Am I winning or losing share of voice this month, and against whom?"
* "Which LLM is hurting me most, and on which topics?"
* "Why did my recommendation rate drop on ChatGPT last week?"
* "Which citation sources are driving negative sentiment about us?"
* "What's a competitor doing in Perplexity that we're not?"
* "Give me three content ideas that would close the gap on topic X."

---

## What You Can Do With Geo

### Investigate

Notice a metric move on a chart — a recommendation rate drop, a new competitor appearing, citations from a particular domain turning negative? Instead of clicking through filtered views to figure out why, send the chart, drawer, or object directly to Geo and ask "what's behind this?". Geo pulls the relevant slice, summarizes it, and points at the underlying conversations.

See [Send to Geo](send-to-geo.html) for the full list of surfaces that support this.

### Report

Geo composes briefings on demand:

* "Give me a one-paragraph executive summary of our GEO performance for the last 30 days."
* "List the top five competitor mentions in Introspector topics this quarter."
* "Summarize sentiment trends by region for the last month."

Useful for stakeholder updates, board decks, or weekly stand-ups — without manually assembling the numbers.

### Get Recommendations

Geo can suggest **actions**, not just describe the data:

* what content to create
* which citation sources to engage
* which topics to add or refine
* how to counter a competitor's strength

Recommendations are grounded in your brand's actual data, not generic best practice.

### Run Cross-Feature Workflows

Geo is the connective tissue between dashboards, competitive analysis, and content production. A common flow:

1. Investigate a competitor in the Competitors view
2. Send that competitor to Geo
3. Ask "what SWOT statements show their strengths?"
4. Ask "draft a brief that counters their top strength"
5. Hand the brief off to the Content Hub

You move from noticing something to producing a deliverable inside a single conversation.

---

## How Geo Works

The platform's data layer — every read endpoint that powers a chart or drawer — is exposed to the assistant as a set of **tools**. Geo decides which tools to call to answer a given question, runs them with your account's own permissions, and synthesizes the result in chat.

You see both the answer **and** the tool calls Geo made, so every response is auditable. See [Sessions and History](sessions-and-history.html) for how the tool-call trace is exposed.

---

## Where Geo Lives

Geo is available throughout the dashboard:

* directly via the assistant panel
* as a **Send to Geo** action on virtually every meaningful surface — topic drawer, scenario drawer, conversations page, competitors-by-LLM view, overview, SWOT, statements, citations, and the competitor details drawer
* as an **Ask Geo** card surfaced alongside data views, with starter prompts for common questions

---

## Using Geo Outside the Dashboard (MCP)

Geo is also exposed over **MCP** (Model Context Protocol) with OAuth.

This means you can connect Geo to MCP-compatible clients you already use — for example, **Claude Desktop** or **Claude Code** — and query your Genezio brand data from outside the dashboard. The same tools (read and action) are available; the same permissions apply.

Useful when you want to keep Geo in the flow of work you're already doing in your own AI tooling.

---

## Related Pages

* [Send to Geo](send-to-geo.html)
* [Sessions and History](sessions-and-history.html)
* [Actions Geo Can Take](actions-geo-can-take.html)
* [Insights -> SWOT Analysis](../insights/swot-analysis.html)
* [Content Hub -> Briefs](../content-hub/briefs.html)
