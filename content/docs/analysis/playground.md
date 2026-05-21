# Playground

The **Playground** is a sandbox for running one-off LLM conversations that **do not affect your visibility or recommendation metrics**.

It exists so you can explore, test, and demo without polluting the measurements that drive the rest of the platform.

---

## Why the Playground Exists

Every scenario Genezio runs as part of its daily schedule feeds into your **AI Recommendations**, **AI Visibility**, and the other KPIs the platform reports.

That's the right behavior for measurement — but it's the wrong behavior when you want to:

* test how a new persona will behave **before** committing it to a scenario
* run an ad-hoc investigation ("let me just ask ChatGPT this one thing as a 35-year-old marketer in Germany")
* try a wording variation before turning it into a real scenario
* run a live demo without changing the customer's numbers

The Playground separates **exploration from measurement**. Anything you run there stays out of your reported metrics.

---

## What You Can Configure

When you start a Playground run, you choose:

* the **answer engine** (any supported answer engine)
* the **persona** to run as (including their language and location)
* the **Agent type** — Prompter, Recommender, Comparer, or Introspector — which determines how the conversation is structured
* the **language** for the run

Genezio then executes a **full multi-step Agent conversation**, the same way it would for a real scenario — just outside of metric collection.

---

## Where to Find It

The Playground is accessible from the **Settings** screen.

You can also **load a specific scenario** into the Playground from its scenario detail view. This is useful when you want to re-run an existing scenario with a different persona, engine, or wording — without disturbing the metrics that the original scenario contributes to.

---

## History and Auto-Cleaning

Every Playground run is saved to a **history view** so you can:

* compare attempts side by side
* return to a past run
* iterate on persona, wording, or engine choices

Older Playground messages are **auto-cleaned** to keep the history tidy. Treat the Playground as a working sandbox, not a long-term archive — if a run produces something you want to preserve, promote it into a real scenario, capture the findings in a brief, or send it to the [Geo Assistant](../geo-assistant/geo-assistant.html) for analysis.

---

## Typical Workflows

**Test a new persona before committing.** Draft a persona, run a few Playground conversations against it, see how answer engines respond, then promote it to a real persona once you're happy with the shape.

**Investigate a hypothesis.** "What does ChatGPT recommend in our category to a buyer with constraint X?" Fire one Playground run; read the answer; refine if needed.

**Pre-flight a scenario change.** Load an existing scenario into the Playground, tweak the wording, and verify the AI response looks the way you expect before saving the change to the real scenario.

**Run a demo.** During a sales or stakeholder demo, show live LLM responses for the customer's brand without altering their measured numbers.

---

## Playground vs. Scheduled Scenarios

|  | Playground | Scheduled scenarios |
| --- | --- | --- |
| Counts toward AI Recommendations / Visibility | No | Yes |
| Runs on a daily schedule | No (manual) | Yes |
| Full multi-step Agent conversation | Yes | Yes |
| Saved in history | Yes (auto-cleaned over time) | Yes (permanent) |
| Suitable for testing personas, demos, ad-hoc questions | Yes | No |
| Suitable for measuring visibility over time | No | Yes |

---

## Related Pages

* [Creating Scenarios](creating-scenarios.html)
* [Selecting Answer Engines](selecting-answer-engines.html)
* [Running Conversations](running-conversations.html)
* [Core Concepts -> Personas](../core-concepts/personas.html)
