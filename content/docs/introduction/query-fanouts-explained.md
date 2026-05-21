# Query Fanouts Explained

When a user asks a question to an AI system such as ChatGPT, Claude, Gemini, or Perplexity, the model rarely relies on the exact question alone to generate an answer.

Instead, the system expands the original question into multiple related searches in order to gather more information. These expanded searches are called **follow-up searches (called query fanouts)**.

Query fanouts help the AI system explore a topic from several angles, retrieve more relevant sources, and generate a more complete answer.

---

## What Is a Query Fanout?

A **query fanout** is an additional search query generated internally by the AI system to support answering the user's question.

Rather than searching for a single phrase, the system produces several variations and related questions that help it gather information from different sources.

For example, a user might ask:

> **User query:** ***What are the best running shoes for marathon training?***

The AI system may internally generate queries such as:

* best marathon running shoes
* long distance running shoe reviews
* nike vs adidas marathon shoes
* best racing shoes for marathon runners
* top cushioned marathon shoes

These queries allow the system to retrieve content covering different perspectives on the topic.

---

## Why Answer Engines Use Query Fanouts

User questions are often broad, ambiguous, or incomplete. A single search query may not retrieve enough information to generate a high-quality answer.

Query fanouts help the AI system:

* explore multiple interpretations of a question
* retrieve information from different sources
* compare alternatives
* validate claims across several documents

By expanding the search space, the model can build a more comprehensive understanding of the topic before generating its response.

---

## How Query Fanouts Influence Answers

The fanout queries determine which documents and sources are retrieved during the information gathering step.

Those sources then influence:

* which brands appear in the answer
* which sources are cited
* what claims are included
* how competitors are compared

For example, if a fanout query includes:

> **Query fanout:** ***best CRM for startups 2024***

The AI system may retrieve comparison pages, review articles, and vendor websites discussing startup CRMs. The brands mentioned in those sources are therefore more likely to appear in the final answer.

This means that **query fanouts strongly influence AI Recommendations and Visibility**.

---

## Example of Query Fanouts in Practice

Consider the question:

> **User query:** ***Which CRM is best for startups?***

Possible fanout queries may include:

* **Query fanout:** *best CRM software for startups*
* **Query fanout:** *HubSpot vs Pipedrive for small businesses*
* **Query fanout:** *affordable CRM tools for startups*
* **Query fanout:** *startup sales management software*
* **Query fanout:** *CRM comparison for early stage companies*

Each of these searches may retrieve different articles, reviews, or vendor pages. The information gathered from those sources is then combined into a single answer.

---

## Why Query Fanouts Matter for Brands

Because fanout queries determine which sources are retrieved, they also influence which brands appear in AI-generated answers.

If a brand is frequently mentioned in sources related to those fanout queries, it is more likely to appear in the final response.

If a brand is absent from those sources, it may not appear in the answer even if it is a strong product in the category.

Understanding query fanouts therefore helps organizations identify:

* what questions AI systems explore when answering a topic
* which sources influence the answer
* where their brand is missing from the information landscape

---

## How Genezio Uses Query Fanouts

Genezio extracts and analyzes query fanouts generated during AI conversations.

This allows teams to understand:

* what the AI system is actually searching for
* which queries drive source retrieval
* which topics influence brand visibility
* where new content opportunities exist

For example, if Genezio detects that AI systems frequently explore queries such as:

* "best CRM for early stage startups"
* "CRM tools for SaaS founders"

but a brand has little content or coverage around those topics, that gap may represent an opportunity to improve AI Recommendations and Visibility.

---

## Query Fanouts vs Keywords

Query fanouts are similar to keywords but reflect how AI systems explore a topic rather than how users type short search queries.

Traditional SEO often focuses on optimizing pages for individual keywords.

In AI-powered search, understanding the broader set of fanout queries can be more important because these queries determine which sources are retrieved during answer generation.

---

## Next Steps

To learn how fanout queries influence AI answers, continue with:

* [Core Concepts -> Citations](../core-concepts/citations.html)
* [Core Concepts -> Statements](../core-concepts/statements.html)
* [Insights -> Visibility Score](../insights/ai-visibility-score.html)

These pages explain how Genezio analyzes AI responses and transforms them into structured insights.
