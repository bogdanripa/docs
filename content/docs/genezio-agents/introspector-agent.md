# Introspector Agent

The **Introspector Agent** is a Genezio Agent type focused on understanding how AI systems describe a specific brand.

It is used for brand explanation and positioning analysis, not for organic visibility measurement.

---

## How It Works

For an Introspector Agent topic:

* the scenario explicitly includes the target brand
* a persona is **optional** (see below)
* Genezio runs a multi-step conversation about that brand
* prompts explore use cases, fit, strengths, and limitations

### Persona Is Optional

Introspector topics can run **with or without a persona**.

Because Introspector is essentially asking "what does the answer engine say about us when asked directly?", the brand name is already in the prompt — and the persona overlay isn't always needed to get a meaningful answer. Skipping the persona removes a setup step for the common case where you just want to know how answer engines describe your brand, full stop.

When to **add** a persona to an Introspector topic:

* you want to know how the description changes when asked from a specific region, language, or buyer profile
* you're auditing how the brand is positioned for a specific audience segment

When to **skip** the persona:

* you want a baseline read of how answer engines describe your brand, with no audience overlay
* you're setting up Introspector quickly and don't have a relevant persona yet

This makes Introspector the lightest-weight agent to configure: a topic, the brand name, and you're ready to run.

Example scenario:

```
Sarah has heard about HubSpot from a colleague and wants to understand what it actually does before evaluating it. She wants to know what types of teams use it, what its main strengths are, and whether it has any notable limitations.
```

From this scenario, Genezio generates conversational messages such as:

> **User query:** ***What is HubSpot mainly used for? What kind of teams typically use it?***

> **User query:** ***What are HubSpot's main strengths compared to other tools in its category?***

> **User query:** ***Are there any common limitations or complaints about HubSpot?***

---

## Typical Use Cases

Introspector Agent conversations help teams analyze:

* how AI systems explain a brand's category and value
* recurring strengths or weaknesses in brand narratives
* consistency of brand framing across answer engines

---

## Visibility KPI Impact

Introspector Agent conversations are **excluded** from Brand Visibility calculations because the brand name is already present in the prompt.

Including these conversations would inflate visibility results.

---

## Why It Still Matters

Even though it is excluded from visibility KPIs, this agent is valuable for:

* narrative quality review
* positioning audits
* messaging consistency analysis

---

## Related Pages

* [Core Concepts -> Statements](../core-concepts/statements.html)
* [Core Concepts -> Brand Visibility](../core-concepts/brand-visibility.html)
* [Core Concepts -> Conversations](../core-concepts/conversations.html)
