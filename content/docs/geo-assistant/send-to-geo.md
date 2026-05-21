# Send to Geo

**Send to Geo** is an action available on most data surfaces in the Genezio dashboard. Clicking it hands the current object — a topic, a scenario, a competitor, a citation, a SWOT entry, a statement — to the Geo Assistant with its full context attached.

You can then ask follow-up questions about that specific object without re-explaining what you're looking at.

---

## Why It Exists

Investigating something in the dashboard usually starts with noticing it on a chart or in a drawer. Before **Send to Geo**, the path to a question was:

1. See something interesting on a chart
2. Open the Geo Assistant
3. Re-describe what you're looking at, in words
4. Hope Geo finds the right slice of data

**Send to Geo** collapses that into a single click. The assistant picks up the exact object you were looking at — that competitor, that scenario, that citation source — and you can immediately ask:

* "why is this happening?"
* "what should I do about it?"
* "compare this to last month"
* "show me the conversations behind this number"

It shortens the path from noticing something in a chart to deciding what to do about it.

---

## Where Send to Geo Is Available

The action is on virtually every meaningful surface in the dashboard, including:

* **Topic drawer** — send a specific topic to investigate performance, citations, or competitors within it
* **Scenario drawer** — send a scenario to dig into how it performs across LLMs
* **Conversations page** — send a specific conversation for explanation or comparison
* **Competitors-by-LLM view** — send a competitor's behavior on a specific engine
* **Competitor details drawer** — send a competitor's full profile for SWOT, share-of-voice, or counter-strategy questions
* **Overview** — send the high-level performance snapshot for a summary or trend explanation
* **SWOT** — send a SWOT entry (yours or a competitor's) to explore the underlying statements
* **Statements** — send an extracted statement for sentiment, source, or context analysis
* **Citations** — send a citation source to explore which conversations it appears in and what it says

Anywhere you see a meaningful object on screen, look for the **Send to Geo** action.

---

## What Happens When You Send Something

1. You click **Send to Geo** on the object.
2. Geo opens (or comes to the foreground) with the object attached as context.
3. Geo acknowledges what it received — for example, "I'm looking at the *CRM for startups* topic for the last 30 days."
4. You type your follow-up question. Geo answers grounded in that object.

The attached context stays with the conversation. You can keep asking questions about the same object across multiple turns without re-attaching it.

---

## Typical Workflows

**Diagnose a drop.** On the Overview, your recommendation rate drops on ChatGPT. Click **Send to Geo** on the chart, ask "what's behind this drop?" — Geo pulls the underlying conversations and explains.

**Counter a competitor.** In the competitor details drawer, click **Send to Geo**, ask "what are their top three strengths in SWOT, and how do I counter them?" — Geo answers, then you can ask it to "draft a brief that addresses the top strength."

**Audit a citation source.** On the Citations view, send a domain to Geo and ask "what does this source say about us versus competitors?" — Geo summarizes the statements extracted from conversations that cite it.

**Explain a scenario.** From the Scenario drawer, send a scenario and ask "which LLM performs worst on this and why?" — Geo cross-references conversations across engines.

---

## Related Pages

* [Geo Assistant](geo-assistant.html)
* [Sessions and History](sessions-and-history.html)
* [Insights -> SWOT Analysis](../insights/swot-analysis.html)
* [Core Concepts -> Competitors](../core-concepts/competitors.html)
