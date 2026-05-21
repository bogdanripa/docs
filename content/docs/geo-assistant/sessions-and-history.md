# Sessions and History

The Geo Assistant supports **multiple chat sessions** with a real history sidebar. You can switch between conversations, come back to one later, and inspect the tool calls Geo made to produce each answer.

This turns Geo from a one-shot chat into a persistent workspace.

---

## Multiple Sessions

You can keep several Geo sessions running in parallel. Each session is independent — its own conversation history, its own attached context (from any **Send to Geo** actions), and its own thread of follow-up questions.

Common patterns:

* a **"Competitor X investigation"** session you return to as new data comes in
* a **"Q2 content planning"** session that grows over weeks of asking Geo for brief ideas
* a **"Fix our Perplexity gap"** session focused on a single engine
* short-lived sessions for one-off questions ("summarize last week's performance")

You can switch between sessions at any time and pick up either thread on any day.

---

## The History Sidebar

The history sidebar lists every session associated with your account. From it you can:

* open any previous session and continue the conversation
* rename a session so it's easy to find later
* delete sessions you no longer need

Each session keeps its full message history, attached context, and tool-call trace, so returning to a session weeks later gives you the same view you left.

---

## Tool-Call Traces

Every answer Geo produces is grounded in calls it makes against the platform's data — the same read endpoints that power the dashboard's charts and drawers. Geo shows you the **tool calls** it made for each answer.

You can see:

* which tool was called (for example, a specific metric lookup or conversation fetch)
* what parameters it was called with (the topic, the date range, the filter)
* what came back

This makes Geo's answers **auditable**. Instead of trusting an opaque response, you can verify exactly which dashboard query produced it. If Geo claims your share of voice dropped 12% on a given topic, you can see the underlying call and confirm the number.

---

## Why It Matters

Sessions and tool-call traces change how teams use the assistant:

* **Persistent investigations** — long-running threads survive across days and team members, instead of being lost when the tab closes.
* **Trust** — a visible tool-call trace lets you check Geo's work. The assistant becomes a colleague whose reasoning you can inspect, not a black-box chatbot.
* **Parallel work** — keeping a competitor investigation, a content plan, and a stakeholder-report session open at the same time lets you treat Geo as a workspace, not a search bar.

---

## Related Pages

* [Geo Assistant](geo-assistant.html)
* [Send to Geo](send-to-geo.html)
