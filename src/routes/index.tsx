import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import projAurelia from "@/assets/project-aurelia.jpg";
import projMaisonNoir from "@/assets/project-maison-noir.jpg";
import projSolstice from "@/assets/project-solstice.jpg";
import projAtelierOne from "@/assets/project-atelier-one.jpg";
import projObsidian from "@/assets/project-obsidian.jpg";
import projForme from "@/assets/project-forme.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eunice Daniel — Designer & Creative Director" },
      { name: "description", content: "Creating thoughtful visual experiences through design, storytelling, and timeless aesthetics." },
      { property: "og:title", content: "Eunice Daniel — Designer & Creative Director" },
      { property: "og:description", content: "Creating thoughtful visual experiences through design, storytelling, and timeless aesthetics." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const projects = [
  { title: "Aurelia", category: "Brand Identity", year: "2024", image: projAurelia, span: "md:col-span-7", aspect: "aspect-[4/3]" },
  { title: "Maison Noir", category: "Creative Direction", year: "2024", image: projMaisonNoir, span: "md:col-span-5 md:mt-32", aspect: "aspect-[4/3]" },
  { title: "Solstice", category: "Editorial Design", year: "2023", image: projSolstice, span: "md:col-span-5", aspect: "aspect-[3/4]" },
  { title: "Atelier One", category: "Art Direction", year: "2023", image: projAtelierOne, span: "md:col-span-7 md:mt-24", aspect: "aspect-[4/3]" },
  { title: "Obsidian", category: "Brand Identity", year: "2022", image: projObsidian, span: "md:col-span-6", aspect: "aspect-[3/4]" },
  { title: "Forme", category: "Web Design", year: "2022", image: projForme, span: "md:col-span-6 md:mt-40", aspect: "aspect-[4/3]" },
];

const navItems = ["Work", "About", "Services", "Journal", "Contact"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#top" className="eyebrow text-white">Eunice Daniel</a>
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="eyebrow text-white/80 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <span className="eyebrow text-white hidden md:block">IND · EST. 2018</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      {/* Top meta row */}
      <div className="grid grid-cols-12 gap-4 px-6 md:px-10 mb-8 md:mb-16">
        <div className="col-span-6 md:col-span-3 eyebrow text-muted-foreground">
          Portfolio<br />Vol. 01 / 2026
        </div>
        <div className="hidden md:block md:col-span-6" />
        <div className="col-span-6 md:col-span-3 eyebrow text-muted-foreground text-right">
          Designer & <br />Creative Director
        </div>
      </div>

      {/* Oversized name + portrait */}
      <div className="relative px-6 md:px-10">
        <h1
          className="font-display text-foreground reveal"
          style={{ fontSize: "clamp(5rem, 22vw, 19rem)" }}
        >
          <span className="block">EUNICE</span>
          <span className="block text-right md:-mt-[0.15em]">DANIEL</span>
        </h1>

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42vw] max-w-[440px] aspect-[3/4]">
          <img
            src={heroPortrait}
            alt="Eunice Daniel — Designer and Creative Director portrait"
            width={1200}
            height={1600}
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Intro paragraph */}
      <div className="grid grid-cols-12 gap-4 px-6 md:px-10 mt-16 md:mt-24 pb-16">
        <div className="col-span-12 md:col-start-2 md:col-span-4 eyebrow text-muted-foreground">
          Introduction — 001
        </div>
        <p className="col-span-12 md:col-span-6 text-lg md:text-2xl font-sans-tight font-light leading-snug text-foreground max-w-xl">
          Creating thoughtful visual experiences through design, storytelling,
          and timeless aesthetics.
        </p>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Eunice Daniel", "Selected Work", "2018 — 2026", "Chennai · IND"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-foreground text-background py-6 overflow-hidden border-y border-foreground">
      <div className="marquee-track flex whitespace-nowrap gap-12 font-display text-5xl md:text-7xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="inline-block w-3 h-3 rounded-full bg-background" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-40">
      <div className="grid grid-cols-12 gap-4 mb-20 md:mb-32">
        <div className="col-span-12 md:col-span-3 eyebrow text-muted-foreground">
          002 — Selected Work
        </div>
        <h2
          className="col-span-12 md:col-span-9 font-display text-foreground"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          A study in form, <br />restraint & matter.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-24 md:gap-y-40">
        {projects.map((p, idx) => (
          <article key={p.title} className={`col-span-1 ${p.span} group`}>
            <div className={`relative overflow-hidden ${p.aspect} bg-muted`}>
              <img
                src={p.image}
                alt={`${p.title} — ${p.category}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 left-4 eyebrow text-background mix-blend-difference">
                № {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <h3
                  className="font-display text-foreground"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {p.title}
                </h3>
                <p className="eyebrow text-muted-foreground mt-3">{p.category}</p>
              </div>
              <span className="eyebrow text-muted-foreground">{p.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-40 border-t border-border">
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-3 eyebrow text-muted-foreground">
          003 — About
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-4 items-center">
        <h2
          className="col-span-12 font-display text-foreground relative z-10"
          style={{ fontSize: "clamp(5rem, 24vw, 22rem)" }}
        >
          ABOUT
        </h2>

        <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-[55vw] md:w-[28vw] max-w-[420px] aspect-[3/4] z-0">
          <img
            src={aboutPortrait}
            alt="Eunice Daniel, side profile portrait"
            width={1200}
            height={1600}
            loading="lazy"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-20 md:mt-32">
        <div className="hidden md:block md:col-span-3 eyebrow text-muted-foreground">
          Biography
        </div>
        <p className="col-span-12 md:col-span-6 text-xl md:text-3xl font-light leading-snug font-sans-tight max-w-2xl">
          Eunice Daniel is a multidisciplinary designer specializing in brand
          identity, creative direction, and digital experiences. Her work
          combines strategic thinking with refined visual execution to create
          memorable and meaningful design systems.
        </p>
        <div className="col-span-12 md:col-span-3 mt-8 md:mt-0 space-y-6">
          <div>
            <p className="eyebrow text-muted-foreground">Based in</p>
            <p className="font-sans-tight mt-2">Chennai, India</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Practice since</p>
            <p className="font-sans-tight mt-2">2018</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Recognition</p>
            <p className="font-sans-tight mt-2">Type Directors Club<br/>Brand New Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { n: "01", name: "Brand Identity", note: "Marks, systems, guidelines" },
    { n: "02", name: "Creative Direction", note: "Campaigns & lookbooks" },
    { n: "03", name: "Editorial Design", note: "Print & publication" },
    { n: "04", name: "Web Design", note: "Digital experiences" },
    { n: "05", name: "Art Direction", note: "Photography & styling" },
  ];
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-40 border-t border-border">
      <div className="grid grid-cols-12 gap-4 mb-20 md:mb-32">
        <div className="col-span-12 md:col-span-3 eyebrow text-muted-foreground">
          004 — Services
        </div>
        <h2
          className="col-span-12 md:col-span-9 font-display text-foreground"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Practice
        </h2>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {services.map((s) => (
          <li
            key={s.n}
            className="grid grid-cols-12 gap-4 items-baseline py-8 md:py-12 group cursor-default"
          >
            <span className="col-span-2 md:col-span-1 eyebrow text-muted-foreground">{s.n}</span>
            <span
              className="col-span-10 md:col-span-7 font-display text-foreground transition-transform duration-700 group-hover:translate-x-4"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              {s.name}
            </span>
            <span className="hidden md:block md:col-span-4 eyebrow text-muted-foreground text-right">
              {s.note}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-foreground text-background px-6 md:px-10 py-24 md:py-40">
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-3 eyebrow text-background/60">
          005 — Contact
        </div>
      </div>

      <h2
        className="font-display"
        style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
      >
        Have a project<br />in mind?
      </h2>

      <div className="grid grid-cols-12 gap-4 mt-20 md:mt-32">
        <p className="col-span-12 md:col-start-7 md:col-span-6 text-xl md:text-2xl font-sans-tight font-light leading-snug text-background/80">
          Currently available for freelance projects and creative
          collaborations.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-20 md:mt-32 border-t border-background/20 pt-12">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow text-background/60">Email</p>
          <a
            href="mailto:hello@eunicedaniel.com"
            className="mt-3 block font-display text-3xl md:text-4xl hover:italic"
          >
            hello@eunicedaniel.com
          </a>
        </div>
        <div className="col-span-6 md:col-span-4 mt-10 md:mt-0">
          <p className="eyebrow text-background/60">Instagram</p>
          <a
            href="https://instagram.com/eunicedaniel"
            className="mt-3 block font-display text-3xl md:text-4xl hover:italic"
          >
            @eunicedaniel
          </a>
        </div>
        <div className="col-span-6 md:col-span-4 mt-10 md:mt-0">
          <p className="eyebrow text-background/60">Location</p>
          <p className="mt-3 font-display text-3xl md:text-4xl">Chennai, India</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/70 px-6 md:px-10 py-10 border-t border-background/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 eyebrow">
        <span>© 2026 Eunice Daniel</span>
        <span>All rights reserved · No part may be reproduced without consent.</span>
        <span>Index — Vol. 01</span>
      </div>
    </footer>
  );
}
