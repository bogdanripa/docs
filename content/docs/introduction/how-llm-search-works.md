# How LLM Search Works

answer engines such as ChatGPT, Claude, Gemini, and Perplexity answer questions differently from traditional search engines.

Instead of returning a list of links, these systems generate an AI-generated answer by retrieving information from multiple sources and combining it into a single response.

Understanding how this process works helps explain why certain brands, sources, and claims appear in AI-generated answers.

---

## The Traditional Search Model

In traditional search engines, the interaction usually follows this pattern:

1. A user enters a search query.
2. The search engine retrieves pages from its index.
3. Pages are ranked according to relevance and authority.
4. The user selects one or more links to visit.

Visibility is therefore determined by **ranking position** and **click-through rate**.

---

## The Answer Engine Search Model

AI-engine-powered systems follow a different process.

Instead of returning links, they generate a direct answer based on information retrieved from multiple sources.

A simplified flow looks like this:

1. The user asks a question.
2. The AI system expands the query into multiple related searches.
3. Relevant documents and sources are retrieved.
4. The model combines information from those sources.
5. A natural language answer is generated.
6. Some systems include citations or links to sources.

Because the final answer is AI-generated, visibility is determined by **whether a brand or source is included in the generated response**, not only whether its webpage ranks highly.

---

## Step 1: The User Question

The process begins when a user asks a question in natural language.

Examples:

> **User query:** ***What are the best running shoes for marathon training?***

> **User query:** ***Which CRM is best for startups?***

> **User query:** ***What is the best ski resort in Switzerland for beginners?***

Unlike traditional keyword search, these questions are often longer and more conversational.

---

## Step 2: Query Expansion

answer engines rarely rely on the original question alone.

Instead, they expand it into several related queries to gather more information. These expanded searches are often referred to as **follow-up searches (called query fanouts)**.

For example, the question:

> **User query:** ***What are the best running shoes for marathon training?***

may internally expand into queries such as:

* best marathon running shoes
* long distance running shoes reviews
* nike vs adidas marathon shoes
* top marathon racing shoes

This process allows the AI system to explore multiple perspectives and retrieve a broader set of sources.

---

## Step 3: Retrieval of Sources

The system then retrieves information from various sources on the web.

These sources may include:

* brand websites
* editorial articles
* product reviews
* comparison pages
* forums and communities
* news sites

The retrieved documents provide the factual material used to generate the final answer.

---

## Step 4: Synthesis

After retrieving relevant information, the model analyzes and combines it.

Rather than quoting a single page, the model may merge information from several sources to produce a coherent explanation.

For example, an answer might include:

* a list of recommended products
* summaries of key advantages
* comparisons between alternatives

This synthesis step is one of the main differences between AI-generated answers and traditional search results.

---

## Step 5: Answer Generation

Finally, the model produces a natural language response.

An answer might look like this:

> Popular marathon running shoes include the Nike Alphafly, Adidas Adios Pro, and Saucony Endorphin Elite due to their energy return and lightweight design.

Depending on the system, the response may also include:

* links to sources
* citations
* follow-up suggestions
* additional context

---

## Why This Matters for Visibility

Because answer engines generate an AI-generated answer, users may interact primarily with the response itself rather than clicking through multiple links.

This means that visibility depends on:

* whether a brand is mentioned
* whether its website is cited
* whether it appears in comparisons or recommendations

A brand can therefore have strong search rankings but limited presence in AI answers if it is rarely referenced or associated with the topic.

---

## What This Means for Organizations

Organizations that want to appear in AI-generated answers need to understand how answer engines gather and combine information.

Important factors include:

* how clearly a brand is associated with a topic
* whether authoritative sources reference the brand
* whether the brand's own content answers common user questions
* how competitors are represented in the same category

Because AI-engine answers are generated from multiple sources, visibility depends on a broader web presence rather than a single optimized page.

---

## How Genezio Analyzes This Process

Genezio helps teams understand how answer engine search works in practice.

It does this by:

* running realistic conversations with AI systems
* extracting the queries the model explores
* identifying the sources used in answers
* detecting brand mentions and citations
* comparing visibility across competitors

This allows organizations to observe how AI systems interpret their category and how their brand appears within those answers.

---

## Next Steps

To continue learning about how AI systems retrieve and use information, see:

* [Introduction -> Query Fanouts Explained](./query-fanouts-explained.html)
* [Core Concepts -> Citations](../core-concepts/citations.html)
* [Core Concepts -> Statements](../core-concepts/statements.html)

These pages explain how Genezio extracts structured insights from AI-generated answers.
