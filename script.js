document.documentElement.classList.add("js");

const restaurantInfo = {
  name: "Sai Silver Dum Biryani",
  tagline: "Authentic Hyderabadi Dum Biryani Experience",
  rating: 4.4,
  reviewCount: 192,
  priceRange: "\u20B9200\u2013400",
  phone: "089194 43535",
  smsPhone: "+918919443535",
  email: "contact@saisilverbiryani.com",
  address: "FMRC+3Q9, Vijayawada Rd, Sanath Nagar, Vijayawada, Andhra Pradesh 520007",
  openingTime: "11:30 AM",
  closingTime: "11:30 PM",
  services: ["Dine-in", "Drive-through", "No-contact delivery"],
};

const menuItems = [
  {
    id: 1,
    category: "Signature Biryani",
    items: [
      {
        id: 101,
        name: "Chicken Dum Biryani",
        price: 250,
        description:
          "Aromatic basmati rice layered with tender chicken, slow-cooked in traditional dum style",
        spiceLevel: "Medium Spice",
        image: "./media/gallery/signature-chicken-dum.jpeg",
        popular: true,
      },
      {
        id: 102,
        name: "Mutton Dum Biryani",
        price: 320,
        description:
          "Premium mutton pieces cooked with fragrant spices and saffron-infused rice",
        spiceLevel: "Medium Spice",
        image: "./media/gallery/fry-biryani-special.jpeg",
        popular: true,
      },
      {
        id: 103,
        name: "Special Silver Dum Biryani",
        price: 400,
        description:
          "Our chef's special with premium ingredients and authentic Hyderabadi flavors",
        spiceLevel: "High Spice",
        image: "./media/gallery/special-rice-platter.jpeg",
        popular: false,
      },
      {
        id: 104,
        name: "Fry Biryani",
        price: 280,
        description:
          "Unique flavored rice with perfectly fried pieces - a local favorite",
        spiceLevel: "Medium Spice",
        image:
          "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxiaXJ5YW5pfGVufDB8fHx8MTc3MzcyNTYyNXww&ixlib=rb-4.1.0&q=85",
        popular: false,
      },
      {
        id: 105,
        name: "Veg Dum Biryani",
        price: 200,
        description:
          "Fresh vegetables and paneer layered with aromatic basmati rice",
        spiceLevel: "Low Spice",
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pfGVufDB8fHx8MTc3MzcyNTYyNXww&ixlib=rb-4.1.0&q=85",
        popular: false,
      },
    ],
  },
  {
    id: 2,
    category: "Starters",
    items: [
      {
        id: 201,
        name: "Chicken 65",
        price: 180,
        description: "Spicy fried chicken appetizer with curry leaves",
        spiceLevel: "High Spice",
      },
      {
        id: 202,
        name: "Butter Naan",
        price: 40,
        description: "Soft, buttery Indian flatbread baked in tandoor",
        spiceLevel: "Low Spice",
      },
      {
        id: 203,
        name: "Paneer Tikka",
        price: 160,
        description: "Grilled cottage cheese cubes marinated in spices",
        spiceLevel: "Medium Spice",
      },
    ],
  },
  {
    id: 3,
    category: "Accompaniments",
    items: [
      {
        id: 301,
        name: "Raita",
        price: 50,
        description: "Cool yogurt with cucumber and spices",
        spiceLevel: "Low Spice",
      },
      {
        id: 302,
        name: "Mirchi Ka Salan",
        price: 80,
        description: "Traditional gravy with green chilies and peanuts",
        spiceLevel: "High Spice",
      },
      {
        id: 303,
        name: "Double Ka Meetha",
        price: 100,
        description: "Traditional Hyderabadi bread pudding dessert",
        spiceLevel: "Low Spice",
      },
    ],
  },
];

const reviews = [
  {
    id: 1,
    name: "Aswini Kumar",
    rating: 5,
    date: "1 week ago",
    comment:
      "Biryanis are very good. Starters are also ok. Definitely worth trying to satisfy your Biryani cravings.",
    reviewCount: 144,
    photoCount: 44,
  },
  {
    id: 2,
    name: "Anonymous Customer",
    rating: 5,
    date: "2 weeks ago",
    comment: "Rice in fry biryani is too good and very unique flavour. Worth the price.",
    reviewCount: 0,
    photoCount: 0,
  },
  {
    id: 3,
    name: "Happy Diner",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Super, food quality, clean ambiance, homely hospitality, overall awesome.",
    reviewCount: 0,
    photoCount: 0,
  },
  {
    id: 4,
    name: "Food Lover",
    rating: 5,
    date: "1 month ago",
    comment:
      "Food was very delicious. Service is so humble. Atmosphere is somewhat conjusted but food makes up for it!",
    reviewCount: 0,
    photoCount: 0,
  },
  {
    id: 5,
    name: "Biryani Enthusiast",
    rating: 4,
    date: "1 month ago",
    comment:
      "Great taste and authentic flavors. The chicken dum biryani is a must-try. Portion sizes are good.",
    reviewCount: 0,
    photoCount: 0,
  },
];

const gallery = [
  {
    id: 1,
    url: "./media/gallery/signature-chicken-dum.jpeg",
    alt: "Signature chicken dum biryani served with salan and raita",
    title: "Signature Dum Biryani",
    tag: "Best Seller",
    featured: true,
  },
  {
    id: 2,
    url: "./media/gallery/fry-biryani-special.jpeg",
    alt: "Rich fry biryani topped with roasted cashews and peppers",
    title: "Rich Fry Biryani",
    tag: "Chef Pick",
  },
  {
    id: 3,
    url: "./media/gallery/special-rice-platter.jpeg",
    alt: "Special rice platter with house curry and fresh garnish",
    title: "Special Rice Platter",
    tag: "House Special",
  },
  {
    id: 4,
    url: "./media/gallery/roomali-roti-curry.jpeg",
    alt: "Roomali roti served with a creamy curry",
    title: "Roti & Curry Pairing",
    tag: "Freshly Served",
  },
  {
    id: 5,
    url: "./media/gallery/butter-naan-gravy.jpeg",
    alt: "Butter naan paired with signature green gravy",
    title: "Butter Naan Combo",
    tag: "Bread Special",
  },
  {
    id: 6,
    url: "./media/gallery/veg-starter-platter.jpeg",
    alt: "Veg starter platter with crisp fried vegetables and garnish",
    title: "Veg Starter Platter",
    tag: "Starter Favourite",
  },
  {
    id: 7,
    url: "./media/gallery/handi-rice-sides.jpeg",
    alt: "Handi rice served with salan and raita sides",
    title: "Handi Rice Set",
    tag: "Table Favourite",
  },
  {
    id: 8,
    url: "./media/gallery/butter-naan-basket.jpeg",
    alt: "Butter naan basket served hot from the tandoor",
    title: "Fresh Butter Naan",
    tag: "Tandoor Fresh",
  },
];

const offers = [
  {
    id: 1,
    title: "Family Combo",
    description: "2 Chicken Biryanis + 1 Starter + Raita",
    price: 550,
    originalPrice: 650,
    discount: "15% OFF",
    validUntil: "Valid till: 31 Jan 2025",
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Special Silver Dum Biryani + Mirchi Ka Salan + Dessert",
    price: 450,
    originalPrice: 580,
    discount: "22% OFF",
    validUntil: "Valid till: Every Weekend",
  },
  {
    id: 3,
    title: "Lunch Deal",
    description: "Any Biryani + Raita (11:30 AM - 3:00 PM)",
    price: 220,
    originalPrice: 300,
    discount: "27% OFF",
    validUntil: "Valid till: Daily",
  },
];

const cateringPackages = [
  {
    id: 1,
    name: "Small Gathering",
    servings: "20-30 people",
    price: "\u20B98,000",
    features: [
      "Choice of 2 Biryani varieties",
      "2 Starter options",
      "Raita & Salan included",
      "Disposable plates & cutlery",
    ],
  },
  {
    id: 2,
    name: "Medium Event",
    servings: "50-75 people",
    price: "\u20B915,000",
    featured: true,
    features: [
      "Choice of 3 Biryani varieties",
      "3 Starter options",
      "Raita, Salan & Dessert included",
      "Service staff provided",
      "Chafing dishes setup",
    ],
  },
  {
    id: 3,
    name: "Large Celebration",
    servings: "100+ people",
    price: "Custom Quote",
    features: [
      "Choice of 4+ Biryani varieties",
      "5+ Starter & Side options",
      "Full menu customization",
      "Professional service staff",
      "Complete setup & cleanup",
      "Live counter option available",
    ],
  },
];

const videos = [
  {
    id: 1,
    title: "Krishna Podcast: Story, Growth, and Restaurant Journey",
    description:
      "A highlighted podcast conversation with Krishna about how Sai Silver Dum Biryani was built, the work behind the kitchen, and the ambition to grow the brand.",
    thumbnail: "./media/gallery/podcast-cover.jpeg",
    source: "./media/videos/krishna-podcast.mp4",
    sourceType: "local",
    duration: "3:02",
    eyebrow: "Owner Podcast",
    featured: true,
  },
  {
    id: 2,
    title: "Kitchen Preparation in Motion",
    description:
      "A longer kitchen-side clip showing the pace, flame, and finishing movement behind service time.",
    thumbnail: "./media/gallery/signature-chicken-dum.jpeg",
    source: "./media/videos/kitchen-prep.mp4",
    sourceType: "local",
    duration: "0:39",
    eyebrow: "Kitchen Clip",
  },
  {
    id: 3,
    title: "Fresh Plating Showcase",
    description:
      "A clean service clip showing the final plated visual before it reaches the table.",
    thumbnail: "./media/gallery/special-rice-platter.jpeg",
    source: "./media/videos/plating-showcase.mp4",
    sourceType: "local",
    duration: "0:21",
    eyebrow: "Service Clip",
  },
  {
    id: 4,
    title: "Quick Serve Reel",
    description:
      "A fast short-format shot that adds live energy to the page and highlights ready-to-serve movement.",
    thumbnail: "./media/gallery/fry-biryani-special.jpeg",
    source: "./media/videos/quick-serve.mp4",
    sourceType: "local",
    duration: "0:02",
    eyebrow: "Quick Reel",
  },
];

const menuCardDetails = {
  "Chicken Dum Biryani": {
    cooking:
      "Fresh chicken is marinated with house spices, layered with long-grain basmati, and sealed for a slow dum cook so the steam carries the masala into every grain.",
    ingredients: [
      "Premium basmati rice",
      "Fresh chicken",
      "Saffron and ghee",
      "Mint, fried onions, and house masala",
    ],
    finish:
      "The result is juicy chicken, aromatic rice, and that rich restaurant-style dum fragrance.",
  },
  "Mutton Dum Biryani": {
    cooking:
      "Tender mutton is slow-cooked until soft, then rested in a sealed pot with saffron rice so the meat juices and spices build a deep Hyderabadi flavor.",
    ingredients: [
      "Slow-cooked mutton",
      "Basmati rice",
      "Saffron milk",
      "Whole spices and fresh herbs",
    ],
    finish: "It lands with bold aroma, richer masala depth, and a premium festive feel.",
  },
  "Special Silver Dum Biryani": {
    cooking:
      "This chef special gets extra layering, richer seasoning, and a longer dum finish so every spoon tastes fuller, silkier, and more indulgent.",
    ingredients: [
      "Premium cuts",
      "Aged basmati rice",
      "Ghee-roasted onions",
      "Signature silver spice mix",
    ],
    finish: "It is built to feel heavier, more aromatic, and unmistakably premium.",
  },
  "Fry Biryani": {
    cooking:
      "The rice is tossed with spicy fried pieces and finishing masala after cooking, giving the dish a sharper roast note and a more local favorite style.",
    ingredients: [
      "Spiced rice",
      "Fried chicken pieces",
      "Green chilies",
      "Fresh coriander and masala oil",
    ],
    finish: "You get a smoky fry finish, lively spice, and strong street-style flavor.",
  },
  "Veg Dum Biryani": {
    cooking:
      "Seasonal vegetables and paneer are layered with fragrant rice, herbs, and saffron, then finished on dum so the vegetables stay soft but not soggy.",
    ingredients: [
      "Basmati rice",
      "Paneer and vegetables",
      "Mint and coriander",
      "Saffron, ghee, and mild spices",
    ],
    finish:
      "It stays light, aromatic, and comforting while still carrying proper biryani depth.",
  },
  "Chicken 65": {
    cooking:
      "Boneless chicken is marinated, fried hot, and finished with curry leaves and bold spice for that punchy starter feel.",
    ingredients: [
      "Chicken bites",
      "Red chili masala",
      "Curry leaves",
      "Ginger-garlic marinade",
    ],
    finish: "Crisp outside, juicy inside, and made to wake up the table.",
  },
  "Butter Naan": {
    cooking:
      "The dough is stretched and baked fast so it stays soft, then brushed with butter for a rich finish.",
    ingredients: ["Refined flour dough", "Butter", "Salt", "Tandoor heat"],
    finish: "Soft texture and buttery warmth make it perfect with gravies and salan.",
  },
  "Paneer Tikka": {
    cooking:
      "Paneer cubes are coated in a spiced yogurt marinade and roasted until lightly charred on the edges.",
    ingredients: ["Fresh paneer", "Yogurt marinade", "Tandoori spices", "Capsicum and onion"],
    finish: "It balances smoky grill flavor with a creamy center.",
  },
  Raita: {
    cooking:
      "Fresh curd is chilled and mixed right before service so it stays cool and clean beside the biryani.",
    ingredients: ["Curd", "Cucumber", "Roasted cumin", "Fresh herbs"],
    finish: "It cools the palate and softens the spice between bites.",
  },
  "Mirchi Ka Salan": {
    cooking:
      "Green chilies simmer in a nutty gravy until the sauce turns glossy, spicy, and deeply savory.",
    ingredients: ["Green chilies", "Peanut-sesame base", "Tamarind", "Slow-cooked masala"],
    finish: "It adds authentic Hyderabadi heat and gravy richness to the plate.",
  },
  "Double Ka Meetha": {
    cooking:
      "Bread is gently fried, soaked in sweetened milk, and finished with nuts for a traditional dessert close.",
    ingredients: ["Bread slices", "Reduced milk", "Sugar syrup", "Nuts and cardamom"],
    finish: "Sweet, soft, and classic after a spicy biryani meal.",
  },
};

const menuTabs = document.querySelector("#menu-tabs");
const menuGrid = document.querySelector("#menu-grid");
const offerGrid = document.querySelector("#offer-grid");
const galleryGrid = document.querySelector("#gallery-grid");
const videoGrid = document.querySelector("#video-grid");
const reviewGrid = document.querySelector("#review-grid");
const cateringGrid = document.querySelector("#catering-grid");
const servicePills = document.querySelector("#service-pills");
const toast = document.querySelector("#toast");
const modal = document.querySelector("#video-modal");
const videoFrame = document.querySelector("#video-frame");
const videoPlayer = document.querySelector("#video-player");
const heroBackdrop = document.querySelector(".hero__backdrop");

let activeCategory = menuItems[0].category;
let activeMenuItemId = menuItems[0].items[0]?.id ?? null;
let toastTimer = null;
let toastHideTimer = null;
let modalHideTimer = null;
let menuRefreshTimer = null;
let revealObserver = null;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileViewport = window.matchMedia("(max-width: 760px)");
const saveDataEnabled = Boolean(navigator.connection?.saveData);

function canUseMotion() {
  return !(prefersReducedMotion.matches || mobileViewport.matches || saveDataEnabled);
}

function formatCurrency(value) {
  return `\u20B9 ${value}`;
}

function getMenuCardDetails(item, categoryName) {
  return (
    menuCardDetails[item.name] ?? {
      cooking: item.description,
      ingredients: [categoryName, item.spiceLevel, "Fresh kitchen preparation", "Served hot"],
      finish: "Made fresh with balanced seasoning and authentic restaurant flavor.",
    }
  );
}

function getFirstMenuItemId(categoryName) {
  return menuItems.find((category) => category.category === categoryName)?.items[0]?.id ?? null;
}

function renderServicePills() {
  servicePills.innerHTML = restaurantInfo.services
    .map((service) => `<span>${service}</span>`)
    .join("");
}

function renderMenuTabs() {
  menuTabs.classList.add("tabs-wrap");
  menuTabs.innerHTML = menuItems
    .map(
      (category) => `
        <button
          type="button"
          role="tab"
          aria-selected="${category.category === activeCategory}"
          class="${category.category === activeCategory ? "is-active" : ""}"
          data-category="${category.category}"
        >
          ${category.category}
        </button>
      `,
    )
    .join("");
}

function renderMenuCards(animate = false) {
  const currentCategory = menuItems.find((category) => category.category === activeCategory);
  if (!currentCategory) return;

  menuGrid.innerHTML = currentCategory.items
    .map((item, index) => {
      const details = getMenuCardDetails(item, currentCategory.category);
      const isExpanded = activeMenuItemId === item.id;
      const image = item.image
        ? `
          <div class="menu-card__image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async" width="940" height="650" />
            ${item.popular ? '<span class="menu-card__badge">Popular</span>' : ""}
          </div>
        `
        : "";

      return `
        <article class="menu-card ${isExpanded ? "is-expanded" : ""}" style="--card-index: ${index};">
          <button
            type="button"
            class="menu-card__surface"
            data-menu-item-id="${item.id}"
            aria-expanded="${isExpanded}"
            aria-controls="menu-card-detail-${item.id}"
          >
            ${image}
            <div class="menu-card__body">
              <div class="menu-card__header">
                <div>
                  <h3>${item.name}</h3>
                </div>
                <span class="menu-card__price">${formatCurrency(item.price)}</span>
              </div>
              <p>${item.description}</p>
              <div class="menu-card__footer">
                <span class="spice-pill">${item.spiceLevel}</span>
                <span class="menu-card__hint">${isExpanded ? "Close story" : "View story"}</span>
                <span class="menu-card__chevron" aria-hidden="true"></span>
              </div>
            </div>
          </button>
          <div class="menu-card__details" id="menu-card-detail-${item.id}">
            <div class="menu-card__details-inner">
              <div class="menu-card__details-intro">
                <p class="menu-card__detail-kicker">Chef's note</p>
                <p class="menu-card__detail-summary">${details.finish}</p>
              </div>
              <div class="menu-card__detail-grid">
                <div class="menu-card__detail-block menu-card__detail-block--story">
                  <p class="menu-card__detail-label">How we make it</p>
                  <p>${details.cooking}</p>
                </div>
                <div class="menu-card__detail-block menu-card__detail-block--ingredients">
                  <p class="menu-card__detail-label">Main ingredients</p>
                  <div class="menu-card__detail-list">
                    ${details.ingredients.map((ingredient) => `<span>${ingredient}</span>`).join("")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  markRevealTargets(menuGrid);
  if (animate) triggerMenuGridRefresh();
}

function renderOffers() {
  offerGrid.innerHTML = offers
    .map(
      (offer) => `
        <article class="offer-card">
          <div class="offer-card__top">
            <span class="offer-discount">${offer.discount}</span>
            <h3>${offer.title}</h3>
          </div>
          <div class="offer-card__body">
            <p>${offer.description}</p>
            <div class="offer-prices">
              <strong>${formatCurrency(offer.price)}</strong>
              <span>${formatCurrency(offer.originalPrice)}</span>
            </div>
            <div class="offer-validity">${offer.validUntil}</div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = gallery
    .map(
      (item) => `
        <article class="gallery-card ${item.featured ? "gallery-card--feature" : ""}">
          <img src="${item.url}" alt="${item.alt}" loading="lazy" decoding="async" width="940" height="650" />
          <div class="gallery-card__meta">
            <span class="gallery-card__tag">${item.tag}</span>
            <strong>${item.title}</strong>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderVideos() {
  videoGrid.innerHTML = videos
    .map(
      (video) => `
        <article class="video-card ${video.featured ? "video-card--featured" : ""}">
          <div class="video-thumb">
            <video controls playsinline preload="metadata" poster="${video.thumbnail}">
              <source src="${video.source}" type="video/mp4" />
            </video>
            ${video.eyebrow ? `<span class="video-badge">${video.eyebrow}</span>` : ""}
            <span class="video-duration">${video.duration}</span>
          </div>
          <div class="video-card__copy">
            ${video.eyebrow ? `<p class="video-card__eyebrow">${video.eyebrow}</p>` : ""}
            <h3>${video.title}</h3>
            <p>${video.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderReviews() {
  reviewGrid.innerHTML = reviews
    .map((review) => {
      const meta = [];

      if (review.reviewCount) meta.push(`${review.reviewCount} reviews`);
      if (review.photoCount) meta.push(`${review.photoCount} photos`);

      return `
        <article class="review-card">
          <div class="review-card__top">
            <div class="review-card__identity">
              <div class="review-card__avatar">${review.name.charAt(0)}</div>
              <div>
                <h4>${review.name}</h4>
                <p>${review.date}</p>
              </div>
            </div>
          </div>
          <p class="stars" aria-label="${review.rating} star review">${"&#9733;".repeat(review.rating)}</p>
          <p>"${review.comment}"</p>
          <div class="review-card__meta">${meta.join(" • ")}</div>
        </article>
      `;
    })
    .join("");
}

function renderCatering() {
  cateringGrid.innerHTML = cateringPackages
    .map(
      (item) => `
        <article class="catering-card ${item.featured ? "catering-card--featured" : ""}">
          ${item.featured ? '<span class="catering-badge">MOST POPULAR</span>' : ""}
          <h3>${item.name}</h3>
          <p class="catering-card__servings">${item.servings}</p>
          <div class="catering-card__price">${item.price}</div>
          <ul>
            ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.hidden = false;
  toast.classList.remove("is-visible");
  void toast.offsetWidth;
  toast.classList.add("is-visible");

  clearTimeout(toastTimer);
  clearTimeout(toastHideTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toastHideTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 220);
  }, 3200);
}

function getFormValue(formData, key, fallback = "Not provided") {
  const value = String(formData.get(key) ?? "").trim();
  return value || fallback;
}

function formatDateValue(value) {
  if (!value || value === "Not provided") return "Not provided";

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(date);
}

function formatTimeValue(value) {
  if (!value || value === "Not provided") return "Not provided";

  const [hours, minutes] = value.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return value;

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("en-IN", { timeStyle: "short" }).format(date);
}

function buildReservationMessage(formData) {
  return [
    `New table reservation for ${restaurantInfo.name}`,
    "",
    `Name: ${getFormValue(formData, "name")}`,
    `Phone: ${getFormValue(formData, "phone")}`,
    `Email: ${getFormValue(formData, "email")}`,
    `Date: ${formatDateValue(getFormValue(formData, "date"))}`,
    `Time: ${formatTimeValue(getFormValue(formData, "time"))}`,
    `Guests: ${getFormValue(formData, "guests")}`,
    `Special requests: ${getFormValue(formData, "requests")}`,
    "",
    "Please confirm this table booking.",
  ].join("\n");
}

function buildCateringMessage(formData) {
  return [
    `New catering inquiry for ${restaurantInfo.name}`,
    "",
    `Name: ${getFormValue(formData, "name")}`,
    `Phone: ${getFormValue(formData, "phone")}`,
    `Email: ${getFormValue(formData, "email")}`,
    `Event date: ${formatDateValue(getFormValue(formData, "date"))}`,
    `Guests: ${getFormValue(formData, "guests")}`,
    `Package: ${getFormValue(formData, "package")}`,
    `Details: ${getFormValue(formData, "details")}`,
    "",
    "Please contact me regarding the catering requirement.",
  ].join("\n");
}

function getSmsLink(message) {
  const separator = /iPad|iPhone|iPod/i.test(window.navigator.userAgent) ? "&" : "?";
  return `sms:${restaurantInfo.smsPhone}${separator}body=${encodeURIComponent(message)}`;
}

function openSmsComposer(message) {
  const link = document.createElement("a");
  link.href = getSmsLink(message);
  link.style.display = "none";
  document.body.append(link);
  link.click();
  link.remove();
}

function openVideo(source, sourceType, title) {
  if (!modal || !videoFrame || !videoPlayer) return;

  clearTimeout(modalHideTimer);
  document.querySelector("#video-modal-title").textContent = title;

  if (sourceType === "youtube") {
    videoPlayer.pause();
    videoPlayer.hidden = true;
    videoPlayer.removeAttribute("src");
    videoFrame.hidden = false;
    videoFrame.src = `https://www.youtube.com/embed/${source}?autoplay=1`;
  } else {
    videoFrame.hidden = true;
    videoFrame.src = "";
    videoPlayer.hidden = false;
    videoPlayer.src = source;
    videoPlayer.load();
    void videoPlayer.play().catch(() => {});
  }

  modal.hidden = false;
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  if (!modal || !videoFrame || !videoPlayer) return;

  modal.classList.remove("is-open");
  clearTimeout(modalHideTimer);
  modalHideTimer = window.setTimeout(() => {
    modal.hidden = true;
    videoFrame.src = "";
    videoFrame.hidden = true;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
    videoPlayer.hidden = true;
    document.body.style.overflow = "";
  }, 240);
}

function handleMenuClick(event) {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  if (button.dataset.category === activeCategory) {
    if (activeMenuItemId === null) {
      activeMenuItemId = getFirstMenuItemId(activeCategory);
      renderMenuCards(true);
    }
    return;
  }

  activeCategory = button.dataset.category;
  activeMenuItemId = getFirstMenuItemId(activeCategory);
  renderMenuTabs();
  renderMenuCards(true);
}

function handleMenuCardClick(event) {
  const trigger = event.target.closest("[data-menu-item-id]");
  if (!trigger) return;

  const itemId = Number(trigger.dataset.menuItemId);
  activeMenuItemId = activeMenuItemId === itemId ? null : itemId;
  renderMenuCards();
}

function handleScrollClick(event) {
  const trigger = event.target.closest("[data-scroll-target]");
  if (!trigger) return;

  event.preventDefault();
  scrollToSection(trigger.dataset.scrollTarget);
}

function handleVideoClick(event) {
  const trigger = event.target.closest("[data-video-src]");
  if (!trigger) return;

  openVideo(trigger.dataset.videoSrc, trigger.dataset.videoType, trigger.dataset.videoTitle);
}

function handleFormSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  event.preventDefault();

  const isCateringForm = form.id === "catering-form";
  const formData = new FormData(form);
  const message = isCateringForm
    ? buildCateringMessage(formData)
    : buildReservationMessage(formData);
  const toastMessage = isCateringForm
    ? "Opening your SMS app with the catering inquiry details."
    : "Opening your SMS app with the reservation details.";

  openSmsComposer(message);
  showToast(toastMessage);
  form.reset();
}

function handleKeydown(event) {
  if (event.key === "Escape" && modal && !modal.hidden) {
    closeVideo();
  }
}

function markRevealTargets(scope = document) {
  const selector = [
    ".section-copy",
    ".about-visual",
    ".about-copy",
    ".feature-card",
    ".menu-book-promo",
    ".menu-card",
    ".pricing-note",
    ".offer-card",
    ".gallery-card",
    ".video-card",
    ".review-card",
    ".catering-banner",
    ".catering-card",
    ".form-intro",
    ".form-card",
    ".contact-card",
    ".map-card",
    ".footer-grid > div",
    ".footer-bottom",
  ].join(", ");

  const nodes = Array.from(scope.querySelectorAll(selector));

  nodes.forEach((node, index) => {
    if (node.dataset.revealReady) return;

    node.dataset.reveal = "true";
    node.dataset.revealReady = "true";
    node.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 280)}ms`);

    if (
      !canUseMotion() ||
      node.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
      node.classList.add("is-visible");
      return;
    }

    revealObserver?.observe(node);
  });
}

function setupRevealAnimations() {
  if (!canUseMotion()) {
    markRevealTargets(document);
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  markRevealTargets(document);
}

function triggerMenuGridRefresh() {
  if (!canUseMotion()) return;

  menuGrid.classList.remove("is-refreshing");
  clearTimeout(menuRefreshTimer);
  void menuGrid.offsetWidth;
  menuGrid.classList.add("is-refreshing");

  menuRefreshTimer = window.setTimeout(() => {
    menuGrid.classList.remove("is-refreshing");
  }, 520);
}

function setupHeroParallax() {
  if (!heroBackdrop) return;
  heroBackdrop.style.willChange = "auto";
  heroBackdrop.style.transform = "";
}

function init() {
  renderServicePills();
  renderMenuTabs();
  renderMenuCards();
  renderOffers();
  renderGallery();
  renderVideos();
  renderReviews();
  renderCatering();
  setupRevealAnimations();
  setupHeroParallax();

  document.addEventListener("click", handleScrollClick);
  menuTabs.addEventListener("click", handleMenuClick);
  menuGrid.addEventListener("click", handleMenuCardClick);
  videoGrid.addEventListener("click", handleVideoClick);
  document.querySelector("#catering-form").addEventListener("submit", handleFormSubmit);
  document.querySelector("#reservation-form").addEventListener("submit", handleFormSubmit);
  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal='true']")) {
      closeVideo();
    }
  });
  document.addEventListener("keydown", handleKeydown);
}

init();
