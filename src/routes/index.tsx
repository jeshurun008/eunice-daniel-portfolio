import { createFileRoute } from "@tanstack/react-router";
import portraitImage from "@/assets/eunice.jpeg";
import intertwineImage from "@/assets/interwine.jpeg";
import oodiBeltImage from "@/assets/oodibelt.jpeg";
import hairpieceImage from "@/assets/hairpiece.jpeg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eunice Daniel — Designer" },
      { name: "description", content: "Portfolio of Eunice Daniel, contemporary jewellery and object designer." },
      { property: "og:title", content: "Eunice Daniel — Designer" },
      { property: "og:description", content: "Portfolio of Eunice Daniel, contemporary jewellery and object designer." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});
const projects = [
  {
    title: "Intertwஐne",
    category: "Contemporary Jewellery",
    year: "Collection 01",
    image: intertwineImage,
    description:
      "Intertwஐne explores the intertwining of cultural practices through the lens of contemporary jewellery design. Inspired by “Poo Korthal” (traditional flower stringing), a practice deeply rooted in Tamil culture, often used for adornment, the collection draws on the simplicity and versatility of this floral tradition, bringing durability to the narratives of this elegant, temporary form of adornment. The pieces reinterpret the forms and structures of flower garlands through enlarged and exaggerated elements inspired by petals and stems. Amplifying delicate and tiny forms explores the possibilities beyond the limitations of real flowers. Each petal is individually moulded and dyed using traditional leather techniques. Celebrating a sustainable use of resources and crafted from post-consumer leather remnants, the jewellery invites audiences to reconsider the value of pre-consumer material surplus and the inherent possibilities. Designed for the Indian diaspora, the collection reflects the experience of carrying fragments of culture across borders, embodying identity, memory and connection.",
    details: [
      ["Medium", "Post-consumer leather"],
      ["Technique", "Moulded · Hand-dyed"],
      ["Origin", "Tamil tradition"],
    ],
  },
  {
    title: "OODI Belt",
    category: "Sculptural Adornment",
    year: "Collection 02",
    image: oodiBeltImage,
    description:
      "OODI belt explores the traditional technique of flower garland stringing by transforming the process into a wearable structure. Rather than concealing the method of assembly, the design emphasizes it through exaggerated, elongated stems that expose the act of threading. A leather cord weaves through and secures each floral element, making the stringing technique both the structural foundation and visual focus of the piece.",
    details: [
      ["Medium", "Post-consumer leather"],
      ["Technique", "Threaded · Cord-strung"],
      ["Form", "Belt"],
    ],
  },
  {
    title: "SAVURI Headpiece",
    category: "Hair Ornament",
    year: "Collection 03",
    image: hairpieceImage,
    description:
      "SAVURI headpiece draws inspiration from the longstanding tradition of wearing flowers in the hair. Reimagined in leather, the floral elements are threaded sequentially, preserving the visual language of floral adornment while translating it into a lasting object. The piece celebrates cultural practices of decorating the hair with flowers, transforming a temporary ritual into a sculptural accessory.",
    details: [
      ["Medium", "Post-consumer leather"],
      ["Technique", "Threaded · Sequenced"],
      ["Form", "Headpiece"],
    ],
  },
];
const navItems = ["Work", "About", "Contact"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const navItems = ["Work", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#top" className="eyebrow text-white">
          Eunice Daniel
        </a>

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

        <span className="eyebrow text-white hidden md:block">
          Designer
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      {/* Top meta row */}
      <div className="grid grid-cols-12 gap-4 px-6 md:px-10 mb-8 md:mb-16">

        <div className="hidden md:block md:col-span-6" />

      </div>

      {/* Name + portrait side-by-side */}
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-end px-6 md:px-10">
        <div className="col-span-12 md:col-span-8 reveal">
          <h1
            className="font-display text-foreground"
            style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
          >
            <span className="block">Eunice</span>
            <span className="block md:-mt-[0.12em] md:pl-[0.4em] italic">Daniel</span>
          </h1>
        </div>
<div className="col-span-12 md:col-span-4 flex justify-end">
  <div className="w-full max-w-lg aspect-[3/4] overflow-hidden">
    <img
      src={portraitImage}
      alt="Eunice Daniel"
      className="w-full h-full object-cover"
    />
  </div>
</div>
      </div>

      {/* Intro paragraph */}
      <div className="grid grid-cols-12 gap-4 px-6 md:px-10 mt-16 md:mt-24 pb-16">
        <div className="col-span-12 md:col-start-2 md:col-span-4 eyebrow text-muted-foreground">
          Introduction
        </div>
        <p className="col-span-12 md:col-span-6 text-lg md:text-2xl font-sans-tight font-light leading-snug text-foreground max-w-xl">
          A contemporary designer working across jewellery and objects, exploring material, memory and cultural practice through quiet, considered form.
        </p>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Contemporary Jewellery",
    "Material Research",
    "Cultural Narrative",
    "Object & Form",
    "Slow Craft",
  ];
  const row = [...items, ...items, ...items];
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
        <p className="col-span-12 md:col-span-6 eyebrow text-muted-foreground text-right md:col-start-10">
          Selected Works
        </p>
      </div>

      <div className="space-y-32 md:space-y-56">
        {projects.map((p, idx) => (
          <article key={p.title} className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 md:col-span-7 relative overflow-hidden aspect-[3/4] bg-muted flex items-center justify-center">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <span className="eyebrow text-muted-foreground">Image {idx + 1}</span>
              )}
              <span className="absolute top-4 left-4 eyebrow text-background mix-blend-difference">
                № {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="col-span-12 md:col-span-5 md:pl-4 md:pt-8">
              <p className="eyebrow text-accent">{p.category}</p>
              <h3
                className="font-display text-foreground mt-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              >
                {p.title}
              </h3>
              <p className="eyebrow text-muted-foreground mt-3">{p.year}</p>

              <p className="mt-8 font-sans-tight font-light text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
                {p.description}
              </p>

              <dl className="mt-10 border-t border-border divide-y divide-border max-w-md">
                {p.details.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between py-4">
                    <dt className="eyebrow text-muted-foreground">{k}</dt>
                    <dd className="font-sans-tight text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
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
          About
        </div>
      </div>

      <div className="relative grid grid-cols-12 gap-4 items-center">
      </div>

      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="hidden md:block md:col-span-3 eyebrow text-muted-foreground">
          Biography
        </div>
        <p className="col-span-12 md:col-span-6 text-xl md:text-3xl font-light leading-snug font-sans-tight max-w-2xl">
          Trained between Chennai and London, Eunice Daniel's practice sits at the intersection of contemporary jewellery, material research, and cultural narrative — translating tradition into objects that travel.
        </p>
        <div className="col-span-12 md:col-span-3 mt-8 md:mt-0 space-y-6">
<div>
  <p className="eyebrow text-muted-foreground">Education</p>

  <div className="mt-2 space-y-4 font-sans-tight">
    <div>
      <p className="text-sm text-muted-foreground">College</p>
      <p>Central Saint Martins</p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">Course</p>
      <p>MA Design: Ceramics, Furniture, Jewellery</p>
    </div>

    <div>
      <p className="text-sm text-muted-foreground">Graduation Year</p>
      <p>2026</p>
    </div>
  </div>
</div>
          <div>
            <p className="eyebrow text-muted-foreground">Awards</p>
            <p className="font-sans-tight mt-2">Two-time Gold Medalist<br/>National Institute of Technology, Chennai</p>
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">Based</p>
            <p className="font-sans-tight mt-2">London · Chennai</p>
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
    <section
      id="contact"
      className="bg-foreground text-background px-6 md:px-10 py-24 md:py-40"
    >
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-3 eyebrow text-background/60">
          Contact
        </div>
      </div>

      <h2
        className="font-display"
        style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
      >
        Contact
      </h2>

   <div className="mt-12 max-w-2xl">
  <p className="text-xl md:text-2xl font-sans-tight font-light leading-snug text-background/80">
    For commissions, collaborations, exhibitions and enquiries, please get in touch.
  </p>
</div>

      <div className="mt-20 space-y-8">
        <div>
          <p className="eyebrow text-background/60">Email</p>
          <a
            href="mailto:eunicepearline@gmail.com"
            className="mt-2 block font-display text-3xl md:text-5xl hover:opacity-70 transition-opacity"
          >
            eunicepearline@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/perez_objects"
            target="_blank"
            rel="noreferrer"
            className="text-background/80 hover:text-background transition-colors"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/eunice-daniel"
            target="_blank"
            rel="noreferrer"
            className="text-background/80 hover:text-background transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <p className="eyebrow text-background/60">Location</p>
          <p className="mt-2 text-xl font-sans-tight text-background/80">
            London · Chennai
          </p>
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