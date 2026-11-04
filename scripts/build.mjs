import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const origin = "https://www.chinaunseenjourneys.com";
const brand = "Morrow Travel";
const contact = {
  email: "Chinaunseenjourneys@gmail.com",
  phone: "+44 7985 047225",
  whatsapp: "https://wa.me/447985047225",
  instagram: "https://www.instagram.com/chinaunseenjourneys",
  facebook: "https://www.facebook.com/share/1BavVN8oU8/"
};

const agency = {
  "@type": "TravelAgency",
  "@id": `${origin}/#organization`,
  name: brand,
  url: `${origin}/`,
  description: "Morrow Travel is a China-based inbound travel specialist designing private, tailor-made journeys across China for international travelers.",
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shenzhen",
    addressCountry: "CN"
  },
  areaServed: { "@type": "Country", name: "China" },
  knowsAbout: [
    "Private tours in China",
    "Tailor-made China itineraries",
    "China travel planning",
    "Private guides and transportation in China",
    "Zhangjiajie travel",
    "Beijing and Xi'an cultural travel",
    "Yunnan slow travel",
    "Tibet permits and altitude-aware travel",
    "Guilin and Yangshuo family travel",
    "Shanghai, Suzhou and Hangzhou travel"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Travel planning",
    email: contact.email,
    telephone: contact.phone,
    availableLanguage: ["English", "Chinese"]
  },
  sameAs: [contact.instagram, contact.facebook]
};

const trips = [
  {
    slug: "zhangjiajie-avatar-mountains",
    title: "Zhangjiajie Avatar Mountains",
    days: 5,
    region: "Central China",
    style: "Nature & Landscapes",
    image: "https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?q=80&w=1800&auto=format&fit=crop",
    summary: "A private five-day Zhangjiajie journey through sandstone pillars, Yuanjiajie, Tianzi Mountain and Tianmen Mountain, paced around weather, walking comfort and crowd patterns.",
    bestFor: "Photographers, couples and families with older children",
    bestTime: "March to May and September to November",
    route: ["Arrival in Zhangjiajie", "Yuanjiajie and Tianzi Mountain", "Tianmen Mountain", "Grand Canyon and village time", "Departure or extension"],
    highlights: ["Yuanjiajie Avatar Peaks", "Tianmen Mountain", "Grand Canyon Glass Bridge", "Private sunrise viewpoint"]
  },
  {
    slug: "beijing-xian-imperial-china",
    title: "Beijing & Xi'an Imperial China",
    days: 7,
    region: "Imperial China",
    style: "Culture & History",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1800&auto=format&fit=crop",
    summary: "A private seven-day introduction to China linking Beijing's Great Wall, Forbidden City and hutongs with Xi'an's Terracotta Warriors and old city.",
    bestFor: "First-time visitors, families and senior travelers",
    bestTime: "April to June and September to October",
    route: ["Arrive in Beijing", "Forbidden City and hutongs", "Great Wall day", "Temple of Heaven and train to Xi'an", "Terracotta Warriors", "Xi'an old city", "Departure"],
    highlights: ["Mutianyu Great Wall", "Forbidden City", "Hutong visit", "Terracotta Warriors"]
  },
  {
    slug: "yunnan-tea-horse-road",
    title: "Yunnan Tea Horse Road",
    days: 9,
    region: "Southwest China",
    style: "Culture & Slow Travel",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1800&auto=format&fit=crop",
    summary: "A private nine-day Yunnan route connecting Dali, Lijiang, Tiger Leaping Gorge and Shangri-La through Naxi culture, mountain scenery and historic tea routes.",
    bestFor: "Culture lovers, couples and slow travelers",
    bestTime: "March to June and September to November",
    route: ["Arrive in Dali", "Erhai villages and old town", "Lijiang and Naxi culture", "Tiger Leaping Gorge", "Shangri-La monasteries", "Plateau village day", "Departure or Kunming extension"],
    highlights: ["Dali Ancient Town", "Lijiang Old Town", "Tiger Leaping Gorge", "Shangri-La monasteries"]
  },
  {
    slug: "tibet-private-plateau",
    title: "Tibet Private Plateau Journey",
    days: 8,
    region: "Himalayan Plateau",
    style: "Spiritual Culture",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1800&auto=format&fit=crop",
    summary: "A private eight-day Tibet journey based in Lhasa with monastery visits, permit coordination, acclimatization time and flexible high-altitude routing.",
    bestFor: "Experienced travelers interested in spiritual culture and landscapes",
    bestTime: "May to October",
    route: ["Arrive in Lhasa and rest", "Barkhor orientation", "Potala Palace", "Jokhang and Sera Monastery", "Yamdrok or Namtso option", "Local market and cultural day", "Acclimatization buffer", "Departure"],
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor Street", "Namtso Lake option"]
  },
  {
    slug: "guilin-yangshuo-family",
    title: "Guilin & Yangshuo Family Escape",
    days: 6,
    region: "South China",
    style: "Family Journeys",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
    summary: "A relaxed six-day family journey through Guilin and Yangshuo with karst scenery, the Li River, countryside cycling, bamboo rafting and child-friendly pacing.",
    bestFor: "Families, multi-generation groups and soft-adventure travelers",
    bestTime: "April to October",
    route: ["Arrive in Guilin", "Longji Rice Terraces", "Li River to Yangshuo", "Countryside cycling", "Cooking class and bamboo raft", "Departure"],
    highlights: ["Li River cruise", "Yangshuo cycling", "Longji Rice Terraces", "Private cooking class"]
  },
  {
    slug: "luxury-shanghai-suzhou-hangzhou",
    title: "Luxury Shanghai, Suzhou & Hangzhou",
    days: 6,
    region: "East China",
    style: "Luxury Escapes",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?q=80&w=1800&auto=format&fit=crop",
    summary: "A polished six-day private East China itinerary combining Shanghai design and dining, Suzhou gardens, Hangzhou's West Lake and Longjing tea country.",
    bestFor: "Couples, luxury travelers and design or food lovers",
    bestTime: "March to June and September to December",
    route: ["Arrive in Shanghai", "The Bund and design galleries", "Private Suzhou gardens", "Hangzhou West Lake", "Longjing tea village", "Departure"],
    highlights: ["The Bund", "Private Suzhou garden visit", "West Lake", "Longjing tea village"]
  }
];

const articles = [
  {
    slug: "first-private-china-trip",
    title: "How to Plan Your First Private China Journey",
    description: "A practical guide to choosing regions, setting a realistic pace and planning a first private trip to China.",
    paragraphs: [
      "A strong first China journey usually balances one classic anchor with one slower region. Beijing and Xi'an provide historical depth, while Guilin, Zhangjiajie or Yunnan add landscape and breathing room.",
      "The most common planning mistake is trying to cover too much. China rewards space: a gentle first day after a long flight, a flexible afternoon in an old town, and a guide who can adjust around weather and crowds often matter more than adding another city.",
      "For many first-time private travelers, seven to twelve days is a useful starting range. Families and senior travelers should protect rest windows, while photographers and culture lovers may prefer fewer destinations and more time on the ground. Exact routing depends on arrival city, season, mobility and interests."
    ],
    takeaways: ["Choose two or three regions rather than trying to cover the whole country.", "Keep the first full day gentle after arrival.", "Use private guides where local context and timing make a meaningful difference."]
  },
  {
    slug: "zhangjiajie-beyond-avatar",
    title: "Zhangjiajie Beyond the Avatar Viewpoints",
    description: "How to plan Zhangjiajie around weather, park crowds, walking comfort and the mountain scenery beyond its famous viewpoints.",
    paragraphs: [
      "Zhangjiajie is known for its sandstone pillars, but the experience depends heavily on timing. A viewpoint can feel cinematic in quiet morning light and crowded later in the day.",
      "A flexible private route can respond to light, weather and walking comfort. Some travelers prioritize the major platforms; others prefer quieter paths, village lunches or a slower visit to Tianmen Mountain.",
      "Tickets, cable-car queues, park transfers and hotel location all shape the day. Building weather flexibility into the itinerary helps travelers enjoy the landscape without treating every stop as a checklist."
    ],
    takeaways: ["Start early when conditions and park operations allow.", "Choose accommodation to reduce daily transfer time.", "Keep flexibility for mist, rain and visibility changes."]
  }
];

const pages = [
  {
    path: "/",
    title: "Private China Tours, Designed Around You | Morrow Travel",
    description: "Morrow Travel is a China-based travel specialist creating private, tailor-made China journeys with thoughtful routing, local guides and on-trip support.",
    image: trips[0].image,
    type: "WebPage",
    h1: "See China in your own rhythm.",
    intro: "Morrow Travel designs private, tailor-made journeys across China. Based in Shenzhen, our team helps international travelers connect destinations through thoughtful routing, private guides, transport coordination and on-trip support.",
    body: `<section class="section"><div class="container"><h2>Private China journeys, planned with local context</h2><p>Explore cultural routes through Beijing and Xi'an, landscape journeys in Zhangjiajie and Guilin, slower travel in Yunnan, high-altitude trips to Tibet, and private stays across Shanghai, Suzhou and Hangzhou. Every itinerary is a starting point, adjusted around your dates, interests, pace and travel companions.</p><p><a href="/trips">Browse all private China itineraries</a> or <a href="/contact">start planning with Morrow Travel</a>.</p></div></section><section class="section section--ivory"><div class="container"><h2>How Morrow Travel helps</h2><ul><li>Tailor-made route planning for private travel in China</li><li>Private guides and drivers coordinated around each itinerary</li><li>Hotel-location and transfer planning for a comfortable pace</li><li>Seasonal routing and on-trip support from a China-based team</li></ul><p>Read our <a href="/blog/first-private-china-trip">first China trip planning guide</a> or learn <a href="/about">about Morrow Travel</a>.</p></div></section>`
  },
  {
    path: "/trips",
    title: "Private China Tours & Itineraries | Morrow Travel",
    description: "Explore private China itineraries for culture, landscapes, family travel and luxury. Every route is tailored to your dates, pace and interests.",
    image: trips[1].image,
    type: "CollectionPage",
    h1: "Private journeys, not fixed packages.",
    intro: "Browse private China tour itineraries by region and travel style. These routes are planning examples; Morrow Travel can adjust the pace, hotels, experiences and connections to suit your dates and group.",
    body: `<section class="section"><div class="container"><h2>Explore private China itineraries</h2><div class="seo-trip-list">${trips.map(trip => `<article><h3><a href="/trips/${trip.slug}">${trip.title}</a></h3><p>${trip.days} days · ${trip.region} · ${trip.style}</p><p>${trip.summary}</p><p>Best for: ${trip.bestFor}. Suggested seasons: ${trip.bestTime}.</p></article>`).join("")}</div><p>For help choosing regions, see our <a href="/blog/first-private-china-trip">guide to planning a first private China trip</a>.</p></div></section>`
  },
  {
    path: "/blog",
    title: "China Travel Guides & Planning Advice | Morrow Travel",
    description: "Practical China travel guides on choosing regions, planning a first trip and exploring Zhangjiajie beyond the main viewpoints.",
    image: trips[0].image,
    type: "Blog",
    h1: "China travel guides for thoughtful planning.",
    intro: "Use these practical notes to choose destinations, plan a realistic pace and understand the details that shape a private journey in China.",
    body: `<section class="section"><div class="container"><h2>Planning guides and destination notes</h2><div class="seo-trip-list">${articles.map(article => `<article><h3><a href="/blog/${article.slug}">${article.title}</a></h3><p>${article.description}</p></article>`).join("")}</div><p>Explore <a href="/trips">private China itineraries</a> or <a href="/contact">ask Morrow Travel about route planning</a>.</p></div></section>`
  },
  {
    path: "/about",
    title: "About Morrow Travel | China-Based Travel Specialist",
    description: "Learn how Morrow Travel plans private China journeys through local knowledge, thoughtful pacing and coordinated on-trip support.",
    image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=1800&auto=format&fit=crop",
    type: "AboutPage",
    h1: "China, planned with care and local fluency.",
    intro: "Morrow Travel is a China-based inbound travel specialist focused on private, tailor-made journeys for international travelers and travel professionals.",
    body: `<section class="section"><div class="container"><h2>What Morrow Travel does</h2><p>Our work is to remove travel friction while keeping discovery alive: thoughtful routing, private guide support, hotel-location advice, transport coordination and enough space for the trip to feel personal.</p><p>China is large, seasonal and logistics-heavy. We treat each itinerary as a practical design project: understand the travelers, connect regions sensibly, plan around comfort, and then shape the experiences that make the journey meaningful.</p><p>Learn about our <a href="/trips">private China journeys</a> or <a href="/contact">contact Morrow Travel</a>.</p></div></section>`
  },
  {
    path: "/contact",
    title: "Plan a Private China Journey | Contact Morrow Travel",
    description: "Share your dates, interests and travel style with Morrow Travel to start planning a private, tailor-made journey across China.",
    image: trips[1].image,
    type: "ContactPage",
    h1: "Tell us what China should feel like.",
    intro: "To start planning a private China journey, share your approximate dates, group size, regions of interest, hotel preferences and preferred pace. Morrow Travel is based in Shenzhen and plans journeys for international travelers.",
    body: `<section class="section"><div class="container"><h2>Contact Morrow Travel</h2><p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p><p>WhatsApp: <a href="${contact.whatsapp}">${contact.phone}</a></p><p>Typical planning details include travel dates, number and ages of travelers, destinations, mobility needs, interests and accommodation preferences.</p><p>Not sure where to begin? Browse the <a href="/trips">private China itineraries</a> or read <a href="/blog/first-private-china-trip">how to plan a first private China trip</a>.</p></div></section>`
  },
  {
    path: "/b2b",
    title: "China DMC & Ground Services for Travel Advisors | Morrow Travel",
    description: "Morrow Travel provides private China itinerary design, guides, transport coordination, permit support and on-trip assistance for travel professionals.",
    image: trips[1].image,
    type: "WebPage",
    h1: "China ground support for travel professionals.",
    intro: "Morrow Travel supports travel advisors, agencies and specialist tour designers with private China itinerary design and local ground coordination.",
    body: `<section class="section"><div class="container"><h2>China DMC services</h2><ul><li>Route feasibility and itinerary design across China</li><li>Private guide and vehicle coordination</li><li>Hotel and transfer planning</li><li>Tibet permit support and altitude-aware scheduling</li><li>On-trip coordination and troubleshooting</li></ul><p>For partnership inquiries, <a href="/contact">contact Morrow Travel</a>. For direct traveler programs, see our <a href="/trips">private China tour itineraries</a>.</p></div></section>`
  }
];

pages.push(...trips.map(trip => ({
  path: `/trips/${trip.slug}`,
  title: `${trip.title} | ${trip.days}-Day Private China Tour | Morrow Travel`,
  description: trip.summary,
  image: trip.image,
  type: "TouristTrip",
  trip,
  h1: trip.title,
  intro: trip.summary,
  body: `<section class="section"><div class="container"><h2>${trip.days}-day ${trip.region} itinerary</h2><p><strong>Travel style:</strong> ${trip.style}. <strong>Best for:</strong> ${trip.bestFor}. <strong>Suggested travel time:</strong> ${trip.bestTime}.</p><h3>Journey highlights</h3><ul>${trip.highlights.map(item => `<li>${item}</li>`).join("")}</ul><h3>Sample route</h3><ol>${trip.route.map(item => `<li>${item}</li>`).join("")}</ol><p>This itinerary is a starting point rather than a fixed package. Morrow Travel can adapt pacing, hotels, guide support and regional connections to your group and dates.</p><p><a href="/contact">Ask about this private journey</a> · <a href="/trips">Explore all China itineraries</a></p></div></section>`
})));

pages.push(...articles.map(article => ({
  path: `/blog/${article.slug}`,
  title: `${article.title} | Morrow Travel`,
  description: article.description,
  image: article.slug.includes("zhangjiajie") ? trips[0].image : trips[1].image,
  type: "BlogPosting",
  article,
  h1: article.title,
  intro: article.description,
  body: `<article class="section"><div class="container seo-article">${article.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}<section><h2>Key planning takeaways</h2><ul>${article.takeaways.map(item => `<li>${item}</li>`).join("")}</ul></section><p>Explore <a href="/trips">private China tour itineraries</a> or <a href="/contact">ask Morrow Travel for planning advice</a>.</p></div></article>`
})));

const esc = value => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const urlFor = route => `${origin}${route === "/" ? "/" : route}`;

function breadcrumbSchema(page) {
  const parts = page.path.split("/").filter(Boolean);
  const items = [{ name: "Home", item: urlFor("/") }];
  if (parts.length) {
    const sectionPath = `/${parts[0]}`;
    if (sectionPath !== page.path) items.push({ name: parts[0] === "trips" ? "Journeys" : parts[0] === "blog" ? "Travel Guides" : parts[0].toUpperCase(), item: urlFor(sectionPath) });
    items.push({ name: page.h1, item: urlFor(page.path) });
  }
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.item }))
  };
}

function pageSchema(page) {
  const webpage = {
    "@type": ["BlogPosting", "TouristTrip"].includes(page.type) ? "WebPage" : page.type,
    "@id": `${urlFor(page.path)}#webpage`,
    url: urlFor(page.path),
    name: page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": `${origin}/#organization` },
    breadcrumb: breadcrumbSchema(page)
  };
  const graph = [agency, {
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: `${origin}/`,
    name: brand,
    publisher: { "@id": `${origin}/#organization` },
    inLanguage: "en"
  }, webpage];

  if (page.trip) {
    graph.push({
      "@type": "TouristTrip",
      "@id": `${urlFor(page.path)}#trip`,
      name: page.trip.title,
      description: page.trip.summary,
      image: page.trip.image,
      touristType: page.trip.bestFor,
      itinerary: {
        "@type": "ItemList",
        itemListElement: page.trip.route.map((name, index) => ({ "@type": "ListItem", position: index + 1, name }))
      },
      provider: { "@id": `${origin}/#organization` }
    });
  }

  if (page.article) {
    graph.push({
      "@type": "BlogPosting",
      "@id": `${urlFor(page.path)}#article`,
      headline: page.article.title,
      description: page.article.description,
      image: page.image,
      mainEntityOfPage: { "@id": `${urlFor(page.path)}#webpage` },
      publisher: { "@id": `${origin}/#organization` },
      author: { "@id": `${origin}/#organization` },
      inLanguage: "en"
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function pageHtml(page) {
  const canonical = urlFor(page.path);
  const schema = JSON.stringify(pageSchema(page)).replaceAll("<", "\\u003c");
  const title = esc(page.title);
  const description = esc(page.description);
  const image = esc(page.image);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="theme-color" content="#0e302b">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="${page.article ? "article" : "website"}">
  <meta property="og:site_name" content="${brand}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}">
  <meta property="og:url" content="${canonical}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json" data-site-schema>${schema}</script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header" data-header>
    <a class="brand" href="/" data-link>${brand}</a>
    <nav class="desktop-nav" aria-label="Main navigation"><a href="/" data-link>Home</a><a href="/trips" data-link>Journeys</a><a href="/blog" data-link>Journal</a><a href="/about" data-link>About</a><a href="/contact" data-link>Contact</a></nav>
    <a class="nav-cta" href="${contact.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20plan%20a%20private%20China%20journey." target="_blank" rel="noopener">Plan Your Journey</a>
    <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" data-menu-button><span></span><span></span></button>
  </header>
  <div class="mobile-menu" hidden data-mobile-menu><div class="mobile-menu__top"><span>${brand}</span><button type="button" aria-label="Close menu" data-close-menu>Close</button></div><nav aria-label="Mobile navigation"><a href="/" data-link>Home</a><a href="/trips" data-link>Journeys</a><a href="/blog" data-link>Journal</a><a href="/about" data-link>About</a><a href="/contact" data-link>Contact</a></nav><a class="button button--dark" href="${contact.whatsapp}" target="_blank" rel="noopener">Plan Your Journey</a></div>
  <main id="main" tabindex="-1">
    <section class="page-hero"><div class="container"><p class="eyebrow">${page.type === "TouristTrip" ? "Private China Journey" : page.type === "BlogPosting" ? "Morrow Travel Journal" : brand}</p><h1>${esc(page.h1)}</h1><p class="lead">${esc(page.intro)}</p><p><a href="/contact">Plan with Morrow Travel</a> · <a href="/trips">Explore Journeys</a></p></div></section>
    ${page.body}
  </main>
  <footer class="site-footer"><div><a class="footer-brand" href="/" data-link>${brand}</a><p>China-based travel planning for private, tailor-made journeys across China.</p></div><nav aria-label="Journeys"><h2>Journeys</h2><a href="/trips" data-link>All China Journeys</a><a href="/trips/beijing-xian-imperial-china" data-link>Beijing & Xi'an</a><a href="/trips/zhangjiajie-avatar-mountains" data-link>Zhangjiajie</a><a href="/trips/yunnan-tea-horse-road" data-link>Yunnan</a><a href="/trips/tibet-private-plateau" data-link>Tibet</a></nav><nav aria-label="Company"><h2>Company</h2><a href="/about" data-link>About</a><a href="/blog" data-link>Travel Guides</a><a href="/contact" data-link>Contact</a></nav><div><h2>Contact</h2><a href="mailto:${contact.email}">${contact.email}</a><a href="${contact.whatsapp}" target="_blank" rel="noopener">WhatsApp ${contact.phone}</a><a href="${contact.instagram}" target="_blank" rel="noopener">Instagram</a></div><p class="copyright">© 2026 ${brand}. All rights reserved.</p></footer>
  <script src="/app.js" defer></script>
</body>
</html>`;
}

await mkdir(output, { recursive: true });
await copyFile(path.join(root, "app.js"), path.join(output, "app.js"));
await copyFile(path.join(root, "styles.css"), path.join(output, "styles.css"));

for (const page of pages) {
  const targetDir = path.join(output, page.path.replace(/^\//, ""));
  const sourceDir = path.join(root, page.path.replace(/^\//, ""));
  await mkdir(targetDir, { recursive: true });
  await mkdir(sourceDir, { recursive: true });
  await writeFile(path.join(targetDir, "index.html"), pageHtml(page));
  await writeFile(path.join(sourceDir, "index.html"), pageHtml(page));
}

const urls = pages.map(page => `  <url><loc>${urlFor(page.path)}</loc></url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
await writeFile(path.join(output, "sitemap.xml"), sitemap);
await writeFile(path.join(root, "sitemap.xml"), sitemap);
await writeFile(path.join(output, "robots.txt"), robots);
await writeFile(path.join(root, "robots.txt"), robots);
const tripLinks = trips.map(trip => `- [${trip.title}](${origin}/trips/${trip.slug}) - ${trip.days} days; ${trip.region}; ${trip.summary}`).join("\n");
const llms = `# ${brand}\n\n> ${brand} is a China-based inbound travel specialist designing private, tailor-made journeys across China for international travelers.\n\n## What Morrow Travel does\n\n- Plans private China itineraries around traveler interests, dates, pace and group needs.\n- Coordinates private guides, drivers, hotel-location planning, regional routing and on-trip support.\n- Provides travel-professional ground support, including itinerary design and coordination.\n- Shares planning guidance for China destinations and private travel.\n\n## Destinations and journey examples\n\n${tripLinks}\n\n## Helpful pages\n\n- [About Morrow Travel](${origin}/about)\n- [Private China journeys](${origin}/trips)\n- [China travel guides](${origin}/blog)\n- [Contact and planning inquiries](${origin}/contact)\n- [Travel trade and DMC support](${origin}/b2b)\n\n## Contact\n\n- Email: ${contact.email}\n- WhatsApp: ${contact.phone}\n- Based in Shenzhen, China; serves travelers planning trips within China.\n\n## Source of truth\n\nPage-specific descriptions, itinerary examples, and current contact options are published on the linked pages. Itineraries are customizable starting points, not guaranteed fixed departures or quoted prices.\n`;
await writeFile(path.join(output, "llms.txt"), llms);
await writeFile(path.join(root, "llms.txt"), llms);

console.log(`Generated ${pages.length} crawlable pages in dist/.`);
