import Image from "next/image";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  ChevronDown,
  CloudUpload,
  DraftingCompass,
  Factory,
  GraduationCap,
  Headset,
  House,
  Leaf,
  LifeBuoy,
  Mail,
  MapPin,
  Network,
  PencilRuler,
  Phone,
  Search,
  Settings2,
  ShieldCheck,
  Store
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FloatingContact } from "@/components/FloatingContact";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

const solutions = [
  {
    icon: Network,
    title: "Enterprise Network Infrastructure",
    summary: "Secure, high-performance networks designed for reliable day-to-day operations.",
    items: ["Structured cabling and fibre optic", "CAT6 and CAT6A deployment", "Server rooms, racks and patch panels", "Enterprise Wi-Fi and cable certification", "Device staging, hardening and rollout support"]
  },
  {
    icon: BrainCircuit,
    title: "AI Consulting for SMEs",
    summary: "Practical automation that turns business knowledge and workflows into useful outcomes.",
    items: ["AI agent and workflow consulting", "Business automation and AI chatbots", "RAG and knowledge management", "n8n workflow automation", "Lead-generation automation"]
  },
  {
    icon: ShieldCheck,
    title: "Smart Security & Building Solutions",
    summary: "Integrated access, surveillance and visitor systems for safer, more manageable spaces.",
    items: ["Digital access control systems", "Keyless, face and fingerprint authentication", "Visitor management", "IP cameras and NVR", "AI video analytics and remote monitoring"]
  },
  {
    icon: Leaf,
    title: "Smart Energy Solutions",
    summary: "EV charging, solar and monitoring solutions for more informed energy decisions.",
    items: ["EV charger installation", "Solar panel installation", "Smart energy monitoring", "Residential energy consultation"]
  },
  {
    icon: Bot,
    title: "Autonomous Robotics",
    summary: "Commercial cleaning and facility automation for repeatable operational tasks.",
    items: ["Autonomous cleaning robots", "Wheel-based robotic sweepers", "AI navigation", "Commercial facility automation"]
  }
];

const industries = [
  [Building2, "SMEs"],
  [Building2, "Commercial buildings"],
  [Store, "Retail"],
  [Factory, "Factories & warehouses"],
  [GraduationCap, "Hotels & schools"],
  [Building2, "Property developers & MCST"],
  [House, "Landed homes"]
] as const;

const strengths = [
  {
    icon: DraftingCompass,
    title: "Design to deployment",
    text: "We start with your goals and site realities, then design and deliver a solution that fits the operating environment."
  },
  {
    icon: Settings2,
    title: "Built for operational uptime",
    text: "Infrastructure, testing and handover are planned together so your systems remain supportable after go-live."
  },
  {
    icon: Headset,
    title: "Local Singapore support",
    text: "A local contact point keeps communication direct from site survey through deployment and ongoing support."
  }
];

const processSteps = [
  [Search, "Discover", "Understand goals, constraints and the operating environment."],
  [PencilRuler, "Design", "Plan the right architecture, scope and delivery path."],
  [CloudUpload, "Deploy", "Implement, integrate, test and hand over with care."],
  [LifeBuoy, "Support", "Monitor, maintain and optimise as needs evolve."]
] as const;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://comwerkz.com.sg";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Comwerkz Technology P.L.",
  url: siteUrl,
  telephone: "+65 62666 988",
  email: "sales@comwerkz.com.sg",
  areaServed: ["Singapore", "Malaysia"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Boon Lay Way, Tradehub 21, #02-137, #03-123, #05-131",
    addressLocality: "Singapore",
    postalCode: "609966",
    addressCountry: "SG"
  },
  knowsAbout: ["Network infrastructure", "AI consulting", "Access control", "CCTV", "EV charging", "Solar panels", "Autonomous robotics"]
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <section className="hero tech-grid" id="home">
          <div className="hero-copy">
            <div className="hero-copy-inner">
              <h1>Technology that keeps your business moving.</h1>
              <p>
                Integrated network infrastructure, AI automation, security and energy solutions—designed, deployed and maintained in Singapore.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Request a Site Survey
                </a>
                <a className="text-link" href="#solutions">
                  Explore solutions <ArrowRight aria-hidden="true" size={19} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <Image
              alt="IT field engineer configuring enterprise network equipment in a commercial building"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 58vw"
              src="/images/comwerkz-network-engineer.png"
            />
          </div>
        </section>

        <section className="section section-white" id="solutions">
          <div className="shell">
            <Reveal className="section-heading max-w-3xl">
              <h2>Solutions built around your business.</h2>
              <p>Start with the outcome you need. We connect the infrastructure, automation and operational systems behind it.</p>
            </Reveal>
            <div className="solutions-layout" id="services">
              <Reveal className="solutions-image">
                <Image
                  alt="Structured network racks with organised enterprise cabling"
                  fill
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  src="/images/comwerkz-server-room.png"
                />
              </Reveal>
              <div className="solution-list">
                {solutions.map(({ icon: Icon, title, summary, items }, index) => (
                  <Reveal delay={index * 0.04} key={title}>
                    <details className="solution-row" open={index === 0}>
                      <summary>
                        <span className="solution-icon"><Icon aria-hidden="true" size={28} /></span>
                        <span>
                          <strong>{title}</strong>
                          <small>{summary}</small>
                        </span>
                        <ChevronDown aria-hidden="true" className="solution-chevron" size={21} />
                      </summary>
                      <ul>
                        {items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="industry-section" id="industries">
          <div className="industry-content tech-grid">
            <Reveal>
              <h2>Built for the places Singapore works.</h2>
              <div className="industry-list">
                {industries.map(([Icon, label], index) => (
                  <div className="industry-item" key={label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" size={24} />
                    <strong>{label}</strong>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="industry-media">
            <Image
              alt="Modern commercial lobby with smart access gates, security devices and service robot"
              fill
              sizes="(max-width: 899px) 100vw, 56vw"
              src="/images/comwerkz-smart-lobby.png"
            />
          </div>
        </section>

        <section className="section section-white" id="why-us">
          <div className="shell">
            <Reveal className="section-heading max-w-3xl">
              <h2>Practical expertise. End-to-end accountability.</h2>
              <p>Clear ownership keeps technology decisions aligned from the first site conversation through support.</p>
            </Reveal>
            <div className="strength-grid">
              {strengths.map(({ icon: Icon, title, text }, index) => (
                <Reveal className="strength" delay={index * 0.08} key={title}>
                  <Icon aria-hidden="true" size={42} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section tech-grid" id="process">
          <div className="shell">
            <Reveal className="process-heading">
              <h2>Our process. <span>Clear steps, reliable outcomes.</span></h2>
            </Reveal>
            <div className="process-grid">
              {processSteps.map(([Icon, title, text], index) => (
                <Reveal className="process-step" delay={index * 0.08} key={title}>
                  <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                  <Icon aria-hidden="true" size={36} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="shell contact-layout">
            <Reveal className="contact-copy">
              <h2>Let’s plan the right solution.</h2>
              <p>Tell us about your site, business goal or technical requirement. We’ll help identify the most practical next step.</p>

              <div className="contact-links">
                <a href="tel:+6562666988"><Phone aria-hidden="true" size={21} /><span><small>Call Center</small>+65 62666 988</span></a>
                <a href="mailto:admin@comwerkz.com.sg"><Mail aria-hidden="true" size={21} /><span>admin@comwerkz.com.sg</span></a>
                <a href="mailto:sales@comwerkz.com.sg"><Mail aria-hidden="true" size={21} /><span>sales@comwerkz.com.sg</span></a>
              </div>

              <div className="address-list">
                <address>
                  <MapPin aria-hidden="true" size={23} />
                  <span><strong>Singapore</strong>Comwerkz Technology P.L.<br />18 Boon Lay Way, Tradehub 21,<br />#02-137, #03-123, #05-131<br />Singapore 609966</span>
                </address>
                <address>
                  <MapPin aria-hidden="true" size={23} />
                  <span><strong>Malaysia</strong>Comwerkz Technology Sdn Bhd<br />2-37 Pv 128, 128 Jalan Genting Klang,<br />Kuala Lumpur, 53300 Malaysia</span>
                </address>
              </div>
            </Reveal>
            <Reveal className="form-panel" delay={0.08}>
              <h3>Request a site survey or consultation</h3>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-grid">
          <div>
            <a aria-label="Comwerkz home" className="brand footer-brand" href="#home"><span>Comwerkz</span><small>Technology P.L.</small></a>
            <p>Building solutions. <span>Powering growth.</span></p>
          </div>
          <div><strong>Solutions</strong><a href="#solutions">Network infrastructure</a><a href="#solutions">AI consulting</a><a href="#solutions">Security & buildings</a><a href="#solutions">Energy & robotics</a></div>
          <div><strong>Company</strong><a href="#industries">Industries</a><a href="#why-us">Why Comwerkz</a><a href="#process">Our process</a><a href="#contact">Contact</a></div>
          <div><strong>Connect</strong><a href="mailto:admin@comwerkz.com.sg">admin@comwerkz.com.sg</a><a href="mailto:sales@comwerkz.com.sg">sales@comwerkz.com.sg</a><a href="tel:+6562666988">+65 62666 988</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Comwerkz Technology P.L. All rights reserved.</span><span>Singapore • Malaysia</span></div>
      </footer>

      <FloatingContact />
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} type="application/ld+json" />
    </>
  );
}
