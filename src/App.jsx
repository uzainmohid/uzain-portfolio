import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  PhoneCall,
  Bot,
  Layers,
  Mic,
  Database,
  Workflow,
} from "lucide-react";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.7, ease: "easeOut" },
  }),
};

/* ---------------- Reusable ---------------- */
const NavLink = ({ href, label }) => (
  <motion.a
    href={href}
    whileHover="hover"
    className="relative text-sm text-slate-300 hover:text-white transition"
  >
    {label}
    <motion.span
      variants={{
        hover: { width: "100%" },
        initial: { width: "0%" },
      }}
      initial="initial"
      className="absolute left-0 -bottom-1 h-[1px] bg-primary"
    />
  </motion.a>
);

const PrimaryButton = ({ href, children }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.96 }}
    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold"
  >
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
    {children}
    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
  </motion.a>
);

const Section = ({ id, label, title, children }) => (
  <section
    id={id}
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 scroll-mt-32"
  >
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 max-w-3xl">
        {title}
      </h2>
    </motion.div>
    {children}
  </section>
);

const Stat = ({ value, label }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-xl border border-slate-800 bg-slate-900/70 p-6"
  >
    <p className="text-2xl font-semibold text-primary">{value}</p>
    <p className="text-xs text-slate-400 mt-1">{label}</p>
  </motion.div>
);

const AutomationCard = ({ icon: Icon, title, desc, impact }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 260 }}
    className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6"
  >
    <Icon className="w-6 h-6 text-primary mb-4 transition group-hover:scale-110" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-slate-300 mb-4">{desc}</p>
    <p className="text-xs text-emerald-400">{impact}</p>
  </motion.div>
);

/* ---------------- App ---------------- */
export default function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 w-full z-50 transition ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <p className="font-semibold tracking-wide">UZAIN MOHID</p>
            <p className="text-xs text-slate-400">
              AI Automation · Operating Systems
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about" label="About" />
            <NavLink href="#automations" label="Automations" />
            <NavLink href="#model" label="Model" />
            <NavLink href="#contact" label="Contact" />
            <PrimaryButton href="#contact">Book Automation</PrimaryButton>
          </nav>

          <button className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="md:hidden backdrop-blur bg-slate-950/90 border-t border-slate-800"
            >
              <div className="flex flex-col gap-6 px-6 py-8 text-sm">
                {["about", "automations", "model", "contact"].map((i) => (
                  <a
                    key={i}
                    href={`#${i}`}
                    onClick={() => setMenu(false)}
                    className="hover:text-primary"
                  >
                    {i.toUpperCase()}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section
        id="about"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-32"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-10%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        </div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl"
        >
          I build AI operating systems that{" "}
          <span className="relative text-primary">
            replace manual work
            <span className="absolute left-0 -bottom-2 h-[6px] w-full bg-primary/20 blur-md" />
          </span>{" "}
          and scale businesses.
        </motion.h1>

        <p className="text-slate-300 max-w-2xl mt-8 text-lg">
          Production-tested automation embedded directly into business
          operations — not tools, not experiments.
        </p>

        <div className="flex flex-wrap gap-6 mt-12">
          <PrimaryButton href="#contact">
            Get automation for your business
          </PrimaryButton>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#automations"
            className="rounded-full border border-slate-700 px-8 py-4 text-sm"
          >
            View systems
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl">
          <Stat value="20+" label="Production automations" />
          <Stat value="8+" label="Industries automated" />
          <Stat value="0%" label="Manual dependency" />
          <Stat value="∞" label="Scalability ceiling" />
        </div>
      </section>

      {/* AUTOMATIONS */}
      <Section
        id="automations"
        label="Automation Systems"
        title="Advanced AI Automations Running Inside Businesses"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AutomationCard
            icon={Layers}
            title="AI Operations OS"
            desc="Central orchestration layer managing workflows, approvals, reporting."
            impact="Eliminates operational friction."
          />
          <AutomationCard
            icon={Bot}
            title="AI CRM Intelligence Engine"
            desc="Automated lead intake, qualification, routing, and follow-ups."
            impact="Higher conversions."
          />
          <AutomationCard
            icon={Mic}
            title="AI Voice Agent Infrastructure"
            desc="Inbound & outbound voice agents with memory and task execution."
            impact="24/7 execution."
          />
          <AutomationCard
            icon={Database}
            title="RAG Knowledge Systems"
            desc="AI agents with long-term memory using vector databases."
            impact="Instant internal intelligence."
          />
          <AutomationCard
            icon={Workflow}
            title="Finance & Invoice Automation"
            desc="Invoice extraction, summaries, and reporting."
            impact="Real-time financial clarity."
          />
          <AutomationCard
            icon={PhoneCall}
            title="Customer Support AI"
            desc="Autonomous support agents with escalation logic."
            impact="Lower support cost."
          />
        </div>
      </Section>

      {/* MODEL */}
      <Section
        id="model"
        label="Operating Philosophy"
        title="How I Design Automation That Actually Scales"
      >
        <ul className="space-y-5 max-w-3xl text-slate-300 text-sm">
          <li>• Automation replaces work — it doesn’t assist it</li>
          <li>• Systems must run without supervision</li>
          <li>• Infrastructure beats tools</li>
          <li>• Scalability is designed from day one</li>
        </ul>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        label="Work Together"
        title="If Your Business Still Runs on Manual Work, This Matters"
      >
        <div className="max-w-xl space-y-8">
          <p className="text-slate-300">
            Businesses that delay automation will be outpaced by those that
            build systems.
          </p>

          <PrimaryButton href="mailto:uzainmohid@gmail.com">
            <Mail size={18} />
            uzainmohid@gmail.com
          </PrimaryButton>
        </div>
      </Section>

      <footer className="text-center text-xs text-slate-500 py-8">
        © {new Date().getFullYear()} Uzain Mohid · AI Automation Infrastructure
      </footer>
    </div>
  );
}
