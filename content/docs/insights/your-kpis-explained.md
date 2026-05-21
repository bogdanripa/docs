# Your KPIs Explained

*Genezio measures three core numbers. Here's what they mean, why they're different, and how to read them together on your monthly dashboard.*

---

## The Three Numbers That Matter

### KPI #1 — AI Recommendations %

**Formula:** Conversations where brand was recommended ÷ Conversations where brand was visible × 100

When answer engines mention your brand, how often do they go further and actually recommend it? This is your **conversion score** — the strongest signal of purchase intent. The denominator is only conversations where your brand appeared, so this measures your conversion rate from visibility to recommendation.

### KPI #2 — AI Visibility %

**Formula:** Conversations where brand appears ÷ Total eligible conversations × 100

How often does your brand show up in AI answers? This is your **presence score** — the broadest view of how frequently AI assistants mention, list, or reference your brand when answering questions in your category.

### KPI #3 — Share of Voice %

**Formula:** Mentions of your brand ÷ Mentions of all brands (you and competitors) × 100

What slice of the total category conversation is yours? This is your **market-share score** — the metric that maps most cleanly to how leadership thinks about brand presence. It counts every mention of you and your competitors across the answer engines Genezio monitors, so it captures the full conversation, not just the recommendation moments.

See [Share of Voice](share-of-voice.html) for the dedicated dashboard view that breaks SOV down by topic and competitor.

> **Simple analogy:** AI Recommendations is like word-of-mouth — people actively suggest you. AI Visibility is like brand awareness — people have heard of you. Share of Voice is market share — how much of the conversation is yours. You want all three, but each tells you something different.

---

## How These KPIs Are Measured

Both KPIs are **brand-level metrics**, calculated across all conversations Genezio runs for your brand. They are not tied to a single agent type — they are the output of Genezio's conversation analysis engine.

Here's how it works:

1. Genezio runs persona-driven, multi-step conversations with answer engines (ChatGPT, Claude, Gemini, Perplexity).
2. Each response is analyzed to extract which brands were mentioned, which were recommended, and what was said about each.
3. These signals are aggregated at the brand level to calculate your AI Recommendations % and AI Visibility %.

The conversations that feed these KPIs come from two agent types:

- **Prompter conversations** — open-ended discovery questions where the AI chooses which brands to mention. *"What are the best tools for X?"*
- **Recommender conversations** — scenario-driven, multi-step conversations where the AI recommends specific brands for the persona's situation. *"Recommend something for Y given these constraints."*

Both agent types let the AI decide freely which brands to surface. That's what makes the resulting metrics meaningful — they reflect organic brand presence and genuine recommendation decisions, not prompted mentions.

---

## What About Comparer and Introspector?

Genezio runs two additional agent types, but they serve a different purpose:

- **Introspector conversations** — *"Tell me about [your brand]."* These explore how AI describes your brand. Because your brand is named in the question, these conversations are used for **narrative and sentiment analysis**, not for calculating KPIs.

- **Comparer conversations** — *"[Brand A] vs [Brand B]."* These are a **competitive analysis tool**. The Comparer does not compute visibility or recommendations — it consumes the brand-level metrics that Genezio has already calculated and uses them alongside head-to-head AI conversations to show how your brand stacks up against specific competitors. Think of the Comparer as a lens for reading your KPIs, not the engine that generates them.

> **Key distinction:** Your AI Recommendations % and AI Visibility % come from Prompter and Recommender conversations. The Comparer helps you understand those numbers in a competitive context — it doesn't change or contribute to them.

---

## How to Read Your Scores

There's no universal "good" score — it depends on your category, competitive intensity, and how long you've been tracking. Here's a general benchmark framework:

| Score Range | What It Means | What to Do |
| --- | --- | --- |
| **0–15%** | Your brand is largely invisible in AI answers for this topic. Competitors dominate. | Urgent: create foundational content, get cited by authoritative sources, fix schema markup. |
| **15–35%** | You appear sometimes, but inconsistently. answer engines know you exist but don't prioritize you. | Focus: identify which sources cite competitors but not you, and close those gaps. |
| **35–60%** | Solid presence. You're a recognized brand in AI answers for this topic. | Grow: expand to adjacent topics, improve sentiment, increase recommendation rate. |
| **60%+** | Category leader. answer engines consistently include you in this topic area. | Defend: monitor competitor improvements, expand to new topics, protect share of voice. |

---

## A Practical Example

> **Scenario: CRM Software Brand**
>
> You track the topic *"CRM for startups"* across 200 AI conversations (Prompter + Recommender).
>
> **AI Visibility:** Your brand appears in 160 of 200 conversations → 160 / 200 = **80%**
>
> **AI Recommendations:** Of those 160 visible conversations, your brand was actively recommended in 96 → 96 / 160 = **60%**
>
> Note: the Recommendation denominator is **visible conversations (160)**, not total conversations (200). This tells you that when answer engines mention your brand, they recommend it 60% of the time.
>
> Your top competitor appears in 180 of 200 conversations (90% visibility) and is recommended in 144 of those 180 (80% recommendations). **That gap is your roadmap.**
>
> You then use the **Comparer** to run head-to-head conversations — *"Your brand vs. Competitor X"* — to understand exactly how answer engines frame the comparison and what narratives are driving the competitor's advantage.

---

## Why the Two KPIs Are Measured Separately

A brand can have high visibility but low recommendations — or the reverse. Understanding which scenario you're in tells you exactly what to fix:

| Pattern | What It Means | Action |
| --- | --- | --- |
| **High Visibility, Low Recommendations** | AI mentions you, but doesn't suggest you when asked to pick. You may be seen as secondary or niche. | Improve positioning content. Get cited in "best of" lists. Fix inaccurate claims AI makes about your brand. |
| **Low Visibility, High Recommendations** | When AI mentions you, it recommends you — but that's rare. You're a hidden gem. | Increase content volume. Get mentioned in more sources. Expand topic coverage. |
| **Both Low** | answer engines don't know enough about your brand to confidently mention or recommend you. | Start from scratch: content authority, citations, schema, PR. Use Genezio's Actionable Insights to prioritize. |
| **Both High** | You're a category leader in AI answers. Now protect it and expand. | Monitor competitor movements. Track new topics. Measure claim accuracy, not just mention frequency. |

---

## How to Report These KPIs to Leadership

For your monthly or quarterly marketing review, we recommend presenting:

- **AI Recommendations % by topic** — the single most business-relevant number
- **AI Visibility % by topic** — shows breadth of brand presence across answer engines
- **Share of Voice vs. top 2 competitors** — the competitive story (powered by the Comparer)
- **Month-over-month trend** — shows whether your content investments are working

> **Common mistake:** Don't benchmark your score against absolute numbers from other industries. A 40% AI Visibility in a crowded SaaS category may be excellent; 40% in a niche B2B space may indicate room to grow. Always compare against your direct competitors' scores within the same topic set.

---

*Next: [How the 5 Agents Work](../introduction/how-the-5-agents-work.md)*
