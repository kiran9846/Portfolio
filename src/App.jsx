import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const makeIcon = (symbol) => function Icon({ size = 18, className = "" }) {
  return (
    <span
      className={`inline-grid place-items-center leading-none ${className}`}
      style={{ width: size, height: size, fontSize: Math.max(12, size * 0.8) }}
      aria-hidden="true"
    >
      {symbol}
    </span>
  );
};

const Github = makeIcon("⌘");
const Linkedin = makeIcon("in");
const Mail = makeIcon("✉");
const Phone = makeIcon("☎");
const MapPin = makeIcon("⌖");
const ExternalLink = makeIcon("↗");
const Download = makeIcon("↓");
const Plus = makeIcon("+");
const Pencil = makeIcon("✎");
const Trash2 = makeIcon("×");
const Save = makeIcon("✓");
const X = makeIcon("×");
const GraduationCap = makeIcon("▣");
const BarChart3 = makeIcon("▥");
const Cpu = makeIcon("▦");
const ShieldCheck = makeIcon("◆");
const Trophy = makeIcon("★");
const BriefcaseBusiness = makeIcon("▤");
const Sparkles = makeIcon("✦");
const RotateCcw = makeIcon("↺");
const FileDown = makeIcon("⇩");
const FileUp = makeIcon("⇧");
const Search = makeIcon("⌕");
const ChevronRight = makeIcon("›");
const Database = makeIcon("◉");
const LineChart = makeIcon("⌁");
const Code2 = makeIcon("{ }");
const Award = makeIcon("◇");

const STORAGE_KEY = "kiran-portfolio-v1";

const defaultData = {
  profile: {
    name: "Kiran Thapa Chhetri",
    title: "Data Science & Managerial Economics Graduate",
    tagline:
      "Building machine learning pipelines, financial analytics systems, and data-driven tools that turn complex datasets into practical decisions.",
    email: "tkiran@vt.edu",
    phone: "+1 (410) 972-6119",
    location: "Blacksburg, VA",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    resumeUrl: "#",
    headshot:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },
  about:
    "I am a Data Science and Managerial Economics graduate from Virginia Tech focused on machine learning, predictive analytics, quant finance, and risk modeling. My work combines statistical modeling, production-style ML pipelines, and business interpretation so technical results can support real decisions.",
  education: {
    school: "Virginia Polytechnic Institute and State University",
    degree: "B.S. in Data Science and Managerial Economics",
    dates: "Aug 2022 – May 2026",
    location: "Blacksburg, VA",
    coursework:
      "Big Data Analysis, Applied Econometrics, Forecasting, Data Science for Quant Finance, Machine Learning, Statistics & Data Visualization, Parallel Programming, Data Structures & Algorithms, Math Modeling",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop",
  },
  stats: [
    { label: "Out-of-sample Sharpe", value: "1.036" },
    { label: "Buy-signal precision", value: "59%" },
    { label: "K-Means speedup", value: "10x" },
    { label: "Records analyzed", value: "1M+" },
  ],
  skills: {
    "Programming Languages": ["Python", "R", "Java", "C", "C++", "JavaScript", "SQL", "Stata"],
    "ML & Data Libraries": [
      "Scikit-learn",
      "XGBoost",
      "HMM",
      "GARCH",
      "MLflow",
      "SHAP",
      "NumPy",
      "Pandas",
      "TensorFlow",
    ],
    Tools: ["Tableau", "Streamlit", "Optuna", "GitHub", "Power BI", "Excel"],
    "Core Competencies": [
      "Data Manipulation",
      "Data Cleaning",
      "ETL",
      "Statistical Analysis",
      "Risk Modeling",
      "Parallel Computing",
      "CUDA",
    ],
  },
  projects: [
    {
      id: crypto.randomUUID(),
      title: "Regime Switching Alpha Model",
      year: "2026",
      category: "Quant Finance / Machine Learning",
      tech: "Python, XGBoost, HMM, GARCH, MLflow, Streamlit, SHAP",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1400&auto=format&fit=crop",
      summary:
        "A multi-factor alpha pipeline that combines HMM regime detection, XGBoost directional signals, and GARCH volatility scaling for risk-aware trading decisions.",
      bullets: [
        "Engineered a multi-factor alpha pipeline on 2,300+ observations, achieving an out-of-sample Sharpe of 1.036 versus a 0.965 benchmark.",
        "Deployed walk-forward XGBoost with Optuna tuning, reaching 59% buy-signal precision and real-time monitoring through a Streamlit dashboard.",
        "Reduced maximum drawdown from 18.9% to 8.9% using inverse-volatility position sizing and automatic exposure control during high-volatility regimes.",
      ],
      demo: "#",
      code: "#",
      featured: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Box Office Revenue Prediction",
      year: "2025",
      category: "Predictive Analytics",
      tech: "Python, Scikit-learn, Pandas, OLS Regression",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1400&auto=format&fit=crop",
      summary:
        "A movie revenue analysis pipeline that merges large-scale film datasets and identifies the strongest drivers of box office performance.",
      bullets: [
        "Merged 1M+ TMDB/IMDB records and normalized box office revenue across 100 years using CPI inflation adjustments.",
        "Built a multivariable OLS pipeline showing Budget and Popularity as dominant revenue drivers, explaining 62% of box office variance.",
        "Translated regression findings into practical investment insights for strategic budget allocation and audience-awareness planning.",
      ],
      demo: "#",
      code: "#",
      featured: true,
    },
    {
      id: crypto.randomUUID(),
      title: "GPU K-Means Clustering",
      year: "2024",
      category: "Parallel Computing",
      tech: "CUDA, C, Google Colab, Parallel Programming",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
      summary:
        "A CUDA-accelerated clustering tool designed to speed up large-scale clustering for business intelligence and analytics workflows.",
      bullets: [
        "Designed and optimized a CUDA-based K-Means algorithm, achieving a 10x speedup on datasets with 1M+ entries.",
        "Engineered parallel CUDA kernels for centroid updates and cluster assignments to improve analysis speed.",
        "Built a user-friendly interface for non-technical users, reducing onboarding time by 30%.",
      ],
      demo: "#",
      code: "#",
      featured: false,
    },
  ],
  hackathons: [
    {
      id: crypto.randomUUID(),
      title: "Fraud Detection & Transaction Risk Analytics",
      sponsor: "Deloitte Data Driven Series",
      year: "2026",
      tech: "Python, Isolation Forest, Logistic Regression, Tableau",
      summary:
        "Built a fraud risk analytics model to flag the top 5% suspicious transactions using 7+ engineered risk features and a 0.30 fraud threshold.",
    },
    {
      id: crypto.randomUUID(),
      title: "LobbyLink",
      sponsor: "Marriott CodeFest",
      year: "2025",
      tech: "Machine Learning, Adaptive K-Means, Web App Design",
      summary:
        "Developed a Marriott-focused travel networking app that matches solo travelers by shared interests, supported by market analysis of the solo travel industry.",
    },
    {
      id: crypto.randomUUID(),
      title: "Nonprofit Expansion Site Selection Model",
      sponsor: "JP Morgan Data For Good",
      year: "2022",
      tech: "SQL, HUD Data, Census Data, Nearest Neighbors",
      summary:
        "Analyzed HUD and Census records to identify cities similar to Columbus, Ohio, improving nonprofit homeless youth outreach targeting by 20%.",
    },
  ],
  certifications: [
    {
      id: crypto.randomUUID(),
      title: "Add your first certification",
      issuer: "Example: Google, IBM, Microsoft, AWS, Coursera",
      date: "2026",
      credentialUrl: "#",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1400&auto=format&fit=crop",
      description:
        "Use the Edit Site button to replace this placeholder with a real certification, credential link, and completion date.",
    },
  ],
};

function loadPortfolio() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultData;
  } catch {
    return defaultData;
  }
}

function downloadJson(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "kiran-portfolio-content.json";
  a.click();
  URL.revokeObjectURL(url);
}

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" },
};

function SectionLabel({ icon: Icon, eyebrow, title, subtitle }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
        <Icon size={16} />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 shadow-sm">
      {children}
    </span>
  );
}

function ButtonLink({ href, children, variant = "primary", icon: Icon }) {
  const classes =
    variant === "primary"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <a
      href={href || "#"}
      target={href && href !== "#" && !href.startsWith("mailto:") && !href.startsWith("tel:") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition ${classes}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </a>
  );
}

function ProjectCard({ project, onEdit, onDelete, editable }) {
  return (
    <motion.article
      layout
      {...fadeUp}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-cyan-950/20 backdrop-blur"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur">
          {project.year}
        </div>
        {project.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
            Featured
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-cyan-200">
          <BarChart3 size={16} />
          <span>{project.category}</span>
        </div>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>
        <p className="mt-4 text-sm font-medium text-slate-400">{project.tech}</p>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
          {(project.bullets || []).map((bullet, idx) => (
            <li key={idx} className="flex gap-3">
              <ChevronRight className="mt-1 shrink-0 text-cyan-300" size={16} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={project.demo} variant="primary" icon={ExternalLink}>
            View Demo
          </ButtonLink>
          <ButtonLink href={project.code} variant="ghost" icon={Github}>
            View Code
          </ButtonLink>
          {editable && (
            <>
              <button
                onClick={() => onEdit(project)}
                className="inline-flex items-center gap-2 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-300/20"
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="inline-flex items-center gap-2 rounded-2xl border border-rose-300/30 bg-rose-300/10 px-4 py-3 text-sm font-semibold text-rose-100 hover:bg-rose-300/20"
              >
                <Trash2 size={16} /> Delete
              </button>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function CertificationCard({ cert, editable, onEdit, onDelete }) {
  return (
    <motion.article
      layout
      {...fadeUp}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl backdrop-blur"
    >
      <img src={cert.image} alt={cert.title} className="h-44 w-full object-cover" />
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-cyan-200">
          <Award size={16} /> {cert.date}
        </div>
        <h3 className="text-xl font-bold text-white">{cert.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
        <p className="mt-4 leading-6 text-slate-300">{cert.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href={cert.credentialUrl} icon={ExternalLink} variant="ghost">
            Credential
          </ButtonLink>
          {editable && (
            <>
              <button
                onClick={() => onEdit(cert)}
                className="inline-flex items-center gap-2 rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-300/20"
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                onClick={() => onDelete(cert.id)}
                className="inline-flex items-center gap-2 rounded-2xl border border-rose-300/30 bg-rose-300/10 px-4 py-3 text-sm font-semibold text-rose-100 hover:bg-rose-300/20"
              >
                <Trash2 size={16} /> Delete
              </button>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function TextInput({ label, value, onChange, placeholder, multiline = false }) {
  const base =
    "mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300";
  return (
    <label className="block text-sm font-medium text-slate-200">
      {label}
      {multiline ? (
        <textarea
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={base}
        />
      ) : (
        <input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

function EditorModal({ mode, initial, onSave, onClose }) {
  const emptyProject = {
    id: crypto.randomUUID(),
    title: "",
    year: "2026",
    category: "",
    tech: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
    summary: "",
    bullets: [""],
    demo: "#",
    code: "#",
    featured: false,
  };

  const emptyCert = {
    id: crypto.randomUUID(),
    title: "",
    issuer: "",
    date: "",
    credentialUrl: "#",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop",
    description: "",
  };

  const [item, setItem] = useState(initial || (mode === "project" ? emptyProject : emptyCert));

  const update = (key, value) => setItem((prev) => ({ ...prev, [key]: value }));
  const updateBullet = (idx, value) =>
    setItem((prev) => ({
      ...prev,
      bullets: prev.bullets.map((b, i) => (i === idx ? value : b)),
    }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 backdrop-blur"
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Editor</p>
              <h3 className="text-2xl font-bold text-white">
                {initial ? "Edit" : "Add"} {mode === "project" ? "Project" : "Certification"}
              </h3>
            </div>
            <button onClick={onClose} className="rounded-full bg-white/10 p-3 text-white hover:bg-white/15">
              <X size={20} />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <TextInput label="Title" value={item.title} onChange={(v) => update("title", v)} />
            <TextInput label={mode === "project" ? "Year" : "Date"} value={mode === "project" ? item.year : item.date} onChange={(v) => update(mode === "project" ? "year" : "date", v)} />
            {mode === "project" ? (
              <>
                <TextInput label="Category" value={item.category} onChange={(v) => update("category", v)} />
                <TextInput label="Tech Stack" value={item.tech} onChange={(v) => update("tech", v)} />
                <TextInput label="Demo Link" value={item.demo} onChange={(v) => update("demo", v)} />
                <TextInput label="Code Link" value={item.code} onChange={(v) => update("code", v)} />
              </>
            ) : (
              <>
                <TextInput label="Issuer" value={item.issuer} onChange={(v) => update("issuer", v)} />
                <TextInput label="Credential URL" value={item.credentialUrl} onChange={(v) => update("credentialUrl", v)} />
              </>
            )}
            <div className="md:col-span-2">
              <TextInput label="Image URL" value={item.image} onChange={(v) => update("image", v)} />
            </div>
            <div className="md:col-span-2">
              <TextInput
                label={mode === "project" ? "Project Summary" : "Description"}
                value={mode === "project" ? item.summary : item.description}
                onChange={(v) => update(mode === "project" ? "summary" : "description", v)}
                multiline
              />
            </div>
            {mode === "project" && (
              <div className="md:col-span-2">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-200">Impact bullets</span>
                  <button
                    onClick={() => setItem((prev) => ({ ...prev, bullets: [...prev.bullets, ""] }))}
                    className="rounded-xl bg-cyan-400 px-3 py-2 text-xs font-bold text-slate-950"
                  >
                    Add bullet
                  </button>
                </div>
                <div className="space-y-3">
                  {(item.bullets || []).map((bullet, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        value={bullet}
                        onChange={(e) => updateBullet(idx, e.target.value)}
                        className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
                      />
                      <button
                        onClick={() =>
                          setItem((prev) => ({
                            ...prev,
                            bullets: prev.bullets.filter((_, i) => i !== idx),
                          }))
                        }
                        className="rounded-2xl bg-rose-400/10 px-3 text-rose-100 hover:bg-rose-400/20"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <label className="mt-4 flex items-center gap-3 text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={!!item.featured}
                    onChange={(e) => update("featured", e.target.checked)}
                    className="h-4 w-4 accent-cyan-400"
                  />
                  Mark as featured project
                </label>
              </div>
            )}
          </div>

          <div className="mt-7 flex justify-end gap-3">
            <button onClick={onClose} className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10">
              Cancel
            </button>
            <button
              onClick={() => onSave(item)}
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              <Save size={18} /> Save
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function SiteEditor({ data, setData }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(data);
  const [skillText, setSkillText] = useState(JSON.stringify(data.skills, null, 2));

  useEffect(() => {
    setDraft(data);
    setSkillText(JSON.stringify(data.skills, null, 2));
  }, [data]);

  const updateProfile = (key, value) => setDraft((prev) => ({ ...prev, profile: { ...prev.profile, [key]: value } }));
  const updateEducation = (key, value) => setDraft((prev) => ({ ...prev, education: { ...prev.education, [key]: value } }));

  const saveAll = () => {
    try {
      const parsedSkills = JSON.parse(skillText);
      const next = { ...draft, skills: parsedSkills };
      setData(next);
      setOpen(false);
    } catch {
      alert("Skills must be valid JSON. Keep the same format shown in the text box.");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-4 text-sm font-black text-slate-950 shadow-2xl shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-300"
      >
        <Pencil size={18} /> Edit Site
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              className="ml-auto h-full max-w-4xl overflow-auto rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
            >
              <div className="sticky top-0 z-10 mb-6 flex items-center justify-between gap-4 border-b border-white/10 bg-slate-900/95 pb-5 backdrop-blur">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Content Manager</p>
                  <h2 className="text-2xl font-bold text-white">Edit your portfolio content</h2>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-full bg-white/10 p-3 text-white hover:bg-white/15">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-10">
                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><BriefcaseBusiness size={20} /> Profile</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <TextInput label="Name" value={draft.profile.name} onChange={(v) => updateProfile("name", v)} />
                    <TextInput label="Title" value={draft.profile.title} onChange={(v) => updateProfile("title", v)} />
                    <TextInput label="Email" value={draft.profile.email} onChange={(v) => updateProfile("email", v)} />
                    <TextInput label="Phone" value={draft.profile.phone} onChange={(v) => updateProfile("phone", v)} />
                    <TextInput label="Location" value={draft.profile.location} onChange={(v) => updateProfile("location", v)} />
                    <TextInput label="LinkedIn URL" value={draft.profile.linkedin} onChange={(v) => updateProfile("linkedin", v)} />
                    <TextInput label="GitHub URL" value={draft.profile.github} onChange={(v) => updateProfile("github", v)} />
                    <TextInput label="Resume URL" value={draft.profile.resumeUrl} onChange={(v) => updateProfile("resumeUrl", v)} />
                    <div className="md:col-span-2">
                      <TextInput label="Tagline" value={draft.profile.tagline} onChange={(v) => updateProfile("tagline", v)} multiline />
                    </div>
                    <TextInput label="Profile / Headshot Image URL" value={draft.profile.headshot} onChange={(v) => updateProfile("headshot", v)} />
                    <TextInput label="Hero Background Image URL" value={draft.profile.heroImage} onChange={(v) => updateProfile("heroImage", v)} />
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><GraduationCap size={20} /> About & Education</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <TextInput label="About" value={draft.about} onChange={(v) => setDraft((prev) => ({ ...prev, about: v }))} multiline />
                    </div>
                    <TextInput label="School" value={draft.education.school} onChange={(v) => updateEducation("school", v)} />
                    <TextInput label="Degree" value={draft.education.degree} onChange={(v) => updateEducation("degree", v)} />
                    <TextInput label="Dates" value={draft.education.dates} onChange={(v) => updateEducation("dates", v)} />
                    <TextInput label="School Location" value={draft.education.location} onChange={(v) => updateEducation("location", v)} />
                    <TextInput label="School Image URL" value={draft.education.image} onChange={(v) => updateEducation("image", v)} />
                    <div className="md:col-span-2">
                      <TextInput label="Coursework" value={draft.education.coursework} onChange={(v) => updateEducation("coursework", v)} multiline />
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Sparkles size={20} /> Skills JSON</h3>
                  <p className="mb-3 text-sm text-slate-400">Edit the skill groups and arrays. Keep valid JSON format.</p>
                  <textarea
                    value={skillText}
                    onChange={(e) => setSkillText(e.target.value)}
                    rows={12}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-mono text-sm text-white outline-none focus:border-cyan-300"
                  />
                </section>

                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><FileDown size={20} /> Backup / Restore</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => downloadJson(draft)}
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10"
                    >
                      <FileDown size={18} /> Export Content
                    </button>
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10">
                      <FileUp size={18} /> Import Content
                      <input
                        type="file"
                        accept="application/json"
                        className="hidden"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (!file) return;
                          const reader = new FileReader();
                          reader.onload = () => {
                            try {
                              const imported = JSON.parse(String(reader.result));
                              setDraft(imported);
                              setSkillText(JSON.stringify(imported.skills || {}, null, 2));
                            } catch {
                              alert("Could not import this file. Please choose a valid JSON export.");
                            }
                          };
                          reader.readAsText(file);
                        }}
                      />
                    </label>
                    <button
                      onClick={() => {
                        if (confirm("Reset all content back to the resume-based default?")) {
                          setDraft(defaultData);
                          setSkillText(JSON.stringify(defaultData.skills, null, 2));
                        }
                      }}
                      className="inline-flex items-center gap-2 rounded-2xl border border-rose-300/20 bg-rose-300/10 px-5 py-3 font-semibold text-rose-100 hover:bg-rose-300/20"
                    >
                      <RotateCcw size={18} /> Reset Defaults
                    </button>
                  </div>
                </section>
              </div>

              <div className="sticky bottom-0 mt-8 flex justify-end gap-3 border-t border-white/10 bg-slate-900/95 pt-5 backdrop-blur">
                <button onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white hover:bg-white/10">
                  Cancel
                </button>
                <button onClick={saveAll} className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 font-black text-slate-950 hover:bg-cyan-300">
                  <Save size={18} /> Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function PortfolioWebsite() {
  const [data, setDataState] = useState(loadPortfolio);
  const [query, setQuery] = useState("");
  const [editor, setEditor] = useState(null);

  const setData = (next) => {
    setDataState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return data.projects;
    return data.projects.filter((p) =>
      [p.title, p.category, p.tech, p.summary, ...(p.bullets || [])].join(" ").toLowerCase().includes(q)
    );
  }, [data.projects, query]);

  const saveProject = (project) => {
    const exists = data.projects.some((p) => p.id === project.id);
    const projects = exists
      ? data.projects.map((p) => (p.id === project.id ? project : p))
      : [project, ...data.projects];
    setData({ ...data, projects });
    setEditor(null);
  };

  const saveCertification = (cert) => {
    const exists = data.certifications.some((c) => c.id === cert.id);
    const certifications = exists
      ? data.certifications.map((c) => (c.id === cert.id ? cert : c))
      : [cert, ...data.certifications];
    setData({ ...data, certifications });
    setEditor(null);
  };

  const deleteProject = (id) => {
    if (confirm("Delete this project?")) {
      setData({ ...data, projects: data.projects.filter((p) => p.id !== id) });
    }
  };

  const deleteCertification = (id) => {
    if (confirm("Delete this certification?")) {
      setData({ ...data, certifications: data.certifications.filter((c) => c.id !== id) });
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3 font-bold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-400 text-slate-950">KT</span>
            <span className="hidden sm:block">Kiran Thapa</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-200">About</a>
            <a href="#projects" className="hover:text-cyan-200">Projects</a>
            <a href="#skills" className="hover:text-cyan-200">Skills</a>
            <a href="#education" className="hover:text-cyan-200">Education</a>
            <a href="#contact" className="hover:text-cyan-200">Contact</a>
          </div>
          <a href={`mailto:${data.profile.email}`} className="rounded-2xl bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-200">
            Hire Me
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="relative overflow-hidden px-5 pt-32 md:pt-40">
          <div className="absolute inset-0 opacity-20">
            <img src={data.profile.heroImage} alt="Analytics background" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950 to-slate-950" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 pb-24 md:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
                <Sparkles size={16} /> ML Engineering • Financial Data Science • Analytics
              </div>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                {data.profile.name}
              </h1>
              <p className="mt-4 text-2xl font-semibold text-cyan-200 md:text-3xl">{data.profile.title}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{data.profile.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#projects" icon={BarChart3}>Explore Projects</ButtonLink>
                <ButtonLink href={data.profile.resumeUrl} variant="ghost" icon={Download}>Resume</ButtonLink>
                <ButtonLink href={data.profile.linkedin} variant="ghost" icon={Linkedin}>LinkedIn</ButtonLink>
                <ButtonLink href={data.profile.github} variant="ghost" icon={Github}>GitHub</ButtonLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><Mail size={16} /> {data.profile.email}</span>
                <span className="inline-flex items-center gap-2"><Phone size={16} /> {data.profile.phone}</span>
                <span className="inline-flex items-center gap-2"><MapPin size={16} /> {data.profile.location}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/30 to-indigo-500/20 blur-xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                <img src={data.profile.headshot} alt="Portfolio visual" className="h-[28rem] w-full rounded-[2rem] object-cover" />
                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/10 bg-slate-950/75 p-5 backdrop-blur-xl">
                  <p className="text-sm text-slate-300">Current focus</p>
                  <p className="mt-1 text-xl font-bold text-white">Production-grade ML pipelines for finance, risk, and business analytics.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 pb-20">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
            {data.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-xl backdrop-blur"
              >
                <p className="text-4xl font-black text-cyan-200">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <motion.div {...fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-400 text-slate-950">
                <BriefcaseBusiness size={26} />
              </div>
              <h2 className="text-3xl font-bold text-white">About Me</h2>
              <p className="mt-5 leading-8 text-slate-300">{data.about}</p>
            </motion.div>
            <motion.div {...fadeUp} className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <LineChart className="mb-4 text-cyan-200" size={28} />
                <h3 className="font-bold text-white">Financial Modeling</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">Alpha signals, Sharpe, drawdown control, GARCH, and regime-aware backtesting.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <Database className="mb-4 text-cyan-200" size={28} />
                <h3 className="font-bold text-white">Data Pipelines</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">ETL, data fusion, feature engineering, statistical analysis, and dashboarding.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <Cpu className="mb-4 text-cyan-200" size={28} />
                <h3 className="font-bold text-white">Parallel Computing</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">CUDA-based optimization for high-volume clustering and computation-heavy workloads.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="px-5 py-20">
          <SectionLabel
            icon={BarChart3}
            eyebrow="Selected Work"
            title="Projects with measurable impact"
            subtitle="Machine learning, financial modeling, analytics, and parallel computing projects built around clear business or technical outcomes."
          />
          <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects by tech, title, or result..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none backdrop-blur focus:border-cyan-300"
              />
            </div>
            <button
              onClick={() => setEditor({ mode: "project", item: null })}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-300"
            >
              <Plus size={18} /> Add Project
            </button>
          </div>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  editable
                  onEdit={(item) => setEditor({ mode: "project", item })}
                  onDelete={deleteProject}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        <section className="px-5 py-20">
          <SectionLabel
            icon={Trophy}
            eyebrow="Hackathons"
            title="Competitive data projects"
            subtitle="Applied analytics projects built around fraud detection, travel networking, and nonprofit site-selection decisions."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {data.hackathons.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur"
              >
                <p className="text-sm font-semibold text-cyan-200">{item.sponsor} • {item.year}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm font-medium text-slate-400">{item.tech}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="px-5 py-20">
          <SectionLabel
            icon={Code2}
            eyebrow="Technical Toolkit"
            title="Skills that connect modeling with execution"
            subtitle="A practical stack for data engineering, machine learning, statistical analysis, visualization, and deployment."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
            {Object.entries(data.skills).map(([group, skills], idx) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <h3 className="text-xl font-bold text-white">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => <Pill key={skill}>{skill}</Pill>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education" className="px-5 py-20">
          <SectionLabel
            icon={GraduationCap}
            eyebrow="Education"
            title="Virginia Tech foundation"
            subtitle="A combined data science and economics background with coursework across machine learning, econometrics, quantitative finance, and computing."
          />
          <motion.div {...fadeUp} className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur md:grid-cols-[0.9fr_1.1fr]">
            <img src={data.education.image} alt={data.education.school} className="h-full min-h-[22rem] w-full object-cover" />
            <div className="p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">{data.education.dates}</p>
              <h3 className="mt-3 text-3xl font-black text-white">{data.education.school}</h3>
              <p className="mt-3 text-xl font-semibold text-cyan-100">{data.education.degree}</p>
              <p className="mt-3 flex items-center gap-2 text-slate-300"><MapPin size={17} /> {data.education.location}</p>
              <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <h4 className="font-bold text-white">Relevant Coursework</h4>
                <p className="mt-3 leading-7 text-slate-300">{data.education.coursework}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="certifications" className="px-5 py-20">
          <SectionLabel
            icon={ShieldCheck}
            eyebrow="Certifications"
            title="Credentials and continuous learning"
            subtitle="Add verified certificates, online courses, badges, and credentials directly from the website editor."
          />
          <div className="mx-auto mb-8 flex max-w-7xl justify-end">
            <button
              onClick={() => setEditor({ mode: "certification", item: null })}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-300"
            >
              <Plus size={18} /> Add Certification
            </button>
          </div>
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {data.certifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                editable
                onEdit={(item) => setEditor({ mode: "certification", item })}
                onDelete={deleteCertification}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="px-5 py-24">
          <motion.div {...fadeUp} className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-white/[0.04] to-indigo-500/15 p-8 text-center shadow-2xl backdrop-blur md:p-12">
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-cyan-400 text-slate-950">
              <Mail size={30} />
            </div>
            <h2 className="text-3xl font-black text-white md:text-5xl">Let’s build something data-driven.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              I’m interested in ML engineering, data science, analytics, and financial modeling roles where I can build useful predictive systems and communicate results clearly.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href={`mailto:${data.profile.email}?subject=Portfolio%20Inquiry%20for%20Kiran`} icon={Mail}>Email Me</ButtonLink>
              <ButtonLink href={`tel:${data.profile.phone}`} variant="ghost" icon={Phone}>Call</ButtonLink>
              <ButtonLink href={data.profile.linkedin} variant="ghost" icon={Linkedin}>LinkedIn</ButtonLink>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} {data.profile.name}. Built with React, localStorage editing, and animated portfolio sections.</p>
      </footer>

      <SiteEditor data={data} setData={setData} />

      {editor?.mode === "project" && (
        <EditorModal
          mode="project"
          initial={editor.item}
          onSave={saveProject}
          onClose={() => setEditor(null)}
        />
      )}
      {editor?.mode === "certification" && (
        <EditorModal
          mode="certification"
          initial={editor.item}
          onSave={saveCertification}
          onClose={() => setEditor(null)}
        />
      )}
    </div>
  );
}
