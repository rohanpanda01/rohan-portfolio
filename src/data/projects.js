// Featured projects + full case-study content for /project/:id pages.
export const projects = [
  {
    id: "mfa-authentication-system",
    index: "01",
    badge: "Security / Full-Stack",
    title: "MFA Authentication System",
    subtitle: "TOTP-Based Two-Factor Authentication",
    visual: "auth",
    accent: "from-blue-500 to-indigo-500",
    github: "https://github.com/rohanpanda01/mfa-ai-system",
    tech: ["Java", "Spring Boot", "React JS", "MySQL"],
    summary:
      "A full-stack security system that protects user accounts with time-based one-time passwords — from registration and BCrypt-hashed credentials to TOTP verification before every session.",
    features: [
      "User Registration",
      "Secure Login",
      "TOTP Verification",
      "Two-Factor Authentication",
      "BCrypt Password Hashing",
      "REST APIs",
      "React Authentication UI",
    ],
    stats: [
      { value: "2", label: "Auth Factors" },
      { value: "6-digit", label: "TOTP Codes" },
      { value: "BCrypt", label: "Hashing" },
      { value: "JWT", label: "Sessions" },
    ],
    caseStudy: {
      overview:
        "A complete authentication platform that adds a second, verifiable factor to every login. Users register with BCrypt-hashed credentials, pair an authenticator app through a QR code, and confirm a rotating 6-digit TOTP code before a session is ever issued.",
      problem:
        "Password-only authentication is the weakest link in most applications — leaked credentials, phishing and brute-force attacks all lead to account takeover. A second factor was needed that does not depend on SMS, which is costly, slow and interceptable.",
      solution:
        "Implemented TOTP (RFC 6238) as the second factor. The Spring Boot backend generates a unique secret per user and renders it as a QR code for Google Authenticator / Authy. At login, credentials are checked first; only after the time-based code is verified does the API issue a session token.",
      architecture:
        "Layered, API-first design — a React SPA talks to REST endpoints; controllers delegate to an authentication service that coordinates user persistence through Spring Data JPA and TOTP validation. Secrets are encrypted at rest in MySQL and never leave the backend after pairing.",
      flow: ["React JS", "Spring Boot REST API", "Authentication", "TOTP Verification", "MySQL"],
      frontend:
        "React authentication UI — registration and login forms with inline validation, an authenticator-pairing screen with QR code, and a 6-digit OTP input with auto-advance and paste support. Protected routes react to real session state.",
      backend:
        "Java + Spring Boot REST API — /api/auth/register, /api/auth/login and /api/auth/verify endpoints, Spring Security filter chain, BCrypt hashing, TOTP generation with drift tolerance and token issuance on success.",
      database:
        "MySQL schema for users, encrypted TOTP secrets, recovery codes and a login audit trail, accessed through Spring Data JPA with constraint-validated entities.",
      authentication:
        "Two-step verification — (1) credential check against BCrypt hashes, (2) 30-second-window TOTP validation with one-step drift tolerance. Sessions are issued only after both pass; failed attempts are rate-limited and logged.",
      challenges: [
        {
          title: "Time drift between devices",
          detail:
            "Authenticator clocks drift. Solved with a one-step tolerance window and server time synced to NTP.",
        },
        {
          title: "Secure secret storage",
          detail:
            "TOTP secrets are encrypted before they touch the database and are never returned by the API after pairing.",
        },
        {
          title: "Security that still feels smooth",
          detail:
            "Auto-advancing OTP inputs, instant QR pairing and clear recovery messaging keep the flow fast without weakening it.",
        },
      ],
      result:
        "An end-to-end MFA flow — registration, secure login and TOTP verification — mirroring the authentication patterns used to protect real production accounts.",
    },
  },
  {
    id: "online-auction-system",
    index: "02",
    badge: "E-Commerce / Full-Stack",
    title: "Online Auction & Bidding System",
    subtitle: "Role-Based Marketplace with Live Bidding",
    visual: "auction",
    accent: "from-purple-500 to-fuchsia-500",
    github: "https://github.com/rohanpanda01/online-auction-system",
    tech: ["React JS", "Java", "Spring Boot", "MySQL"],
    summary:
      "A full-stack auction marketplace where sellers list items, buyers compete in time-boxed bids and admins moderate everything — with bid history and role-based UI on top of a Spring Boot REST API.",
    features: [
      "Auction Browsing",
      "Place Bids",
      "Bid History",
      "Authentication",
      "Role-Based UI",
      "Admin Console",
      "Seller Dashboard",
      "Buyer Experience",
      "REST APIs",
    ],
    stats: [
      { value: "3", label: "User Roles" },
      { value: "Live", label: "Bid Tracking" },
      { value: "100%", label: "Bid History" },
      { value: "REST", label: "API First" },
    ],
    caseStudy: {
      overview:
        "An online auction platform built as a classic three-tier application — a React frontend, a Java + Spring Boot REST API and a MySQL database — covering the full lifecycle of an auction: listing, bidding, history and administration.",
      problem:
        "Fixed-price e-commerce flows cannot express competitive, time-boxed selling. The platform needed validated bids, a trustworthy bid history, auction state management and clearly separated experiences for admins, sellers and buyers.",
      solution:
        "Built a role-based auction system. Sellers create auctions with a start price and duration; buyers browse live auctions and place bids validated by the API — minimum increment, auction still open; every accepted bid is persisted with its history; admins manage users and listings through a dedicated console.",
      architecture:
        "Three-layer design — React SPA, Spring Boot service layer, MySQL persistence. All business rules (auction status, minimum bid increment, role permissions) live in the service layer, so the UI and API stay consistent no matter which client calls them.",
      flow: ["React JS", "Spring Boot REST API", "Auction / Bidding Logic", "MySQL"],
      frontend:
        "React UI for auction browsing, item detail, bid placement and bid history, plus role-aware dashboards — Admin, Seller and Buyer each see navigation and actions shaped by their authenticated role.",
      backend:
        "Spring Boot REST API covering auction CRUD, bid placement with server-side validation, bid history queries and role-based authorization on every protected operation.",
      database:
        "Relational MySQL schema for users, auctions and bids with foreign-key integrity and indexed queries that keep live auction lists and per-item bid timelines fast.",
      authentication:
        "Authenticated sessions with role-based access control — Admin, Seller and Buyer roles are enforced server-side and drive a role-specific UI on the client.",
      challenges: [
        {
          title: "Bid race conditions",
          detail:
            "Two buyers can bid at the same moment — transactional, server-validated writes keep every accepted bid consistent.",
        },
        {
          title: "One app, three experiences",
          detail:
            "A single React codebase with role-aware routing and guarded dashboards instead of three separate frontends.",
        },
        {
          title: "Consistent auction state",
          detail:
            "Relational constraints and a single source of truth in the service layer keep auction status, bids and history in sync.",
        },
      ],
      result:
        "A complete marketplace loop — listing, competitive bidding, history and administration — demonstrating practical full-stack design with Spring Boot, React and MySQL.",
    },
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);

export const getNextProject = (id) => {
  const i = projects.findIndex((p) => p.id === id);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
};
