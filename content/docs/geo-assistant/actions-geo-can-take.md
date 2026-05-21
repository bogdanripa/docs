# Actions Geo Can Take

Geo isn't only a read-and-summarize assistant. It can also **take actions** inside the Genezio platform — creating, refining, and moving objects on your behalf, with your account's permissions.

This is what turns Geo from a chat layer into the connective tissue between investigation, decision, and deliverable.

---

## Read vs. Action

Most Geo answers are powered by **read tools** — the same data endpoints that drive the dashboard's charts and drawers. Geo decides which to call, runs them, and synthesizes the result.

A subset of Geo's tools are **action tools**. These don't just look at your data — they **change** it. When Geo proposes an action, it's making a real edit to your account.

You see the action in the tool-call trace, the same way you see read calls (see [Sessions and History](sessions-and-history.html)).

---

## What Geo Can Do

The action tools available to Geo include:

### Manage Brands and Competitors

* **Move a brand entry** — promote, demote, merge, or attach competitor entries based on what Geo finds in the data
* **Reclassify a detected brand** — convert a mistakenly-tracked competitor into a sub-brand of yours, or vice versa

### Manage Personas

* **Create a persona** — when Geo finds a missing audience segment, it can scaffold a new persona with name, role, country, city, and language
* **Update a persona** — adjust attributes when scenarios suggest the existing persona doesn't fit

### Manage Topics and Scenarios

* **Refine a topic** — adjust its description, persona assignment, or competitor selection
* **Create a scenario** — draft a new scenario for an existing topic when Geo identifies an uncovered intent
* **Update a scenario** — tighten wording, change the Agent type, or adjust which competitors a Comparer scenario targets

### Produce Content

* **Generate a brief** — hand off Geo's findings to Content Hub as a structured brief (audience, tone, keywords, competitors, scenarios, instructions)
* **Trigger article generation** — start a full article in Content Hub grounded in the context of the current conversation

See [Content Hub -> Briefs](../content-hub/briefs.html) for what gets generated.

---

## How Actions Get Triggered

You don't have to ask for actions by name. Geo decides when an action is appropriate based on the conversation. For example:

* You ask: *"This competitor X is actually a product line we own — fix that."* Geo proposes attaching the brand to yours and executes the move.
* You ask: *"We're missing a persona for European mid-market buyers."* Geo drafts a new persona and creates it.
* You ask: *"Draft a brief that counters their top SWOT strength."* Geo composes the brief and hands it to Content Hub.

The action runs with **your account's permissions** — Geo cannot do anything you couldn't do yourself in the UI.

---

## Auditing Actions

Every action Geo takes appears in the session's tool-call trace, alongside read calls. You can see:

* what action was invoked
* what parameters it ran with (the object affected, the new values)
* the result

This means actions taken by Geo are as auditable as any change made directly in the UI.

---

## Related Pages

* [Geo Assistant](geo-assistant.html)
* [Sessions and History](sessions-and-history.html)
* [Send to Geo](send-to-geo.html)
* [Content Hub -> Briefs](../content-hub/briefs.html)
* [Core Concepts -> Personas](../core-concepts/personas.html)
* [Core Concepts -> Competitors](../core-concepts/competitors.html)
