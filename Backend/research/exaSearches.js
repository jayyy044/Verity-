// const Exa = require('exa-js').default;

// const exa = new Exa(process.env.EXA_API_KEY);

// // ─────────────────────────────────────────────────────────────
// // HELPER — Deduplicate results by root domain
// // Catches any subdomain duplication not blocked by excludeDomains
// // ─────────────────────────────────────────────────────────────

// function deduplicateByDomain(results) {
//   const seenDomains = new Set();
//   return results.filter(r => {
//     try {
//       const domain = new URL(r.url).hostname
//         .replace(/^www\./, '')
//         .replace(/^mobile\./, '')
//         .replace(/^m\./, '')
//         .replace(/^arc-staging\./, '')
//         .replace(/^beta\./, '')
//         .replace(/^web\./, '')
//         .replace(/^amp\./, '');
//       if (seenDomains.has(domain)) return false;
//       seenDomains.add(domain);
//       return true;
//     } catch {
//       return true;
//     }
//   });
// }

// // ─────────────────────────────────────────────────────────────
// // CALL A — Commercial Intelligence
// // Fields: company identity, description, sector,
// //         funding, investors, competitors, ecosystem
// // ─────────────────────────────────────────────────────────────

// async function callA(company, descriptor = '') {
//   const searchTerm = descriptor ? `${company} ${descriptor}` : company;
//   console.log(`[Call A] Starting commercial search for: ${searchTerm}`);

//   const [companyProfile, competitors, funding, ecosystem] = await Promise.all([

//     // Company identity + description + sector
//     exa.search(
//       `${searchTerm} company overview business model product`,
//       {
//         type: 'neural',
//         numResults: 5,
//         contents: { text: { maxCharacters: 20000 }, livecrawl: 'fallback' },
//       }
//     ),

//     // Direct competitors + ecosystem nodes
//     exa.search(
//       `companies similar to ${searchTerm} competitors alternatives`,
//       {
//         type: 'neural',
//         numResults: 8,
//         contents: { text: { maxCharacters: 10000 }, livecrawl: 'fallback' },
//       }
//     ),

//     // Funding rounds + investors + total raised
//     exa.search(
//       `${searchTerm} funding round raised series investors`,
//       {
//         type: 'neural',
//         numResults: 6,
//         includeText: [company],
//         includeDomains: [
//           'techcrunch.com',
//           'betakit.com',
//           'bloomberg.com',
//           'reuters.com',
//           'businesswire.com',
//           'prnewswire.com',
//           'globenewswire.com',
//           'newswire.ca',
//         ],
//         contents: { text: { maxCharacters: 10000 } },
//       }
//     ),

//     // Ecosystem relationships — partners, customers, integrations
//     // Powers the non-competitor nodes on the Bloomberg map
//     exa.search(
//       `${searchTerm} partnership integration customer enterprise deal`,
//       {
//         type: 'neural',
//         numResults: 6,
//         includeText: [company],
//         contents: { text: { maxCharacters: 8000 } },
//       }
//     ),
//   ]);

//   console.log(`[Call A] Done — company: ${companyProfile.results.length}, competitors: ${competitors.results.length}, funding: ${funding.results.length}, ecosystem: ${ecosystem.results.length}`);

//   return { companyProfile, competitors, funding, ecosystem };
// }

// // ─────────────────────────────────────────────────────────────
// // CALL B — Signals Intelligence
// // Fields: news events, sentiment, CEO/founder background
// // ─────────────────────────────────────────────────────────────

// async function callB(company, descriptor = '') {
//   const searchTerm = descriptor ? `${company} ${descriptor}` : company;
//   console.log(`[Call B] Starting signals search for: ${searchTerm}`);

//   const [newsRaw, founders] = await Promise.all([

//     // Recent news events + sentiment signals (last 12 months)
//     // excludeDomains blocks known subdomain offenders upfront
//     // deduplicateByDomain catches anything else that slips through
//     exa.search(
//       `${searchTerm} news announcement partnership product launch`,
//       {
//         type: 'neural',
//         numResults: 10,
//         includeText: [company],
//         startPublishedDate: getOneYearAgo(),
//         excludeDomains: [
//           '*.theglobeandmail.com',
//           '*.bloomberg.com',
//           '*.reuters.com',
//           '*.businessinsider.com',
//           '*.techcrunch.com',
//         ],
//         contents: {
//           text: { maxCharacters: 5000 },
//           highlights: { numSentences: 3, highlightsPerUrl: 2 },
//         },
//       }
//     ),

//     // CEO + founder name and background
//     exa.search(
//       `${searchTerm} CEO founder leadership background`,
//       {
//         type: 'neural',
//         numResults: 5,
//         contents: { text: { maxCharacters: 8000 }, livecrawl: 'fallback' },
//       }
//     ),
//   ]);

//   // Second line of defence — catch any remaining subdomain duplicates
//   const news = {
//     ...newsRaw,
//     results: deduplicateByDomain(newsRaw.results),
//   };

//   console.log(`[Call B] Done — news: ${news.results.length} (deduplicated from ${newsRaw.results.length}), founders: ${founders.results.length}`);

//   return { news, founders };
// }

// // ─────────────────────────────────────────────────────────────
// // GAP FILL — Targeted searches from gap detector
// // Only runs if Phase 2 identifies missing fields
// // ─────────────────────────────────────────────────────────────

// async function fillGaps(gapQueries) {
//   if (!gapQueries || gapQueries.length === 0) return [];

//   console.log(`[Gap Fill] Running ${gapQueries.length} targeted searches...`);

//   const results = await Promise.all(
//     gapQueries.map(query =>
//       exa.search(query, {
//         type: 'neural',
//         numResults: 4,
//         contents: {
//           text: { maxCharacters: 8000 },
//           livecrawl: 'always',
//         },
//       })
//     )
//   );

//   results.forEach((r, i) => {
//     console.log(`[Gap Fill] Query ${i + 1}: ${gapQueries[i]} — ${r.results.length} results`);
//   });

//   return results;
// }

// // ─────────────────────────────────────────────────────────────
// // HELPER — ISO date string for 12 months ago
// // ─────────────────────────────────────────────────────────────

// function getOneYearAgo() {
//   const date = new Date();
//   date.setFullYear(date.getFullYear() - 1);
//   return date.toISOString().split('T')[0] + 'T00:00:00Z';
// }

// module.exports = { callA, callB, fillGaps };



const Exa = require('exa-js').default;

const exa = new Exa(process.env.EXA_API_KEY);

// ─────────────────────────────────────────────────────────────
// KEY DOCS NOTES (Exa API as of March 2026)
//
// Rate limit: 5 QPS on /search — all searches fire in parallel
// via Promise.all, we never exceed this for a single company
//
// Search types:
//   type: 'auto'    — default, intelligently combines neural + keyword
//   type: 'neural'  — pure embedding-based semantic search
//   type: 'deep'    — query expansion + detailed context, costs 2x
//
// Categories (special fine-tuned indexes):
//   category: 'company'  — fine-tuned for homepages + company metadata
//                          DOES NOT support: includeDomains, excludeDomains,
//                          startPublishedDate, includeText, excludeText
//   category: 'news'     — press coverage, announcements
//   category: 'people'   — LinkedIn profiles + public bios
//                          includeDomains: LinkedIn only
//
// Prompting tip: frame as a link description, not a question
//   BAD:  "What is Wealthsimple?"
//   GOOD: "Here is the homepage and overview of Wealthsimple:"
//
// useAutoprompt: true — Exa rewrites the query for better neural recall
// includeText: single-item array only — multi-item causes 400 error
// ─────────────────────────────────────────────────────────────

function deduplicateByDomain(results) {
  const seenDomains = new Set();
  return results.filter(r => {
    try {
      const domain = new URL(r.url).hostname
        .replace(/^www\./, '')
        .replace(/^mobile\./, '')
        .replace(/^m\./, '')
        .replace(/^arc-staging\./, '')
        .replace(/^beta\./, '')
        .replace(/^web\./, '')
        .replace(/^amp\./, '');
      if (seenDomains.has(domain)) return false;
      seenDomains.add(domain);
      return true;
    } catch {
      return true;
    }
  });
}

function getOneYearAgo() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  return date.toISOString().split('T')[0] + 'T00:00:00Z';
}

// ─────────────────────────────────────────────────────────────
// ALL 6 SEARCHES — fire in parallel via Promise.all
//
// Search 1 — Company identity (category: company)
//   Covers: identity fields, business model, sector, vertical,
//           headcount (leaks in via company metadata)
//   Why category:company — fine-tuned index for homepages,
//   returns richer structured metadata than general neural
//
// Search 2 — Funding & investors (trusted financial press only)
//   Covers: total_raised, last_round, key_investors, ownership_type,
//           revenue_stage signals (profitable etc)
//   Why includeDomains — press releases are the only reliable
//   source for exact funding figures; general search returns
//   aggregator noise and stale Crunchbase mirrors
//
// Search 3 — Competitors (neural, no category)
//   Covers: competitive.direct_competitors, ecosystem nodes (competitor type)
//   Why neural — semantic similarity finds real competitors even
//   for obscure companies where keyword search would fail
//
// Search 4 — Team & leadership (category: people)
//   Covers: team.ceo_name, team.ceo_background, team.founder_names
//   Why category:people — fine-tuned LinkedIn index, 1B+ profiles,
//   far better than general search for individual bios
//
// Search 5 — News & momentum (category: news, date filtered)
//   Covers: news.sentiment, news.summary, news.recent_events,
//           defensibility.key_partnerships, defensibility.leadership_changes
//   Why category:news + date filter — eliminates stale content,
//   highlights give dense signal without full article text
//
// Search 6 — Ecosystem & partnerships (neural, includeText)
//   Covers: ecosystem nodes (ecosystem type), defensibility.key_partnerships,
//           defensibility.moat_signals (inferred from integrations)
//   Separated from competitors because the query framing is
//   fundamentally different — we want named relationships, not
//   semantic similarity
// ─────────────────────────────────────────────────────────────

async function runAllSearches(company, descriptor = '') {
  const q = descriptor ? `${company} ${descriptor}` : company;
  console.log(`[Exa] Starting 6 parallel searches for: ${q}`);

  const [
    identity,
    funding,
    competitors,
    team,
    newsRaw,
    ecosystem,
  ] = await Promise.all([

    // ── Search 1: Company Identity ────────────────────────────
    // category:company uses a fine-tuned model specifically for
    // finding company homepages and structured company metadata.
    // useAutoprompt rewrites query for better neural recall.
    // NOTE: category:company does NOT support includeDomains,
    // excludeDomains, or date filters — do not add them.
    exa.search(
      `${q} company:`,
      {
        type: 'auto',
        category: 'company',
        numResults: 5,
        useAutoprompt: true,
        contents: {
          text: { maxCharacters: 15000 },
          livecrawl: 'fallback',
        },
      }
    ),

    // ── Search 2: Funding & Investors ─────────────────────────
    // includeDomains restricts to trusted financial press only.
    // includeText: [company] ensures results are actually about
    // this company, not other companies on the same press domain.
    // Single-item array only — Exa restriction.
    exa.search(
      `${q} funding round raised investors valuation:`,
      {
        type: 'auto',
        numResults: 8,
        useAutoprompt: false, // exact company name must be preserved
        includeText: [company],
        includeDomains: [
          'techcrunch.com',
          'betakit.com',
          'bloomberg.com',
          'reuters.com',
          'businesswire.com',
          'prnewswire.com',
          'globenewswire.com',
          'newswire.ca',
          'fortune.com',
          'forbes.com',
          'wsj.com',
        ],
        contents: {
          text: { maxCharacters: 10000 },
        },
      }
    ),

    // ── Search 3: Competitors ─────────────────────────────────
    // Neural search excels at semantic similarity — finds real
    // competitors even for companies with sparse web presence.
    // No category because we want broad coverage, not just homepages.
    // useAutoprompt:true lets Exa expand the query for better recall.
    exa.search(
      `Companies competing with ${company} in the same market — alternatives and direct competitors:`,
      {
        type: 'neural',
        numResults: 8,
        useAutoprompt: true,
        contents: {
          text: { maxCharacters: 5000 },
          livecrawl: 'fallback',
        },
      }
    ),

    // ── Search 4: Team & Leadership ───────────────────────────
    // category:people uses Exa's fine-tuned 1B+ profile index.
    // Returns LinkedIn profiles and public bios with much higher
    // precision than general neural search.
    // RESTRICTION: only LinkedIn domains allowed in includeDomains,
    // and NO date filters, includeText, or excludeDomains.
    exa.search(
      `${company} founder CEO co-founder started founded by:`,
      {
        type: 'auto',
        category: 'people',
        numResults: 5,
        useAutoprompt: true,
        contents: {
          text: { maxCharacters: 5000 },
          livecrawl: 'fallback',
        },
      }
    ),

    // ── Search 5: News & Momentum ─────────────────────────────
    // category:news targets the press index specifically.
    // startPublishedDate limits to last 12 months — no stale content.
    // highlights give the most signal-dense excerpts per article.
    // excludeDomains blocks known subdomain offenders.
    // numResults:10 because we deduplicate after.
    exa.search(
      `${company} news announcement launch partnership funding:`,
      {
        type: 'auto',
        category: 'news',
        numResults: 10,
        useAutoprompt: true,
        startPublishedDate: getOneYearAgo(),
        excludeDomains: [
          '*.theglobeandmail.com',
          '*.bloomberg.com',
          '*.reuters.com',
          '*.businessinsider.com',
        ],
        contents: {
          text: { maxCharacters: 5000 },
          highlights: { numSentences: 3, highlightsPerUrl: 2 },
        },
      }
    ),

    // ── Search 6: Ecosystem & Partnerships ───────────────────
    // Separate from competitors intentionally — query framing targets
    // named relationships (integrations, customers, partners) rather
    // than semantic similarity.
    // includeText: [company] ensures results name the company
    // specifically — filters out generic partnership articles.
    exa.search(
      `${company} partnership integration customer enterprise deal collaboration:`,
      {
        type: 'neural',
        numResults: 6,
        useAutoprompt: false, // preserve company name
        includeText: [company],
        contents: {
          text: { maxCharacters: 5000 },
        },
      }
    ),
  ]);

  // Deduplicate news by root domain
  const news = {
    ...newsRaw,
    results: deduplicateByDomain(newsRaw.results),
  };

  console.log([
    `[Exa] Done —`,
    `identity: ${identity.results.length}`,
    `funding: ${funding.results.length}`,
    `competitors: ${competitors.results.length}`,
    `team: ${team.results.length}`,
    `news: ${news.results.length} (from ${newsRaw.results.length})`,
    `ecosystem: ${ecosystem.results.length}`,
  ].join(', '));

  return { identity, funding, competitors, team, news, ecosystem };
}

// ─────────────────────────────────────────────────────────────
// GAP FILL — targeted searches, fires only if gap detector
// identifies missing fields. livecrawl:always for freshest data.
// ─────────────────────────────────────────────────────────────

async function fillGaps(gapQueries) {
  if (!gapQueries || gapQueries.length === 0) return [];

  console.log(`[Gap Fill] Running ${gapQueries.length} targeted searches...`);

  const results = await Promise.all(
    gapQueries.map(query =>
      exa.search(query, {
        type: 'auto',
        numResults: 4,
        useAutoprompt: true,
        contents: {
          text: { maxCharacters: 5000 },
          livecrawl: 'always',
        },
      })
    )
  );

  results.forEach((r, i) => {
    console.log(`[Gap Fill] "${gapQueries[i]}" — ${r.results.length} results`);
  });

  return results;
}

module.exports = { runAllSearches, fillGaps };