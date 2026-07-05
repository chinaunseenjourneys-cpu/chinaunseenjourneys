const CONTACT = {
  email: "Chinaunseenjourneys@gmail.com",
  whatsapp: "+44 7985 047225",
  whatsappUrl: "https://wa.me/447985047225",
  instagram: "https://www.instagram.com/chinaunseenjourneys",
  facebook: "https://www.facebook.com/share/1BavVN8oU8/"
};

const images = {
  greatWall: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1800&auto=format&fit=crop",
  zhangjiajie: "https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?q=80&w=1800&auto=format&fit=crop",
  yunnan: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1800&auto=format&fit=crop",
  tibet: "https://images.unsplash.com/photo-1624720114708-0cbd6ee41b93?q=80&w=1800&auto=format&fit=crop",
  guilin: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
  shanghai: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?q=80&w=1800&auto=format&fit=crop",
  silkRoad: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1800&auto=format&fit=crop",
  tea: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1800&auto=format&fit=crop",
  lantern: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=1800&auto=format&fit=crop"
};

const trips = [
  {
    slug: "zhangjiajie-avatar-mountains",
    title: "Zhangjiajie Avatar Mountains",
    days: 5,
    category: "nature",
    region: "Central China",
    style: "Nature & Landscapes",
    image: images.zhangjiajie,
    summary: "Sandstone pillars, glass bridges, misty valleys and quiet villages beyond the standard park circuit.",
    highlights: ["Yuanjiajie Avatar Peaks", "Tianmen Mountain", "Grand Canyon Glass Bridge", "Private sunrise viewpoint"],
    bestFor: "Photographers, couples, families with older children",
    bestTime: "March to May and September to November",
    pace: "Active but flexible",
    hotelStyle: "Character hotels near the park or refined city stays",
    route: ["Arrival in Zhangjiajie", "Yuanjiajie and Tianzi Mountain", "Tianmen Mountain", "Grand Canyon and village time", "Departure or extension"],
    inclusions: ["Private guide and vehicle", "Hotel and ticket coordination", "Crowd-aware daily timing", "Optional photography pacing"],
    extensions: ["Add Fenghuang Ancient Town", "Pair with Guilin for karst landscapes", "Continue to Yunnan for slow culture"],
    why: "Zhangjiajie is spectacular, but timing changes everything. We shape the route around light, weather, cable car queues and your walking comfort so the mountains feel atmospheric rather than rushed."
  },
  {
    slug: "beijing-xian-imperial-china",
    title: "Beijing & Xi'an Imperial China",
    days: 7,
    category: "culture",
    region: "Imperial China",
    style: "Culture & History",
    image: images.greatWall,
    summary: "A refined first China journey connecting the Great Wall, hutongs, the Forbidden City and the Terracotta Warriors.",
    highlights: ["Mutianyu Great Wall", "Forbidden City", "Hutong family visit", "Terracotta Warriors"],
    bestFor: "First-time visitors, families, senior travelers",
    bestTime: "April to June and September to October",
    pace: "Comfortable classic pacing",
    hotelStyle: "Central five-star hotels or boutique courtyard stays",
    route: ["Arrive in Beijing", "Forbidden City and hutongs", "Great Wall day", "Temple of Heaven and train to Xi'an", "Terracotta Warriors", "Xi'an old city", "Departure"],
    inclusions: ["Private cultural guide", "High-speed rail planning", "Senior-friendly pacing on request", "Hotel location advice"],
    extensions: ["Add Shanghai for a polished city finish", "Add Chengdu for pandas and food", "Add Guilin for soft landscape"],
    why: "This is classic China, but it should not feel like a checklist. We slow down the big sights with context, private pacing and local moments between the icons."
  },
  {
    slug: "yunnan-tea-horse-road",
    title: "Yunnan Tea Horse Road",
    days: 9,
    category: "culture",
    region: "Southwest China",
    style: "Culture & Slow Travel",
    image: images.yunnan,
    summary: "Ancient towns, Naxi culture, mountain valleys and tea routes from Dali to Lijiang and Shangri-La.",
    highlights: ["Dali Ancient Town", "Lijiang Old Town", "Tiger Leaping Gorge", "Shangri-La monasteries"],
    bestFor: "Culture lovers, slow travelers, couples",
    bestTime: "March to June and September to November",
    pace: "Slow discovery",
    hotelStyle: "Boutique inns, mountain lodges and character stays",
    route: ["Arrive in Dali", "Erhai villages and old town", "Lijiang and Naxi culture", "Tiger Leaping Gorge", "Shangri-La monasteries", "Plateau village day", "Departure or Kunming extension"],
    inclusions: ["Private transfers", "Local culture guide", "Altitude-aware routing", "Boutique inn recommendations"],
    extensions: ["Add Xishuangbanna for tropical culture", "Pair with Guilin for soft scenery", "Add Chengdu as an easy gateway"],
    why: "Yunnan rewards travelers who do less, better. We design the route with space for villages, markets, tea, mountain light and local culture without overloading the altitude."
  },
  {
    slug: "tibet-private-plateau",
    title: "Tibet Private Plateau Journey",
    days: 8,
    category: "spiritual",
    region: "Himalayan Plateau",
    style: "Spiritual Culture",
    image: images.tibet,
    summary: "A carefully paced private route through Lhasa, sacred monasteries and high-altitude landscapes with permit support.",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor Street", "Namtso Lake option"],
    bestFor: "Experienced travelers, spiritual culture, landscapes",
    bestTime: "May to October",
    pace: "Acclimatization first",
    hotelStyle: "Comfortable city hotels with altitude-conscious pacing",
    route: ["Arrive in Lhasa", "Rest and Barkhor orientation", "Potala Palace", "Jokhang and Sera Monastery", "Yamdrok or Namtso option", "Local market and cultural day", "Buffer day", "Departure"],
    inclusions: ["Permit support", "Altitude-conscious scheduling", "Private Tibetan guide", "Flexible sightseeing windows"],
    extensions: ["Add Chengdu before Tibet", "Continue to Everest region if conditions fit", "Pair with Yunnan for a cultural arc"],
    why: "Tibet requires patience, permits and intelligent pacing. We build in acclimatization, flexibility and calm guide support so the plateau can be experienced with care."
  },
  {
    slug: "guilin-yangshuo-family",
    title: "Guilin & Yangshuo Family Escape",
    days: 6,
    category: "family",
    region: "South China",
    style: "Family Journeys",
    image: images.guilin,
    summary: "A relaxed family-friendly route with karst scenery, cycling, bamboo rafting, cooking and countryside hotels.",
    highlights: ["Li River cruise", "Yangshuo cycling", "Longji Rice Terraces", "Private cooking class"],
    bestFor: "Families, multi-generation groups, active soft adventure",
    bestTime: "April to October",
    pace: "Relaxed and family-friendly",
    hotelStyle: "Countryside retreats and family-friendly hotels",
    route: ["Arrive in Guilin", "Longji Rice Terraces", "Li River to Yangshuo", "Countryside cycling", "Cooking class and bamboo raft", "Departure"],
    inclusions: ["Family-paced guide", "Private vehicle", "Gentle activity planning", "Hotel choices with space"],
    extensions: ["Add Guangzhou or Hong Kong", "Pair with Zhangjiajie for dramatic scenery", "Add Beijing and Xi'an for a first China route"],
    why: "Guilin works beautifully when the day has texture but not pressure. We combine river scenery, soft activity and child-friendly timing for an easy family rhythm."
  },
  {
    slug: "luxury-shanghai-suzhou-hangzhou",
    title: "Luxury Shanghai, Suzhou & Hangzhou",
    days: 6,
    category: "luxury",
    region: "East China",
    style: "Luxury Escapes",
    image: images.shanghai,
    summary: "A polished East China escape with design hotels, private gardens, tea culture, galleries and fine dining.",
    highlights: ["The Bund", "Private Suzhou garden visit", "West Lake", "Longjing tea village"],
    bestFor: "Luxury travelers, couples, design and food lovers",
    bestTime: "March to June and September to December",
    pace: "Polished urban escape",
    hotelStyle: "Design hotels, heritage properties and lake-view stays",
    route: ["Arrive in Shanghai", "The Bund and design galleries", "Private Suzhou gardens", "Hangzhou West Lake", "Longjing tea village", "Departure"],
    inclusions: ["Design-led hotel advice", "Private garden timing", "Dining recommendations", "Door-to-door transfers"],
    extensions: ["Add Huangshan for mountain scenery", "Pair with Beijing for classic contrast", "Add luxury river cruising by request"],
    why: "East China is best when style and timing are handled carefully. We combine private garden access, lake scenery, tea culture and urban polish without making the route feel overproduced."
  }
];

const destinations = [
  { name: "Beijing", group: "Imperial China", tagline: "Great Wall, Forbidden City, hutong life", image: images.greatWall, bestFor: "First China trips, history, families", months: "Apr-Jun, Sep-Oct", pairs: ["Xi'an", "Shanghai", "Chengdu"], text: "A powerful opening chapter for China, especially when the major sights are balanced with neighborhood life and private cultural context." },
  { name: "Xi'an", group: "Imperial China", tagline: "Terracotta Warriors and Silk Road heritage", image: images.silkRoad, bestFor: "History, food, classic routes", months: "Mar-Jun, Sep-Nov", pairs: ["Beijing", "Dunhuang", "Chengdu"], text: "Compact, atmospheric and ideal after Beijing, Xi'an brings ancient China into sharper human scale." },
  { name: "Zhangjiajie", group: "Mountains & Landscapes", tagline: "Avatar peaks, glass bridges and forest paths", image: images.zhangjiajie, bestFor: "Photography, nature, active couples", months: "Mar-May, Sep-Nov", pairs: ["Guilin", "Fenghuang", "Yunnan"], text: "Dramatic landscapes that need intelligent timing, flexible guiding and well-chosen hotel placement." },
  { name: "Yunnan", group: "Ancient Towns & Minorities", tagline: "Tea routes, old towns and mountain cultures", image: images.yunnan, bestFor: "Slow travel, culture, couples", months: "Mar-Jun, Sep-Nov", pairs: ["Guilin", "Chengdu", "Tibet"], text: "A richly textured region for travelers who want craft, villages, mountains and a slower sense of place." },
  { name: "Tibet", group: "Frontier & Plateau", tagline: "Lhasa, monasteries and high landscapes", image: images.tibet, bestFor: "Spiritual culture, landscapes, experienced travelers", months: "May-Oct", pairs: ["Chengdu", "Yunnan", "Xi'an"], text: "A journey that requires permits, pacing and care, but rewards travelers with rare atmosphere and depth." },
  { name: "Guilin", group: "Mountains & Landscapes", tagline: "Karst rivers, rice terraces and countryside", image: images.guilin, bestFor: "Families, soft adventure, photography", months: "Apr-Oct", pairs: ["Yangshuo", "Zhangjiajie", "Hong Kong"], text: "One of China's most graceful landscape regions, especially strong for family pacing and gentle active days." }
];

const travelStyles = [
  { slug: "family", title: "Family Journeys", text: "Child-paced routes, hands-on activities, vetted hotels and guides who understand family rhythm.", ideal: "Families and multi-generation groups", routes: ["Beijing & Xi'an", "Guilin & Yangshuo", "Shanghai with Suzhou"] },
  { slug: "senior", title: "Senior Friendly", text: "Comfortable pacing, private transport, accessible route planning and thoughtful hotel choices.", ideal: "Travelers who want depth without strain", routes: ["Beijing & Xi'an", "Shanghai, Suzhou & Hangzhou", "Guilin slow route"] },
  { slug: "muslim", title: "Muslim Friendly", text: "Halal-aware dining, prayer-time sensitivity and culturally thoughtful itinerary design.", ideal: "Muslim travelers and families", routes: ["Xi'an heritage", "Beijing classics", "Yunnan culture"] },
  { slug: "women", title: "Women-only Journeys", text: "Private guide teams, safe pacing and routes shaped around comfort, curiosity and confidence.", ideal: "Friends, solo travelers and private groups", routes: ["Yunnan slow travel", "Shanghai design escape", "Guilin countryside"] },
  { slug: "luxury", title: "Luxury Escapes", text: "Design hotels, private access, fine dining and polished logistics from arrival to departure.", ideal: "Couples, luxury clients and advisors", routes: ["Shanghai, Suzhou & Hangzhou", "Beijing in style", "Private Yunnan"] },
  { slug: "tailor-made", title: "Tailor-made Tours", text: "A blank-page itinerary shaped around your dates, interests, pace and travel companions.", ideal: "Travelers with a specific dream", routes: ["Any region, any pace", "Festival travel", "B2B white-label design"] }
];

const posts = [
  {
    slug: "first-private-china-trip",
    title: "How to Plan Your First Private China Journey",
    excerpt: "A practical guide to pacing, routing and choosing the right regions for a first bespoke trip.",
    date: "Travel Guide",
    readTime: "5 min read",
    body: [
      "A strong first China journey usually works best when it balances one classic anchor with one slower region. Beijing and Xi'an give historical depth, while Guilin, Zhangjiajie or Yunnan add landscape, texture and breathing room.",
      "The biggest planning mistake is trying to cover too much. China rewards space: a later start after a long flight, one flexible afternoon in an old town, or a guide who can adjust around weather and crowds often matters more than adding one more sight.",
      "For most first-time private travelers, seven to twelve days is a comfortable starting point. Families and senior travelers should protect rest windows, while photographers and culture lovers may prefer fewer cities with deeper local access."
    ],
    takeaways: ["Choose two to three regions, not five.", "Keep the first full day gentle after arrival.", "Use private guides where context and timing matter most."]
  },
  {
    slug: "zhangjiajie-beyond-avatar",
    title: "Zhangjiajie Beyond the Avatar Viewpoints",
    excerpt: "Where to slow down, avoid crowds and find the mountain atmosphere most travelers miss.",
    date: "Destination Story",
    readTime: "4 min read",
    body: [
      "Zhangjiajie is famous for its sandstone pillars, but the best experience depends heavily on timing. The same viewpoint can feel cinematic at sunrise and crowded by late morning.",
      "A private route allows the day to be shaped around light, weather and walking comfort. Some travelers want the major platforms; others prefer quieter paths, village lunches and a slower approach to Tianmen Mountain.",
      "This is a destination where logistics change the feeling of the trip. Ticket windows, cable car queues, park transfers and hotel location all affect whether the mountains feel magical or exhausting."
    ],
    takeaways: ["Start early for atmosphere and lighter crowds.", "Stay close enough to reduce daily transfer fatigue.", "Build in weather flexibility for mist, rain and visibility."]
  },
  {
    slug: "family-travel-china",
    title: "Why China Works Beautifully for Family Travel",
    excerpt: "Hands-on culture, gentle adventure and logistics that can be shaped around every generation.",
    date: "Family Travel",
    readTime: "4 min read",
    body: [
      "China works especially well for families when the route mixes big moments with hands-on experiences. A Great Wall walk, dumpling class, bamboo raft or countryside bike ride gives children something to remember beyond museum names.",
      "Private travel also solves the real family challenge: rhythm. Some families need late starts, others need early finishes, and multi-generation groups often need hotels, meals and walking distances chosen with care.",
      "The best family itineraries are not simplified versions of adult trips. They are designed around energy, curiosity and comfort, with enough structure to feel easy and enough flexibility to stay human."
    ],
    takeaways: ["Mix iconic sights with tactile activities.", "Protect downtime after transfers.", "Choose guides who can read the group's energy."]
  }
];

const pageMeta = {
  "/": ["Private Custom China Tours | China Unseen Journeys", "Private bespoke China journeys designed with China-based expertise, refined pacing and private guide support."],
  "/trips": ["Private China Tours & Journeys | China Unseen Journeys", "Browse private bespoke China itineraries by region, style and travel pace."],
  "/destinations": ["China Travel Destinations | China Unseen Journeys", "Explore private travel destinations across China and see how regions pair together."],
  "/travel-styles": ["Travel Styles | China Unseen Journeys", "Family, senior, Muslim-friendly, women-only, luxury and tailor-made China travel styles."],
  "/blog": ["Travel Stories & China Guides | China Unseen Journeys", "China travel guides, planning ideas and destination stories for private bespoke journeys."],
  "/b2b": ["China DMC for B2B Partners | China Unseen Journeys", "White-label private China DMC support for advisors, agencies and travel designers."],
  "/about": ["About China Unseen Journeys", "Meet the China-based inbound travel specialist behind China Unseen Journeys."],
  "/contact": ["Contact China Unseen Journeys", "Plan a private bespoke China journey by WhatsApp or email."]
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function whatsappLink(message) {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

function setMeta(path) {
  const trip = trips.find(item => `/trips/${item.slug}` === path);
  const post = posts.find(item => `/blog/${item.slug}` === path);
  const dynamicMeta = trip
    ? [`${trip.title} | Private China Journey`, `${trip.summary} Private bespoke China itinerary by China Unseen Journeys.`]
    : post
      ? [`${post.title} | China Travel Guide`, post.excerpt]
      : null;
  const [title, description] = dynamicMeta || pageMeta[path] || pageMeta["/"];
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute("content", description);
  document.querySelector('link[rel="canonical"]').setAttribute("href", `https://www.chinaunseenjourneys.com${path === "/" ? "/" : path}`);
}

function sectionHeader(eyebrow, title, lead = "") {
  return `
    <div class="section-head">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${lead ? `<p class="lead">${lead}</p>` : ""}
    </div>`;
}

function tripUrl(trip) {
  return `/trips/${trip.slug}`;
}

function tripCard(trip, feature = false) {
  return `
    <article class="journey-card ${feature ? "journey-card--feature" : ""}">
      <a class="journey-card__image" href="${tripUrl(trip)}" data-link>
        <img src="${trip.image}" alt="${escapeHtml(trip.title)} landscape" loading="lazy">
      </a>
      <div class="journey-card__body">
        <p class="eyebrow">${trip.days} days · ${trip.region}</p>
        <h3><a href="${tripUrl(trip)}" data-link>${trip.title}</a></h3>
        <p>${trip.summary}</p>
        <div class="facts">
          <span>${trip.style}</span>
          <span>${trip.pace}</span>
          <span>${trip.bestTime}</span>
        </div>
        <a class="link-arrow" href="${tripUrl(trip)}" data-link>View Journey</a>
      </div>
    </article>`;
}

function renderHero() {
  return `
    <section class="hero" style="--hero-image:url('${images.zhangjiajie}')">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="eyebrow">Private China Journeys</p>
          <h1>China, designed around how you travel.</h1>
          <p class="lead">Bespoke private journeys shaped by China-based specialists for travelers who value depth, comfort and graceful logistics.</p>
          <div class="hero__actions">
            <a class="button button--light" href="/trips" data-link>Explore Journeys</a>
            <a class="button button--ghost" href="/contact" data-link>Start Planning</a>
          </div>
        </div>
        <aside class="hero-panel" aria-label="China Unseen highlights">
          <span>Licensed inbound operator</span>
          <strong>Private-only travel across China</strong>
          <p>Route design, vetted guides, private transport, permits and on-trip support handled with one calm planning voice.</p>
        </aside>
      </div>
    </section>`;
}

function renderHome() {
  return `
    ${renderHero()}
    <section class="signature-strip" aria-label="Travel strengths">
      <div class="container signature-strip__inner">
        <span>China-based expertise</span>
        <span>Private guide teams</span>
        <span>Tailor-made pacing</span>
        <span>B2B-ready ground support</span>
      </div>
    </section>
    <section class="section">
      <div class="container editorial">
        <div>
          <p class="eyebrow">The China Unseen Approach</p>
          <h2>Less checklist, more carefully held discovery.</h2>
        </div>
        <div class="editorial__copy">
          <p>China is vast, seasonal and deeply layered. We design each private journey as a route with rhythm: the right hotel base, the right guide, the right transport choice, and enough space for the unscripted moments that make travel feel alive.</p>
          <p>Whether you are a family, a couple, a senior traveler, a culture lover or a travel advisor, the work is the same: remove friction without flattening the experience.</p>
        </div>
      </div>
    </section>
    <section class="section section--ivory">
      <div class="container">
        ${sectionHeader("Featured Journeys", "Private routes with a sense of place.", "Use these as polished starting points. Every journey can be redesigned around dates, interests, hotel style and travel pace.")}
        <div class="feature-layout">
          ${tripCard(trips[0], true)}
          <div class="feature-layout__side">
            ${trips.slice(1, 4).map(trip => tripCard(trip)).join("")}
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHeader("Start With Your Style", "Choose the travel rhythm that feels like you.")}
        ${styleExplorer()}
      </div>
    </section>
    ${processSection()}
    ${destinationBuilder()}
    ${testimonialSection()}
    ${journalPreview()}
    ${contactSection("Begin with a conversation.", "Tell us the kind of China you want to feel. We will shape the route, pace and support around you.")}
  `;
}

function processSection() {
  const steps = [
    ["1", "Share the dream", "Dates, travelers, comfort level, interests and anything you need the journey to respect."],
    ["2", "Shape the route", "We propose a practical China route with pacing, hotel logic, guide needs and seasonal notes."],
    ["3", "Refine the feel", "Adjust rhythm, experiences, hotels and regions until the itinerary feels personal."],
    ["4", "Travel with support", "Private guides, drivers and local coordination keep the trip smooth on the ground."]
  ];
  return `
    <section class="section section--deep">
      <div class="container">
        ${sectionHeader("How It Works", "A calm planning path for a complex destination.", "China rewards expert routing. Our process keeps the decisions clear and the travel experience personal.")}
        <div class="steps">
          ${steps.map(([number, title, text]) => `<article class="step"><strong>${number}</strong><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function styleExplorer() {
  return `
    <div class="style-explorer" data-style-explorer>
      <div class="style-tabs" role="tablist" aria-label="Travel styles">
        ${travelStyles.map((style, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-style-tab="${style.slug}">${style.title}</button>`).join("")}
      </div>
      <div class="style-panel">
        ${travelStyles.map((style, index) => `
          <article class="${index === 0 ? "is-active" : ""}" data-style-panel="${style.slug}">
            <p class="eyebrow">${style.ideal}</p>
            <h3>${style.title}</h3>
            <p>${style.text}</p>
            <div class="facts">${style.routes.map(route => `<span>${route}</span>`).join("")}</div>
            <a class="link-arrow" href="${whatsappLink(`Hi, I would like to plan a ${style.title.toLowerCase()} in China.`)}" target="_blank" rel="noopener">Plan This Style</a>
          </article>`).join("")}
      </div>
    </div>`;
}

function destinationBuilder() {
  return `
    <section class="section section--ivory">
      <div class="container">
        ${sectionHeader("Route Builder", "See how China can connect.", "Choose a destination and see the regions that naturally pair with it.")}
        <div class="route-builder" data-route-builder>
          <div class="route-builder__list">
            ${destinations.map((destination, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-destination="${destination.name}">${destination.name}<span>${destination.group}</span></button>`).join("")}
          </div>
          <div class="route-builder__panel">
            ${destinations.map((destination, index) => `
              <article class="${index === 0 ? "is-active" : ""}" data-destination-panel="${destination.name}">
                <img src="${destination.image}" alt="${destination.name} travel scenery" loading="lazy">
                <div>
                  <p class="eyebrow">${destination.tagline}</p>
                  <h3>${destination.name}</h3>
                  <p>${destination.text}</p>
                  <div class="facts">
                    <span>${destination.bestFor}</span>
                    <span>${destination.months}</span>
                  </div>
                  <p class="mini-title">Pairs well with</p>
                  <div class="route-pairs">${destination.pairs.map(pair => `<span>${pair}</span>`).join("")}</div>
                </div>
              </article>`).join("")}
          </div>
        </div>
      </div>
    </section>`;
}

function testimonialSection() {
  const quotes = [
    ["The route felt personal, not copied from a brochure. We saw the famous places, but the quiet moments made it memorable.", "Private family journey"],
    ["Our guide adjusted each day around weather, crowds and energy. That flexibility changed the whole experience.", "Couple itinerary"],
    ["As a travel advisor, I need clear communication and reliable ground handling. The China logistics were handled calmly.", "B2B partner"]
  ];
  return `
    <section class="section">
      <div class="container">
        ${sectionHeader("What Travelers Value", "The difference is in the pacing, context and care.")}
        <div class="quote-grid">
          ${quotes.map(([quote, source]) => `<figure class="quote"><blockquote>${quote}</blockquote><figcaption>${source}</figcaption></figure>`).join("")}
        </div>
      </div>
    </section>`;
}

function journalPreview() {
  return `
    <section class="section section--ivory">
      <div class="container">
        ${sectionHeader("Travel Notes", "Useful thinking before you plan.", "Short guides for choosing regions, avoiding common mistakes and understanding private travel in China.")}
        <div class="journal-grid">
          ${posts.map(post => `<article class="journal-card"><p class="eyebrow">${post.date} · ${post.readTime}</p><h3><a href="/blog/${post.slug}" data-link>${post.title}</a></h3><p>${post.excerpt}</p><a class="link-arrow" href="/blog/${post.slug}" data-link>Read Guide</a></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderTrips() {
  const params = new URLSearchParams(location.search);
  const category = params.get("cat") || "all";
  const filtered = category === "all" ? trips : trips.filter(trip => trip.category === category);
  const filters = [["all", "All"], ["culture", "Culture"], ["nature", "Nature"], ["family", "Family"], ["luxury", "Luxury"], ["spiritual", "Spiritual"]];
  return `
    <section class="page-hero page-hero--image" style="--hero-image:url('${images.greatWall}')">
      <div class="container">
        <p class="eyebrow">Explore China</p>
        <h1>Private journeys, not fixed packages.</h1>
        <p class="lead">Browse polished starting points by travel style. We reshape every route around your dates, pace, hotel preferences and interests.</p>
      </div>
    </section>
    <section class="signature-strip">
      <div class="container signature-strip__inner">
        <span>Private guide</span><span>Hotel logic</span><span>Seasonal routing</span><span>On-trip support</span>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="filters">${filters.map(([key, label]) => `<a class="filter ${category === key ? "is-active" : ""}" href="/trips${key === "all" ? "" : `?cat=${key}`}" data-link>${label}</a>`).join("")}</div>
        <div class="journey-grid">${filtered.map(trip => tripCard(trip)).join("")}</div>
      </div>
    </section>
    ${contactSection("Want something more specific?", "Tell us the feeling, pace and regions you have in mind. We will build the route from scratch.")}
  `;
}

function renderTripDetail(trip) {
  return `
    <section class="detail-hero" style="--hero-image:url('${trip.image}')">
      <div class="container detail-hero__content">
        <p class="eyebrow">${trip.days} days · ${trip.region} · ${trip.style}</p>
        <h1>${trip.title}</h1>
        <p class="lead">${trip.summary}</p>
        <div class="hero__actions">
          <a class="button button--light" href="${whatsappLink(`Hi, I'm interested in the ${trip.title} itinerary.`)}" target="_blank" rel="noopener">Request This Journey</a>
          <a class="button button--ghost" href="/trips" data-link>Back to Trips</a>
        </div>
      </div>
    </section>
    <nav class="sticky-cta" aria-label="Journey actions">
      <span>${trip.title}</span>
      <a class="button button--dark" href="${whatsappLink(`Hi, I'm interested in the ${trip.title} itinerary.`)}" target="_blank" rel="noopener">Plan This Journey</a>
    </nav>
    <section class="section">
      <div class="container trip-overview">
        <aside class="snapshot-panel">
          <p class="eyebrow">Journey Snapshot</p>
          <dl>
            <div><dt>Best for</dt><dd>${trip.bestFor}</dd></div>
            <div><dt>Best time</dt><dd>${trip.bestTime}</dd></div>
            <div><dt>Pace</dt><dd>${trip.pace}</dd></div>
            <div><dt>Hotel style</dt><dd>${trip.hotelStyle}</dd></div>
          </dl>
        </aside>
        <div>
          <p class="eyebrow">Why This Journey</p>
          <h2>A flexible starting point, designed around you.</h2>
          <p class="lead">${trip.why}</p>
          <ol class="timeline">
            ${trip.route.map((item, index) => `<li><span>Day ${index + 1}</span><strong>${item}</strong></li>`).join("")}
          </ol>
        </div>
      </div>
    </section>
    <section class="section section--ivory">
      <div class="container">
        ${sectionHeader("What We Handle", "Private logistics shaped around comfort and context.")}
        <div class="service-grid">
          ${trip.inclusions.map(item => `<article><h3>${item}</h3><p>Handled as part of a bespoke private journey, with details adjusted to your group and travel style.</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container accordion-layout">
        <div>
          <p class="eyebrow">Extend The Route</p>
          <h2>Make this journey more yours.</h2>
          <p class="lead">China routes are rarely one-size-fits-all. These pairings work naturally from this itinerary.</p>
        </div>
        <div class="accordion">
          ${trip.extensions.map((extension, index) => `
            <div class="accordion__item">
              <button type="button" class="accordion__button" data-accordion aria-expanded="${index === 0 ? "true" : "false"}">
                ${extension}<span></span>
              </button>
              <div class="accordion__panel ${index === 0 ? "is-open" : ""}">
                <p>We can add this extension with private transport logic, hotel planning and the right guide support so the route still feels balanced.</p>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </section>
    ${contactSection(`Start planning ${trip.title}`, "Share your preferred dates, group size and comfort level. We will suggest a practical next step.")}
  `;
}

function renderDestinations() {
  const groups = [...new Set(destinations.map(destination => destination.group))];
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Destinations</p>
        <h1>China is not one trip. It is a route design question.</h1>
        <p class="lead">Explore the regions we most often weave into private journeys, from imperial capitals to mountain landscapes and frontier culture.</p>
      </div>
    </section>
    ${destinationBuilder()}
    <section class="section">
      <div class="container">
        ${groups.map(group => `
          <div class="destination-group">
            <p class="eyebrow">${group}</p>
            <div class="destination-row">
              ${destinations.filter(destination => destination.group === group).map(destination => `
                <article class="destination-card">
                  <img src="${destination.image}" alt="${destination.name} scenery" loading="lazy">
                  <div>
                    <h3>${destination.name}</h3>
                    <p>${destination.text}</p>
                    <div class="facts"><span>${destination.bestFor}</span><span>${destination.months}</span></div>
                  </div>
                </article>`).join("")}
            </div>
          </div>`).join("")}
      </div>
    </section>`;
}

function renderTravelStyles() {
  return `
    <section class="page-hero page-hero--image" style="--hero-image:url('${images.tea}')">
      <div class="container">
        <p class="eyebrow">Travel Styles</p>
        <h1>Begin with how you want to feel while traveling.</h1>
        <p class="lead">Family rhythm, luxury polish, cultural depth, accessibility needs and advisor support all change how a China itinerary should be designed.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${styleExplorer()}
      </div>
    </section>
    <section class="section section--ivory">
      <div class="container style-grid">
        ${travelStyles.map(style => `
          <article class="style-card">
            <p class="eyebrow">${style.ideal}</p>
            <h3>${style.title}</h3>
            <p>${style.text}</p>
            <div class="facts">${style.routes.map(route => `<span>${route}</span>`).join("")}</div>
            <a class="link-arrow" href="${whatsappLink(`Hi, I would like to plan a ${style.title.toLowerCase()} in China.`)}" target="_blank" rel="noopener">Plan This Style</a>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderBlog() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Travel Notes</p>
        <h1>Planning intelligence for private China travel.</h1>
        <p class="lead">Guides to help you choose regions, pace the journey and understand how private travel in China works.</p>
      </div>
    </section>
    ${journalPreview()}`;
}

function renderBlogPost(post) {
  return `
    <section class="page-hero">
      <div class="container article-hero">
        <p class="eyebrow">${post.date} · ${post.readTime}</p>
        <h1>${post.title}</h1>
        <p class="lead">${post.excerpt}</p>
      </div>
    </section>
    <article class="section">
      <div class="container article">
        ${post.body.map(paragraph => `<p>${paragraph}</p>`).join("")}
        <div class="takeaways">
          <p class="eyebrow">Practical Takeaways</p>
          <ul>${post.takeaways.map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="article-cta">
          <h2>Want this shaped around your dates?</h2>
          <p>Tell us who is traveling, when you want to go and what kind of China you want to experience.</p>
          <a class="button button--dark" href="${whatsappLink(`Hi, I read ${post.title} and would like help planning a private China journey.`)}" target="_blank" rel="noopener">Plan Your Journey</a>
        </div>
      </div>
    </article>`;
}

function renderB2B() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">China DMC</p>
        <h1>White-label China ground support for travel professionals.</h1>
        <p class="lead">Private China arrangements for advisors, agencies and specialist tour designers who need clear communication and calm local execution.</p>
      </div>
    </section>
    <section class="section">
      <div class="container trip-overview">
        <div>
          <p class="eyebrow">Partner Capability</p>
          <h2>Reliable delivery behind your client relationship.</h2>
          <p class="lead">We support itinerary design, vetted guides, private transport, hotel coordination, permits and on-trip troubleshooting.</p>
          <div class="service-grid service-grid--compact">
            ${["Route feasibility checks", "Private guide teams", "VIP and family logistics", "Tibet and permit support"].map(item => `<article><h3>${item}</h3><p>Clear communication, practical routing and transparent ground support.</p></article>`).join("")}
          </div>
        </div>
        ${inquiryPanel("B2B partnership inquiry")}
      </div>
    </section>`;
}

function renderAbout() {
  return `
    <section class="page-hero page-hero--image" style="--hero-image:url('${images.lantern}')">
      <div class="container">
        <p class="eyebrow">About Us</p>
        <h1>China, planned with care and local fluency.</h1>
        <p class="lead">China Unseen Journeys is a China-based inbound travel specialist focused on private, bespoke travel for curious travelers and trusted partners.</p>
      </div>
    </section>
    <section class="section">
      <div class="container editorial">
        <div>
          <p class="eyebrow">What We Believe</p>
          <h2>The best journeys change how you see a place.</h2>
        </div>
        <div class="editorial__copy">
          <p>Our work is to remove friction while keeping discovery alive: the right guide, the right pace, the right local moments, and enough space for surprise.</p>
          <p>Because China is large, seasonal and logistics-heavy, we treat every itinerary as a practical design project: routing first, comfort second, then the moments that make the journey feel personal.</p>
        </div>
      </div>
    </section>
    <section class="section section--ivory">
      <div class="container">
        <div class="stats">
          <div class="stat"><strong>Private</strong><span>No shared tours</span></div>
          <div class="stat"><strong>China-based</strong><span>Local planning</span></div>
          <div class="stat"><strong>24h</strong><span>Typical reply</span></div>
          <div class="stat"><strong>Bilingual</strong><span>English and Chinese</span></div>
        </div>
      </div>
    </section>
    ${processSection()}`;
}

function inquiryPanel(context = "Private journey inquiry") {
  return `
    <aside class="panel inquiry-panel">
      <p class="eyebrow">Quick Inquiry</p>
      <h3>Tell us your dream.</h3>
      <form class="inquiry-form" data-inquiry-form data-context="${escapeHtml(context)}">
        <label class="field">Name<input name="name" autocomplete="name" required placeholder="Your name"></label>
        <label class="field">Email<input name="email" type="email" autocomplete="email" required placeholder="your@email.com"></label>
        <label class="field">Travel month<input name="dates" placeholder="Approximate dates or month"></label>
        <label class="field">Travel style
          <select name="style">
            <option value="">Choose one</option>
            ${travelStyles.map(style => `<option>${style.title}</option>`).join("")}
          </select>
        </label>
        <label class="field">Message<textarea name="message" required placeholder="Tell us about travelers, places, hotel level and pace."></textarea></label>
        <button class="button button--dark" type="submit">Send by Email</button>
        <p class="notice">Your email app will open with the inquiry prepared. For the fastest reply, message us on WhatsApp.</p>
      </form>
    </aside>`;
}

function contactSection(title = "Start your journey", text = "Tell us your dream. We will shape the experience around you.") {
  return `
    <section class="section section--deep contact-band">
      <div class="container trip-overview">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>${title}</h2>
          <p class="lead">${text}</p>
          <div class="contact-list">
            <a href="${whatsappLink("Hi, I'd like to plan a private China journey.")}" target="_blank" rel="noopener">WhatsApp ${CONTACT.whatsapp}</a>
            <a href="mailto:${CONTACT.email}">Email ${CONTACT.email}</a>
            <a href="${CONTACT.instagram}" target="_blank" rel="noopener">Instagram @chinaunseenjourneys</a>
          </div>
        </div>
        ${inquiryPanel()}
      </div>
    </section>`;
}

function renderContact() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Start Planning</p>
        <h1>Tell us what China should feel like.</h1>
        <p class="lead">Share your dates, interests, hotel style and group size. We will reply with a practical next step, usually within 24 hours.</p>
      </div>
    </section>
    <section class="signature-strip">
      <div class="container signature-strip__inner">
        <span>Typical reply within 24 hours</span>
        <span>WhatsApp for fastest planning</span>
        <span>Private-only journeys</span>
      </div>
    </section>
    ${contactSection("Begin with a conversation.", "A good journey starts with a thoughtful brief, not a template.")}
  `;
}

function renderNotFound() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <p class="lead">This route does not exist yet. Start with the journey collection or contact us directly.</p>
        <div class="hero__actions"><a class="button button--light" href="/trips" data-link>Explore Journeys</a><a class="button button--ghost" href="/contact" data-link>Contact Us</a></div>
      </div>
    </section>`;
}

const routes = {
  "/": renderHome,
  "/trips": renderTrips,
  "/destinations": renderDestinations,
  "/travel-styles": renderTravelStyles,
  "/blog": renderBlog,
  "/b2b": renderB2B,
  "/about": renderAbout,
  "/contact": renderContact
};

function resolvePage(path) {
  const trip = trips.find(item => `/trips/${item.slug}` === path);
  if (trip) return { render: () => renderTripDetail(trip), navPath: "/trips", metaPath: path };

  const post = posts.find(item => `/blog/${item.slug}` === path);
  if (post) return { render: () => renderBlogPost(post), navPath: "/blog", metaPath: path };

  if (routes[path]) return { render: routes[path], navPath: path, metaPath: path };

  return { render: renderNotFound, navPath: "", metaPath: "/" };
}

function setActiveNavigation(path) {
  document.querySelectorAll(".desktop-nav a[data-link], .mobile-menu a[data-link]").forEach(link => {
    if (link.origin !== location.origin) return;
    const hrefPath = new URL(link.href).pathname.replace(/\/$/, "") || "/";
    const isActive = hrefPath === path;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function closeMenu() {
  const menu = document.querySelector("[data-mobile-menu]");
  const button = document.querySelector("[data-menu-button]");
  menu.hidden = true;
  document.body.classList.remove("menu-open");
  button.setAttribute("aria-expanded", "false");
}

function render() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  const page = resolvePage(path);
  setMeta(page.metaPath);
  document.querySelector("#main").innerHTML = page.render();
  setActiveNavigation(page.navPath);
  document.querySelector("#main").focus({ preventScroll: true });
  closeMenu();
}

document.addEventListener("click", event => {
  const styleTab = event.target.closest("[data-style-tab]");
  if (styleTab) {
    const root = styleTab.closest("[data-style-explorer]");
    root.querySelectorAll("[data-style-tab]").forEach(tab => tab.classList.toggle("is-active", tab === styleTab));
    root.querySelectorAll("[data-style-panel]").forEach(panel => panel.classList.toggle("is-active", panel.dataset.stylePanel === styleTab.dataset.styleTab));
    return;
  }

  const destinationButton = event.target.closest("[data-destination]");
  if (destinationButton) {
    const root = destinationButton.closest("[data-route-builder]");
    root.querySelectorAll("[data-destination]").forEach(button => button.classList.toggle("is-active", button === destinationButton));
    root.querySelectorAll("[data-destination-panel]").forEach(panel => panel.classList.toggle("is-active", panel.dataset.destinationPanel === destinationButton.dataset.destination));
    return;
  }

  const accordionButton = event.target.closest("[data-accordion]");
  if (accordionButton) {
    const accordion = accordionButton.closest(".accordion");
    const panel = accordionButton.nextElementSibling;
    const isOpen = accordionButton.getAttribute("aria-expanded") === "true";
    accordion.querySelectorAll("[data-accordion]").forEach(button => {
      if (button !== accordionButton) {
        button.setAttribute("aria-expanded", "false");
        button.nextElementSibling.classList.remove("is-open");
      }
    });
    accordionButton.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("is-open", !isOpen);
    return;
  }

  const link = event.target.closest("a[data-link]");
  if (!link) return;
  const url = new URL(link.href);
  if (url.origin !== location.origin) return;
  event.preventDefault();
  history.pushState(null, "", `${url.pathname}${url.search}`);
  render();
  scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("submit", event => {
  const form = event.target.closest("[data-inquiry-form]");
  if (!form) return;
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(form.dataset.context || "China journey inquiry");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTravel month: ${data.get("dates") || "Not specified"}\nTravel style: ${data.get("style") || "Not specified"}\nPage: ${location.href}\n\nMessage:\n${data.get("message")}`
  );
  location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
});

document.querySelector("[data-menu-button]").addEventListener("click", () => {
  const menu = document.querySelector("[data-mobile-menu]");
  const button = document.querySelector("[data-menu-button]");
  const isOpen = !menu.hidden;
  menu.hidden = isOpen;
  document.body.classList.toggle("menu-open", !isOpen);
  button.setAttribute("aria-expanded", String(!isOpen));
});

document.querySelector("[data-close-menu]").addEventListener("click", closeMenu);
addEventListener("popstate", render);
render();
