import { motion } from "framer-motion"
import { Download, ExternalLink, Link, Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { SparklesCore } from "./components/ui/sparkles"
import profileImage from "./assets/profile.png"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const skills = [
  "Agile Delivery",
  "Scrum Mastery",
  "QA Automation",
  "Web Security",
  "AI / ML Strategy",
  "OCI Infrastructure",
  "BrowserStack",
  "Jira / Confluence",
  "GDPR / CCPA Compliance",
]

const experience = [
  {
    company: "Broadridge India",
    role: "Technology Lead",
    date: "April 2015 - Present",
    location: "Hyderabad, Telangana, India",
    bullets: [
      "Led Agile delivery for secure, enterprise-grade digital products.",
      "Drove a 30% test efficiency improvement through BrowserStack and AI automation.",
      "Delivered zero-breach releases while aligning product quality to GDPR and CCPA.",
      "Built visibility with Jira, Confluence, and QA dashboards for global teams.",
    ],
  },
  {
    company: "ValueMomentum",
    role: "Software QA Engineer",
    date: "June 2014 - March 2015",
    location: "Hyderabad, Telangana, India",
    bullets: [
      "Validated insurance workflows for policy, claims, and billing platforms.",
      "Created reusable test assets to drive continuous QA improvement.",
    ],
  },
  {
    company: "Silver Touch Technologies Ltd",
    role: "Quality Control Engineer",
    date: "July 2013 - June 2014",
    location: "Ahmedabad, Gujarat, India",
    bullets: ["Performed backend testing using SQL and end-to-end quality validation."],
  },
  {
    company: "Hidden Brains InfoTech Pvt. Ltd.",
    role: "Quality Assurance Engineer",
    date: "June 2012 - July 2013",
    location: "Ahmedabad, Gujarat, India",
    bullets: ["Focused on UI/UX bug discovery, regression testing, and mobile compatibility."],
  },
  {
    company: "Integr8 Software Products & Services Pvt. Ltd.",
    role: "SAP ABAP Consultant",
    date: "January 2011 - June 2012",
    location: "Hyderabad, Telangana, India",
    bullets: ["Built SAP reports, forms, and integration validations for enterprise workflows."],
  },
]

const certifications = [
  "Professional Scrum Master I",
  "SAFe 6.0 Certified Scrum Master",
  "Lean Six Sigma Green Belt",
  "Enterprise Design Thinking Practitioner",
  "Jira Query Language (JQL) Training",
]

const projects = [
  {
    title: "Ajit-Online-Portfolio",
    description: "The live React + TypeScript portfolio site built with Vite, Framer Motion, and GitHub Pages.",
    link: "https://github.com/ajitnayak2911/Ajit-Online-Portfolio",
  },
  {
    title: "BAU_Automation",
    description: "Python automation for business-as-usual workflows, regression, and QA process efficiency.",
    link: "https://github.com/ajitnayak2911/BAU_Automation",
  },
  {
    title: "PythonProject",
    description: "Automation and scripting experiments using Python for data engineering and utilities.",
    link: "https://github.com/ajitnayak2911/PythonProject",
  },
  {
    title: "Ajit",
    description: "Python-driven engineering portfolio repository with practical automation and data tools.",
    link: "https://github.com/ajitnayak2911/Ajit",
  },
  {
    title: "House_Price_Prediction_Project",
    description: "Machine learning project predicting real estate pricing using Python models.",
    link: "https://github.com/ajitnayak2911/House_Price_Prediction_Project",
  },
  {
    title: "Link_behavior_audit_tool",
    description: "Web link audit tool that scans page links and validates internal vs external behavior.",
    link: "https://github.com/ajitnayak2911/Link_behavior_audit_tool",
  },
  {
    title: "MCP",
    description: "Python-based Model Context Protocol experimentation and integration utilities.",
    link: "https://github.com/ajitnayak2911/MCP",
  },
  {
    title: "ajit-nayak",
    description: "Java repository demonstrating automation fundamentals and core application structure.",
    link: "https://github.com/ajitnayak2911/ajit-nayak",
  },
  {
    title: "Webscrapper-Automation",
    description: "Java scraping automation for structured web data extraction across domains.",
    link: "https://github.com/ajitnayak2911/Webscrapper-Automation",
  },
  {
    title: "YouTube-Automation",
    description: "Java automation for YouTube interaction workflows and validation.",
    link: "https://github.com/ajitnayak2911/YouTube-Automation",
  },
  {
    title: "Flipkart-Automation",
    description: "Java e-commerce automation for Flipkart functional and checkout workflows.",
    link: "https://github.com/ajitnayak2911/Flipkart-Automation",
  },
]

const contactDetails = [
  {
    icon: Phone,
    title: "Mobile",
    value: "+91 95151 56211",
    href: "tel:+919515156211",
  },
  {
    icon: Mail,
    title: "Email",
    value: "ajitnayak007@gmail.com",
    href: "mailto:ajitnayak007@gmail.com",
  },
  {
    icon: Link,
    title: "LinkedIn",
    value: "linkedin.com/in/ajitnayak2911",
    href: "https://www.linkedin.com/in/ajitnayak2911",
  },
  {
    icon: ExternalLink,
    title: "GitHub",
    value: "github.com/ajitnayak2911",
    href: "https://github.com/ajitnayak2911",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Hyderabad, Telangana, India",
    href: "https://www.google.com/maps/search/Hyderabad+Telangana+India",
  },
]

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            Ajit Nayak
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="Resume-LikedIn-Ajit.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-800"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>

      <main className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Particle Canvas */}
          <SparklesCore
            background="transparent"
            minSize={5}
            maxSize={10}
            particleDensity={500}
            className="h-full w-full"
            particleColor="#ffffff"
            speed={6}
          />
          
          {/* Animated Glow Backgrounds */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 via-transparent to-purple-950/20"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          
          {/* Large Pulsing Glow Spheres */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-400/5 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-28 h-28 rounded-full bg-white/15 blur-2xl"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
                Certified SAFe 6.0 Scrum Master & QA leader
              </p>
              <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Modern Agile leadership, secure QA, and GitHub automation.
                </h1>
                <p className="text-lg leading-8 text-slate-300">
                  I’m Ajit Nayak — a technology leader building secure delivery, AI-powered test automation, and a growing
                  GitHub portfolio of public repositories.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <a
                  href="Resume-LikedIn-Ajit.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-3xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                >
                  Download Resume
                </a>
                <a
                  href="https://github.com/ajitnayak2911"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-400/40 hover:bg-slate-900"
                >
                  View GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-3xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  Let's connect
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-slate-950/50 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl" />
              <img
                src={profileImage}
                alt="Ajit Nayak"
                className="relative mx-auto h-56 w-56 rounded-[2rem] border border-white/10 object-cover shadow-xl"
              />
              <div className="mt-8 space-y-4 text-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Hyderabad, India</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Ajit Nayak</h2>
                </div>
                <p className="text-sm leading-6 text-slate-400">
                  Scrum Master | QA & Web Security Expert | AI-driven Test Automation
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-left">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Top skill</p>
                    <p className="mt-2 text-base font-semibold text-white">AI & Machine Learning</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-left">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Certifications</p>
                    <p className="mt-2 text-base font-semibold text-white">PSM I, SAFe 6.0, Lean Six Sigma</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">About</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Strategic Agile leadership with secure delivery.</h2>
                <p className="mt-6 leading-8 text-slate-300">
                  I’m a Certified SAFe 6.0 Advanced Scrum Master and QA leader who combines process discipline,
                  AI-driven automation, and security-first delivery. I help digital teams ship with confidence by
                  bridging agile practices, quality engineering, and enterprise compliance.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Top skills</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Languages</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {['German (Limited Working)', 'Hindi', 'Oriya', 'English', 'Telugu'].map((language) => (
                      <span key={language} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Skills</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Deep experience across QA, Agile, and automation.</h2>
              <p className="mt-6 leading-8 text-slate-300">
                My work blends enterprise QA and release assurance with modern development tooling,
                AI-assisted automation, and compliance-first quality processes.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-sm text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/90 p-8 shadow-2xl shadow-slate-950/40"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Summary</p>
              <div className="mt-6 space-y-5 text-slate-300">
                <p>
                  Over a decade of experience building secure delivery systems, coaching high-performing agile teams,
                  and introducing production-grade automation for testing and quality.
                </p>
                <p>
                  I use AI-enhanced test workflows, compliance frameworks, and modern collaboration tools to help
                  enterprise teams move faster with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Experience</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Career journey across QA, security, and agile leadership.</h2>
            </div>
            <div className="grid gap-6">
              {experience.map((item) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-sm text-slate-400">{item.company}</p>
                    </div>
                    <div className="text-sm text-slate-400">
                      <p>{item.date}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Certifications</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Validated certifications for Agile, design, and quality.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-5 text-slate-200 shadow-sm shadow-slate-950/20">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Project repositories</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">GitHub work across automation, data, and tooling.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-left transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-slate-900/90"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3 text-slate-300">
                    <ExternalLink className="h-5 w-5 text-indigo-300 transition group-hover:text-white" />
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="mt-4 text-slate-400">{project.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/95 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Let’s build secure, scalable delivery together.</h2>
                <p className="mt-6 max-w-xl leading-8 text-slate-300">
                  If you are exploring Agile leadership, secure QA transformation, or test automation,
                  I’m available for India-wide and remote opportunities.
                </p>
                <a
                  href="mailto:ajitnayak007@gmail.com"
                  className="mt-8 inline-flex items-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
                >
                  Contact via Email
                </a>
              </div>
              <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
                {contactDetails.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-slate-200 transition hover:border-indigo-400/40 hover:bg-slate-900"
                  >
                    <item.icon className="h-5 w-5 text-indigo-300" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.title}</p>
                      <p className="mt-1 text-sm text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
