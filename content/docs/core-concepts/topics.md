# Topics

In Genezio, a **topic** represents a subject area where users may ask AI assistants questions related to a brand or product category.

Topics define the **scope of analysis**. They determine which questions Genezio asks AI systems and therefore where a brand's AI Recommendations and Visibility are measured.

Most topics belong to a **persona**, meaning that conversations for that topic are executed from the perspective of that persona (including their language and location). The exception is Introspector topics, where a persona is **optional** — see [Introspector Agent](../genezio-agents/introspector-agent.html).

---

## What a Topic Represents

A topic represents a **problem space or category** where users search for solutions.

Examples:

* CRM for startups
* running shoes for marathon training
* debit cards for teenagers
* project management tools for small teams

For each topic, Genezio generates conversations with AI systems to understand:

* which brands are mentioned
* which sources are cited
* how brands are described
* which competitors appear

---

## Topics, Scenarios, and Conversations

Each topic contains one or more **scenarios**.

A **scenario** represents a realistic situation in which the persona is trying to achieve a goal related to that topic.

Scenarios are more detailed than topics. While a topic defines the **subject area**, a scenario describes:

* the persona's situation
* the persona's goal
* the context behind the question

When Genezio runs analysis, **each conversation starts from a scenario**.

The structure works like this:

1. A **topic** defines the subject area (for example: "CRM for startups").
2. A **scenario** describes the persona's situation and goal.
3. Genezio starts a **conversation** with an AI system based on that scenario.
4. The conversation then consists of one or more **messages (prompts)** sent to the answer engine.

For example:

Topic:

```
CRM for startups
```

Scenario:

```
The persona is a founder of a small SaaS startup with two co-founders. They recently started getting inbound leads and need a simple way to track contacts and follow up with potential customers.
```

From that scenario, Genezio may generate prompts such as:

> **User query:** ***What CRM would you recommend for a small SaaS startup with only a few sales leads per week?***

or follow-ups like:

> **User query:** ***Which of these tools is easiest to set up for a small team?***

The **scenario defines the situation**, while **prompts are the individual messages sent to the AI during the conversation**.

---

## Genezio Agent Types

Genezio supports several Genezio Agent types, each representing a different user intent.

### Prompter Agent

A **Prompter Agent** sends a **single prompt** to the AI system.

For this agent type, the **scenario itself is the prompt**, and it is sent **word-for-word exactly as defined**.

The interaction is **single-turn**, meaning there are no follow-up messages.

Example:

> **User query:** ***What CRM should a startup use?***

Prompter Agent conversations represent the simplest and most direct discovery questions users ask AI systems.

---

### Recommender Agent

A **Recommender Agent** simulates a user asking the AI system to recommend solutions.

Unlike the Prompter Agent, the Recommender Agent uses **multi-step conversations**.

The scenario defines the **situation and goal**, and Genezio generates **multiple prompts during the conversation** to simulate how a real user might interact with the AI assistant.

Example scenario:

```
George runs a small startup and is evaluating tools to manage incoming sales leads.
```

From that scenario, Genezio may generate prompts such as:

* asking for tool recommendations
* asking about pricing
* asking which tool is easiest to use
* asking about alternatives

These interactions simulate realistic recommendation conversations.

---

### Introspector Agent

An **Introspector Agent** focuses on understanding a specific brand.

The scenario places the persona in a situation where they want to **learn about a particular product or company**.

Example scenario:

```
Mary has heard about HubSpot but is not sure what it does or whether it would fit their startup.
```

Genezio then generates prompts such as:

* asking what the product does
* asking who it is designed for
* asking about advantages and limitations

These topics help analyze **how AI systems describe and explain a brand**.

Because the brand name appears in the scenario, Introspector Agent conversations are **not used when calculating AI Visibility**.

---

### Comparer Agent

A **Comparer Agent** explores how AI systems compare competing brands.

The scenario places the persona in a situation where they are evaluating alternatives.

Example scenario:

```
I am deciding between HubSpot and Pipedrive for managing startup sales.
```

From this scenario, Genezio generates prompts that ask the AI to:

* compare the two products
* highlight strengths and weaknesses
* recommend which option is better for the persona's situation

These conversations help analyze **competitive positioning** in AI answers.

Because the brands appear in the scenario itself, Comparer Agent conversations are **not used when calculating AI Visibility or AI Recommendations**. The Comparer is a **competitive analysis tool** — it consumes the brand-level KPIs that Genezio has already calculated from Prompter and Recommender conversations and uses them to show how your brand stacks up against specific competitors.

---

## Single-Turn vs Multi-Turn Agent Types

Genezio Agent types differ in how conversations are executed.

* **Prompter Agent:** Single prompt sent exactly as written
* **Recommender Agent:** Multi-step conversation generated from a scenario
* **Introspector Agent:** Multi-step conversation exploring a brand
* **Comparer Agent:** Multi-step conversation comparing brands

This combination allows Genezio to simulate both **simple discovery queries** and **realistic conversational research behavior**.

---

## How Topics Are Created

During onboarding, Genezio automatically generates an initial set of topics based on:

* the brand description
* the customer persona
* the product category

Users can then:

* edit topics
* add additional topics
* remove irrelevant topics

Over time, teams often expand their topics to cover additional markets, products, or user intents.

---

## Why Topics Matter

Topics define **where your brand's AI Recommendations and Visibility are measured**.

A brand may have strong visibility in some topics but low visibility in others.

For example:

* strong visibility for "CRM for startups"
* weaker visibility for "sales automation platforms"

Analyzing topics separately helps organizations identify **where they are well represented in AI answers and where opportunities exist**.

---

## Next Steps

To understand how topics are used to generate AI conversations, see:

* [Core Concepts -> Scenarios](./scenarios.html)
* [Core Concepts -> Conversations](./conversations.html)

These pages explain how Genezio converts topics into structured AI interactions.
