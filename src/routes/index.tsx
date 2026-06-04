import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Name 1 — Title 1" },
      { name: "description", content: "Description 1" },
      { property: "og:title", content: "Name 1 — Title 1" },
      { property: "og:description", content: "Description 1" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const projects = [
  { title: "Product 1", category: "Category 1", year: "Year 1", span: "md:col-span-7", aspect: "aspect-[4/3]" },
  { title: "Product 2", category: "Category 2", year: "Year 2", span: "md:col-span-5 md:mt-32", aspect: "aspect-[4/3]" },
  { title: "Product 3", category: "Category 3", year: "Year 3", span: "md:col-span-5", aspect: "aspect-[3/4]" },
  { title: "Product 4", category: "Category 4", year: "Year 4", span: "md:col-span-7 md:mt-24", aspect: "aspect-[4/3]" },
  { title: "Product 5", category: "Category 5", year: "Year 5", span: "md:col-span-6", aspect: "aspect-[3/4]" },
  { title: "Product 6", category: "Category 6", year: "Year 6", span: "md:col-span-6 md:mt-40", aspect: "aspect-[4/3]" },
];

const navItems = ["Nav 1", "Nav 2", "Nav 3", "Nav 4", "Nav 5"];

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
        <a href="#top" className="eyebrow text-white">Name 1</a>
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
        <span className="eyebrow text-white hidden md:block">Tagline 1</span>
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
          Label 1<br />Label 2
        </div>
        <div className="hidden md:block md:col-span-6" />
        <div className="col-span-6 md:col-span-3 eyebrow text-muted-foreground text-right">
          Label 3<br />Label 4
        </div>
      </div>

      {/* Oversized name + portrait */}
      <div className="relative px-6 md:px-10">
        <h1
          className="font-display text-foreground reveal"
          style={{ fontSize: "clamp(5rem, 22vw, 19rem)" }}
        >
          <span className="block">NAME 1</span>
          <span className="block text-right md:-mt-[0.15em]">NAME 2</span>
        </h1>

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42vw] max-w-[440px] aspect-[3/4] bg-muted flex items-center justify-center">
          <span className="eyebrow text-muted-foreground">Image 1</span>
        </div>
      </div>

      {/* Intro paragraph */}
      <div className="grid grid-cols-12 gap-4 px-6 md:px-10 mt-16 md:mt-24 pb-16">
        <div className="col-span-12 md:col-start-2 md:col-span-4 eyebrow text-muted-foreground">
          Section 1
        </div>
        <p className="col-span-12 md:col-span-6 text-lg md:text-2xl font-sans-tight font-light leading-snug text-foreground max-w-xl">
          Description 1. Body copy placeholder describing the practice in one or two sentences.
        </p>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
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
          Section 2
        </div>
        <h2
          className="col-span-12 md:col-span-9 font-display text-foreground"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Headline 1
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-24 md:gap-y-40">
        {projects.map((p, idx) => (
          <article key={p.title} className={`col-span-1 ${p.span} group`}>
            <div className={`relative overflow-hidden ${p.aspect} bg-muted flex items-center justify-center`}>
              <span className="eyebrow text-muted-foreground">Image {idx + 1}</span>
              <span className="absolute top-4 left-4 eyebrow text-foreground">
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
          Section 3
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-4 items-center">
        <h2
          className="col-span-12 font-display text-foreground relative z-10"
          style={{ fontSize: "clamp(5rem, 24vw, 22rem)" }}
        >
          HEADING 1
        </h2>

        <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-[55vw] md:w-[28vw] max-w-[420px] aspect-[3/4] z-0 bg-muted flex items-center justify-center">
          <span className="eyebrow text-muted-foreground">Image 2</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-20 md:mt-32">
        <div className="hidden md:block md:col-span-3 eyebrow text-muted-foreground">
          Label 1
        </div>
        <p className="col-span-12 md:col-span-6 text-xl md:text-3xl font-light leading-snug font-sans-tight max-w-2xl">
          Bio 1. Placeholder paragraph describing background, focus areas, and approach in a few sentences.
        </p>
        <div className="col-span-12 md:col-span-3 mt-8 md:mt-0 space-y-6">
          <div>
            <p className="eyebrow text-muted-foreground">Label 2</p>
            <p className="font-sans-tight mt-2">Value 1</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Label 3</p>
            <p className="font-sans-tight mt-2">Value 2</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Label 4</p>
            <p className="font-sans-tight mt-2">Value 3<br/>Value 4</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { n: "01", name: "Service 1", note: "Note 1" },
    { n: "02", name: "Service 2", note: "Note 2" },
    { n: "03", name: "Service 3", note: "Note 3" },
    { n: "04", name: "Service 4", note: "Note 4" },
    { n: "05", name: "Service 5", note: "Note 5" },
  ];
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-40 border-t border-border">
      <div className="grid grid-cols-12 gap-4 mb-20 md:mb-32">
        <div className="col-span-12 md:col-span-3 eyebrow text-muted-foreground">
          Section 4
        </div>
        <h2
          className="col-span-12 md:col-span-9 font-display text-foreground"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Heading 2
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
          Section 5
        </div>
      </div>

      <h2
        className="font-display"
        style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
      >
        Heading 3
      </h2>

      <div className="grid grid-cols-12 gap-4 mt-20 md:mt-32">
        <p className="col-span-12 md:col-start-7 md:col-span-6 text-xl md:text-2xl font-sans-tight font-light leading-snug text-background/80">
          Description 2. Placeholder body copy for the contact section.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-20 md:mt-32 border-t border-background/20 pt-12">
        <div className="col-span-12 md:col-span-4">
          <p className="eyebrow text-background/60">Label 1</p>
          <p className="mt-3 block font-display text-3xl md:text-4xl">Value 1</p>
        </div>
        <div className="col-span-6 md:col-span-4 mt-10 md:mt-0">
          <p className="eyebrow text-background/60">Label 2</p>
          <p className="mt-3 block font-display text-3xl md:text-4xl">Value 2</p>
        </div>
        <div className="col-span-6 md:col-span-4 mt-10 md:mt-0">
          <p className="eyebrow text-background/60">Label 3</p>
          <p className="mt-3 font-display text-3xl md:text-4xl">Value 3</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background/70 px-6 md:px-10 py-10 border-t border-background/10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 eyebrow">
        <span>Footer 1</span>
        <span>Footer 2</span>
        <span>Footer 3</span>
      </div>
    </footer>
  );
}
