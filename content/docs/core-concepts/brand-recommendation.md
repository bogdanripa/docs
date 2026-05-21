# Brand Recommendation

In Genezio, **Brand Recommendation** measures how often answer engines actively recommend your brand when users ask for a solution.

It answers the most important question for any marketing team:

**When users ask AI assistants to recommend a product or service in your category, how often is your brand the one they suggest?**

Brand Recommendation is expressed as a **percentage of recommendation-focused conversations where the brand is recommended**.

---

## What Brand Recommendation Represents

When Genezio runs conversations that simulate users looking for recommendations, the answer engine may or may not recommend your brand.

Examples of being recommended:

* The AI names your brand as a top choice
* The AI lists your brand among its recommended solutions
* The AI suggests your brand as a good fit for the user's specific needs

If the brand is actively recommended in the response, that conversation counts as a **recommendation**.

If the brand is not recommended — even if it's mentioned in passing — it does not count.

---

## How Brand Recommendation Is Calculated

Brand Recommendation is calculated as:

```
Brand Recommendation = (Conversations where the brand is recommended / Conversations where the brand is visible) x 100
```

The denominator is not all conversations — it's only the ones where your brand actually appeared. This means Brand Recommendation measures your **conversion rate from visibility to recommendation**.

### Worked Example

Say Genezio runs **200 conversations** for your topics:

* Your brand appeared in **80** of them → AI Visibility = 80 / 200 = **40%**
* Of those 80 visible conversations, your brand was recommended in **48** → AI Recommendation = 48 / 80 = **60%**

This means:

* Your brand shows up in 40% of all AI conversations (Visibility)
* When it does show up, it gets recommended **60% of the time** (Recommendation)
* The remaining 40% of visible conversations mentioned your brand but didn't recommend it

The denominator is **visible conversations, not total conversations**. Recommendation % measures your conversion rate from being mentioned to being the suggested choice.

---

## Which Conversations Are Included

Brand Recommendation is a **brand-level metric** calculated from conversations where the answer engine decides on its own which brands to recommend, based on the user's needs.

The metric is generated from **Recommender Agent** conversations — scenario-driven, multi-step conversations where a persona asks the AI for a recommendation that matches their specific situation.

Example:

> **User query:** ***Recommend CRM tools for early-stage startups with a small sales team.***

The AI responds with its own choices. If your brand is among them, that's a recommendation. If it's not, you've lost that opportunity.

---

### What About Other Agent Types?

**Prompter Agent** — Contributes to AI Visibility (brand was mentioned) but does not specifically ask for a recommendation, so it is not used for AI Recommendations.

**Introspector Agent** — Used for narrative analysis and claim accuracy evaluation. Because your brand is named in the question, it doesn't reflect a genuine recommendation decision.

**Comparer Agent** — This is a **competitive analysis tool**, not a measurement engine. The Comparer uses your brand's recommendation and visibility data to show how you perform relative to specific competitors. It does not contribute to the calculation of AI Recommendations or AI Visibility.

---

## Why Brand Recommendation Matters

Brand Recommendation is the closest metric to a **buying decision** in AI search.

When a user asks an AI assistant *"What should I use?"* and the AI recommends your brand, that's the equivalent of a trusted advisor pointing a buyer your way.

A higher recommendation score means:

* answer engines trust your brand as a strong match for users' needs
* Your brand is actively suggested ahead of competitors
* Users who rely on AI for purchase decisions are being directed to you

A lower score means competitors are being recommended instead — and you're losing deals before the buyer even visits your website.

---

## Brand Recommendation vs. Brand Visibility

These two metrics work together but measure different things:

| | Brand Recommendation | Brand Visibility |
| --- | --- | --- |
| **What it measures** | Of the conversations where you're visible, how often are you recommended? | How often your brand appears at all in AI answers |
| **Denominator** | Conversations where brand appeared | All eligible conversations |
| **Which conversations** | Recommender | Prompter + Recommender |
| **Why it matters** | Your conversion rate from presence to purchase intent | Measures overall brand presence and awareness |
| **Business analogy** | Conversion rate — of the people who see you, how many choose you | Brand awareness — how many people have heard of you |

A brand can have high visibility (mentioned often) but low recommendation rate (rarely the suggested choice). That gap is your priority — it means answer engines know about you but don't trust you enough to recommend you.

---

## Brand Recommendation Over Time

Genezio tracks Brand Recommendation continuously as new conversations are executed.

This allows teams to observe trends such as:

* increasing recommendations after publishing better comparison content
* competitors gaining or losing recommendation share
* changes in how answer engines evaluate your brand against alternatives

Monitoring recommendations over time helps you see the direct impact of your marketing work on AI-driven purchase decisions.

---

## Next Steps

To understand the broader metric of how often your brand appears in AI answers, see:

* [Brand Visibility](brand-visibility.md)

To see how recommendation rates compare across competitors, see:

* [Insights -> Share of Voice](../insights/share-of-voice.html)
