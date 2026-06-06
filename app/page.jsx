"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Braces,
  Code2,
  ExternalLink,
  Figma,
  Github,
  Home as HomeIcon,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import "./globals.css";

const EMAIL = "hola@dastudio.dev";
const WHATSAPP = "+51904703590";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Diseño Web",
    text: "Sitios modernos, atractivos y adaptados a tu marca.",
  },
  {
    icon: Code2,
    title: "Desarrollo Frontend",
    text: "Interfaces rápidas, limpias y optimizadas para todos.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    text: "Páginas enfocadas en convertir visitantes en clientes.",
  },
  {
    icon: Server,
    title: "Mantenimiento Web",
    text: "Actualizaciones, mejoras, soporte y optimización.",
  },
];

const process = [
  {
    step: "01",
    title: "Descubrimos",
    text: "Entendemos tu idea, objetivos y tu marca.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Diseñamos",
    text: "Creamos una propuesta visual clara y moderna.",
    icon: Figma,
  },
  {
    step: "03",
    title: "Desarrollamos",
    text: "Convertimos el diseño en una web funcional.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Lanzamos",
    text: "Optimizamos, probamos y publicamos tu proyecto.",
    icon: Rocket,
  },
];

const projects = [
  {
    title: "Landing Page Premium",
    category: "Web Design",
    description: "Diseño moderno y minimalista para marcas de tecnología.",
    image: "premium",
    tech: ["Next.js", "React", "Tailwind"],
    code: "const brand = build('premium');",
  },
  {
    title: "Dashboard UI",
    category: "Frontend",
    description: "Panel visual con métricas, tarjetas, tablas y UX rápida.",
    image: "dashboard",
    tech: ["React", "Charts", "UI"],
    code: "deploy({ speed: 'fast' });",
  },
  {
    title: "Ecommerce Web",
    category: "Full Website",
    description: "Sitio preparado para vender, convertir y escalar.",
    image: "ecommerce",
    tech: ["Next.js", "Stripe", "SEO"],
    code: "cart.checkout(success);",
  },
];

const techStack = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Figma"];

function Logo({ compact = false }) {
  return (
    <a className="logo" href="#inicio" aria-label="DA Studio Inicio">
      <span className="logo-mark">
        <span className="logo-d">D</span>
        <span className="logo-a">A</span>
      </span>
      {!compact && <span className="logo-word">STUDIO</span>}
    </a>
  );
}

function CodeBlock({ className = "", children, title = "snippet" }) {
  return (
    <div className={`code-card ${className}`}>
      <div className="code-card-top">
        <span></span>
        <span></span>
        <span></span>
        <small>{title}</small>
      </div>
      <pre>{children}</pre>
    </div>
  );
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual ${type}`}>
      <div className="visual-nav">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="visual-body">
        {type === "dashboard" ? (
          <>
            <div className="chart-bars">
              <span></span><span></span><span></span><span></span>
            </div>
            <div className="mini-grid">
              <i></i><i></i><i></i><i></i>
            </div>
          </>
        ) : type === "ecommerce" ? (
          <>
            <div className="product-card"></div>
            <div className="product-lines">
              <span></span><span></span><span></span>
            </div>
          </>
        ) : (
          <>
            <div className="hero-preview">
              <strong>DA</strong>
              <small>studio web</small>
            </div>
            <div className="preview-lines">
              <span></span><span></span><span></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  const activeProject = projects[current];

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      "Hola DA Studio, quiero cotizar una página web."
    );
    return `https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}?text=${text}`;
  }, []);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  const nextProject = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={`site ${mounted ? "is-ready" : ""}`} id="inicio">
      <div className="grid-bg" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="header">
        <Logo />

        <nav className={menuOpen ? "nav open" : "nav"}>
          <button onClick={() => scrollTo("#inicio")}>Inicio</button>
          <button onClick={() => scrollTo("#servicios")}>Servicios</button>
          <button onClick={() => scrollTo("#proyectos")}>Proyectos</button>
          <button onClick={() => scrollTo("#proceso")}>Proceso</button>
          <button onClick={() => scrollTo("#nosotros")}>Nosotros</button>
          <button onClick={() => scrollTo("#contacto")}>Contacto</button>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Hablemos <ArrowRight size={16} />
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <aside className="side-dock" aria-label="Accesos rápidos">
        <button onClick={() => scrollTo("#inicio")}><HomeIcon size={18} /></button>
        <button onClick={() => scrollTo("#servicios")}><Code2 size={18} /></button>
        <button onClick={() => scrollTo("#proyectos")}><MonitorSmartphone size={18} /></button>
        <a href={`mailto:${EMAIL}`}><Mail size={18} /></a>
      </aside>

      <section className="hero">
        <div className="hero-code-left" aria-hidden="true">
          <p>// DA Studio</p>
          <span>const ideas = true;</span>
          <span>const code = clean;</span>
          <span>const design = modern;</span>
          <span>const create = impact;</span>
          <b>&gt;&gt; result = success;</b>
        </div>

        <div className="hero-copy">
          <p className="kicker">&lt; CODE. DESIGN. CREATE /&gt;</p>
          <h1>
            Creamos sitios web que <span>conectan ideas</span> con resultados.
          </h1>
          <p className="hero-text">
            Diseñamos y desarrollamos experiencias digitales modernas,
            funcionales y rápidas para marcas, negocios y emprendedores.
          </p>

          <div className="hero-actions">
            <button className="btn primary" onClick={() => scrollTo("#proyectos")}>
              Ver proyectos <ArrowRight size={17} />
            </button>
            <a className="btn ghost" href={`mailto:${EMAIL}`}>
              Contactar <MessageCircle size={17} />
            </a>
          </div>

          <div className="metrics">
            <div><Braces /><strong>10+</strong><span>Proyectos</span></div>
            <div><ShieldCheck /><strong>100%</strong><span>Compromiso</span></div>
            <div><Zap /><strong>Fast</strong><span>Performance</span></div>
            <div><Users /><strong>2</strong><span>Dev's</span></div>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="browser-window">
            <div className="browser-top">
              <span></span><span></span><span></span>
              <i></i>
            </div>

            <div className="logo-stage">
              <Logo compact />
              <p>STUDIO</p>
              <small>&lt; CODE. DESIGN. CREATE /&gt;</small>
            </div>

            <div className="orbit orbit-a"></div>
            <div className="orbit orbit-b"></div>
          </div>

          <CodeBlock className="float-code float-one" title="create.js">
{`function create() {
  code();
  design();
  create();
  return success;
}`}
          </CodeBlock>

          <CodeBlock className="float-code float-two" title="website.js">
{`const website = {
  responsive: true,
  fast: true,
  clean: true,
  modern: true
};`}
          </CodeBlock>

          <div className="floating-icon">
            <Code2 size={36} />
          </div>
        </div>
      </section>

      <section className="section services-section" id="servicios">
        <div className="section-label">
          <span></span>
          <p>SERVICIOS</p>
        </div>

        <div className="services-grid">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article className="service-card" key={item.title}>
                <div className="service-icon"><Icon size={28} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button onClick={() => scrollTo("#contacto")} aria-label={`Cotizar ${item.title}`}>
                  <ArrowRight size={18} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section projects-layout" id="proyectos">
        <div className="project-info">
          <p className="section-mini">PROYECTOS DESTACADOS</p>
          <h2>Ideas que podemos desarrollar</h2>
          <p>
            Un carrusel funcional para mostrar conceptos, demos o trabajos reales.
            Cambia los textos por tus proyectos finales.
          </p>
          <div className="carousel-actions">
            <button onClick={prevProject} aria-label="Proyecto anterior">←</button>
            <button onClick={nextProject} aria-label="Proyecto siguiente">→</button>
          </div>
        </div>

        <div className="featured-project">
          <div className="project-left">
            <span>{activeProject.category}</span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <div className="tech-list">
              {activeProject.tech.map((tech) => (
                <small key={tech}>{tech}</small>
              ))}
            </div>
          </div>

          <ProjectVisual type={activeProject.image} />

          <div className="project-dots">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={current === index ? "active" : ""}
                onClick={() => setCurrent(index)}
                aria-label={`Ver ${project.title}`}
              />
            ))}
          </div>

          <button className="project-open" onClick={() => scrollTo("#contacto")}>
            Cotizar similar <ExternalLink size={16} />
          </button>
        </div>
      </section>

      <section className="terminal-section">
        <div className="terminal">
          <div className="terminal-top">
            <span></span><span></span><span></span>
            <p>terminal</p>
          </div>
          <pre>
{`// DA Studio
function build(idea) {
  const code = "clean";
  const design = "modern";
  const create = "impact";

  return deploy(idea);
}

build(yourProject); // Let's create something awesome 🚀`}
          </pre>
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <div className="section-label">
          <span></span>
          <p>PROCESO DE TRABAJO</p>
        </div>

        <div className="process-grid">
          {process.map((item) => {
            const Icon = item.icon;
            return (
              <article className="process-card" key={item.step}>
                <div className="process-icon"><Icon size={26} /></div>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section" id="nosotros">
        <div className="about-copy">
          <p className="section-mini">SOBRE NOSOTROS</p>
          <h2>Código que funciona. Diseño que impacta.</h2>
          <p>
            Somos DA Studio, un equipo enfocado en crear soluciones web con
            diseño moderno, código eficiente y atención al detalle.
          </p>
        </div>

        <div className="stack-card">
          <p>Tecnologías que usamos</p>
          <div>
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-panel" id="contacto">
        <div className="cta-icon"><Code2 size={42} /></div>
        <div>
          <p>&lt; start_project /&gt;</p>
          <h2>¿Listo para llevar tu idea a la web?</h2>
          <span>
            Hablemos de tu proyecto y creemos algo profesional, moderno y funcional.
          </span>
        </div>
        <div className="cta-actions">
          <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hablemos ahora <ArrowRight size={18} />
          </a>
          <button className="btn ghost" onClick={() => scrollTo("#proyectos")}>
            Ver proyectos
          </button>
        </div>
      </section>

      <footer className="footer">
        <Logo />

        <p>© 2025 DA Studio. Todos los derechos reservados.</p>

        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={19} />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <Mail size={19} />
          </a>
        </div>
      </footer>
    </main>
  );
}
