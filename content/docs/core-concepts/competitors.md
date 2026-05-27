# Competitors

In Genezio, **competitors** are brands that appear in AI-generated answers alongside the brand being analyzed.

When AI systems respond to questions, they frequently recommend or compare multiple products or services within the same category. Genezio automatically detects these brands and classifies them as **competitors**.

Competitors are tracked at the **brand level**. Each brand you create in Genezio has its own competitor landscape. For multi-product companies, this is why product modeling matters: if each product has distinct competitors and its own brand presence, separate brands per product gives the cleanest view. If the parent brand is strong but the products don't have independent brand recognition, one brand with [Products](products.html) is the better fit. See [Brands -> Multi-Product Companies](brands.html#multi-product-companies) for the full decision.

Tracking competitors helps organizations understand how their brand is positioned relative to alternatives in AI-generated answers.

---

## Automatic Competitor Detection

Genezio automatically identifies competitor brands during conversation analysis.

Competitors are detected when:

* an AI response recommends multiple products
* brands are mentioned in the same answer
* products are compared against each other
* sources cited by the AI reference competing brands

For example, if a conversation asks about tools for managing customer relationships, the AI system might mention several products in the same answer. These brands are automatically extracted and tracked as competitors.

By aggregating these mentions across many conversations, Genezio builds a **competitor landscape** for each topic.

---

## Competitors Across Topics

Competitors can vary depending on the topic being analyzed.

For example, a brand may compete with different products depending on the user's intent or scenario.

Example:

* Topic: CRM for startups
* Topic: marketing automation platforms

The set of competitors appearing in AI answers may differ between these topics.

This helps organizations understand how AI systems interpret the competitive landscape for different problems.

---

## Managing Competitors

While competitor detection is automatic, users can adjust the competitor list to better reflect their market.

Genezio allows users to:

### Promote Competitors

If a relevant competitor is detected but not strongly represented, users can **promote** the brand so it is treated as a primary competitor in analysis.

---

### Demote Competitors

Sometimes AI systems mention brands that are not true competitors.

Users can **demote** these brands so they are treated as less relevant in competitive analysis.

---

### Merge Competitors

Different names or variations may refer to the same brand.

For example, a brand might appear with slightly different naming variations across responses.

Genezio allows users to **merge competitor entries** so that all mentions are consolidated under a single brand.

This keeps analysis consistent across conversations.

---

### Attach Competitors to Your Brand

In some cases, a detected competitor may actually belong to the analyzed brand.

Examples include:

* sub-brands
* acquired companies
* product lines belonging to the same organization

Users can **attach these entities to their brand**, ensuring they are treated as part of the same brand rather than as a competitor.

---

## Competitors in Analysis

Once detected, competitors are used throughout the platform to generate insights.

Competitor data helps power metrics such as:

* **AI Recommendations and Visibility comparisons**
* **Share of Voice**
* **Competitive positioning in AI answers**
* **topic-level brand presence**

This allows teams to see not only how often their brand appears, but also **which brands dominate the conversation**.

---

## Competitors in the Interface

Competitors appear across several parts of the Genezio interface, including:

* topic analysis views
* visibility comparisons
* conversation details
* citation analysis

Users can inspect how competitors appear in specific conversations and which sources reference them.

---

## Why Competitor Analysis Matters

AI assistants increasingly shape how users discover and compare products.

Understanding which brands appear alongside yours helps answer questions such as:

* Which competitors does AI recommend most often?
* Which competitors dominate certain topics?
* Which sources mention competitors but not your brand?

These insights help organizations identify opportunities to improve their AI Recommendations and Visibility.

---

## Next Steps

To see how competitor data contributes to visibility metrics, continue with:

* [Insights -> Visibility Score](../insights/ai-visibility-score.html)
* [Insights -> Share of Voice](../insights/share-of-voice.html)

These pages explain how Genezio converts conversation data into measurable AI visibility insights.
