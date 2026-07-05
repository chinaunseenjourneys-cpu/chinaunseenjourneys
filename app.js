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
    bestFor: "Photographers, couples, families with older children"
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
    bestFor: "First-time visitors, families, senior travelers"
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
    bestFor: "Culture lovers, slow travelers, couples"
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
    bestFor: "Experienced travelers, spiritual culture, landscapes"
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
    bestFor: "Families, multi-generation groups, active soft adventure"
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
    bestFor: "Luxury travelers, couples, design and food lovers"
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
    date: "Travel Guide"
  },
  {
    slug: "zhangjiajie-beyond-avatar",
    title: "Zhangjiajie Beyond the Avatar Viewpoints",
    excerpt: "Where to slow down, avoid crowds and find the mountain atmosphere most travelers miss.",
    date: "Destination Story"
  },
  {
    slug: "family-travel-china",
    title: "Why China Works Beautifully for Family Travel",
    excerpt: "Hands-on culture, gentle adventure and logistics that can be shaped around every generation.",
    date: "Family Travel"
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
  const [title, description] = pageMeta[path] || pageMeta["/"];
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
        <a class="link-arrow" href="${whatsappLink(`Hi, I'm interested in the ${trip.title} itinerary.`)}" target="_blank" rel="noopener">Request This Journey</a>
      </div>
    </article>`;
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
    <section class="section section--soft">
      <div class="container">
        <p class="eyebrow">Featured Journeys</p>
        <h2>Curated starting points for your private journey.</h2>
        <div class="grid grid--3" style="margin-top:2.5rem">${trips.slice(0, 6).map(tripCard).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="eyebrow">Journey Styles</p>
        <h2>Designed around how you want to travel.</h2>
        <div class="grid grid--3" style="margin-top:2.5rem">
          ${styles.map(([title, text]) => `<article class="card"><div class="card__body"><h3>${title}</h3><p>${text}</p><a class="link-arrow" href="/travel-styles" data-link>Explore Style</a></div></article>`).join("")}
        </div>
      </div>
    </section>
    ${contactSection()}
  `;
}

function renderTrips() {
  const category = new URLSearchParams(location.search).get("cat") || "all";
  const filtered = category === "all" ? trips : trips.filter(trip => trip.category === category);
  const filters = [["all", "All Journeys"], ["culture", "Culture"], ["nature", "Nature"], ["family", "Family"], ["luxury", "Luxury"], ["spiritual", "Spiritual"]];
  return `
    <section class="page-hero"><div class="container"><p class="eyebrow">Explore China</p><h1>Private China Journeys</h1><p class="lead">Use these itineraries as inspiration. Every route can be reshaped around your dates, pace and interests.</p></div></section>
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
          ${posts.map(post => `<article class="card"><div class="card__body"><p class="eyebrow">${post.date}</p><h3>${post.title}</h3><p>${post.excerpt}</p><a class="link-arrow" href="${whatsappLink(`Hi, I read about ${post.title} and would like travel advice.`)}" target="_blank" rel="noopener">Ask About This</a></div></article>`).join("")}
        </div>
      </div>
    </section>`;
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
        </div>
        <div class="panel">
          <p class="eyebrow">At a glance</p>
          <div class="contact-list">
            <div>Licensed inbound travel operator</div>
            <div>Based in Shenzhen, China</div>
            <div>Private groups only</div>
            <div>English and Chinese support</div>
          </div>
        </div>
      </div>
    </section>`;
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
        <p class="notice">This clean static site sends your inquiry through your email app. For the fastest reply, use WhatsApp.</p>
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
  setMeta(routes[path] ? path : "/");
  document.querySelector("#main").innerHTML = (routes[path] || renderNotFound)();
  setActiveNavigation(routes[path] ? path : "");
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
