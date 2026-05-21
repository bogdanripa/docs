# Prompter Agent

The **Prompter Agent** is a Genezio Agent type that runs a single-turn interaction with an AI system.

It is designed to test direct discovery-style queries where a user asks one clear question and receives one answer.

---

## How It Works

For a Prompter Agent topic:

* the prompt is sent to the AI system word-for-word
* no follow-up messages are generated

Unlike other agent types, Prompter Agent topics use **prompts**, not scenarios. A prompt is a direct question — the kind a real user would type into an AI assistant.

Example prompt:

```
What CRM should a startup with a small sales team use to track leads and follow up with customers?
```

This text is sent directly to the AI system as a single message.

---

## Typical Use Cases

Prompter Agent conversations are useful when you want to measure:

* which brands are mentioned in direct discovery questions
* whether your brand appears in first-pass recommendations
* how different answer engines respond to the same prompt

---

## Visibility Impact

Prompter Agent conversations are included in **Brand Visibility** and related visibility KPIs because the AI system must choose brands organically, without brand names being forced into the prompt.

---

## Single-Turn Behavior

Because Prompter Agent conversations are single-turn:

* they are easy to compare across engines
* they reduce variability from follow-up prompts
* they provide a clean baseline for visibility tracking over time

---

## Related Pages

* [Core Concepts -> Topics](../core-concepts/topics.html)
* [Core Concepts -> Scenarios](../core-concepts/scenarios.html)
* [Core Concepts -> Brand Visibility](../core-concepts/brand-visibility.html)
