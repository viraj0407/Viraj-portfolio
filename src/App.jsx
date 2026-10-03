import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Phone,
  PieChart,
  Rocket,
  Send,
  ServerCog,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const PROFILE = {
  name: "Viraj Chavan",
  headline: "AI / Data Science | Python | SQL | Machine Learning",
  location: "Pune, India",
  email: "virajchavan177@gmail.com",
  phone: "+91 98506 58548",
  github: "https://github.com/viraj0407",
  linkedin: "https://www.linkedin.com/in/viraj-chavan-ba8401327/",
};

const skills = {
  Programming: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  "Data Science": [
    "Pandas",
    "NumPy",
    "SciPy",
    "Exploratory Data Analysis",
    "Statistical Analysis",
    "Feature Engineering",
    "Data Preprocessing",
  ],
  "Machine Learning": [
    "Scikit-learn",
    "Regression",
    "Classification",
    "Random Forest",
    "Gradient Boosting",
    "K-Means Clustering",
    "PCA",
    "Model Evaluation",
    "Hyperparameter Tuning",
    "Cross-Validation",
  ],
  Databases: ["MySQL", "MongoDB"],
  "AI / Emerging": [
    "Generative AI",
    "Prompt Engineering",
    "RAG",
    "LLM Applications",
    "AI-powered Solutions",
  ],
};

const projects = [
  {
    id: "mindwell",
    title: "MindWell AI – Student Wellbeing Score Predictor",
    role: "Machine Learning Developer",
    category: ["Machine Learning", "AI"],
    stack: ["Python", "Pandas", "Scikit-learn", "FastAPI", "HTML", "CSS", "JavaScript", "Render"],
    description:
      "An end-to-end machine learning application that predicts student wellbeing scores using academic, lifestyle, and social-media behavior.",
    metrics: [
      ["4,998", "Records"],
      ["12", "Input Features"],
      ["38", "Engineered Features"],
      ["0.878", "Baseline R²"],
      ["0.886", "Tuned R²"],
      ["50", "RandomizedSearchCV Iterations"],
      ["5-Fold", "Cross Validation"],
    ],
    bullets: [
      "Built an end-to-end ML pipeline using Scikit-learn Pipeline and ColumnTransformer.",
      "Processed 4,998 student records with 12 input features.",
      "Engineered a 38-feature model-ready dataset.",
      "Applied numerical scaling, skewed-feature transformation, ordinal encoding, and one-hot encoding.",
      "Compared 3 regression models.",
      "Random Forest achieved a 0.878 test R², compared with 0.740 R² for Linear Regression.",
      "Optimized the Random Forest pipeline using RandomizedSearchCV with 50 iterations, 5-fold cross-validation, R² scoring, and n_jobs=-1.",
      "Improved test R² from 0.878 to 0.886.",
      "Tuned parameters including number of estimators, maximum depth, minimum samples per split/leaf, and max_features.",
      "Developed a FastAPI REST API with Pydantic validation.",
      "Deployed the application on Render for real-time predictions.",
    ],
    pipeline: [
      ["01", "Raw Data", "Student records enter the workflow."],
      ["02", "Preprocessing", "Clean and prepare numerical and categorical data."],
      ["03", "Feature Engineering", "Create the 38-feature model-ready dataset."],
      ["04", "Encoding", "Apply ordinal and one-hot encoding."],
      ["05", "Scaling", "Transform numerical variables consistently."],
      ["06", "Random Forest", "Train and compare predictive models."],
      ["07", "Tuning", "Optimize with RandomizedSearchCV."],
      ["08", "FastAPI", "Expose validated prediction endpoints."],
      ["09", "Frontend", "Connect the prediction workflow to a web UI."],
      ["10", "Deployment", "Run the application on Render."],
    ],
    links: { github: "#", demo: "#" },
    featured: true,
  },
  {
    id: "hospital",
    title: "Indian Hospital Analysis",
    role: "Data Scientist",
    category: ["Data Science", "Machine Learning"],
    stack: ["Python", "Pandas", "Scikit-learn", "SciPy", "Power BI"],
    description:
      "Analyzed hospital and patient data to identify operational bottlenecks, performance gaps, and patterns associated with patient outcomes.",
    metrics: [
      ["120K+", "Patient Admissions"],
      ["33", "Hospitals"],
      ["0.87", "Length-of-stay R²"],
      ["0.736", "Readmission AUC"],
    ],
    bullets: [
      "Analyzed 120K+ patient admissions across 33 hospitals.",
      "Performed exploratory data analysis and statistical testing.",
      "Developed Gradient Boosting and Random Forest models for length-of-stay and readmission-risk prediction.",
      "Applied K-Means clustering with PCA to segment patients.",
      "Identified concentrated readmission patterns.",
      "Engineered features and interpreted models.",
      "Identified ward type and comorbidity count as important drivers.",
      "Built Python analysis pipelines and dashboards.",
      "Created ROC/PR curves and heatmaps.",
    ],
    links: { github: "#" },
  },
  {
    id: "movies",
    title: "Movie Recommender System",
    role: "Machine Learning Developer",
    category: ["Machine Learning", "AI"],
    stack: ["Python", "Pandas", "Scikit-learn", "NLP", "Streamlit"],
    description:
      "Built a content-based movie recommendation system using movie metadata and similarity-based filtering.",
    metrics: [
      ["4,799", "Movies"],
      ["5+", "Metadata Features"],
      ["3–15", "Recommendations"],
    ],
    bullets: [
      "Built recommendations for a catalog of 4,799 movies.",
      "Used genres, keywords, cast, director, and plot overview.",
      "Transformed 5+ metadata features into representations for similarity-based recommendations.",
      "Implemented content-based filtering.",
      "Built an interactive Streamlit application.",
      "Supported 3–15 recommendations per query.",
      "Tested recommendations across multiple movie selections.",
    ],
    links: { github: "#", demo: "#" },
  },
  {
    id: "airline",
    title: "Airline Performance Analytics Dashboard",
    role: "Data Analyst",
    category: ["Data Analytics"],
    stack: ["Power BI", "Excel"],
    description:
      "Analyzed airline operational data to understand delays, cancellations, passenger traffic, route performance, and time-based trends.",
    metrics: [
      ["50K+", "Operation Records"],
      ["Delay", "Rate KPI"],
      ["Cancellation", "Ratio KPI"],
      ["Route", "Efficiency Indicators"],
    ],
    bullets: [
      "Processed 50K+ airline operation records.",
      "Analyzed flight delays and cancellations.",
      "Analyzed passenger traffic and route patterns.",
      "Engineered delay rate, cancellation ratio, and route-efficiency indicators.",
      "Built interactive Power BI dashboards.",
      "Added slicers and drill-through pages.",
    ],
    links: { github: "#" },
  },
];

const pipeline = [
  ["01", "Problem Definition", "Frame the business or analytical question."],
  ["02", "Data Collection", "Bring together the relevant data sources."],
  ["03", "Data Cleaning", "Resolve quality, missingness, and consistency issues."],
  ["04", "Exploratory Analysis", "Understand distributions, relationships, and patterns."],
  ["05", "Feature Engineering", "Create useful representations for modeling."],
  ["06", "Model Development", "Build and compare appropriate predictive models."],
  ["07", "Evaluation", "Measure performance using suitable validation metrics."],
  ["08", "Hyperparameter Optimization", "Tune models systematically with cross-validation."],
  ["09", "API Integration", "Expose model functionality through an application interface."],
  ["10", "Deployment", "Move the solution into a usable deployed application."],
];

const focusCards = [
  {
    icon: BrainCircuit,
    title: "AI Applications",
    text: "Building practical AI-powered applications using modern LLM technologies.",
  },
  {
    icon: BarChart3,
    title: "Machine Learning",
    text: "Developing, evaluating, optimizing, and deploying predictive models.",
  },
  {
    icon: PieChart,
    title: "Decision Science",
    text: "Using mathematics, statistics, and data to support better business decisions.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    text: "Transforming large datasets into actionable insights through analysis and visualization.",
  },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">VC</span>
        <span>Viraj Chavan</span>
      </a>

      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid" aria-hidden="true">
        <span className="data-node n1" />
        <span className="data-node n2" />
        <span className="data-node n3" />
        <span className="data-node n4" />
        <span className="data-node n5" />
        <span className="data-line l1" />
        <span className="data-line l2" />
        <span className="data-line l3" />
      </div>

      <div className="hero-copy reveal">
        <div className="availability"><span /> Open to opportunities in AI / Data Science</div>
        <span className="eyebrow">AI / DATA SCIENCE • PUNE, INDIA</span>
        <h1>AI &amp; Data Science Professional <em>Building Data-Driven Solutions</em></h1>
        <p className="hero-lede">
          Building practical solutions across machine learning, data analytics, statistical modeling, and AI —
          from data preprocessing and model development to interactive applications and deployment.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">View Projects <ArrowDown size={17} /></a>
          <a className="button secondary" href={PROFILE.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a className="button ghost" href="#contact">Contact Me <ArrowUpRight size={17} /></a>
        </div>

        <div className="hero-tags">
          <span>Python</span><span>SQL</span><span>Machine Learning</span><span>Analytics</span><span>AI</span>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="visual-card">
          <div className="visual-top">
            <span className="status-dot" />
            <span>solution_pipeline.py</span>
            <span className="mono muted">01 / 05</span>
          </div>
          <div className="visual-flow">
            <div className="flow-node"><Code2 /><span>Python</span></div>
            <div className="flow-arrow">→</div>
            <div className="flow-node"><Database /><span>Data</span></div>
            <div className="flow-arrow">→</div>
            <div className="flow-node"><BrainCircuit /><span>ML</span></div>
            <div className="flow-arrow">→</div>
            <div className="flow-node"><Sparkles /><span>AI</span></div>
            <div className="flow-arrow">→</div>
            <div className="flow-node"><BarChart3 /><span>Insights</span></div>
          </div>
          <div className="mini-chart">
            <div className="chart-label"><span>MODEL SIGNAL</span><strong>R² 0.886</strong></div>
            <div className="bars">
              {[38, 51, 46, 66, 61, 79, 72, 92].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}
            </div>
          </div>
          <div className="visual-footer">
            <span><span className="pulse" /> Pipeline active</span>
            <span>Preprocess → Predict</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-shell">
      <SectionHeading eyebrow="01 — ABOUT" title="Analytical thinking, practical delivery." />
      <div className="about-grid">
        <div className="about-copy reveal">
          <p className="lead">
            I am an aspiring Decision Science and AI professional pursuing an MSc in Mathematics &amp; Data Science,
            with a strong foundation in Python, SQL, mathematics, statistics, data analysis, and machine learning.
          </p>
          <p>
            I have experience working with data preprocessing, exploratory analysis, statistical modeling, machine
            learning pipelines, dashboards, and production-oriented ML applications.
          </p>
          <p>
            I am also developing expertise in Generative AI, prompt engineering, RAG, LLM applications, and
            AI-powered solutions, with a strong interest in applying analytical and software skills to enterprise
            AI and decision-science problems.
          </p>
        </div>
        <div className="stat-grid reveal">
          {[
            ["MSc", "Mathematics & Data Science"],
            ["8.18", "CGPA — BSc Computer Science"],
            ["4+", "Data / ML Projects"],
            ["ML + Analytics", "AI"],
          ].map(([value, label]) => (
            <div className="stat-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-shell section-muted">
      <SectionHeading
        eyebrow="02 — TECHNICAL SKILLS"
        title="Tools I use to move from data to decisions."
        text="A practical toolkit across programming, data science, machine learning, databases, and emerging AI."
      />
      <div className="skill-grid">
        {Object.entries(skills).map(([group, items], index) => (
          <div className="skill-card reveal" key={group}>
            <div className="skill-card-head">
              <span className="skill-index">0{index + 1}</span>
              <h3>{group}</h3>
            </div>
            <div className="badges">
              {items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-shell">
      <SectionHeading eyebrow="03 — EXPERIENCE" title="Experience grounded in analytics and engineering." />
      <div className="experience-card reveal">
        <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
        <div className="experience-main">
          <div className="experience-top">
            <div>
              <span className="eyebrow small">DATA ANALYTICS VIRTUAL INTERN</span>
              <h3>Deloitte <span>via Forage</span></h3>
            </div>
            <div className="experience-meta">
              <span>June 2024 – Present</span>
              <span>Pune</span>
            </div>
          </div>
          <p>
            Worked on a data analytics and engineering-oriented project involving large-scale log processing,
            SQL optimization, reporting, and operational monitoring.
          </p>
          <div className="achievement-grid">
            {[
              ["50 GB/day", "Data ingestion from 10+ sources"],
              ["200+", "Business stakeholders reached weekly"],
              ["95%", "Duplicate records reduction during peak loads"],
              ["88%", "Processing-time improvement"],
              ["5", "Background jobs with idempotent processing"],
              ["3", "Runbooks created for operations"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <ul className="bullet-list">
            <li>Built a data ingestion pipeline processing 50 GB of daily logs from 10+ sources and generated summary reports for 200+ business stakeholders weekly.</li>
            <li>Implemented 5 background jobs with idempotent processing, enabling safe retries and reducing duplicate records by 95% during peak loads.</li>
            <li>Optimized SQL queries and batch writes, reducing end-to-end processing time from 4 hours to 45 minutes — an 88% improvement.</li>
            <li>Created monitoring dashboards for uptime and latency.</li>
            <li>Documented the system and created 3 runbooks, reducing issue-resolution time by 60%.</li>
          </ul>
          <div className="tech-row"><span>Python</span><span>SQL</span><span>Tableau</span><span>Excel</span></div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onDetails }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""} reveal`}>
      <div className="project-card-top">
        <div className="project-role">{project.role}</div>
        <div className="project-number">{project.id === "mindwell" ? "01" : project.id === "hospital" ? "02" : project.id === "movies" ? "03" : "04"}</div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-metrics">
        {project.metrics.slice(0, project.featured ? 5 : 4).map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
      <div className="tech-row">{project.stack.slice(0, 6).map((x) => <span key={x}>{x}</span>)}</div>
      <div className="project-actions">
        <button className="text-button" onClick={() => onDetails(project)}>
          View case study <ChevronRight size={16} />
        </button>
        {project.links.github !== "#" && <a href={project.links.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>}
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close project details" onClick={onClose}><X size={20} /></button>
        <span className="eyebrow">{project.role}</span>
        <h2>{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="modal-metrics">
          {project.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <h4>What I built</h4>
        <ul className="bullet-list">{project.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        <div className="tech-row">{project.stack.map((x) => <span key={x}>{x}</span>)}</div>
        {project.pipeline && (
          <>
            <h4>ML pipeline</h4>
            <div className="modal-pipeline">
              {project.pipeline.map(([n, title, desc]) => (
                <div key={n}><span>{n}</span><strong>{title}</strong><p>{desc}</p></div>
              ))}
            </div>
          </>
        )}
        <div className="modal-actions">
          {project.links.github === "#" ? <span className="link-note">GitHub link placeholder — add the project URL in App.jsx.</span> : <a className="button secondary" href={project.links.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>}
          {project.links.demo === "#" ? <span className="link-note">Demo link placeholder — add the live URL in App.jsx.</span> : <a className="button primary" href={project.links.demo} target="_blank" rel="noreferrer"><ExternalLink size={16}/> Live Demo</a>}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All", "Machine Learning", "Data Science", "Data Analytics", "AI"];
  const filtered = useMemo(
    () => filter === "All" ? projects : projects.filter((p) => p.category.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="section section-shell section-muted">
      <SectionHeading
        eyebrow="04 — FEATURED WORK"
        title="Projects that show the full analytical workflow."
        text="From exploratory analysis to model optimization and deployed applications."
      />
      <div className="filters" role="tablist" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "active" : ""}
            onClick={() => setFilter(category)}
            role="tab"
            aria-selected={filter === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filtered.map((project) => <ProjectCard key={project.id} project={project} onDetails={setSelected} />)}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function Pipeline() {
  return (
    <section className="section section-shell">
      <SectionHeading
        eyebrow="05 — HOW I BUILD"
        title="How I Build Machine Learning Solutions"
        text="A repeatable workflow from problem definition to a deployed, usable solution."
      />
      <div className="pipeline">
        {pipeline.map(([num, title, text], index) => (
          <div className="pipeline-step reveal" key={num}>
            <div className="pipeline-num">{num}</div>
            <div className="pipeline-icon">
              {index < 2 ? <Database /> : index < 5 ? <Layers3 /> : index < 8 ? <BrainCircuit /> : <Rocket />}
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            {index < pipeline.length - 1 && <span className="pipeline-connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section section-shell section-muted">
      <SectionHeading eyebrow="06 — EDUCATION" title="Academic foundation." />
      <div className="education-list">
        <div className="education-card reveal">
          <div className="edu-icon"><GraduationCap /></div>
          <div>
            <span className="eyebrow small">AUGUST 2025 — PRESENT</span>
            <h3>MIT World Peace University (MIT-WPU)</h3>
            <p className="degree">MSc Mathematics &amp; Data Science</p>
            <p>Pune</p>
            <div className="edu-tags">
              {["Mathematics", "Statistics", "Data Science", "Machine Learning", "AI"].map((x) => <span key={x}>{x}</span>)}
            </div>
          </div>
        </div>
        <div className="education-card reveal">
          <div className="edu-icon"><GraduationCap /></div>
          <div>
            <span className="eyebrow small">AUGUST 2022 — AUGUST 2025</span>
            <h3>Dr. D. Y. Patil ACS College, Akurdi</h3>
            <p className="degree">BSc Computer Science</p>
            <p>Pune</p>
            <div className="cgpa">8.18 <span>CGPA</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Exploring() {
  return (
    <section className="section section-shell">
      <SectionHeading
        eyebrow="07 — CURRENTLY EXPLORING"
        title="Building toward enterprise AI and decision science."
        text="These are areas I am developing expertise in, not claims of production experience."
      />
      <div className="exploring-grid">
        {["Generative AI", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "LLM Applications", "AI Agents", "AI-powered Enterprise Solutions", "Decision Science"].map((item, i) => (
          <div className="explore-card reveal" key={item}>
            <span>0{i + 1}</span><strong>{item}</strong><ArrowUpRight size={16} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section className="section section-shell section-muted">
      <SectionHeading eyebrow="08 — PROFESSIONAL FOCUS" title="What I Want to Build" />
      <div className="focus-grid">
        {focusCards.map(({ icon: Icon, title, text }) => (
          <div className="focus-card reveal" key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section section-shell contact-section">
      <div className="contact-wrap reveal">
        <div className="contact-copy">
          <span className="eyebrow">09 — CONTACT</span>
          <h2>Let's Build Something <em>Data-Driven.</em></h2>
          <p>Interested in machine learning, AI, data science, or analytics? I'd be happy to connect.</p>
          <div className="contact-details">
            <a href={`mailto:${PROFILE.email}`}><Mail size={18} /> {PROFILE.email}</a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}><Phone size={18} /> {PROFILE.phone}</a>
            <span><Network size={18} /> {PROFILE.location}</span>
          </div>
          <div className="social-actions">
            <a className="button secondary" href={`mailto:${PROFILE.email}`}><Mail size={16} /> Email Me</a>
            <a className="button secondary" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a className="button secondary" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><Terminal size={18} /><span>send_message()</span></div>
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
          <label>Message<textarea required name="message" rows="5" placeholder="Tell me what you'd like to discuss..." /></label>
          <button className="button primary" type="submit"><Send size={16} /> {sent ? "Message ready" : "Send Message"}</button>
          {sent && <p className="form-note"><CheckCircle2 size={16} /> Form UI is ready. Connect it to your preferred email/API service before production.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div><strong>Viraj Chavan</strong><span>AI / Data Science | Python | SQL | Machine Learning</span></div>
      <a href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
      <span>© {new Date().getFullYear()} Viraj Chavan</span>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Pipeline />
        <Education />
        <Exploring />
        <Focus />
        <Contact />
      </main>
      <Footer />
      <a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
    </div>
  );
}