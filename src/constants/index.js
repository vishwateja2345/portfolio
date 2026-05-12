export const myProjects = [
  {
    id: 1,
    title: "Resume ATS Analyzer",
    category: "fullstack",
    description:
      "AI-powered resume screening system that parses resumes, matches against job descriptions using NLP, and generates ATS compatibility scores with actionable feedback.",
    subDescription: [
      "Built a full-stack resume analysis platform with React frontend and Node.js backend.",
      "Integrated NLP-based keyword extraction and semantic matching for accurate ATS scoring.",
      "PostgreSQL database for persistent storage of resumes, job descriptions, and match results.",
    ],
    keyFeatures: [
      "Resume parsing with multi-format support (PDF, DOCX)",
      "NLP-powered keyword extraction and semantic matching",
      "ATS compatibility scoring with detailed breakdown",
      "Job description analysis and skill gap identification",
      "Dashboard with historical resume analysis tracking",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "NLP", "Express", "TailwindCSS"],
    implementationDetails: [
      "RESTful API architecture with Express.js for resume upload and analysis endpoints",
      "PostgreSQL with structured schema for resumes, job descriptions, and analysis results",
      "NLP pipeline for keyword extraction, TF-IDF scoring, and semantic similarity",
      "JWT-based authentication for user session management",
      "Responsive React frontend with real-time analysis feedback",
    ],
    href: {
      live: "https://hidani-tech-resume-ats.vercel.app/",
      github: "https://github.com/vishwateja231/Resume-ATS",
    },
    logo: "",
    image: "/assets/projects/resume-ats.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "NLP", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 2,
    title: "Ticket Booking System",
    category: "fullstack",
    description:
      "High-performance event ticket booking platform with real-time seat availability, concurrent booking handling, and Redis-backed session caching for sub-second response times.",
    subDescription: [
      "FastAPI backend with Redis caching for real-time seat locking and availability checks.",
      "React frontend with interactive seat selection and instant booking confirmation.",
    ],
    keyFeatures: [
      "Real-time seat availability with WebSocket updates",
      "Concurrent booking handling with Redis distributed locks",
      "Interactive seat map with drag-select and category filtering",
      "Payment integration with transaction rollback on failure",
      "QR code generation for e-tickets",
    ],
    techStack: ["FastAPI", "React", "Redis", "PostgreSQL", "WebSocket", "Docker"],
    implementationDetails: [
      "FastAPI with async endpoints for high-throughput booking operations",
      "Redis for distributed seat locking, session caching, and rate limiting",
      "PostgreSQL with row-level locking for transactional integrity",
      "WebSocket-based real-time seat availability broadcasting",
      "Dockerized microservices architecture for scalable deployment",
    ],
    href: {
      live: "https://ticker-booking-app.vercel.app/login",
      github: "https://github.com/vishwateja231/ticker-booking-app",
    },
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "FastAPI", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Redis", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 3,
    title: "Smart Airport Ride Pooling",
    category: "fullstack",
    description:
      "Intelligent ride-pooling backend service for airport commuters that matches riders by route proximity, optimizes pool groups, and manages real-time ride state with Redis queues.",
    subDescription: [
      "FastAPI-based microservice with geospatial matching and Redis-backed ride queue management.",
      "PostgreSQL for rider profiles, trip history, and billing with optimized spatial queries.",
    ],
    keyFeatures: [
      "Geospatial ride matching using Haversine distance calculations",
      "Redis pub/sub for real-time ride status updates",
      "Dynamic pricing based on pool size and distance",
      "Ride scheduling with time-window matching",
      "Admin dashboard for fleet and route analytics",
    ],
    techStack: ["FastAPI", "Redis", "PostgreSQL", "Python", "Docker"],
    implementationDetails: [
      "FastAPI with Pydantic validation for rider matching and pool optimization endpoints",
      "Redis sorted sets for efficient geospatial proximity queries",
      "PostgreSQL PostGIS extension for spatial indexing and route optimization",
      "Background task workers for async pool formation and notification dispatch",
      "Containerized deployment with Docker Compose for service orchestration",
    ],
    href: {
      github: "https://github.com/vishwateja231/Smart-Airport-Ride-Pooling-Backend",
    },
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "FastAPI", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Redis", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Python", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 4,
    title: "URL Shortener",
    category: "fullstack",
    description:
      "Full-stack URL shortening service with branded short links, real-time click analytics, and a dashboard for tracking link performance across geographies.",
    subDescription: [
      "Responsive React frontend styled with Tailwind CSS for link management.",
      "Node.js/Express API with MongoDB persistence and unique slug generation.",
    ],
    keyFeatures: [
      "Custom branded short URL generation with collision-free slugs",
      "Real-time click tracking with geographic and device analytics",
      "Dashboard with click trends, referrer breakdown, and top links",
      "QR code generation for each shortened URL",
      "Bulk URL shortening via CSV upload",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    implementationDetails: [
      "Express.js REST API with middleware for rate limiting and input sanitization",
      "MongoDB with indexed collections for fast slug lookups and analytics aggregation",
      "Base62 encoding for generating compact, URL-safe short codes",
      "Click tracking pipeline with IP geolocation and user-agent parsing",
      "Responsive React dashboard with Chart.js visualizations",
    ],
    href: {
      live: "https://url-shortner-iota-opal.vercel.app/",
      github: "https://github.com/vishwateja231/Url_shortener",
    },
    logo: "",
    image: "/assets/projects/url_shortner.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Express", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/javascript.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 5,
    title: "Urban Turf",
    category: "fullstack",
    description:
      "Modern real estate landing page with smooth animations, Supabase-powered data layer, and accessibility-first design for property exploration and inquiry.",
    subDescription: [
      "Built with Vite and React for rapid iteration and fast load times.",
      "Attention to a11y, keyboard navigation, and color contrast throughout.",
    ],
    keyFeatures: [
      "Supabase integration for dynamic property listings and user inquiries",
      "Smooth scroll animations and micro-interactions using GSAP",
      "Fully responsive design optimized for mobile, tablet, and desktop",
      "Accessibility-first with ARIA labels, keyboard navigation, and contrast compliance",
      "Optimized asset loading with lazy images and code splitting",
    ],
    techStack: ["React", "Vite", "Supabase", "TailwindCSS", "GSAP"],
    implementationDetails: [
      "Vite-powered React app with HMR for rapid development workflow",
      "Supabase client for real-time data fetching and form submissions",
      "Tailwind CSS utility-first styling with custom design tokens",
      "GSAP ScrollTrigger for performant scroll-based animations",
      "Lighthouse-optimized with 90+ scores across all categories",
    ],
    href: {
      live: "https://urbanturf.vercel.app/",
      github: "https://github.com/vishwateja231/urbanturf",
    },
    logo: "",
    image: "/assets/projects/urban-turn.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Supabase", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 6,
    title: "Gold Price Prediction",
    category: "aiml",
    description:
      "LSTM-based deep learning model for time-series gold price forecasting with an interactive web UI for visualizing historical trends, predictions, and custom forecast horizons.",
    subDescription: [
      "Data preparation and feature scaling using Pandas/NumPy for clean model input.",
      "Model training and inference with TensorFlow; live plotting on the frontend.",
    ],
    keyFeatures: [
      "LSTM neural network for multi-step time series forecasting",
      "Interactive charts with historical vs predicted price overlay",
      "Custom forecast horizon selection (7-day, 30-day, 90-day)",
      "Feature importance visualization for model interpretability",
      "Real-time data ingestion from financial APIs",
    ],
    techStack: ["React", "Vite", "TailwindCSS", "TensorFlow", "Pandas", "NumPy", "Python", "Flask"],
    implementationDetails: [
      "LSTM-based time series forecasting with sliding window sequence generation",
      "Data preprocessing pipeline using Pandas for cleaning, Numpy for normalization",
      "MinMaxScaler feature scaling for stable gradient flow during training",
      "TensorFlow/Keras model with dropout regularization and early stopping",
      "React frontend with Recharts for interactive prediction visualization",
      "Flask API serving trained model predictions to the frontend",
    ],
    href: {
      live: "https://github.com/vishwateja231/gold-price-prediction",
      github: "https://github.com/vishwateja231/gold-price-prediction",
    },
    logo: "",
    image: "/assets/projects/gold-price-project.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Python", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Pandas", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 7,
    title: "RAG Document Q&A",
    category: "aiml",
    description:
      "Retrieval-Augmented Generation system that indexes documents into a FAISS vector store and answers natural language questions with source-cited, context-aware responses using LLMs.",
    subDescription: [
      "FAISS-based vector similarity search for fast, relevant document chunk retrieval.",
      "LLM-powered answer generation with source attribution and confidence scoring.",
    ],
    keyFeatures: [
      "Document ingestion with PDF, DOCX, and TXT support",
      "FAISS vector store with HNSWFlat indexing for sub-ms retrieval",
      "Chunk-level source citation in every generated answer",
      "Conversational memory for multi-turn Q&A sessions",
      "Configurable embedding models (OpenAI, HuggingFace, Sentence-Transformers)",
    ],
    techStack: ["Python", "FAISS", "LangChain", "OpenAI", "Streamlit", "HuggingFace"],
    implementationDetails: [
      "Document chunking with recursive text splitter for optimal context windows",
      "FAISS IVFFlat index for approximate nearest neighbor search at scale",
      "Embedding generation using OpenAI text-embedding-ada-002 / Sentence-Transformers",
      "LangChain RetrievalQA chain with custom prompt templates for answer generation",
      "Streamlit frontend for document upload, question input, and cited answer display",
      "Guardrails for hallucination detection and answer confidence thresholds",
    ],
    href: {
      github: "https://github.com/vishwateja231/RAG-Document-Q-A",
    },
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "FAISS", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "LangChain", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "OpenAI", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 8,
    title: "GraphQuery",
    category: "aiml",
    description:
      "Natural language to SQL query system powered by LLMs, with interactive graph visualizations for exploring relational data through conversational queries.",
    subDescription: [
      "LLM-driven SQL generation from natural language with schema-aware validation.",
      "Interactive graph and chart visualizations for query results with D3.js.",
    ],
    keyFeatures: [
      "Natural language to SQL translation using Groq/OpenAI LLMs",
      "Schema-aware query generation with table/column validation",
      "Interactive graph visualization of relational query results",
      "Auto-correction pipeline with retry-on-error for failed SQL queries",
      "Query history with result caching for repeated questions",
    ],
    techStack: ["Python", "FastAPI", "Groq", "PostgreSQL", "React", "D3.js", "LangChain"],
    implementationDetails: [
      "Groq LLM integration for high-speed natural language to SQL translation",
      "Schema enforcement layer mapping authorized tables and columns to prevent hallucinations",
      "SQL validation and auto-correction pipeline with up to 3 retry attempts",
      "FastAPI backend with async SQL execution against PostgreSQL",
      "React frontend with D3.js for dynamic graph and chart rendering",
      "Guardrails including SQL injection prevention and query complexity limits",
    ],
    href: {
      live: "https://dodge-wheat-eight.vercel.app",
      github: "https://github.com/vishwateja231/GraphQuery",
    },
    logo: "",
    image: "/assets/projects/graph-query.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Groq", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "FastAPI", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "D3.js", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 9,
    title: "Weather Forecasting App",
    category: "frontend",
    description:
      "Real-time weather dashboard showing current conditions and a 7-day forecast using the Open-Meteo API with geolocation-aware lookups and responsive design.",
    subDescription: [
      "Auto-detects user location with browser geolocation and reverse geocoding.",
      "Clean, responsive UI optimized for mobile and desktop.",
    ],
    keyFeatures: [
      "Auto-detection of user location via browser Geolocation API",
      "7-day forecast with hourly and daily breakdowns",
      "City search with autocomplete and reverse geocoding",
      "Responsive card-based UI with weather condition icons",
      "Unit toggle between Celsius and Fahrenheit",
    ],
    techStack: ["React", "TailwindCSS", "JavaScript", "Open-Meteo API"],
    implementationDetails: [
      "React app with modular component architecture for weather cards",
      "Open-Meteo API integration for real-time and forecast weather data",
      "Browser Geolocation API for automatic user location detection",
      "Tailwind CSS responsive design with mobile-first approach",
      "Error handling for location permissions and API rate limits",
    ],
    href: {
      live: "https://weather-forecast-001.netlify.app/",
      github: "https://github.com/vishwateja231/weather-forecasting",
    },
    logo: "",
    image: "/assets/projects/weather-forcasting.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 10,
    title: "CEW Network",
    category: "frontend",
    description:
      "Professional organization website with clean information architecture, modular React components, responsive layouts, and SEO-optimized content delivery.",
    subDescription: [
      "Built modular React components for maintainability and scalability.",
      "Added SEO-friendly meta tags and performant image optimization.",
    ],
    keyFeatures: [
      "Modular React component library for consistent UI patterns",
      "SEO-optimized with meta tags, Open Graph, and structured data",
      "Responsive layouts with CSS Grid and Flexbox",
      "Performant image loading with lazy loading and WebP optimization",
      "Accessible navigation with ARIA landmarks and skip links",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "TailwindCSS"],
    implementationDetails: [
      "Component-based architecture with reusable UI building blocks",
      "Tailwind CSS utility classes for consistent spacing and typography",
      "SEO meta tags and Open Graph properties for social media sharing",
      "Image optimization pipeline with responsive srcset and lazy loading",
      "GitHub Pages deployment with custom domain configuration",
    ],
    href: {
      live: "https://vishwateja231.github.io/CEW-Network/",
      github: "https://github.com/vishwateja231/CEW-Network",
    },
    logo: "",
    image: "/assets/projects/cew-network.png",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  { name: "GitHub", href: "https://github.com/vishwateja231", icon: "/assets/logos/github.svg" },
  { name: "LinkedIn", href: "https://linkedin.com/in/vishwateja2345", icon: "/assets/socials/linkedIn.svg" },
  { name: "Instagram", href: "https://instagram.com/_vishwateja", icon: "/assets/socials/instagram.svg" },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "CodeClause",
    date: "Mar 2025",
    contents: [
      "Built Connectfy — a real-time chat and video calling application using React, Express, MongoDB, and Stream APIs.",
      "Implemented JWT-based authentication with protected routes and scalable backend architecture.",
      "Designed a fully responsive UI with Tailwind CSS and Zustand for global state management.",
      "Developed real-time messaging with typing indicators, reactions, 1-on-1 and group video calls with screen sharing and recording.",
      "Shipped 32 unique UI themes and comprehensive error handling across frontend and backend.",
    ],
    highlight: "⭐ 100+ GitHub Stars",
    links: {
      live: "https://connectfy-fty3.onrender.com/",
      github: "https://github.com/vishwateja231/connectfy",
    },
  },
  {
    title: "Data Science Intern",
    job: "National Small Industries Corporation (NSIC)",
    date: "Jul 2023",
    contents: [
      "Built and deployed a house price prediction model achieving >92% accuracy using ensemble methods.",
      "Performed end-to-end data preprocessing, feature engineering, and exploratory data analysis on 10K+ records.",
      "Applied hyperparameter tuning (GridSearchCV, RandomizedSearchCV) and k-fold cross-validation for robust model evaluation.",
      "Identified key pricing drivers including location, square footage, and amenity scores through feature importance analysis.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
