document.documentElement.classList.add("js");

const restaurantInfo = {
  name: "Sai Silver Dum Biryani",
  tagline: "Authentic Hyderabadi Dum Biryani Experience",
  rating: 4.4,
  reviewCount: 192,
  priceRange: "\u20B9200\u2013400",
  phone: "089194 43535",
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
        image:
          "https://images.pexels.com/photos/33947401/pexels-photo-33947401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        popular: true,
      },
      {
        id: 102,
        name: "Mutton Dum Biryani",
        price: 320,
        description:
          "Premium mutton pieces cooked with fragrant spices and saffron-infused rice",
        spiceLevel: "Medium Spice",
        image:
          "https://images.pexels.com/photos/29631417/pexels-photo-29631417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        popular: true,
      },
      {
        id: 103,
        name: "Special Silver Dum Biryani",
        price: 400,
        description:
          "Our chef's special with premium ingredients and authentic Hyderabadi flavors",
        spiceLevel: "High Spice",
        image:
          "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxiaXJ5YW5pfGVufDB8fHx8MTc3MzcyNTYyNXww&ixlib=rb-4.1.0&q=85",
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
    url: "https://images.pexels.com/photos/33947401/pexels-photo-33947401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Signature Chicken Dum Biryani",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/29631417/pexels-photo-29631417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Mutton Dum Biryani",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxiaXJ5YW5pfGVufDB8fHx8MTc3MzcyNTYyNXww&ixlib=rb-4.1.0&q=85",
    alt: "Special Silver Dum Biryani",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1751200503125-d8cb239f95ba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzczNzI1ODY3fDA&ixlib=rb-4.1.0&q=85",
    alt: "Restaurant Interior",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/10148453/pexels-photo-10148453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Dining Area",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1770990409935-17f1ae739b21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxjYXRlcmluZyUyMGJ1ZmZldHxlbnwwfHx8fDE3NzM3MjU4OTB8MA&ixlib=rb-4.1.0&q=85",
    alt: "Catering Services",
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
    title: "Traditional Dum Biryani Cooking Process",
    description:
      "Watch how we prepare our signature dum biryani using authentic Hyderabadi methods",
    thumbnail:
      "https://images.pexels.com/photos/33947401/pexels-photo-33947401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    videoId: "dQw4w9WgXcQ",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Restaurant Tour & Ambiance",
    description: "Take a virtual tour of our restaurant and dining experience",
    thumbnail:
      "https://images.pexels.com/photos/10148453/pexels-photo-10148453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    videoId: "dQw4w9WgXcQ",
    duration: "2:30",
  },
  {
    id: 3,
    title: "Customer Testimonials",
    description: "Hear what our satisfied customers have to say about their experience",
    thumbnail:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxiaXJ5YW5pfGVufDB8fHx8MTc3MzcyNTYyNXww&ixlib=rb-4.1.0&q=85",
    videoId: "dQw4w9WgXcQ",
    duration: "4:20",
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
const heroBackdrop = document.querySelector(".hero__backdrop");

let activeCategory = menuItems[0].category;
let activeMenuItemId = menuItems[0].items[0]?.id ?? null;
let toastTimer = null;
let toastHideTimer = null;
let modalHideTimer = null;
let menuRefreshTimer = null;
let revealObserver = null;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
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
        <article class="gallery-card">
          <img src="${item.url}" alt="${item.alt}" loading="lazy" />
          <span>${item.alt}</span>
        </article>
      `,
    )
    .join("");
}

function renderVideos() {
  videoGrid.innerHTML = videos
    .map(
      (video) => `
        <article class="video-card">
          <button type="button" data-video-id="${video.videoId}" data-video-title="${video.title}">
            <div class="video-thumb">
              <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" />
              <span class="video-play">&#9658;</span>
              <span class="video-duration">${video.duration}</span>
            </div>
          </button>
          <div class="video-card__copy">
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

function openVideo(videoId, title) {
  if (!modal || !videoFrame) return;

  clearTimeout(modalHideTimer);
  videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  document.querySelector("#video-modal-title").textContent = title;
  modal.hidden = false;
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  if (!modal || !videoFrame) return;

  modal.classList.remove("is-open");
  clearTimeout(modalHideTimer);
  modalHideTimer = window.setTimeout(() => {
    modal.hidden = true;
    videoFrame.src = "";
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
  const trigger = event.target.closest("[data-video-id]");
  if (!trigger) return;

  openVideo(trigger.dataset.videoId, trigger.dataset.videoTitle);
}

function handleFormSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  event.preventDefault();

  const isCateringForm = form.id === "catering-form";
  const message = isCateringForm
    ? "Catering inquiry captured. We'll get back to you within 24 hours."
    : "Reservation request captured. We'll confirm your table shortly.";

  showToast(message);
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
      prefersReducedMotion.matches ||
      node.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
      node.classList.add("is-visible");
      return;
    }

    revealObserver?.observe(node);
  });
}

function setupRevealAnimations() {
  if (prefersReducedMotion.matches) {
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
  if (prefersReducedMotion.matches) return;

  menuGrid.classList.remove("is-refreshing");
  clearTimeout(menuRefreshTimer);
  void menuGrid.offsetWidth;
  menuGrid.classList.add("is-refreshing");

  menuRefreshTimer = window.setTimeout(() => {
    menuGrid.classList.remove("is-refreshing");
  }, 520);
}

function setupHeroParallax() {
  if (!heroBackdrop || prefersReducedMotion.matches) return;

  let isTicking = false;

  const updateBackdrop = () => {
    const offset = Math.min(window.scrollY, 420);
    heroBackdrop.style.transform = `scale(1.08) translate3d(0, ${offset * 0.12}px, 0)`;
    isTicking = false;
  };

  updateBackdrop();

  window.addEventListener(
    "scroll",
    () => {
      if (isTicking) return;
      isTicking = true;
      window.requestAnimationFrame(updateBackdrop);
    },
    { passive: true },
  );
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
