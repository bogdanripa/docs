# Scenarios

In Genezio, a **scenario** represents a realistic situation in which a persona is trying to achieve a goal related to a specific topic.

Scenarios are the **starting point for every conversation** that Genezio runs with an AI system.

While topics define the general subject area, scenarios describe **the concrete situation that leads a user to ask questions**.

---

## Topics vs Scenarios

It is important to distinguish between topics and scenarios.

A **topic** defines the subject area being analyzed.

Example topic:

```
CRM for startups
```

A **scenario** is a short story that describes a realistic situation — the persona's context, constraints, and what they are trying to achieve. Think of it as a brief you would hand someone to explain the full picture.

Example scenario:

```
Mary's team doesn't have any technical background. They are looking for a marketing automation platform that is easy for a non-technical team to set up and start using without developer help. Their budget is $800/month and she wants her team of 6 to be able to use it in parallel. She is looking for something that is SOC2 compliant.
```

A scenario is **not** a prompt. It is not a question you would send to an AI assistant. Instead, Genezio reads the scenario, combines it with the persona's details, and generates natural conversational messages from it — the kind a real person would type into ChatGPT or Claude, one at a time.

---

## How Scenarios Are Used

Every conversation run by Genezio begins with a scenario.

The process works as follows:

1. A **persona** defines who the user is (language, location, context).
2. A **topic** defines the subject area.
3. A **scenario** defines the situation and the persona's goal.
4. Genezio generates **prompts (messages)** from that scenario.
5. Those prompts are sent to the answer engine during the conversation.

This structure ensures that conversations are grounded in **realistic user contexts rather than abstract prompts**.

---

## Scenario Structure

A scenario describes the **situation and goal** the persona is experiencing. It should read like a short story — a paragraph full of specific details, constraints, and context.

A scenario does **not** include details about the persona themselves (such as age, country, occupation, or language). Those are defined separately in the **persona**. The scenario can mention the persona by name, but all other persona details are provided at conversation time.

This means the persona's:

* role or profile
* language
* geographic location

are already defined before the scenario is executed. The scenario focuses entirely on **what is happening** and **what the persona needs**.

### What to Include

A good scenario includes:

* **The situation** — what circumstances led to this need (e.g., the team outgrew spreadsheets, a product launch is coming up)
* **The goal** — what they want to achieve (e.g., find a tool, compare options, solve a problem)
* **Specific constraints** — budget, team size, technical requirements, compliance needs, timeline

### What NOT to Include

Do not repeat persona details in the scenario. The persona already defines who the user is. The scenario focuses on *why they are asking* and *what they need*.

This separation allows Genezio to reuse scenarios across different persona contexts while keeping conversations grounded in specific goals.

---

## Example: From Scenario to Conversation

Here is a complete example showing how a scenario becomes a conversation.

**Topic:** Marketing automation

**Persona:** Marketing manager, located in New York, language: English

**Scenario:**

```
Mary's team doesn't have any technical background. They are looking for a marketing automation platform that is easy for a non-technical team to set up and start using without developer help. Their budget is $800/month and she wants her team of 6 to be able to use it in parallel. She is looking for something that is SOC2 compliant.
```

Notice the scenario does not mention Mary's role, location, or language — those come from the persona.

**What Genezio generates from this scenario:**

Genezio combines the scenario with the persona details and produces natural conversational messages — the kind a real person would send to an AI assistant, one at a time:

> **User query:** ***I'm looking for a marketing automation platform that's easy to set up without any developer help. My team of 6 isn't very technical. What would you recommend?***

> **User query:** ***Our budget is around $800/month and we need all 6 team members to be able to work in the platform at the same time. Which tools support that?***

> **User query:** ***Does any of these have SOC2 compliance? That's a requirement for us.***

The scenario is the **full story**. The prompts are how a human would naturally unpack that story in a conversation — one question at a time, building on previous answers.

---

## Scenarios and Genezio Agents

Scenarios are used differently depending on the Genezio Agent type.

### Prompter Agent

**Prompter Agent topics** use **prompts**, not scenarios. The prompt is a direct question sent **exactly as written** to the AI system, and the interaction is **single-turn**.

### Recommender Agent

For **Recommender Agent topics**, the scenario defines the starting situation. Genezio generates multiple prompts during the conversation to simulate a realistic recommendation flow.

### Introspector Agent

For **Introspector Agent topics**, the scenario asks about a specific brand directly. If the topic has a persona, the scenario places them in a situation where they want to understand that brand; if the topic has no persona (which is allowed for Introspector — see [Introspector Agent](../genezio-agents/introspector-agent.html)), the scenario asks the answer engine to describe the brand with no audience overlay.

Genezio generates prompts that explore:

* what the brand does
* who it is designed for
* its strengths and weaknesses

### Comparer Agent

For **Comparer Agent topics**, the scenario describes a situation where the persona is evaluating multiple brands.

Genezio generates prompts that compare those alternatives and analyze their differences.

---

## Why Scenarios Matter

Scenarios allow Genezio to simulate **real user behavior**.

In the real world, people rarely ask generic questions like "best CRM". Instead, they ask questions based on their situation.

For example:

* a founder looking for their first CRM
* a teenager looking for a debit card
* a runner preparing for a marathon

By modeling these situations, Genezio can analyze how AI systems respond to **realistic user needs and contexts**.

---

## Next Steps

To see how scenarios turn into interactions with AI systems, continue with:

* [Core Concepts -> Conversations](./conversations.html)

This page explains how Genezio executes conversations and analyzes the responses generated by answer engines.
