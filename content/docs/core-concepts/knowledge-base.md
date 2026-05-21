# Knowledge Base

The **Knowledge Base** is your brand's source of truth inside Genezio.

It's a corpus of documents, pages, and notes you maintain — the things you'd point to if someone asked, "what's actually true about your brand?" The platform uses it to check what answer engines are saying about you against what your own materials say.

---

## Why a Knowledge Base Exists

Answer engines make claims about brands constantly. Some are accurate; some are outdated; some are flat-out wrong.

Until now, telling the difference required a human to read each statement and check it against an internal source. The Knowledge Base automates that comparison. You provide the truth once, and the platform uses it as the reference every time a statement about your brand gets extracted from an answer engine conversation.

This is the foundation for an **accuracy audit loop**:

* the platform observes what answer engines say about you
* the Knowledge Base says what's actually true
* the two get compared, and you see where they agree and where they don't

---

## Where to Set It Up

The Knowledge Base lives under **Brand Settings → Knowledge Base**.

Setting it up is a one-time configuration step per brand. Once it's in place, it works in the background — every new statement extracted from conversations is checked against it automatically.

### You Start With One Already

You don't begin from an empty Knowledge Base.

When a brand is created, Genezio automatically crawls the **brand's website** and adds it as the first Knowledge Base item. That means grounded-statement checks work from day one, using your public site as the initial source of truth — even if you've done no other setup.

From there, you build the Knowledge Base out by adding the documents, URLs, and free-text snippets that your website doesn't cover.

---

## What You Can Put In It

The Knowledge Base accepts three kinds of input, so you can use whatever format your truth lives in today:

* **Documents** — upload datasheets, FAQs, positioning docs, internal one-pagers, or any other file that captures brand truth
* **URLs** — point at pages that already represent your official messaging (your product pages, your about page, your pricing page, partner pages)
* **Free-text snippets** — paste in facts, definitions, or correction notes that don't live in a document yet ("our pricing starts at $X", "we do not offer a free tier", "our HQ is in Berlin, not San Francisco")

Mix and match. A typical Knowledge Base for a mature brand has a handful of authoritative documents, links to a few canonical pages, and a growing list of free-text corrections captured over time.

---

## What to Put In It

Think about the claims an answer engine would need to get right when describing your brand:

* **Products and capabilities** — what you sell, what each product actually does
* **Pricing and plans** — current tiers, what's included, what isn't
* **Target audience and use cases** — who you're for and who you're not for
* **Competitive differentiators** — the messaging that distinguishes you
* **Facts that get mistaken** — the things answer engines have already gotten wrong about you (a great signal: anything you've corrected in a sales call belongs here)
* **Official statements and brand guidelines** — positioning documents, key messaging, taglines, do-not-say lists

Quality matters more than volume. A small, accurate, current Knowledge Base is more useful than a large, stale one.

---

## How It's Used

Once a Knowledge Base is in place, it powers two things in the platform today:

### Grounded Statements

Every statement extracted from an answer engine conversation gets checked against your Knowledge Base. Statements that can be verified get a **grounded** badge with one of three states:

* **Grounded-correct** — the statement matches what your Knowledge Base says
* **Grounded-incorrect** — the statement contradicts what your Knowledge Base says
* **Not grounded** — the statement couldn't be verified either way against your Knowledge Base

This is the accuracy audit, made visible. See [Statements](statements.html) for how grounded statements appear in the platform.

### Reporting and Insights

Grounded statements flow into the platform's reporting. You can see the proportion of statements about your brand that are correct, incorrect, or unverifiable — and dig into the specific ones that are getting it wrong, so you can fix the source (your website, your docs, or your Knowledge Base itself).

---

## Strength of the Knowledge Base

Because every brand starts with its website crawled in, the grounded layer is active from day one. But the **strength** of the signal depends on how much truth your Knowledge Base actually covers.

If your website is detailed and current, the initial crawl alone delivers a lot of value. If it's sparse, marketing-heavy, or doesn't include pricing, specifications, or positioning detail, the platform won't be able to verify as many statements — and you'll see more "not grounded" badges than you'd like.

That's the nudge to extend the Knowledge Base: add the documents, URLs, and snippets that fill the gaps your website leaves.

---

## Maintaining the Knowledge Base

The Knowledge Base is a living asset. Treat it like a brand book that gets edited:

* **Update it when your brand changes** — new product, new pricing, new positioning
* **Add to it when you spot an incorrect statement** — if answer engines keep saying something untrue, document the correction in the Knowledge Base so the platform can flag future occurrences
* **Prune it when documents go stale** — outdated truth is worse than no truth

The more current and accurate the Knowledge Base, the more trustworthy the grounded signal becomes.

---

## Related Pages

* [Statements](statements.html)
* [Brands](brands.html)
* [Competitors](competitors.html)
