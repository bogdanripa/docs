# Running Conversations

This guide explains how Genezio runs conversations and how the results are generated.

Conversations are the core mechanism Genezio uses to measure how AI systems talk about your brand and your competitors.

---

## Conversation Execution

Genezio runs conversations automatically on a **daily schedule**.

Each day, the system executes:

* every **scenario**
* for every selected **answer engine**

This means that if you have:

* 10 scenarios
* 4 answer engines selected

Genezio will run **40 conversations per day**.

Each of these conversations is stored and analyzed independently.

---

## Persona Influence

Most conversations are influenced by the **persona** associated with the topic.

When a topic has a persona assigned, conversations for that topic run:

* the AI interaction is written **as that persona**
* the conversation is executed in the **persona's language**
* the interaction is run **from the persona's geographic location**

This ensures that the AI system responds as if a real user from that context asked the question. Different personas may receive different answers from the same AI system.

**Introspector topics are an exception** — they can run with or without a persona. When no persona is assigned, the conversation simply asks the answer engine to describe the brand directly, with no audience overlay. See [Introspector Agent](../genezio-agents/introspector-agent.html) for when each option makes sense.

For example, a student, a startup founder, and a corporate buyer asking about the same product category may receive different recommendations.

---

## Why Conversations Run Daily

AI systems evolve continuously. Their answers may change because:

* models are updated
* sources on the web change
* new content appears
* the retrieval system changes

Running conversations daily allows Genezio to track how answers evolve over time and detect changes in **AI Recommendations and Visibility**.

---

## What Happens During a Conversation

When a conversation runs, Genezio performs several steps:

1. The system selects a **scenario**.
2. The conversation is executed against a selected **answer engine**.
3. Genezio captures the full response from the AI system.
4. The response is analyzed and structured data is extracted.

This analysis produces several key signals used throughout the platform.

---

## Data Extracted from Conversations

Each conversation exposes multiple layers of analysis.

### Query Fanouts

The additional searches the AI system performs internally while constructing an answer.

Follow-up searches (called query fanouts) reveal how the AI system explores the topic.

---

### Citations

The webpages (sources) referenced by the AI system when generating the answer.

These sources help explain where the information in the response came from.

---

### Statements

Individual claims extracted from the AI response.

Statements allow Genezio to evaluate the accuracy of what answer engines say about your brand and compare narratives across conversations.

---

### Competitors

Brands mentioned in the same response as your brand are automatically detected and tracked as competitors.

---

### Competitive Insights (Comparer Conversations)

When you run Comparer conversations, Genezio analyzes how answer engines frame your brand against specific competitors. From these conversations, you can:

* Understand which strengths and weaknesses answer engines associate with each brand
* Identify opportunities where competitors are vulnerable
* Spot threats where competitors are positioned more favorably
* Generate SWOT-style insights to inform your competitive strategy

The SWOT analysis is extracted automatically and shown inline when you open a Comparer conversation in the conversation drawer, aggregated up to the scenario and topic level, and rolled up across your full landscape in the **Competitors -> SWOT** view. See [Insights -> SWOT Analysis](../insights/swot-analysis.html) for details.

This gives you a clear picture of how AI systems position your brand relative to alternatives — and where to focus your content efforts.

---

## Inspecting Conversations

Each conversation can be inspected in the **Conversation Detail View**.

This view allows you to see:

* the full interaction with the AI system
* the prompts sent to the model
* the responses generated
* detected query fanouts
* extracted citations
* extracted statements

This transparency allows teams to understand exactly **why a brand appeared or did not appear in an AI answer**.

---

## Re-running Conversations

Conversations are normally executed automatically each day.

However, they can also be re-run when:

* a scenario is updated
* a new scenario is added
* a topic is modified

This allows you to quickly test new scenarios and observe how AI systems respond.

---

## Next Steps

To understand the structure of the data extracted from conversations, see:

* [Core Concepts -> Query Fanouts](../core-concepts/query-fanouts.html)
* [Core Concepts -> Citations](../core-concepts/citations.html)
* [Core Concepts -> Statements](../core-concepts/statements.html)

These pages explain how Genezio converts AI responses into structured insights.
