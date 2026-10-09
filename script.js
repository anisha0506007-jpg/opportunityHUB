
const opportunities = [
  {
    id: 101,
    title: "Winter & Term Internship Programme",
    org: "National Highways Authority of India",
    type: "Internship",
    icon: "🛣️",
    mode: "On-site",
    location: "India",
    reward: "Check official notice",
    deadline: "2026-10-20",
    posted: 1,
    skills: "civil engineering IT computer science electronics data science",
    description: "Explore internship opportunities related to national highway projects. Check the official notice for eligibility, available disciplines and dates.",
    link: "https://internshipsatnhai.digitalindiacorporation.in/",
    featured: true
  },
  {
    id: 102,
    title: "PvPI Internship Programme 2026",
    org: "Indian Pharmacopoeia Commission",
    type: "Internship",
    icon: "🧪",
    mode: "On-site",
    location: "India",
    reward: "Check official notice",
    deadline: "2026-10-31",
    posted: 2,
    skills: "pharmacy medical dental nursing pharmacovigilance health sciences",
    description: "Explore pharmacovigilance experience. This programme is intended for specified healthcare and related academic backgrounds.",
    link: "https://ipc.gov.in/news-highlights/1522-applications-open-pvpi-internship-programme-2026.html",
    featured: true
  },
  {
    id: 103,
    title: "External Student Internship",
    org: "Indian Institute of Remote Sensing",
    type: "Internship",
    icon: "🛰️",
    mode: "On-site",
    location: "India",
    reward: "Check official notice",
    deadline: "2026-10-31",
    posted: 3,
    skills: "science technology remote sensing geospatial research",
    description: "Explore research and project experience in remote sensing and related disciplines. Verify the current application window and eligibility.",
    link: "https://www.iirs.gov.in/content/external-student-internship/",
    featured: true
  },
  {
    id: 104,
    title: "National Scholarship Schemes 2026–27",
    org: "National Scholarship Portal",
    type: "Scholarship",
    icon: "🎓",
    mode: "Online",
    location: "India",
    reward: "Varies by scheme",
    deadline: "2026-10-31",
    posted: 4,
    skills: "undergraduate education financial aid merit welfare students",
    description: "Browse government scholarship schemes for eligible students. Funding, documents and deadlines differ by scheme.",
    link: "https://scholarships.gov.in/All-Scholarships",
    featured: true
  },
  {
    id: 105,
    title: "NIDM Internship Programme",
    org: "National Institute of Disaster Management",
    type: "Internship",
    icon: "🌍",
    mode: "On-site",
    location: "India",
    reward: "Check official notice",
    deadline: "2026-10-31",
    posted: 5,
    skills: "disaster management environment social science engineering psychology geography research",
    description: "Explore disaster management and research opportunities. Confirm the current application cycle and eligibility on the official website.",
    link: "https://www.nidm.gov.in/internship.asp",
    featured: false
  },
  {
    id: 106,
    title: "MoEFCC Internship Scheme",
    org: "Ministry of Environment, Forest and Climate Change",
    type: "Internship",
    icon: "🌿",
    mode: "Online",
    location: "India",
    reward: "Check official guidelines",
    deadline: "2026-12-31",
    posted: 6,
    skills: "environment climate sustainability forestry research policy",
    description: "Explore environment and sustainability-related internship opportunities. Confirm the latest application window and eligibility before applying.",
    link: "https://portals.moef.gov.in/internship/",
    featured: false
  },
  {
    id: 107,
    title: "Jobs Across Industries",
    org: "National Career Service",
    type: "Job",
    icon: "💼",
    mode: "Online",
    location: "India",
    reward: "Depends on vacancy",
    deadline: "",
    posted: 7,
    skills: "jobs freshers technology finance marketing healthcare business government",
    description: "Discover job vacancies across sectors, experience levels and locations. Open individual listings to check application deadlines.",
    link: "https://www.ncs.gov.in/",
    featured: true
  },
  {
    id: 108,
    title: "Internship Opportunities",
    org: "Internshala",
    type: "Internship",
    icon: "🚀",
    mode: "Remote",
    location: "India",
    reward: "Varies by listing",
    deadline: "",
    posted: 8,
    skills: "web development design marketing business finance content writing",
    description: "Search for technical and non-technical internships, including opportunities for students and freshers.",
    link: "https://internshala.com/",
    featured: true
  },
  {
    id: 109,
    title: "Global Hackathons & Challenges",
    org: "Devpost",
    type: "Competition",
    icon: "🏆",
    mode: "Online",
    location: "Global",
    reward: "Varies by competition",
    deadline: "",
    posted: 9,
    skills: "hackathon coding AI design innovation startup students",
    description: "Find hackathons and innovation challenges. Check each event's registration deadline, eligibility and participation rules.",
    link: "https://devpost.com/",
    featured: false
  },
  {
    id: 110,
    title: "Online Skills & Training",
    org: "Microsoft Learn",
    type: "Course",
    icon: "📚",
    mode: "Online",
    location: "Global",
    reward: "Free learning resources available",
    deadline: "",
    posted: 10,
    skills: "programming AI cloud data cybersecurity beginner",
    description: "Explore self-paced resources for programming, AI, cloud computing and other technical skills.",
    link: "https://learn.microsoft.com/training/",
    featured: false
  },
  {
    id: 111,
    title: "Remote & Hybrid Job Search",
    org: "LinkedIn Jobs",
    type: "Job",
    icon: "🌐",
    mode: "Remote",
    location: "Global",
    reward: "Varies by vacancy",
    deadline: "",
    posted: 11,
    skills: "remote jobs freshers developer designer analyst marketing",
    description: "Search jobs by role, location, experience level and work arrangement. Review the employer's original listing before applying.",
    link: "https://www.linkedin.com/jobs/",
    featured: true
  },
  {
    id: 112,
    title: "Research Internship Search",
    org: "IndiaBioscience",
    type: "Internship",
    icon: "🔬",
    mode: "On-site",
    location: "India",
    reward: "Varies by programme",
    deadline: "",
    posted: 12,
    skills: "research biology science life sciences biotechnology",
    description: "Explore life-science research resources and opportunities. Check each programme for current openings and eligibility.",
    link: "https://www.indiabioscience.org/",
    featured: false
  },
  {
    id: 113,
    title: "Entrepreneurship & Startup Resources",
    org: "Startup India",
    type: "Fellowship",
    icon: "💡",
    mode: "Online",
    location: "India",
    reward: "Depends on programme",
    deadline: "",
    posted: 13,
    skills: "entrepreneurship startups business innovation leadership",
    description: "Explore startup programmes, ecosystem resources and opportunities for aspiring entrepreneurs.",
    link: "https://www.startupindia.gov.in/",
    featured: false
  },
  {
    id: 114,
    title: "Digital Marketing Learning",
    org: "Google Skillshop",
    type: "Course",
    icon: "📣",
    mode: "Online",
    location: "Global",
    reward: "Learning resources",
    deadline: "",
    posted: 14,
    skills: "marketing SEO digital advertising analytics",
    description: "Learn about digital marketing tools and platforms through online learning resources.",
    link: "https://skillshop.withgoogle.com/",
    featured: false
  },
  {
    id: 115,
    title: "Government Job Notifications",
    org: "Employment News",
    type: "Job",
    icon: "🏛️",
    mode: "On-site",
    location: "India",
    reward: "Depends on post",
    deadline: "",
    posted: 15,
    skills: "government jobs public sector recruitment India graduates",
    description: "Explore government recruitment notices across different departments and qualifications.",
    link: "https://www.employmentnews.gov.in/",
    featured: false
  },
  {
    id: 116,
    title: "Student Innovation Opportunities",
    org: "MyGov",
    type: "Competition",
    icon: "✨",
    mode: "Online",
    location: "India",
    reward: "Varies by challenge",
    deadline: "",
    posted: 16,
    skills: "innovation students essay design ideas competition India",
    description: "Discover public challenges, creative contests and participation opportunities. Check whether each challenge is currently open.",
    link: "https://www.mygov.in/",
    featured: false
  }
];

// Important:
// The first six records contain manually entered dates that must be
// verified on the official sources. Other records are discovery portals,
// not individual vacancies with confirmed deadlines.

const grid = document.getElementById("opportunityGrid");
const savedGrid = document.getElementById("savedGrid");
const searchInput = document.getElementById("searchInput");
const inlineSearch = document.getElementById("inlineSearch");
const typeFilter = document.getElementById("typeFilter");
const modeFilter = document.getElementById("modeFilter");
const sortFilter = document.getElementById("sortFilter");
const emptyState = document.getElementById("emptyState");
const savedEmpty = document.getElementById("savedEmpty");
const resultsCount = document.getElementById("resultsCount");
const activeCategory = document.getElementById("activeCategory");
const toast = document.getElementById("toast");

let selectedCategory = "All";
let savedIds = loadSaved();
let toastTimer;

function loadSaved() {
  try {
    const data = JSON.parse(
      localStorage.getItem("opportunityhub-saved") || "[]"
    );

    if (!Array.isArray(data)) return [];

    return data.filter(id =>
      Number.isInteger(id) && opportunities.some(item => item.id === id)
    );
  } catch {
    return [];
  }
}

function saveSaved() {
  try {
    localStorage.setItem(
      "opportunityhub-saved",
      JSON.stringify(savedIds)
    );
  } catch {
    showToast("Browser storage is unavailable.");
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatDate(date) {
  if (!date) return "Check official website";

  const parsed = new Date(date + "T00:00:00");

  if (Number.isNaN(parsed.getTime())) {
    return "Check official website";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function hasPassedDeadline(item) {
  if (!item.deadline) return false;

  const endOfDeadline = new Date(item.deadline + "T23:59:59");
  return endOfDeadline < new Date();
}

function getFilteredItems() {
  const query = inlineSearch.value.trim().toLowerCase();

  let items = opportunities.filter(item => {
    const searchable = [
      item.title,
      item.org,
      item.type,
      item.mode,
      item.location,
      item.reward,
      item.skills,
      item.description
    ].join(" ").toLowerCase();

    const categoryMatches =
      selectedCategory === "All" || item.type === selectedCategory;

    const typeMatches =
      typeFilter.value === "All" || item.type === typeFilter.value;

    const modeMatches =
      modeFilter.value === "All" || item.mode === modeFilter.value;

    const searchMatches = searchable.includes(query);

    return categoryMatches && typeMatches && modeMatches && searchMatches;
  });

  if (sortFilter.value === "deadline") {
    items.sort((a, b) => {
      const dateA = a.deadline
        ? new Date(a.deadline + "T00:00:00").getTime()
        : Infinity;

      const dateB = b.deadline
        ? new Date(b.deadline + "T00:00:00").getTime()
        : Infinity;

      return dateA - dateB;
    });
  } else if (sortFilter.value === "newest") {
    items.sort((a, b) => a.posted - b.posted);
  } else {
    items.sort((a, b) => {
      if (a.featured !== b.featured) {
        return Number(b.featured) - Number(a.featured);
      }

      return a.id - b.id;
    });
  }

  return items;
}

function createCard(item) {
  const saved = savedIds.includes(item.id);
  const expired = hasPassedDeadline(item);

  let deadlineText = item.deadline
    ? formatDate(item.deadline)
    : "Check official website";

  if (expired) {
    deadlineText = "Deadline passed";
  }

  let actionLabel = "Explore ↗";

  if (expired) {
    actionLabel = "Deadline passed";
  } else if (!item.deadline) {
    actionLabel = "View listings ↗";
  }

  return `
    <article class="op-card">
      <div class="op-card-top">
        <div class="org-avatar">${escapeHTML(item.icon)}</div>

        <button
          class="save-btn ${saved ? "saved" : ""}"
          data-save="${item.id}"
          aria-label="${saved ? "Remove saved opportunity" : "Save opportunity"}"
          aria-pressed="${saved}"
          title="${saved ? "Remove from saved" : "Save opportunity"}">
          ${saved ? "♥" : "♡"}
        </button>
      </div>

      <span class="type-tag">${escapeHTML(item.type)}</span>

      <h3>${escapeHTML(item.title)}</h3>
      <div class="org-name">${escapeHTML(item.org)}</div>

      <p class="op-description">${escapeHTML(item.description)}</p>

      <div class="meta-row">
        <span class="meta-chip">⌖ ${escapeHTML(item.location)}</span>
        <span class="meta-chip">◉ ${escapeHTML(item.mode)}</span>
        <span class="meta-chip">${escapeHTML(item.reward)}</span>
      </div>

      <div class="deadline-row">
        <div class="deadline">
          Deadline
          <strong>${escapeHTML(deadlineText)}</strong>
        </div>

        <a
          class="apply-btn ${expired ? "disabled" : ""}"
          href="${escapeHTML(item.link)}"
          target="_blank"
          rel="noopener noreferrer"
          ${expired ? 'aria-disabled="true" tabindex="-1"' : ""}>
          ${actionLabel}
        </a>
      </div>
    </article>
  `;
}

function renderOpportunities() {
  const items = getFilteredItems();

  grid.innerHTML = items.map(createCard).join("");

  emptyState.hidden = items.length > 0;

  resultsCount.textContent =
    `${items.length} ${items.length === 1 ? "opportunity" : "opportunities"}`;

  activeCategory.textContent = selectedCategory === "All"
    ? "Showing all opportunities"
    : `Showing ${selectedCategory.toLowerCase()} opportunities`;

  document.getElementById("totalStat").textContent = opportunities.length;

  renderSaved();
}

function renderSaved() {
  const items = opportunities.filter(item => savedIds.includes(item.id));

  savedGrid.innerHTML = items.map(createCard).join("");
  savedEmpty.hidden = items.length > 0;

  document.getElementById("savedNavCount").textContent = items.length;
  document.getElementById("savedHeadingCount").textContent = `(${items.length})`;
}

function setCategory(category) {
  selectedCategory = category;
  typeFilter.value = category;

  document.querySelectorAll(".category-card").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderOpportunities();
}

function syncSearch(value) {
  searchInput.value = value;
  inlineSearch.value = value;
  renderOpportunities();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();

  syncSearch(searchInput.value);

  document.getElementById("explore").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", () => {
  inlineSearch.value = searchInput.value;
  renderOpportunities();
});

inlineSearch.addEventListener("input", () => {
  searchInput.value = inlineSearch.value;
  renderOpportunities();
});

typeFilter.addEventListener("change", () => {
  setCategory(typeFilter.value);
});

modeFilter.addEventListener("change", renderOpportunities);
sortFilter.addEventListener("change", renderOpportunities);

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);

    document.getElementById("explore").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll("[data-search]").forEach(button => {
  button.addEventListener("click", () => {
    const term = button.dataset.search;

    if (term === "internship") {
      setCategory("Internship");
      syncSearch("");
      modeFilter.value = "All";
    } else if (term === "scholarship") {
      setCategory("Scholarship");
      syncSearch("");
      modeFilter.value = "All";
    } else {
      setCategory("All");
      syncSearch("remote");
      modeFilter.value = "All";
    }

    renderOpportunities();

    document.getElementById("explore").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.addEventListener("click", event => {
  const button = event.target.closest("[data-save]");

  if (!button) return;

  const id = Number(button.dataset.save);

  if (savedIds.includes(id)) {
    savedIds = savedIds.filter(savedId => savedId !== id);
    showToast("Removed from your saved opportunities.");
  } else {
    savedIds.push(id);
    showToast("Opportunity saved to your shortlist!");
  }

  saveSaved();
  renderOpportunities();
});

document.getElementById("clearFilters").addEventListener("click", resetFilters);
document.getElementById("resetSearch").addEventListener("click", resetFilters);

function resetFilters() {
  selectedCategory = "All";
  typeFilter.value = "All";
  modeFilter.value = "All";
  sortFilter.value = "featured";

  syncSearch("");

  document.querySelectorAll(".category-card").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === "All"
    );
  });
}

renderOpportunities();
