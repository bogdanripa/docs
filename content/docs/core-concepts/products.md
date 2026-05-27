# Products

**Products** let you slice a single brand's data by product line — so a multi-product company can stay as one brand in Genezio and still see how each product is doing individually.

A product is defined as a **set of topics**. When you create products and pick one from the product picker, every view in Genezio narrows to that product's topics: dashboards, conversations, insights, citations, share of voice, statements, everything.

---

## When to Use Products vs. Separate Brands

Genezio supports two ways to model a multi-product company. Picking the right one matters.

### Use Separate Brands When...

Your products have their own brand presence in answer engines:

* the products are well-known to answer engines **by their product names**
* customers and buyers refer to them directly by product name
* each product has its own distinct competitors

In this case, model each product as its own brand. Microsoft Word, Microsoft Excel, and Microsoft Teams are different brands to an answer engine — each has its own competitors (Google Docs, Google Sheets, Slack), its own buyer personas, and its own visibility story.

See [Brands -> Multi-Product Companies](brands.html#multi-product-companies).

### Use Products When...

Your **brand** is strong but your individual products don't carry their own brand recognition:

* customers know the company name, not the product names
* answer engines describe the products as offerings of the parent brand, not as standalone names
* products often share competitors, or the competitive set isn't sharply different per product
* you want a single source of truth at the brand level, with product-level slices on top

In this case, keep everything at the brand level and define **Products** to filter the data per product line.

### Quick Decision

| If... | Use |
| --- | --- |
| Each product has its own brand recognition and distinct competitors | **Separate brands** |
| The parent brand is strong; products don't have independent brand presence | **Products** (within one brand) |
| You're not sure | Start with one brand + Products. Splitting later is easy; merging later is harder. |

---

## How Products Work

A product is a **named set of topics**. That's the whole definition.

* Topics can be **shared across products**. The topic *"Customer support best practices"* might belong to your Sales product and your Service product at the same time.
* Topics that aren't tied to any product still exist on the brand — they just don't appear when a product filter is active.
* Products are managed at the brand level. Each brand has its own product list.

---

## Where to Set Them Up

Products are defined in **Settings**.

You give each product a name and pick the topics that belong to it. Once at least one product is defined, a **product picker** appears in the main header — letting you switch the entire view between products (or back to the "all products" default).

---

## The Product Picker

The picker appears in the **main header** only when one or more products are defined for the brand. If you haven't created any products, the picker stays hidden and Genezio behaves as it always has.

When you pick a product:

* **dashboards** show metrics for the topics in that product
* **conversations** filter to that product's topics
* **insights** are scoped to that product's data
* **citations**, **SOV**, **statements**, **competitors** — every view narrows to that product

The default view is **all products** — the brand-wide picture, untouched by any product filter. The picker is an optional lens you opt into.

---

## A Typical Setup

A consumer-electronics company, for example, with three product lines:

1. The company creates one brand for itself.
2. In Settings, it defines three products: *Headphones*, *Speakers*, *Wearables*.
3. Topics that apply to all three (e.g., *"Brand reputation"*) are attached to all three products — or left at the brand level if leadership cares about them company-wide.
4. Topics specific to one line (e.g., *"Noise-cancelling headphones for travel"*) belong only to *Headphones*.
5. The product picker appears in the header. The marketing manager for *Headphones* uses the picker daily to see just their slice; the CMO leaves it on "all products" for the company-wide view.

---

## Products and the Rest of the Platform

Because the picker filters at the data level, Products work cleanly with the rest of Genezio:

* the [Geo Assistant](../geo-assistant/geo-assistant.html) respects the current product filter when answering questions
* [Insights](../insights/actionable-insights.html) and [Share of Voice](../insights/share-of-voice.html) reflect the active product
* exporting reports for stakeholder reviews picks up the product context
* [Topic Tags](../getting-started/topic-tags.html) still work independently — you can have *Headphones* (product) and *Pricing* (tag) on the same topic

---

## Related Pages

* [Brands](brands.html)
* [Topics](topics.html)
* [Topic Tags](../getting-started/topic-tags.html)
* [Competitors](competitors.html)
