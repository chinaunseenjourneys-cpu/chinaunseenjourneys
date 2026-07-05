const CONTACT = {
  email: "Chinaunseenjourneys@gmail.com",
  whatsapp: "+44 7985 047225",
  whatsappUrl: "https://wa.me/447985047225",
  instagram: "https://www.instagram.com/chinaunseenjourneys",
  facebook: "https://www.facebook.com/share/1BavVN8oU8/"
};

const images = {
  greatWall: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1600&auto=format&fit=crop",
  zhangjiajie: "https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?q=80&w=1600&auto=format&fit=crop",
  yunnan: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1600&auto=format&fit=crop",
  tibet: "https://images.unsplash.com/photo-1624720114708-0cbd6ee41b93?q=80&w=1600&auto=format&fit=crop",
  guilin: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1600&auto=format&fit=crop",
  shanghai: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?q=80&w=1600&auto=format&fit=crop",
  silkRoad: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1600&auto=format&fit=crop"
};

const trips = [
  {
    slug: "zhangjiajie-avatar-mountains",
    title: "Zhangjiajie Avatar Mountains",
    days: "5 days",
    category: "nature",
    style: "Nature & Landscapes",
    image: images.zhangjiajie,
    summary: "A private journey through sandstone pillars, glass bridges, misty valleys and quiet villages beyond the standard park circuit.",
    highlights: ["Yuanjiajie Avatar Peaks", "Tianmen Mountain", "Grand Canyon Glass Bridge", "Private sunrise viewpoint"],
    bestFor: "Photographers, couples, families with older children",
    bestTime: "March to May and September to November",
    pace: "Active but flexible",
    route: ["Arrival in Zhangjiajie", "Yuanjiajie and Tianzi Mountain", "Tianmen Mountain", "Grand Canyon and village time", "Departure or extension"],
    inclusions: ["Private guide and vehicle", "Hotel and ticket coordination", "Crowd-aware daily timing", "Optional photography pacing"]
  },
  {
    slug: "beijing-xian-imperial-china",
    title: "Beijing & Xi'an Imperial China",
    days: "7 days",
    category: "culture",
    style: "Culture & History",
    image: images.greatWall,
    summary: "A refined first China journey connecting the Great Wall, hutongs, the Forbidden City and the Terracotta Warriors.",
    highlights: ["Mutianyu Great Wall", "Forbidden City", "Hutong family visit", "Terracotta Warriors"],
    bestFor: "First-time visitors, families, senior travelers",
    bestTime: "April to June and September to October",
    pace: "Comfortable classic pacing",
    route: ["Arrive in Beijing", "Forbidden City and hutongs", "Great Wall day", "Temple of Heaven and train to Xi'an", "Terracotta Warriors", "Xi'an old city", "Departure"],
    inclusions: ["Private cultural guide", "High-speed rail planning", "Senior-friendly pacing on request", "Hotel location advice"]
  },
  {
    slug: "yunnan-tea-horse-road",
    title: "Yunnan Tea Horse Road",
    days: "9 days",
    category: "culture",
    style: "Culture & History",
    image: images.yunnan,
    summary: "Ancient towns, Naxi culture, mountain valleys and tea routes from Dali to Lijiang and Shangri-La.",
    highlights: ["Dali Ancient Town", "Lijiang Old Town", "Tiger Leaping Gorge", "Shangri-La monasteries"],
    bestFor: "Culture lovers, slow travelers, couples",
    bestTime: "March to June and September to November",
    pace: "Slow discovery",
    route: ["Arrive in Dali", "Erhai villages and old town", "Lijiang and Naxi culture", "Tiger Leaping Gorge", "Shangri-La monasteries", "Plateau village day", "Departure or Kunming extension"],
    inclusions: ["Private transfers", "Local culture guide", "Altitude-aware routing", "Boutique inn recommendations"]
  },
  {
    slug: "tibet-private-plateau",
    title: "Tibet Private Plateau Journey",
    days: "8 days",
    category: "spiritual",
    style: "Tailor-made Tours",
    image: images.tibet,
    summary: "A carefully paced private route through Lhasa, sacred monasteries and high-altitude landscapes with permit support.",
    highlights: ["Potala Palace", "Jokhang Temple", "Barkhor Street", "Namtso Lake option"],
    bestFor: "Experienced travelers, spiritual culture, landscapes",
    bestTime: "May to October",
    pace: "Acclimatization first",
    route: ["Arrive in Lhasa", "Rest and Barkhor orientation", "Potala Palace", "Jokhang and Sera Monastery", "Yamdrok or Namtso option", "Local market and cultural day", "Buffer day", "Departure"],
    inclusions: ["Permit support", "Altitude-conscious scheduling", "Private Tibetan guide", "Flexible sightseeing windows"]
  },
  {
    slug: "guilin-yangshuo-family",
    title: "Guilin & Yangshuo Family Escape",
    days: "6 days",
    category: "family",
    style: "Family Journeys",
    image: images.guilin,
    summary: "A relaxed family-friendly route with karst scenery, cycling, bamboo rafting, cooking and countryside hotels.",
    highlights: ["Li River cruise", "Yangshuo cycling", "Longji Rice Terraces", "Private cooking class"],
    bestFor: "Families, multi-generation groups, active soft adventure",
    bestTime: "April to October",
    pace: "Relaxed and family-friendly",
    route: ["Arrive in Guilin", "Longji Rice Terraces", "Li River to Yangshuo", "Countryside cycling", "Cooking class and bamboo raft", "Departure"],
    inclusions: ["Family-paced guide", "Private vehicle", "Gentle activity planning", "Hotel choices with space"]
  },
  {
    slug: "luxury-shanghai-suzhou-hangzhou",
    title: "Luxury Shanghai, Suzhou & Hangzhou",
    days: "6 days",
    category: "luxury",
    style: "Luxury Escapes",
    image: images.shanghai,
    summary: "A polished East China escape with design hotels, private gardens, tea culture, galleries and fine dining.",
    highlights: ["The Bund", "Private Suzhou garden visit", "West Lake", "Longjing tea village"],
    bestFor: "Luxury travelers, couples, design and food lovers",
    bestTime: "March to June and September to December",
    pace: "Polished urban escape",
    route: ["Arrive in Shanghai", "The Bund and design galleries", "Private Suzhou gardens", "Hangzhou West Lake", "Longjing tea village", "Departure"],
    inclusions: ["Design-led hotel advice", "Private garden timing", "Dining recommendations", "Door-to-door transfers"]
  }
];

const destinations = [
  ["Beijing", "The Imperial Capital", images.greatWall, "Great Wall walks, Forbidden City depth, hutong life and imperial gardens."],
  ["Xi'an", "Cradle of Chinese Civilization", images.greatWall, "Terracotta Warriors, old city walls, Muslim Quarter and Silk Road heritage."],
  ["Zhangjiajie", "Avatar's Floating Mountains", images.zhangjiajie, "Sandstone pillars, Tianmen Mountain, glass bridges and quiet forest paths."],
  ["Yunnan", "Kingdom of Diversity", images.yunnan, "Old towns, snow mountains, tea routes and minority cultures."],
  ["Tibet", "Roof of the World", images.tibet, "Lhasa, monasteries, high plateau landscapes and permit-supported routes."],
  ["Guilin", "Karst Rivers & Rice Terraces", images.guilin, "Li River scenery, Yangshuo countryside and Longji rice terraces."]
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

const styles = [
  ["Family Journeys", "Child-paced routes, hands-on activities, vetted hotels and guides who understand family rhythm."],
  ["Senior Friendly", "Comfortable pacing, private transport, accessible route planning and thoughtful hotel choices."],
  ["Muslim Friendly", "Halal-aware dining, prayer-time sensitivity and culturally thoughtful itinerary design."],
  ["Women-only Journeys", "Private guide teams, safe pacing and routes shaped around comfort, curiosity and confidence."],
  ["Luxury Escapes", "Design hotels, private access, fine dining and polished logistics from arrival to departure."],
  ["Tailor-made Tours", "A blank-page itinerary shaped around your dates, interests, pace and travel companions."]
];

const pageMeta = {
  "/": ["Private Custom China Tours | China Unseen Journeys", "Private bespoke China tours for curious, discerning travelers."],
  "/trips": ["Private China Tours & Journeys | China Unseen Journeys", "Browse hand-crafted private China itineraries."],
  "/destinations": ["China Travel Destinations | China Unseen Journeys", "Explore private travel destinations across China."],
  "/travel-styles": ["Travel Styles | China Unseen Journeys", "Family, senior, Muslim-friendly, women-only and luxury China travel styles."],
  "/blog": ["Travel Stories & China Guides | China Unseen Journeys", "China travel guides, planning ideas and destination stories."],
  "/b2b": ["China DMC for B2B Partners | China Unseen Journeys", "Private China DMC support for agencies and travel designers."],
  "/about": ["About China Unseen Journeys", "Meet the licensed China inbound travel specialist behind the journeys."],
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

function hero(title, eyebrow, lead, image = images.greatWall) {
  return `
    <section class="hero" style="--hero-image:url('${image}')">
      <div class="container hero__content">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lead">${lead}</p>
        <div class="hero__actions">
          <a class="button button--light" href="/trips" data-link>Explore Journeys</a>
          <a class="button button--ghost" href="${whatsappLink("Hi, I'd like to plan a private China journey with China Unseen Journeys.")}" target="_blank" rel="noopener">Plan Your Journey</a>
        </div>
      </div>
    </section>`;
}

function tripCard(trip) {
  return `
    <article class="card">
      <img src="${trip.image}" alt="${escapeHtml(trip.title)} landscape" loading="lazy">
      <div class="card__body">
        <p class="eyebrow">${trip.days} · ${trip.style}</p>
        <h3>${trip.title}</h3>
        <p>${trip.summary}</p>
        <div class="meta">${trip.highlights.slice(0, 3).map(item => `<span class="tag">${item}</span>`).join("")}</div>
        <a class="link-arrow" href="/trips/${trip.slug}" data-link>View Journey</a>
      </div>
    </article>`;
}

function trustSection() {
  return `
    <section class="section">
      <div class="container">
        <p class="eyebrow">Travel With Confidence</p>
        <h2>Private China planning, handled by people on the ground.</h2>
        <div class="grid grid--3" style="margin-top:2.5rem">
          ${[
            ["Licensed China operator", "Inbound arrangements are coordinated by a China-based specialist with local supplier access and bilingual support."],
            ["Designed around your pace", "Routes are shaped around flight times, walking comfort, family rhythm, dietary needs and the right amount of downtime."],
            ["Support while traveling", "You are not left with a PDF. Private guides, drivers and on-trip coordination keep the journey moving smoothly."]
          ].map(([title, text]) => `<article class="card"><div class="card__body"><p class="eyebrow">Confidence</p><h3>${title}</h3><p>${text}</p></div></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function processSection() {
  return `
    <section class="section section--soft">
      <div class="container">
        <p class="eyebrow">How It Works</p>
        <h2>A simple path from first idea to private journey.</h2>
        <div class="steps" style="margin-top:2.5rem">
          ${[
            ["1", "Share your travel style", "Tell us dates, group size, interests, hotel level and any comfort needs."],
            ["2", "Receive a thoughtful route", "We shape a practical itinerary with pacing, region choices and private logistics."],
            ["3", "Refine the details", "Adjust hotels, guides, activities and daily rhythm until the plan feels right."],
            ["4", "Travel with local support", "Your private guide, driver and coordination team support the journey on the ground."]
          ].map(([number, title, text]) => `<article class="step"><strong>${number}</strong><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function testimonialSection() {
  return `
    <section class="section">
      <div class="container">
        <p class="eyebrow">What Travelers Value</p>
        <h2>The difference is in the pacing, context and care.</h2>
        <div class="quote-grid" style="margin-top:2.5rem">
          ${[
            ["The route felt personal, not copied from a brochure. We saw the famous places, but the quiet moments made it memorable.", "Private family journey"],
            ["Our guide adjusted each day around weather, crowds and energy. That flexibility changed the whole experience.", "Couple itinerary"],
            ["As a travel advisor, I need clear communication and reliable ground handling. The China logistics were handled calmly.", "B2B partner"]
          ].map(([quote, source]) => `<figure class="quote"><blockquote>${quote}</blockquote><figcaption>${source}</figcaption></figure>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderHome() {
  return `
    ${hero("Discover China Beyond the Surface", "Private China Experiences", "Private journeys crafted by a licensed Chinese travel specialist for curious, discerning travelers.", images.zhangjiajie)}
    <section class="section">
      <div class="container">
        <p class="eyebrow">Why China Unseen</p>
        <h2>A quieter, more personal way to travel China.</h2>
        <p class="lead">We design private journeys with thoughtful pacing, reliable logistics and access to places most standard tours rush past.</p>
        <div class="stats" style="margin-top:2.5rem">
          <div class="stat"><strong>Licensed</strong><span>Inbound Operator</span></div>
          <div class="stat"><strong>Since 2018</strong><span>China Specialist</span></div>
          <div class="stat"><strong>Private Only</strong><span>No Shared Tours</span></div>
          <div class="stat"><strong>Tailor-made</strong><span>Designed Around You</span></div>
        </div>
      </div>
    </section>
    ${trustSection()}
    <section class="section section--soft">
      <div class="container">
        <p class="eyebrow">Featured Journeys</p>
        <h2>Curated starting points for your private journey.</h2>
        <div class="grid grid--3" style="margin-top:2.5rem">${trips.slice(0, 6).map(tripCard).join("")}</div>
      </div>
    </section>
    ${processSection()}
    <section class="section">
      <div class="container">
        <p class="eyebrow">Journey Styles</p>
        <h2>Designed around how you want to travel.</h2>
        <div class="grid grid--3" style="margin-top:2.5rem">
          ${styles.map(([title, text]) => `<article class="card"><div class="card__body"><h3>${title}</h3><p>${text}</p><a class="link-arrow" href="/travel-styles" data-link>Explore Style</a></div></article>`).join("")}
        </div>
      </div>
    </section>
    ${testimonialSection()}
    ${contactSection()}
  `;
}

function renderTrips() {
  const category = new URLSearchParams(location.search).get("cat") || "all";
  const filtered = category === "all" ? trips : trips.filter(trip => trip.category === category);
  const filters = [["all", "All Journeys"], ["culture", "Culture"], ["nature", "Nature"], ["family", "Family"], ["luxury", "Luxury"], ["spiritual", "Spiritual"]];
  return `
    <section class="page-hero"><div class="container"><p class="eyebrow">Explore China</p><h1>Private China Journeys</h1><p class="lead">Use these itineraries as inspiration. Every route can be reshaped around your dates, pace and interests.</p></div></section>
    <section class="reassurance">
      <div class="container reassurance__inner">
        <span>Every journey is private</span>
        <span>Customizable by pace and hotel style</span>
        <span>Designed with China-based support</span>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="filters">${filters.map(([key, label]) => `<a class="filter ${category === key ? "is-active" : ""}" href="/trips${key === "all" ? "" : `?cat=${key}`}" data-link>${label}</a>`).join("")}</div>
        <p class="eyebrow">${filtered.length} journeys</p>
        <div class="grid grid--3">${filtered.map(tripCard).join("")}</div>
      </div>
    </section>
    ${contactSection("Can't find the exact journey?", "Tell us what you are imagining and we will design it from scratch.")}
  `;
}

function renderTripDetail(trip) {
  return `
    <section class="detail-hero" style="--hero-image:url('${trip.image}')">
      <div class="container detail-hero__content">
        <p class="eyebrow">${trip.days} · ${trip.style}</p>
        <h1>${trip.title}</h1>
        <p class="lead">${trip.summary}</p>
        <div class="hero__actions">
          <a class="button button--light" href="${whatsappLink(`Hi, I'm interested in the ${trip.title} itinerary.`)}" target="_blank" rel="noopener">Request This Journey</a>
          <a class="button button--ghost" href="/trips" data-link>Back to Trips</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow">Sample Route</p>
          <h2>A flexible starting point, not a fixed package.</h2>
          <p class="lead">This itinerary can be shortened, extended or redesigned around your dates, hotel style, mobility needs and travel companions.</p>
          <ol class="timeline">
            ${trip.route.map((item, index) => `<li><span>Day ${index + 1}</span><strong>${item}</strong></li>`).join("")}
          </ol>
        </div>
        <aside class="panel">
          <p class="eyebrow">Journey Snapshot</p>
          <div class="contact-list">
            <div><strong>Best for</strong><br>${trip.bestFor}</div>
            <div><strong>Best time</strong><br>${trip.bestTime}</div>
            <div><strong>Pace</strong><br>${trip.pace}</div>
          </div>
        </aside>
      </div>
    </section>
    <section class="section section--soft">
      <div class="container">
        <p class="eyebrow">What We Handle</p>
        <h2>Private logistics shaped around comfort and context.</h2>
        <div class="grid grid--3" style="margin-top:2.5rem">
          ${trip.inclusions.map(item => `<article class="card"><div class="card__body"><h3>${item}</h3><p>Handled as part of a bespoke private journey, with details adjusted to your group and travel style.</p></div></article>`).join("")}
        </div>
      </div>
    </section>
    ${contactSection(`Start planning ${trip.title}`, "Share your preferred dates, group size and comfort level. We will suggest a practical next step.")}
  `;
}

function renderDestinations() {
  return `
    <section class="page-hero"><div class="container"><p class="eyebrow">Explore China</p><h1>Where Will You Wander Next?</h1><p class="lead">From imperial capitals to karst rivers and Himalayan plateaus, each destination is paired with private pacing and local context.</p></div></section>
    <section class="section">
      <div class="container">
        <div class="grid grid--3">
          ${destinations.map(([name, tagline, image, text]) => `
            <article class="card">
              <img src="${image}" alt="${name} travel scenery" loading="lazy">
              <div class="card__body">
                <p class="eyebrow">${tagline}</p>
                <h3>${name}</h3>
                <p>${text}</p>
                <a class="link-arrow" href="${whatsappLink(`Hi, I'd like to include ${name} in my China journey.`)}" target="_blank" rel="noopener">Explore Destination</a>
              </div>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderTravelStyles() {
  return `
    <section class="page-hero"><div class="container"><p class="eyebrow">Journeys by Design</p><h1>Travel Styles</h1><p class="lead">Every traveler is different. We design China around your comfort, curiosity and rhythm.</p></div></section>
    <section class="section">
      <div class="container">
        <div class="grid grid--3">
          ${styles.map(([title, text]) => `<article class="card"><div class="card__body"><p class="eyebrow">Private Design</p><h3>${title}</h3><p>${text}</p><a class="link-arrow" href="${whatsappLink(`Hi, I'd like to plan a ${title.toLowerCase()} in China.`)}" target="_blank" rel="noopener">Plan This Style</a></div></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderBlog() {
  return `
    <section class="page-hero"><div class="container"><p class="eyebrow">Travel Inspiration</p><h1>Travel Stories</h1><p class="lead">Planning notes and destination stories from the hidden heart of China.</p></div></section>
    <section class="section">
      <div class="container">
        <div class="grid grid--3">
          ${posts.map(post => `<article class="card"><div class="card__body"><p class="eyebrow">${post.date} · ${post.readTime}</p><h3>${post.title}</h3><p>${post.excerpt}</p><a class="link-arrow" href="/blog/${post.slug}" data-link>Read Guide</a></div></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderBlogPost(post) {
  return `
    <section class="page-hero">
      <div class="container">
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
          <ul>
            ${post.takeaways.map(item => `<li>${item}</li>`).join("")}
          </ul>
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
    <section class="page-hero"><div class="container"><p class="eyebrow">China DMC</p><h1>B2B Partner Support</h1><p class="lead">White-label private China ground arrangements for travel advisors, agencies and specialist tour designers.</p></div></section>
    <section class="section">
      <div class="container split">
        <div>
          <h2>Reliable China delivery for your clients.</h2>
          <p class="lead">We support itinerary design, vetted guides, private transport, hotel coordination, permits and on-trip troubleshooting.</p>
          <div class="grid grid--2" style="margin-top:2rem">
            ${["Custom route design", "Private guide teams", "VIP and family logistics", "Tibet and special permit support"].map(item => `<article class="card"><div class="card__body"><h3>${item}</h3><p>Clear communication, practical routing and transparent ground support.</p></div></article>`).join("")}
          </div>
        </div>
        ${inquiryPanel("B2B partnership inquiry")}
      </div>
    </section>
    <section class="section section--soft">
      <div class="container">
        <p class="eyebrow">Partner Standards</p>
        <h2>Built for advisors who need clarity before, during and after travel.</h2>
        <div class="grid grid--3" style="margin-top:2.5rem">
          ${["Prompt route feasibility checks", "Transparent ground-service communication", "Private journeys only, no shared group shortcuts"].map(item => `<article class="card"><div class="card__body"><h3>${item}</h3><p>Designed to protect the client relationship while giving you dependable China execution.</p></div></article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderAbout() {
  return `
    <section class="page-hero"><div class="container"><p class="eyebrow">About Us</p><h1>China, planned with care.</h1><p class="lead">China Unseen Journeys is a licensed inbound travel specialist based in Shenzhen, focused on private, bespoke travel across China.</p></div></section>
    <section class="section">
      <div class="container split">
        <div>
          <h2>We believe the best journeys change how you see a place.</h2>
          <p class="lead">Our work is to remove friction while keeping discovery alive: the right guide, the right pace, the right local moments, and enough space for surprise.</p>
          <p>We design for travelers who want more than a checklist: families, senior travelers, culture lovers, photographers, luxury clients and agencies who need thoughtful China ground support.</p>
          <p>Because China is large, seasonal and logistics-heavy, we treat every itinerary as a practical design project: routing first, comfort second, then the moments that make the journey feel personal.</p>
        </div>
        <div class="panel">
          <p class="eyebrow">At a glance</p>
          <div class="contact-list">
            <div>Licensed inbound travel operator</div>
            <div>Based in Shenzhen, China</div>
            <div>Private groups only</div>
            <div>English and Chinese support</div>
            <div>Typical reply within 24 hours</div>
          </div>
        </div>
      </div>
    </section>
    ${processSection()}`;
}

function inquiryPanel(context = "Private journey inquiry") {
  return `
    <aside class="panel">
      <p class="eyebrow">Quick Inquiry</p>
      <h3>Tell us your dream.</h3>
      <form class="inquiry-form" data-inquiry-form data-context="${escapeHtml(context)}">
        <div class="field"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required placeholder="Your name"></div>
        <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="your@email.com"></div>
        <div class="field"><label for="message">Message</label><textarea id="message" name="message" required placeholder="Tell us about dates, travelers, places and style."></textarea></div>
        <button class="button button--dark" type="submit">Send by Email</button>
        <p class="notice">Your email app will open with the inquiry prepared. For the fastest reply, message us on WhatsApp.</p>
      </form>
    </aside>`;
}

function contactSection(title = "Start your journey", text = "Tell us your dream. We will shape the experience around you.") {
  return `
    <section class="section section--dark">
      <div class="container split">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>${title}</h2>
          <p class="lead">${text}</p>
          <div class="contact-list" style="margin-top:2rem">
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
    <section class="page-hero"><div class="container"><p class="eyebrow">Contact</p><h1>Plan Your Private China Journey</h1><p class="lead">Share your dates, interests, travel style and group size. We will reply with a practical next step.</p></div></section>
    <section class="reassurance">
      <div class="container reassurance__inner">
        <span>Typical reply within 24 hours</span>
        <span>WhatsApp for fastest planning</span>
        <span>No shared group tours</span>
      </div>
    </section>
    ${contactSection("Tell us what China should feel like.", "A good journey starts with a conversation, not a template.")}
  `;
}

function renderNotFound() {
  return `
    <section class="page-hero"><div class="container"><p class="eyebrow">404</p><h1>Page not found</h1><p class="lead">This route does not exist yet. Start with the journey collection or contact us directly.</p><div class="actions"><a class="button button--light" href="/trips" data-link>Explore Journeys</a><a class="button button--ghost" href="/contact" data-link>Contact Us</a></div></div></section>`;
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
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPage: ${location.href}\n\nMessage:\n${data.get("message")}`
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
