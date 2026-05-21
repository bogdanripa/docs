const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(process.cwd(), 'dist');
const ASSET_DIR = path.join(OUT_DIR, 'assets');
const CONTENT_DIR = path.join(process.cwd(), 'content');
const standaloneDocs = [];

const sections = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Step-by-step onboarding for new teams.',
    pages: [
      'Setup Guide',
      'Create an Account',
      'Create Your First Brand',
      'Describe Your Brand',
      'Define Topics',
      'Create Scenarios',
      'Run Your First Conversations',
      'Understanding Your First Results',
      'Generating Personas from Documents',
      'Customizing Your Dashboard',
      'Topic Tags',
      'Your First Week'
    ]
  },
  {
    slug: 'introduction',
    title: 'Introduction',
    description: 'Understand AI Recommendations, Visibility, and how Genezio works.',
    pages: [
      'What is Genezio?',
      'Why AI Recommendations Matter',
      'How LLM Search Works',
      'Query Fanouts Explained',
      'How LLMs Select Sources',
      'How AI Citations Work',
      'What KPIs Are We Measuring',
      'How Genezio Measures Visibility',
      'How the 5 Agents Work'
    ]
  },
  {
    slug: 'core-concepts',
    title: 'Core Concepts',
    description: 'Learn the core data model used across the platform.',
    pages: [
      'Brands',
      'Brand Recommendation',
      'Brand Visibility',
      'Users',
      'Personas',
      'Topics',
      'Scenarios',
      'Topic / Scenario Relevance',
      'Conversations',
      'Query Fanouts',
      'Citations',
      'Statements',
      'Competitors',
      'Knowledge Base'
    ]
  },
  {
    slug: 'genezio-agents',
    title: 'Genezio Agents',
    description: 'Agent types used to run conversations in Genezio.',
    pages: ['Prompter Agent', 'Recommender Agent', 'Introspector Agent', 'Comparer Agent', 'Fact Checker Agent']
  },
  {
    slug: 'analysis',
    title: 'Running Conversations',
    description: 'Configure and run analysis workflows.',
    pages: [
      'Creating Scenarios',
      'Selecting Answer Engines',
      'Running Conversations',
      'Sentiment Analysis',
      'Playground'
    ]
  },
  {
    slug: 'insights',
    title: 'Insights',
    description: 'Interpret metrics and translate them into decisions.',
    pages: [
      'Your KPIs Explained',
      'AI Visibility Score',
      'Share of Voice',
      'Competitor Insights',
      'SWOT Analysis',
      'Sentiment Analysis',
      'Most Cited Sources',
      'Content Opportunities',
      'Actionable Insights'
    ]
  },
  {
    slug: 'content-hub',
    title: 'Content Hub',
    description: 'Create and optimize source-worthy content.',
    pages: [
      'Content Hub',
      'From Data to Content Strategy',
      'Generating Articles',
      'Briefs',
      'Content Analysis',
      'Using Query Fanouts for Content',
      'Selecting Tone of Voice',
      'Selecting Target Audience',
      'Editing Articles',
      'Chatting with Your Article',
      'Publishing Content'
    ]
  },
  {
    slug: 'geo-assistant',
    title: 'Geo Assistant',
    description: 'Chat with your brand data — investigate, report, and decide what to do next.',
    pages: [
      'Geo Assistant',
      'Send to Geo',
      'Sessions and History',
      'Actions Geo Can Take'
    ]
  },
  {
    slug: 'improving-ai-visibility',
    title: 'Improving AI Visibility',
    description: 'Optimization strategy for GEO/AEO workflows.',
    pages: [
      'How LLMs Choose Sources',
      'Entity Reinforcement',
      'Structuring Content for LLMs',
      'Semantic Topic Coverage',
      'Building Authority',
      'Backlinks and Citations',
      'Updating Content',
      'Monitoring AI Visibility'
    ]
  },
  {
    slug: 'dashboards',
    title: 'Dashboards & Metrics',
    description: 'Use dashboards to track movement over time.',
    pages: [
      'Visibility Score Explained',
      'Share of Voice',
      'Topic Performance',
      'Scenario Performance',
      'Citation Frequency',
      'Competitor Comparison',
      'Trend Tracking'
    ]
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    description: 'Connect Genezio with your analytics stack.',
    pages: [
      'Google Analytics Integration',
      'CDN Log Integration',
      'Data Exports',
      'Webhooks',
      'External Reporting Tools'
    ]
  },
  {
    slug: 'api',
    title: 'API Documentation',
    description: 'Programmatic access for agencies and technical teams.',
    pages: [
      'Authentication',
      'Run Conversations API',
      'Query Fanouts API',
      'Citations API',
      'Insights API',
      'Rate Limits',
      'Example Requests',
      'SDK Examples'
    ]
  },
  {
    slug: 'security',
    title: 'Security & Data',
    description: 'Security, governance, and compliance policies.',
    pages: [
      'Data Collection',
      'Privacy',
      'Security Architecture',
      'Certifications',
      'Data Retention',
      'Compliance'
    ]
  },
  {
    slug: 'tutorials',
    title: 'Tutorials',
    description: 'End-to-end guides for real team workflows.',
    pages: [
      'Improve AI Visibility for an Ecommerce Brand',
      'Improve AI Visibility for a SaaS Company',
      'Track Competitors in AI Search',
      'Generate Content That LLMs Cite',
      'Monitor Brand Reputation in AI'
    ]
  },
  {
    slug: 'faq',
    title: 'FAQ',
    description: 'Common questions and troubleshooting.',
    pages: [
      'How often should I run conversations?',
      'Why do LLM results change?',
      'Why is my brand not cited?',
      'How does Genezio detect competitors?',
      'How accurate are AI visibility scores?'
    ]
  }
];

const quickLinks = [];

let enabledSections = [];
let enabledStandaloneDocs = [];

const PARTIAL_SECTIONS = new Set(['insights', 'content-hub']);

const PAGE_OVERRIDES = {
  'introduction::What is Genezio?': {
    summary:
      'Genezio is an AI Visibility platform that helps brands measure and improve how they are mentioned, recommended, cited, and positioned inside AI-generated answers.',
    goals: [
      'Understand the shift from traditional search rankings to AI answer visibility.',
      'Map AI visibility signals to marketing outcomes: mention share, recommendation rate, and citation quality.',
      'Use Genezio as an operating system for weekly optimization, not only a report.'
    ],
    workflow: [
      'Pick one brand and one market as your initial scope.',
      'Run baseline conversations across your highest-intent topics.',
      'Review mentions, citations, competitors, and statements together.',
      'Convert findings into a weekly optimization backlog.'
    ]
  },
  'introduction::What is AI Visibility?': {
    summary:
      'AI Visibility is the degree to which your brand appears and is positioned well in LLM answers when users ask decision-making questions.',
    goals: [
      'Differentiate AI visibility from classic SEO rank tracking.',
      'Track the right outcomes: mentions, recommendations, citations, sentiment, and share of voice.',
      'Set baseline metrics that can be improved week over week.'
    ],
    workflow: [
      'Choose one product category and one audience segment.',
      'Define 20-40 high-intent scenarios users actually ask.',
      'Measure current mention and recommendation frequency.',
      'Prioritize the top gaps where your brand is missing or mispositioned.'
    ]
  },
  'introduction::How LLM Search Works': {
    summary:
      'LLMs convert conversation context into internal web queries, retrieve sources, then synthesize recommendations from those sources and model priors.',
    goals: [
      'Understand why AI responses vary by prompt context, persona, and location.',
      'See how internal LLM search queries affect citations and recommendations.',
      'Translate LLM query behavior into content planning decisions.'
    ],
    workflow: [
      'Start from one real buyer question.',
      'Inspect the fanout queries triggered by that question.',
      'Review which sources are cited and which competitors are surfaced.',
      'Update your content plan based on repeated high-value query patterns.'
    ]
  },
  'introduction::Query Fanouts Explained': {
    summary:
      'Query fanouts are the multiple hidden searches an LLM performs to answer one user question, especially in complex comparison and recommendation prompts.',
    goals: [
      'Understand why a single conversation can trigger many search intents.',
      'Use fanouts to discover the exact questions AI systems try to answer.',
      'Identify which fanouts lead to competitor wins versus brand wins.'
    ],
    workflow: [
      'Run conversations with multi-turn follow-ups.',
      'Extract fanouts for each turn and group by intent.',
      'Match fanouts to resulting citations and statements.',
      'Prioritize content creation for high-frequency fanouts where your brand is absent.'
    ]
  },
  'introduction::How LLMs Select Sources': {
    summary:
      'LLMs select sources based on relevance, perceived authority, freshness, and contextual fit for persona and geography.',
    goals: [
      'See why authoritative third-party domains often shape AI answers.',
      'Understand how language and location alter source selection.',
      'Design pages and evidence assets that are easier for LLMs to trust and cite.'
    ],
    workflow: [
      'Identify your most cited third-party and competitor domains.',
      'Audit missing first-party pages for key decision questions.',
      'Publish clearer comparison, pricing, and proof-focused content.',
      'Rerun analysis and track first-party citation lift.'
    ]
  },
  'introduction::How AI Citations Work': {
    summary:
      'AI citations are the visible output of hidden LLM search behavior and strongly influence the credibility of recommendations.',
    goals: [
      'Track first-party versus third-party citation share.',
      'Find negative or outdated citations influencing brand perception.',
      'Use citation-level data to guide PR, SEO, and content updates.'
    ],
    workflow: [
      'Review citation domains by frequency and sentiment.',
      'Classify citations as first-party, partner, competitor, or independent media.',
      'Correct outdated claims in high-impact sources.',
      'Measure whether citation quality and recommendation rate improve.'
    ]
  },
  'introduction::How Genezio Measures Visibility': {
    summary:
      'Genezio measures visibility by running persona-aware, location-aware conversations across models and extracting mentions, citations, competitors, statements, and sentiment.',
    goals: [
      'Understand the difference between one-shot prompt testing and conversation-based measurement.',
      'Learn why persona and geography are mandatory dimensions for reliable analysis.',
      'Connect extracted signals to a repeatable weekly decision process.'
    ],
    workflow: [
      'Define brand, persona, topics, and scenarios.',
      'Run conversations across selected LLMs.',
      'Analyze extracted entities and trends by topic and persona.',
      'Ship one optimization sprint and compare against baseline.'
    ]
  },
  'getting-started::Run Your First Conversations': {
    summary:
      'Your first run should simulate realistic customer dialogue, not isolated prompts. Use persona-specific and location-specific setup before execution.',
    goals: [
      'Run a first conversation set that reflects real customer decision paths.',
      'Validate mention, citation, and competitor extraction quality.',
      'Establish a baseline snapshot for future optimization.'
    ],
    workflow: [
      'Select one topic with clear commercial intent.',
      'Attach a realistic persona (role, constraints, region, language).',
      'Run a multi-turn conversation with follow-up constraints.',
      'Inspect citation and competitor changes across turns.'
    ],
    metrics: ['Run completion rate', 'Extracted entities per run', 'Baseline recommendation rate']
  },
  'getting-started::Create an Account': {
    summary:
      'Create your account and define the ownership model early so governance stays clean as more teams join.',
    goals: [
      'Choose the right account type for brand or agency use.',
      'Set secure access defaults from day one.',
      'Prepare your workspace for scalable onboarding.'
    ],
    workflow: [
      'Sign up with your primary company identity provider.',
      'Confirm owner access and backup admin ownership.',
      'Enable baseline security settings and invite core users only.',
      'Document who is responsible for brand-level access decisions.'
    ],
    metrics: ['Time to account activation', 'Owner assignment completeness', 'Security setup completion']
  },
  'getting-started::Create Your First Brand': {
    summary:
      'Set up one brand with clear naming, website scope, and market boundaries to avoid noisy analysis.',
    goals: [
      'Define a brand entity that maps to real market perception.',
      'Avoid overlap between product lines during initial setup.',
      'Create a stable anchor for all future reporting.'
    ],
    workflow: [
      'Add official brand name and canonical website domain.',
      'Set primary region and language for first analysis cycle.',
      'Add concise brand description with core value proposition.',
      'Validate brand scope with marketing and product stakeholders.'
    ],
    metrics: ['Brand setup completeness', 'Scope clarity score', 'Stakeholder sign-off status']
  },
  'getting-started::Describe Your Brand': {
    summary:
      'A precise brand description improves scenario generation quality and helps models evaluate your brand in the right context.',
    goals: [
      'Document core positioning in clear, non-promotional language.',
      'Capture differentiators that matter in comparisons.',
      'Align description with current GTM and target customer.'
    ],
    workflow: [
      'Write a short brand statement focused on real customer value.',
      'Add category terms, use cases, and key differentiators.',
      'Include constraints honestly (price tier, region, integrations).',
      'Review for clarity and remove vague marketing claims.'
    ],
    metrics: ['Description completeness', 'Scenario relevance quality', 'Positioning consistency']
  },
  'getting-started::Define Topics': {
    summary:
      'Topics should mirror business priorities and buyer intent, not internal org charts or campaign labels.',
    goals: [
      'Build a balanced topic set across discovery, comparison, and decision intents.',
      'Attach each topic to a realistic persona.',
      'Prioritize topics with measurable business impact.'
    ],
    workflow: [
      'List your top decision questions from sales and support teams.',
      'Group questions into 5-10 strategic topic clusters.',
      'Assign one primary persona and geography to each topic.',
      'Rank topics by revenue impact and urgency.'
    ],
    metrics: ['Topics with persona assigned', 'Topic priority coverage', 'Intent balance score']
  },
  'getting-started::Create Scenarios': {
    summary:
      'Scenarios should sound like real buyer questions, including constraints and follow-ups that influence recommendations.',
    goals: [
      'Write scenarios that trigger realistic model reasoning.',
      'Cover both branded and non-branded entry points.',
      'Include multi-turn paths for deeper evaluation.'
    ],
    workflow: [
      'Draft scenario prompts from customer call transcripts and FAQs.',
      'Include explicit constraints (team size, budget, location, stack).',
      'Add at least one follow-up turn per high-value scenario.',
      'Remove leading language that biases outcome toward your brand.'
    ],
    metrics: ['Scenario quality score', 'Multi-turn coverage', 'Constraint completeness']
  },
  'getting-started::Understanding Your First Results': {
    summary:
      'First results should be treated as a baseline map of current AI perception, not as a final performance verdict.',
    goals: [
      'Interpret early outputs without overreacting to single-run variance.',
      'Identify top gaps in mentions, citations, and narrative framing.',
      'Turn baseline findings into a 7-day action plan.'
    ],
    workflow: [
      'Review visibility, citation, and competitor summaries by topic.',
      'Flag repeated negative statements or missing recommendations.',
      'Pick 3 high-impact fixes across content, SEO, and PR.',
      'Schedule a rerun after implementation to measure movement.'
    ],
    metrics: ['Baseline gap count', 'Action items created', 'Rerun delta after first sprint']
  },
  'core-concepts::Personas': {
    summary:
      'Personas define who is asking and from where, so analysis reflects real buyer context, language, and geography instead of generic prompt tests.',
    goals: [
      'Model realistic decision criteria and objections for each customer type.',
      'Use location and language as first-class analysis dimensions.',
      'Compare how recommendations change across personas.'
    ]
  },
  'core-concepts::Topics': {
    summary:
      'Topics are strategic analysis units grouping scenarios around one intent area. Use explorer, introspector, comparer, and recommender patterns.',
    goals: [
      'Choose topic type based on objective: market scan, brand introspection, comparison, or decision recommendation.',
      'Ensure each topic is tied to a defined persona.',
      'Track performance at topic level before drilling into individual scenarios.'
    ]
  },
  'core-concepts::Conversations': {
    summary:
      'Conversations are stateful, multi-turn interactions where brand perception evolves as constraints are introduced.',
    goals: [
      'Understand why multi-turn flows are more realistic than one-shot prompts.',
      'Track when competitors enter or exit the recommendation set.',
      'Analyze which follow-up constraints change final outcomes.'
    ]
  },
  'core-concepts::Competitors': {
    summary:
      'Competitors are discovered from actual AI answers after execution, then normalized and editable for stable analytics.',
    goals: [
      'Use auto-discovery to identify AI-native competitors you did not predefine.',
      'Normalize naming variants to avoid fragmented share-of-voice.',
      'Track competitor movement by persona and geography.'
    ]
  },
  'analysis::Detecting Citations': {
    summary:
      'Citations explain why the model says what it says. Track URL/domain frequency, first-party vs third-party split, and sentiment of cited content.',
    goals: [
      'Identify domains shaping AI perception of your brand.',
      'Find high-impact citations with negative or outdated framing.',
      'Prioritize source updates and outreach by citation influence.'
    ]
  },
  'analysis::Extracting Query Fanouts': {
    summary:
      'Query fanouts reveal the hidden internal search questions LLMs generate while reasoning through a response.',
    goals: [
      'Observe AI-native long-form query patterns by intent.',
      'Map each query to resulting citations and competitor mentions.',
      'Use fanouts as direct input for content and FAQ roadmaps.'
    ]
  },
  'analysis::Sentiment Analysis': {
    summary:
      'Sentiment in Genezio covers both model statements and cited-source framing, helping teams detect narrative risk early.',
    goals: [
      'Separate product sentiment shifts from citation-source sentiment shifts.',
      'Detect recurring negative caveats in recommendation contexts.',
      'Define remediation actions tied to specific statements and sources.'
    ]
  },
  'api::Run Conversations API': {
    summary:
      'The Conversations API allows technical teams and agencies to launch analysis runs programmatically at scale.',
    workflow: [
      'Authenticate with your API key.',
      'Submit a run request with brand, persona, topic, and scenario IDs.',
      'Poll run status and fetch extracted results (mentions, citations, statements).',
      'Push normalized data into BI or client reporting pipelines.'
    ]
  },
  'security::Privacy': {
    summary:
      'Privacy controls should align with brand governance, client contracts, and regional compliance requirements across multi-brand workspaces.',
    goals: [
      'Define who can view which brand-level datasets.',
      'Apply role-based access for agencies and client stakeholders.',
      'Review data retention and deletion policies before broad rollout.'
    ]
  }
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(targetPath, content) {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, content, 'utf8');
}

function outPath(relativePath) {
  return path.join(OUT_DIR, relativePath);
}

function toRelative(fromFile, toFile) {
  return path.relative(path.dirname(fromFile), toFile).replace(/\\/g, '/');
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInline(text) {
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  escaped = escaped.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    let normalizedHref = href;
    const isExternal = /^(?:[a-z]+:|#|\/\/)/i.test(normalizedHref);

    if (!isExternal) {
      normalizedHref = normalizedHref.replace(/\.md(#.*)?$/i, '.html$1');
      normalizedHref = normalizedHref.replace(/(^|\/)\d{2}-([a-z0-9-]+)\.html(#.*)?$/i, '$1$2.html$3');
    }

    return `<a href="${normalizedHref}">${label}</a>`;
  });
  return escaped;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let paragraph = [];
  let inCode = false;
  let codeLang = '';
  let codeLines = [];
  let listType = null;
  let quoteLines = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    out.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
    paragraph = [];
  }

  function closeList() {
    if (!listType) return;
    out.push(listType === 'ol' ? '</ol>' : '</ul>');
    listType = null;
  }

  function flushQuote() {
    if (!quoteLines.length) return;
    const raw = quoteLines.join(' ').trim();
    const normalized = raw
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .trim()
      .toLowerCase();

    let cls = '';
    if (normalized.startsWith('user query:')) cls = ' class="user-question"';
    else if (normalized.startsWith('query fanout:')) cls = ' class="query-fanout"';
    else if (normalized.startsWith('ai answer:')) cls = ' class="ai-answer"';

    out.push(`<blockquote${cls}><p>${renderInline(raw)}</p></blockquote>`);
    quoteLines = [];
  }

  function splitTableCells(line) {
    let value = line.trim();
    if (value.startsWith('|')) value = value.slice(1);
    if (value.endsWith('|')) value = value.slice(0, -1);
    if (!value.length) return [];
    return value.split('|').map((cell) => cell.trim());
  }

  function isTableSeparator(line) {
    const cells = splitTableCells(line);
    if (cells.length === 0) return false;
    return cells.every((cell) => /^:?-{3,}:?$/.test(cell));
  }

  function alignmentFromSeparator(cell) {
    const left = cell.startsWith(':');
    const right = cell.endsWith(':');
    if (left && right) return 'center';
    if (right) return 'right';
    return 'left';
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const fence = line.match(/^```([\w-]+)?\s*$/);
    if (fence) {
      flushParagraph();
      closeList();
      if (!inCode) {
        inCode = true;
        codeLang = fence[1] || '';
        codeLines = [];
      } else {
        const codeText = codeLines.join('\n');
        const langClass = codeLang ? ` class="language-${escapeHtml(codeLang)}"` : '';
        out.push(`<pre><code${langClass}>${escapeHtml(codeText)}</code></pre>`);
        inCode = false;
        codeLang = '';
        codeLines = [];
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      closeList();
      flushQuote();
      continue;
    }

    const nextLine = lines[i + 1] || '';
    if (line.includes('|') && isTableSeparator(nextLine)) {
      flushParagraph();
      closeList();
      flushQuote();

      const headers = splitTableCells(line);
      const alignments = splitTableCells(nextLine).map(alignmentFromSeparator);
      out.push('<table>');
      out.push(
        `<thead><tr>${headers
          .map((cell, idx) => `<th style="text-align:${alignments[idx] || 'left'}">${renderInline(cell)}</th>`)
          .join('')}</tr></thead>`
      );
      out.push('<tbody>');

      i += 2;
      while (i < lines.length) {
        const rowLine = lines[i];
        if (!rowLine.trim() || !rowLine.includes('|')) break;
        const cells = splitTableCells(rowLine);
        if (cells.length === 0) break;
        out.push(
          `<tr>${cells
            .map((cell, idx) => `<td style="text-align:${alignments[idx] || 'left'}">${renderInline(cell)}</td>`)
            .join('')}</tr>`
        );
        i += 1;
      }

      out.push('</tbody>');
      out.push('</table>');
      i -= 1;
      continue;
    }

    const hr = line.match(/^\s*([-*_])\1\1+\s*$/);
    if (hr) {
      flushParagraph();
      closeList();
      flushQuote();
      out.push('<hr />');
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      flushQuote();
      const level = heading[1].length;
      out.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    const ulItem = line.match(/^(?:-|\*)\s+(.+)$/);
    if (ulItem) {
      flushParagraph();
      flushQuote();
      if (listType && listType !== 'ul') closeList();
      if (!listType) {
        listType = 'ul';
        out.push('<ul>');
      }
      const taskMatch = ulItem[1].match(/^\[( |x|X)\]\s+(.+)$/);
      if (taskMatch) {
        const checked = taskMatch[1].toLowerCase() === 'x';
        out.push(
          `<li class="task-item"><label><input type="checkbox" disabled${checked ? ' checked' : ''} /> <span>${renderInline(
            taskMatch[2]
          )}</span></label></li>`
        );
      } else {
        out.push(`<li>${renderInline(ulItem[1])}</li>`);
      }
      continue;
    }

    const olItem = line.match(/^\d+\.\s+(.+)$/);
    if (olItem) {
      flushParagraph();
      flushQuote();
      if (listType && listType !== 'ol') closeList();
      if (!listType) {
        listType = 'ol';
        out.push('<ol>');
      }
      out.push(`<li>${renderInline(olItem[1])}</li>`);
      continue;
    }

    const quote = line.match(/^\s*>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      closeList();
      quoteLines.push(quote[1]);
      continue;
    }

    closeList();
    flushQuote();
    paragraph.push(line.trim());
  }

  flushParagraph();
  closeList();
  flushQuote();
  return out.join('\n');
}

function contentPath(...segments) {
  return path.join(CONTENT_DIR, ...segments);
}

function ensureMarkdownFile(filePath) {
  ensureDir(path.dirname(filePath));
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8');
  }
}

function readMarkdownFile(filePath) {
  if (!fs.existsSync(filePath)) return '';
  return fs.readFileSync(filePath, 'utf8');
}

function hasMarkdownContent(filePath) {
  return readMarkdownFile(filePath).trim().length > 0;
}

function sectionLandingHref(section) {
  if (section.hasIndex) return `docs/${section.slug}/index.html`;
  if (section.pages.length > 0) return `docs/${section.slug}/${slugify(section.pages[0])}.html`;
  return `docs/${section.slug}/index.html`;
}

function computeEnabledStructure() {
  enabledStandaloneDocs = standaloneDocs.filter((doc) => hasMarkdownContent(contentPath('docs', `${doc.slug}.md`)));

  enabledSections = sections
    .map((section) => {
      const hasIndex = hasMarkdownContent(contentPath('docs', section.slug, 'index.md'));
      const pages = section.pages.filter((pageTitle) =>
        hasMarkdownContent(contentPath('docs', section.slug, `${slugify(pageTitle)}.md`))
      );
      if (!hasIndex && pages.length === 0) return null;
      return { ...section, hasIndex, pages };
    })
    .filter(Boolean);
}

function buildSidebar(currentSection, currentPageSlug, currentFilePath) {
  const standaloneLinks = enabledStandaloneDocs
    .map((doc) => {
      const href = toRelative(currentFilePath, outPath(`docs/${doc.slug}.html`));
      const activeClass = currentSection === doc.slug && currentPageSlug === '__single__' ? 'active' : '';
      return `<section class="nav-group"><h3><a class="${activeClass}" href="${href}">${escapeHtml(doc.title)}</a></h3></section>`;
    })
    .join('');

  function renderSectionGroup(section) {
      const sectionHref = toRelative(currentFilePath, outPath(sectionLandingHref(section)));
      const sectionActive = section.slug === currentSection;
      const pageLinks = section.pages
        .map((pageTitle) => {
          const pageSlug = slugify(pageTitle);
          const pagePath = `docs/${section.slug}/${pageSlug}.html`;
          const href = toRelative(currentFilePath, outPath(pagePath));
          const activeClass = section.slug === currentSection && pageSlug === currentPageSlug ? 'active' : '';
          return `<li><a class="${activeClass}" href="${href}">${escapeHtml(pageTitle)}</a></li>`;
        })
        .join('');

      return `<section class="nav-group">
        <h3><a class="${sectionActive ? 'active' : ''}" href="${sectionHref}">${escapeHtml(section.title)}</a></h3>
        <ul>${pageLinks}</ul>
      </section>`;
  }

  const actionSlugs = new Set(['insights', 'content-hub']);
  const actionSections = enabledSections.filter((section) => actionSlugs.has(section.slug));
  const regularSections = enabledSections.filter((section) => !actionSlugs.has(section.slug));

  const regularNavBlocks = regularSections
    .map((section) => renderSectionGroup(section))
    .join('');

  const actionGroup = actionSections.length
    ? `<section class="nav-group">
        <h3>Actions</h3>
        <ul>${actionSections
          .flatMap((section) =>
            section.pages.map((pageTitle) => {
              const pageSlug = slugify(pageTitle);
              const pagePath = `docs/${section.slug}/${pageSlug}.html`;
              const href = toRelative(currentFilePath, outPath(pagePath));
              const activeClass = section.slug === currentSection && pageSlug === currentPageSlug ? 'active' : '';
              return `<li><a class="${activeClass}" href="${href}">${escapeHtml(pageTitle)}</a></li>`;
            })
          )
          .join('')}</ul>
      </section>`
    : '';

  return `<aside class="sidebar" aria-label="Documentation navigation">
    <div class="sidebar-header">
      <span class="sidebar-title">Genezio Docs</span>
      <hr style="border:none;border-top:1px solid var(--line);margin:12px 0 0" />
    </div>
    <div class="sidebar-nav">
      ${standaloneLinks}
      ${regularNavBlocks}
      ${actionGroup}
    </div>
  </aside>`;
}

function shellTemplate({ title, description, content, currentSection, currentPageSlug, currentFilePath }) {
  const cssHref = toRelative(currentFilePath, path.join(ASSET_DIR, 'site.css'));
  const topNav = quickLinks
    .map((link) => {
      const href = toRelative(currentFilePath, outPath(link.href));
      return `<a href="${href}">${link.label}</a>`;
    })
    .join('');

  const sidebar = buildSidebar(currentSection, currentPageSlug, currentFilePath);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)} | Genezio Docs</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="robots" content="index,follow" />
  <link rel="stylesheet" href="${cssHref}" />
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="${toRelative(currentFilePath, outPath('index.html'))}">Genezio Docs</a>
      <nav aria-label="Top navigation">${topNav}</nav>
      <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Open menu">&#9776;</button>
    </div>
  </header>
  <div class="sidebar-overlay" id="sidebar-overlay"></div>
  <div class="layout">
    ${sidebar}
    <main class="content" id="main-content">
      ${content}
    </main>
  </div>
  <script>
    (function(){
      var sb=document.querySelector('.sidebar'),ov=document.getElementById('sidebar-overlay'),btn=document.getElementById('sidebar-toggle'),cls=document.getElementById('sidebar-close');
      var scrollY=0;
      function open(){scrollY=window.scrollY;document.body.style.top='-'+scrollY+'px';sb.classList.add('open');ov.classList.add('open');document.body.classList.add('sidebar-open');}
      function close(){sb.classList.remove('open');ov.classList.remove('open');document.body.classList.remove('sidebar-open');document.body.style.top='';window.scrollTo(0,scrollY);}
      btn.addEventListener('click',open);
      ov.addEventListener('click',close);
      if(cls)cls.addEventListener('click',close);
      sb.addEventListener('click',function(e){if(e.target.tagName==='A')close();});
    })();
  </script>
</body>
</html>`;
}

function learningGoals(title) {
  return [
    `Understand how ${title.toLowerCase()} contributes to AI visibility outcomes.`,
    'Apply the feature in a repeatable marketing workflow.',
    'Measure impact using visibility, citation, and competitor metrics.'
  ];
}

function sectionDefaults(sectionSlug) {
  const map = {
    introduction: {
      why: 'This section gives marketing teams a shared model for how brand perception is formed inside AI assistants.',
      metrics: ['Brand mention rate', 'Recommendation rate', 'Citation quality score'],
      workflow: [
        'Align your team on core AI visibility terms.',
        'Set one baseline report for your main brand and market.',
        'Use those baselines to prioritize your first optimization sprint.'
      ]
    },
    'getting-started': {
      why: 'This section helps teams launch a working setup quickly and avoid common onboarding errors.',
      metrics: ['Time to first analysis', 'Topics configured', 'Scenarios executed successfully'],
      workflow: [
        'Create account and brand workspace.',
        'Define personas, topics, and initial scenarios.',
        'Run first conversations and validate extracted insights.'
      ]
    },
    'core-concepts': {
      why: 'These concepts define how data is organized, which keeps analysis reliable across teams and time.',
      metrics: ['Coverage by persona', 'Coverage by topic type', 'Conversation depth'],
      workflow: [
        'Standardize naming and structure for core entities.',
        'Review how each entity connects to business goals.',
        'Audit consistency monthly across all active brands.'
      ]
    },
    analysis: {
      why: 'This section explains how to run repeatable analysis cycles and convert raw outputs into trustworthy findings.',
      metrics: ['Run completion rate', 'Citation extraction rate', 'Competitor discovery consistency'],
      workflow: [
        'Select scenario sets for a clear business question.',
        'Run conversations across selected engines.',
        'Review extracted entities and validate anomalies before action.'
      ]
    },
    insights: {
      why: 'Insights combine multiple signals so teams can prioritize high-impact actions instead of isolated metrics.',
      metrics: ['Share of voice delta', 'Positive statement growth', 'Opportunity backlog closure'],
      workflow: [
        'Review top losses and gains by topic.',
        'Identify citation or narrative drivers behind movement.',
        'Define one focused action plan for the next 7 days.'
      ]
    },
    'content-hub': {
      why: 'This section supports content creation aligned with AI-native query patterns and citation opportunities.',
      metrics: ['New assets published', 'Citation lift on owned domains', 'Content-to-recommendation impact'],
      workflow: [
        'Use fanouts and statement gaps to define content briefs.',
        'Draft and edit assets for clarity and evidence.',
        'Track whether new assets improve citations and recommendations.'
      ]
    },
    'improving-ai-visibility': {
      why: 'This section focuses on practical optimization mechanics that influence how AI assistants frame your brand.',
      metrics: ['First-party citation share', 'Recommendation lift by topic', 'Negative caveat reduction'],
      workflow: [
        'Prioritize one visibility constraint per sprint.',
        'Publish targeted fixes in content and authority signals.',
        'Measure change against baseline after re-runs.'
      ]
    },
    dashboards: {
      why: 'Dashboards convert complex analysis into trend views the team can use for weekly execution and leadership reporting.',
      metrics: ['Week-over-week visibility', 'Competitor gap movement', 'Topic-level momentum'],
      workflow: [
        'Pin a weekly dashboard view for operations.',
        'Tag major campaign and content changes on timeline.',
        'Use trend breaks to trigger deeper root-cause analysis.'
      ]
    },
    integrations: {
      why: 'Integrations connect Genezio outputs with your existing analytics, reporting, and activation workflows.',
      metrics: ['Data sync freshness', 'Export completeness', 'Webhook delivery success'],
      workflow: [
        'Decide destination systems and refresh cadence.',
        'Map fields and identifiers across systems.',
        'Validate data consistency before automating reporting.'
      ]
    },
    api: {
      why: 'API endpoints enable technical teams and agencies to automate runs and reporting at scale.',
      metrics: ['API success rate', 'Run latency', 'Data pipeline reliability'],
      workflow: [
        'Authenticate and test one endpoint end-to-end.',
        'Automate run orchestration and status polling.',
        'Store outputs in your BI or client reporting stack.'
      ]
    },
    security: {
      why: 'Security and data governance are required for enterprise adoption and agency-client trust.',
      metrics: ['Access policy coverage', 'Audit trail completeness', 'Retention compliance'],
      workflow: [
        'Define role-based access per account and brand.',
        'Document privacy and retention policies.',
        'Review controls with security/legal stakeholders.'
      ]
    },
    tutorials: {
      why: 'Tutorials show applied workflows that teams can replicate for specific business contexts.',
      metrics: ['Tutorial completion rate', 'Time to first measurable outcome', 'Playbook reuse'],
      workflow: [
        'Choose a tutorial aligned to your primary objective.',
        'Execute steps with one brand and one market first.',
        'Document outcomes and convert to internal SOP.'
      ]
    },
    faq: {
      why: 'The FAQ resolves common blockers so teams can keep analysis and optimization moving.',
      metrics: ['Time to resolution', 'Repeated support themes', 'Onboarding friction reduction'],
      workflow: [
        'Use FAQ answers to unblock immediate decisions.',
        'Escalate unresolved issues with exact run context.',
        'Capture new recurring questions and add them to docs.'
      ]
    }
  };

  return (
    map[sectionSlug] || {
      why: 'This page explains how to use this capability in a practical marketing workflow.',
      metrics: ['Visibility trend', 'Citation trend', 'Competitor trend'],
      workflow: ['Define objective.', 'Execute workflow.', 'Review outcomes and iterate.']
    }
  );
}

function pageFocusPoints(sectionSlug, pageTitle) {
  const title = pageTitle.toLowerCase();

  if (title.includes('citation')) {
    return [
      'Which domains are influencing model answers most often.',
      'How citation quality changes recommendation credibility.',
      'What actions increase first-party citation share.'
    ];
  }
  if (title.includes('competitor')) {
    return [
      'Which competitors appear most in your target scenarios.',
      'Where competitors win due to source authority or framing.',
      'How to design counter-positioning with evidence-backed content.'
    ];
  }
  if (title.includes('sentiment')) {
    return [
      'How positive, neutral, and negative framing shifts over time.',
      'Which scenarios produce the sharpest sentiment drops.',
      'How to connect sentiment shifts to source-level causes.'
    ];
  }
  if (title.includes('api') || sectionSlug === 'api') {
    return [
      'Required request structure and authentication expectations.',
      'How to move from manual tests to production automation.',
      'Which outputs should be normalized for reporting.'
    ];
  }
  if (title.includes('topic')) {
    return [
      'How to scope topic boundaries for clean analysis.',
      'How topic design influences scenario quality.',
      'How to prioritize topics by business impact.'
    ];
  }
  if (title.includes('scenario')) {
    return [
      'How to write scenario prompts that reflect real buying intent.',
      'How to avoid leading prompts that bias outcomes.',
      'How to compare scenario results across engines and personas.'
    ];
  }
  if (title.includes('conversation')) {
    return [
      'How recommendations evolve through multi-turn dialogue.',
      'Which constraints change outcome the most.',
      'How to capture decision moments in later turns.'
    ];
  }
  if (sectionSlug === 'getting-started') {
    return [
      'How to complete this setup step quickly and correctly.',
      'Which defaults are safe for first implementation.',
      'What to validate before moving to the next step.'
    ];
  }
  if (sectionSlug === 'introduction') {
    return [
      'Core concept definitions in practical marketing language.',
      'How this concept changes campaign planning decisions.',
      'How to use it as part of your weekly operating rhythm.'
    ];
  }

  return [
    `How ${pageTitle} fits into a marketer workflow.`,
    'Which operational decisions depend on this page.',
    'What to measure after applying this guidance.'
  ];
}

function genericPageContent(section, pageTitle) {
  const mdPath = contentPath('docs', section.slug, `${slugify(pageTitle)}.md`);
  return markdownToHtml(readMarkdownFile(mdPath));
}

function sectionIndexContent(section) {
  const mdPath = contentPath('docs', section.slug, 'index.md');
  return markdownToHtml(readMarkdownFile(mdPath));
}

function docsHomeContent() {
  const mdPath = contentPath('docs', 'index.md');
  const md = readMarkdownFile(mdPath);
  if (md.trim()) return markdownToHtml(md);

  const standaloneItems = enabledStandaloneDocs
    .map((doc) => `<li><a href="./${doc.slug}.html">${escapeHtml(doc.title)}</a></li>`)
    .join('');
  const sectionItems = enabledSections
    .map((section) => `<li><a href="./${section.slug}/${section.hasIndex ? 'index' : slugify(section.pages[0])}.html">${escapeHtml(section.title)}</a></li>`)
    .join('');

  return `<h1>Documentation</h1>
<p>Available pages with published content.</p>
<h2>Standalone</h2>
<ul>${standaloneItems || '<li>No standalone pages published yet.</li>'}</ul>
<h2>Sections</h2>
<ul>${sectionItems || '<li>No sections published yet.</li>'}</ul>`;
}

function getDocsLandingPath() {
  const intro = enabledSections.find((section) => section.slug === 'introduction');
  if (intro) {
    const preferred = intro.pages.find((title) => title.toLowerCase() === 'what is genezio?');
    if (preferred) return `docs/introduction/${slugify(preferred)}.html`;
    if (intro.hasIndex) return 'docs/introduction/index.html';
    if (intro.pages.length) return `docs/introduction/${slugify(intro.pages[0])}.html`;
  }

  if (enabledStandaloneDocs.length) return `docs/${enabledStandaloneDocs[0].slug}.html`;
  if (enabledSections.length) {
    const section = enabledSections[0];
    return section.hasIndex
      ? `docs/${section.slug}/index.html`
      : `docs/${section.slug}/${slugify(section.pages[0])}.html`;
  }

  return 'index.html';
}

function homepageContent() {
  const mdPath = contentPath('index.md');
  const html = markdownToHtml(readMarkdownFile(mdPath));

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Genezio Docs</title>
  <meta name="description" content="Marketer-focused Genezio documentation for AI visibility workflows." />
  <link rel="stylesheet" href="./assets/site.css" />
</head>
<body>
  <main class="home-main">
    ${html}
  </main>
</body>
</html>`;
}

function buildSearchPage(currentFilePath) {
  const mdPath = contentPath('docs', 'search', 'index.md');
  const md = readMarkdownFile(mdPath).trim();
  if (md) return markdownToHtml(md);

  const entries = [];
  for (const doc of enabledStandaloneDocs) {
    entries.push({ section: 'Standalone', title: doc.title, href: `docs/${doc.slug}.html` });
  }
  for (const section of enabledSections) {
    if (section.hasIndex) {
      entries.push({ section: section.title, title: section.title, href: `docs/${section.slug}/index.html` });
    }
    for (const pageTitle of section.pages) {
      entries.push({ section: section.title, title: pageTitle, href: `docs/${section.slug}/${slugify(pageTitle)}.html` });
    }
  }

  const listItems = entries
    .map((item) => {
      const href = toRelative(currentFilePath, outPath(item.href));
      return `<li data-text="${escapeHtml((item.section + ' ' + item.title).toLowerCase())}"><a href="${href}">${escapeHtml(item.title)}</a> <span>${escapeHtml(item.section)}</span></li>`;
    })
    .join('');

  return `<article>
    <header>
      <p class="kicker">Search</p>
      <h1>Global documentation search</h1>
      <p>Type keywords to filter published pages.</p>
      <input id="global-search" type="search" placeholder="Search docs" />
    </header>
    <section>
      <h2>Results</h2>
      <ul id="results" class="results-list">${listItems}</ul>
    </section>
    <script>
      const input = document.getElementById('global-search');
      const rows = [...document.querySelectorAll('#results li')];
      const url = new URL(window.location.href);
      const param = (url.searchParams.get('q') || '').toLowerCase();
      if (param) input.value = param;
      const filter = () => {
        const q = input.value.trim().toLowerCase();
        for (const row of rows) row.style.display = !q || row.dataset.text.includes(q) ? '' : 'none';
      };
      input.addEventListener('input', filter);
      filter();
    </script>
  </article>`;
}

function main() {
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  ensureDir(OUT_DIR);
  ensureDir(ASSET_DIR);
  computeEnabledStructure();

  const cssSource = path.join(process.cwd(), 'src', 'site.css');
  const cssTarget = path.join(ASSET_DIR, 'site.css');
  fs.copyFileSync(cssSource, cssTarget);

  writeFile(path.join(OUT_DIR, 'index.html'), homepageContent());

  for (const doc of enabledStandaloneDocs) {
    const standalonePath = path.join(OUT_DIR, 'docs', `${doc.slug}.html`);
    writeFile(
      standalonePath,
      shellTemplate({
        title: doc.title,
        description: doc.description,
        content: markdownToHtml(readMarkdownFile(contentPath('docs', `${doc.slug}.md`))),
        currentSection: doc.slug,
        currentPageSlug: '__single__',
        currentFilePath: standalonePath
      })
    );
  }

  const docsIndexPath = path.join(OUT_DIR, 'docs', 'index.html');
  const docsLandingPath = getDocsLandingPath();
  const docsLandingHref = toRelative(docsIndexPath, outPath(docsLandingPath));
  writeFile(
    docsIndexPath,
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Documentation | Genezio Docs</title>
  <meta http-equiv="refresh" content="0; url=${docsLandingHref}" />
  <link rel="canonical" href="${docsLandingHref}" />
</head>
<body>
  <p>Redirecting to <a href="${docsLandingHref}">${docsLandingHref}</a>...</p>
  <script>window.location.replace(${JSON.stringify(docsLandingHref)});</script>
</body>
</html>`
  );

  for (const section of enabledSections) {
    const sectionDir = path.join(OUT_DIR, 'docs', section.slug);
    if (section.hasIndex) {
      const sectionIndexPath = path.join(sectionDir, 'index.html');
      writeFile(
        sectionIndexPath,
        shellTemplate({
          title: section.title,
          description: section.description,
          content: sectionIndexContent(section),
          currentSection: section.slug,
          currentPageSlug: '',
          currentFilePath: sectionIndexPath
        })
      );
    }

    for (const pageTitle of section.pages) {
      const pageSlug = slugify(pageTitle);
      const filePath = path.join(sectionDir, `${pageSlug}.html`);
      writeFile(
        filePath,
        shellTemplate({
          title: pageTitle,
          description: `${pageTitle} in Genezio documentation`,
          content: genericPageContent(section, pageTitle),
          currentSection: section.slug,
          currentPageSlug: pageSlug,
          currentFilePath: filePath
        })
      );
    }
  }

  const sectionPageCount = enabledSections.reduce((acc, section) => acc + section.pages.length + (section.hasIndex ? 1 : 0), 0);
  const pageCount = sectionPageCount + enabledStandaloneDocs.length + 2;
  console.log(`Build complete. Generated ${pageCount} HTML pages in dist/.`);
}

main();
