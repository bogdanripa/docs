# Getting Started

This guide walks you through the initial setup process in Genezio. The setup is designed to quickly create the data needed to measure your brand's AI Recommendations and Visibility across AI systems such as ChatGPT, Claude, Gemini, and Perplexity.

The process takes only a few minutes and results in a complete set of topics and scenarios that Genezio will use to run AI conversations.

---

## Step 1: Create Your Account

To begin, go to:

[https://app.genezio.ai/sign-up](https://app.genezio.ai/sign-up)

During signup you will be asked to provide a few basic details about your brand:

* **Brand name**
* **Website URL**
* **Main customer country**
* **Main customer language**

This information allows Genezio to understand the market and audience your brand serves.

---

## Step 2: Confirm Your Brand Description

After the initial information is submitted, Genezio automatically generates a **brand description**.

This description summarizes:

* what your brand does
* the category it belongs to
* the type of customers it serves

The generated description is shown to you for review.

You can:

* confirm it if it is correct
* edit it if adjustments are needed

Confirming this description ensures that Genezio understands how your brand should be represented in AI conversations.

---

## Step 3: Confirm the Customer Profile

Next, Genezio generates a **customer profile description** based on your brand and market.

This profile represents the typical person who might search for solutions like yours using an AI assistant.

The description may include details such as:

* the type of user
* their goals
* the problems they are trying to solve

You can review and edit this description before confirming it.

This profile helps Genezio simulate realistic user questions in later steps.

---

## Step 4: Confirm Topics

Once the customer profile is confirmed, Genezio generates a set of **topics**.

Topics represent the areas where users might ask AI systems questions related to your brand or category.

Examples of topics might include:

* CRM for startups
* sales automation tools
* marketing automation platforms

You can review, edit, or remove topics before confirming them.

Topics determine the areas where Genezio will measure AI Recommendations and Visibility.

---

## Step 5: Confirm Scenarios

For each topic, Genezio generates setup elements used to simulate different user intents.

In practice, there is an important distinction between Genezio Agent types.

### Prompter Agent

The **Prompter Agent** is an agent type where the text is sent to the answer engine as a direct prompt.

It is not scenario-based like the other agent types.

Example:

```
What CRM should a startup use?
```

### Recommender Agent

Scenario-based agent type focused on direct recommendation requests.

Example:

```
Recommend CRM tools for early-stage startups.
```

### Introspector Agent

Scenario-based agent type focused on understanding a specific brand.

Example:

```
What is HubSpot used for?
```

You can review and edit these scenarios before confirming them.

Genezio also supports **comparer scenarios** (for example, comparing two brands), but these are typically added later during deeper analysis.

---

## Step 6: Start Your Free Trial

After confirming your scenarios, your **free trial begins**.

At this point Genezio automatically starts running conversations with AI systems in the background.

These conversations simulate users asking the scenarios you confirmed.

---

## Step 7: Conversations Run in Real Time

As conversations are executed, you can watch them run in real time inside the Genezio interface.

For each conversation, Genezio:

* sends the scenario prompt to the AI system
* captures the response
* extracts mentions of brands
* detects citations and sources
* extracts and evaluates statements (claims) for accuracy

This process builds the dataset used to calculate AI Recommendations and Visibility.

---

## Step 8: Explore Your Brand Overview

Once conversations begin running, you are taken to your **Brand Overview** page.

This dashboard provides a high-level view of your AI Recommendations and Visibility.

From here you can:

* see how often your brand appears in AI answers
* view competitors appearing in the same conversations
* explore which sources influence AI responses
* analyze visibility across different topics

You can then dive deeper into specific conversations, topics, or insights to better understand how AI systems represent your brand.

---

## Next Steps

To better understand the concepts behind these results, see:

* [Introduction -> What KPIs Are We Measuring](./introduction/what-kpis-are-we-measuring.html)
* [Introduction -> How LLM Search Works](./introduction/how-llm-search-works.html)
* [Core Concepts -> Topics](./core-concepts/topics.html)

These pages explain the underlying concepts used throughout Genezio.
