import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Products", href: "#products" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Contact", href: "#contact" },
];

const Section = ({ id, label, title, children }) => (
  <section
    id={id}
    className="max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-14 border-b border-slate-800/70 scroll-mt-24"
  >
    <motion.div
      className="flex items-center gap-3 mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp(0.05)}
    >
      <span className="h-px w-10 bg-primary/70" />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
          {label}
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mt-1">
          {title}
        </h2>
      </div>
    </motion.div>
    {children}
  </section>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-slate-700/80">
    {children}
  </span>
);

const ProjectCard = ({
  badge,
  title,
  subtitle,
  live,
  github,
  overview,
  bullets,
  stack,
  value,
  delay = 0,
}) => (
  <motion.article
    variants={fadeUp(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-lg shadow-primary/10 p-5 md:p-7"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/12 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="relative flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-primary/15 text-primary border border-primary/40">
            {badge}
          </span>
          {subtitle && (
            <span className="text-[11px] text-slate-400">{subtitle}</span>
          )}
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-slate-50">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        {live && (
          <motion.a
            href={live}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -1,
              boxShadow: "0 16px 40px rgba(79,70,229,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-1 rounded-full bg-primary text-white px-3 py-1 font-medium shadow-md shadow-primary/40"
          >
            <span>Live</span>
            <span>↗</span>
          </motion.a>
        )}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 text-slate-100 px-3 py-1 font-medium border border-slate-600/70 hover:border-primary/70 hover:text-primary"
          >
            <span>Code</span>
            <span>◇</span>
          </motion.a>
        )}
      </div>
    </div>

    <p className="relative text-sm md:text-[15px] text-slate-200 mb-3">
      {overview}
    </p>

    {bullets && bullets.length > 0 && (
      <ul className="relative list-disc list-inside space-y-1.5 text-sm text-slate-300 mb-3">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}

    {stack && (
      <p className="relative text-[13px] text-slate-400 mb-1">
        <span className="font-semibold text-slate-200">Tech Stack: </span>
        {stack}
      </p>
    )}
    {value && (
      <p className="relative text-[13px] text-emerald-400 mt-1">{value}</p>
    )}
  </motion.article>
);

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (href) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:uzainmohid@gmail.com";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),transparent_55%)]" />
      </div>

      {/* Header with animated navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo + name */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45 } }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/40 blur-md opacity-70" />
              <div className="relative h-10 w-10 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center text-lg font-semibold text-primary">
                U
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-slate-100">
                UZAIN MOHID
              </p>
              <p className="text-[11px] text-slate-400">
                Product Engineer · Full‑Stack · AI Systems · Data Analytics
              </p>
            </div>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative group hover:text-primary transition-colors"
              >
                <span>{link.label}</span>
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            {/* Highlighted business email CTA */}
            <motion.button
              onClick={handleEmailClick}
              whileHover={{
                y: -1,
                boxShadow: "0 16px 40px rgba(79,70,229,0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 inline-flex items-center rounded-full bg-primary px-4 py-2 text-[11px] font-semibold text-white shadow-md shadow-primary/40"
            >
              📧 Business: uzainmohid@gmail.com
            </motion.button>
          </nav>

          {/* Mobile burger + email icon */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              className="rounded-full border border-primary/60 bg-primary/10 px-3 py-1 text-[11px] text-primary font-semibold"
            >
              Email
            </motion.button>

            <motion.button
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle navigation"
              whileTap={{ scale: 0.9 }}
              className="relative h-9 w-9 rounded-xl border border-slate-700 bg-slate-900/80 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`h-[2px] w-4 rounded-full bg-slate-100 transition-transform ${
                  mobileOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-4 rounded-full bg-slate-100 transition-opacity ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-4 rounded-full bg-slate-100 transition-transform ${
                  mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile nav overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-md"
            >
              <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.06 * idx },
                    }}
                    className="text-left text-slate-200 py-1 hover:text-primary"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={handleEmailClick}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.06 * navLinks.length },
                  }}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-md shadow-primary/40"
                >
                  📧 Business: uzainmohid@gmail.com
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <main className="pb-16">
        <section className="max-w-6xl mx-auto px-4 lg:px-6 pt-10 lg:pt-14 pb-8">
          <div className="grid lg:grid-cols-[3fr,2.2fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(0.05)}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary/80 mb-3">
                🚀 Product Engineer · Full‑Stack · AI Systems · Data Analytics
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-50 leading-tight mb-4">
                Building and shipping
                <span className="text-primary"> intelligent web products</span>.
              </h1>
              <p className="text-sm md:text-base text-slate-300 mb-4 max-w-xl">
                “I always ship products that solve real problems.” From idea →
                architecture → development → deployment, with full product
                ownership and a business‑first mindset.
              </p>

              <div className="flex flex-wrap gap-3 mb-5">
                <motion.button
                  onClick={() => scrollTo("#products")}
                  whileHover={{
                    y: -1,
                    boxShadow: "0 18px 45px rgba(79,70,229,0.4)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/40"
                >
                  View products
                  <span className="ml-1.5 text-[13px]">↗</span>
                </motion.button>
                <motion.button
                  onClick={() => scrollTo("#contact")}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-primary/70 hover:text-primary"
                >
                  Hire for your product
                </motion.button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-slate-300">
                    📧{" "}
                    <button
                      onClick={handleEmailClick}
                      className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
                    >
                      uzainmohid@gmail.com
                    </button>
                  </p>
                  <p className="text-slate-300">
                    🔗{" "}
                    <a
                      href="https://github.com/uzainmohid"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      github.com/uzainmohid
                    </a>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag>Product‑focused</Tag>
                  <Tag>AI‑driven</Tag>
                  <Tag>Data‑informed</Tag>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            >
              <div className="absolute -top-8 -right-10 h-40 w-40 bg-primary/30 blur-3xl opacity-70" />
              <div className="relative rounded-3xl border border-slate-800 bg-slate-950/80 p-5 md:p-6 shadow-xl shadow-primary/25">
                <p className="text-[11px] font-semibold text-slate-400 mb-2">
                  Snapshot
                </p>
                <p className="text-sm md:text-[15px] text-slate-200 mb-3">
                  Product‑focused full‑stack engineer shipping AI‑powered web
                  applications, data platforms, and business websites end‑to‑end.
                </p>
                <p className="text-sm md:text-[15px] text-slate-300 mb-4">
                  I don’t just write code. I design solutions, ship products, and
                  optimize for real‑world usage.
                </p>
                <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-100">
                      Product strengths
                    </p>
                    <p>AI‑powered UX</p>
                    <p>Business‑driven decisions</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-100">Stack</p>
                    <p>React · Flask · SQL</p>
                    <p>Netlify · GitHub</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <Section id="about" label="About" title="👋 About">
          <motion.div
            className="space-y-3 text-sm md:text-[15px] text-slate-300 max-w-3xl"
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              I am a product‑focused full‑stack engineer who builds and ships
              AI‑powered web applications, data platforms, and business websites
              end‑to‑end.
            </p>
            <p>
              From idea → architecture → development → deployment, I take full
              ownership of products. My work blends clean frontend experiences,
              scalable backend systems, AI/ML logic, and data‑driven insights —
              built with real users and business impact in mind.
            </p>
            <p>
              I don’t just write code. I design solutions, ship products, and
              optimize for real‑world usage.
            </p>
          </motion.div>
        </Section>

        {/* Expertise */}
        <Section id="skills" label="Expertise" title="🧠 Technical Expertise">
          <motion.div
            className="grid md:grid-cols-2 gap-8 text-sm md:text-[15px]"
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-5">
              <div>
                <h3 className="text-slate-100 font-semibold mb-1.5">
                  Frontend Engineering
                </h3>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>React.js (component‑driven architecture, state handling)</li>
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>Responsive & mobile‑first UI</li>
                  <li>Clean UI systems for products & businesses</li>
                </ul>
              </div>

              <div>
                <h3 className="text-slate-100 font-semibold mb-1.5">
                  Backend & APIs
                </h3>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Flask (Python) backend development</li>
                  <li>REST API design & integration</li>
                  <li>Business logic & data flow</li>
                  <li>Secure data handling concepts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-slate-100 font-semibold mb-1.5">
                  AI & Machine Learning Logic
                </h3>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>ML‑based expense classification logic</li>
                  <li>Intelligent categorization systems</li>
                  <li>Prompt engineering & AI workflows</li>
                  <li>AI‑powered business automation concepts</li>
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-slate-100 font-semibold mb-1.5">
                  Data & Analytics
                </h3>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>SQL (queries, aggregations, joins)</li>
                  <li>Analytics dashboards</li>
                  <li>Expense, sales & business data modeling</li>
                  <li>Insight‑driven reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-slate-100 font-semibold mb-1.5">
                  DevOps & Deployment
                </h3>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Git & GitHub</li>
                  <li>Netlify (frontend deployment)</li>
                  <li>API‑based backend deployment</li>
                  <li>Product‑ready release mindset</li>
                </ul>
              </div>

              <div>
                <h3 className="text-slate-100 font-semibold mb-1.5">Tools</h3>
                <ul className="text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>n8n (workflow automation)</li>
                  <li>GitHub Actions (basic)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* Products */}
        <Section id="products" label="Products" title="🏗️ Products I’ve Built">
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              delay={0.05}
              badge="Full‑Stack · AI · Data Product"
              title="AI Smart Expense Tracker"
              subtitle="Production‑ready financial product"
              live="https://ai-smart-expenses-tracker.netlify.app/"
              github="https://github.com/uzainmohid/smart-expense-tracker"
              overview="A full‑stack AI‑powered expense management product that helps users track spending, automatically categorize expenses using ML logic, and visualize financial behavior in real time."
              bullets={[
                "AI/ML‑based expense categorization",
                "React‑based interactive UI",
                "Flask‑powered backend APIs",
                "Expense data storage & processing",
                "Visual spending insights & summaries",
                "Real‑world business logic implementation",
              ]}
              stack="Frontend: React.js, JavaScript, HTML, CSS · Backend: Flask (Python), REST APIs · AI/ML: Expense classification logic, intelligent rules · Deployment: Netlify + API services"
              value="Demonstrates full product ownership and AI + backend + frontend integration. Built as a real financial product, not a demo."
            />

            <ProjectCard
              delay={0.1}
              badge="Data · Analytics · Business Intelligence"
              title="Ecommerce Analytics Dashboard"
              github="https://github.com/uzainmohid/Ecommerce-Analytics-Dashboard"
              overview="A data‑driven ecommerce analytics platform that transforms raw sales data into clear, actionable business insights."
              bullets={[
                "Sales performance analytics",
                "Customer behavior insights",
                "KPI visualization dashboards",
                "Data‑to‑decision workflows",
              ]}
              stack="JavaScript · data processing logic · analytics & visualization patterns"
              value="Built with business owners in mind, focused on decision‑making — not just charts."
            />

            <ProjectCard
              delay={0.15}
              badge="Service · Community · Trust‑Driven Product"
              title="Uzain Hajj Community Platform"
              live="https://uzainhajjcommunity.netlify.app/"
              overview="A community‑centric web platform providing clear, accessible information for Hajj & Umrah services, with a strong focus on trust, clarity, and usability."
              bullets={[
                "Service‑oriented UX",
                "Mobile‑friendly design",
                "Community‑focused information architecture",
              ]}
              stack="HTML, CSS, JavaScript · Netlify deployment"
            />

            <ProjectCard
              delay={0.2}
              badge="Brand · Business · UI"
              title="Moon Biryani — Digital Restaurant Presence"
              live="https://moonbiryani.netlify.app/"
              overview="A modern restaurant website built to showcase brand identity, menu storytelling, and customer engagement for a food business."
              bullets={[
                "Business‑first UI design",
                "Responsive layout",
                "Production‑ready deployment",
              ]}
              stack="HTML, CSS, JavaScript · Netlify"
            />
          </motion.div>
        </Section>

        {/* How I Work */}
        <Section id="how-i-work" label="Process" title="🧩 How I Work">
          <motion.div
            className="grid md:grid-cols-[1.7fr,1.3fr] gap-8 text-sm md:text-[15px]"
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <ul className="list-disc list-inside space-y-2.5 text-slate-300 mb-4">
                <li>Product‑first mindset</li>
                <li>Clean architecture over hacks</li>
                <li>Rapid iteration & shipping</li>
                <li>Business impact &gt; code complexity</li>
                <li>Clear communication with clients</li>
              </ul>
              <p className="text-slate-200">
                I always ship products that solve real problems.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-[11px] font-semibold text-slate-400 mb-2">
                Typical engagement
              </p>
              <ol className="list-decimal list-inside text-slate-300 space-y-1.5">
                <li>Understand business goals & constraints</li>
                <li>Design product flow & architecture</li>
                <li>Implement frontend, backend & AI logic</li>
                <li>Instrument analytics & iterate</li>
                <li>Ship, monitor, and refine</li>
              </ol>
            </div>
          </motion.div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="Contact" title="🤝 Let’s Build">
          <motion.div
            className="grid md:grid-cols-[2fr,1.4fr] gap-8 text-sm md:text-[15px]"
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-3 text-slate-300 max-w-xl">
              <p>
                If you’re looking to build AI‑powered web applications,
                full‑stack products, analytics dashboards, or business/community
                platforms, I can take your idea from concept to live product.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-primary/80 mb-1">
                  Primary business email
                </p>
                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{
                    y: -1,
                    boxShadow: "0 18px 50px rgba(79,70,229,0.45)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40"
                >
                  📧 uzainmohid@gmail.com
                </motion.button>
              </div>
              <div>
                <p className="text-slate-200">
                  🔗{" "}
                  <a
                    href="https://github.com/uzainmohid"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    github.com/uzainmohid
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </Section>
      </main>

      <footer className="border-t border-slate-800/80 py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} Uzain Mohid · Product Engineer · Always shipping projects that solve real problems.
      </footer>
    </div>
  );
};

export default App;
