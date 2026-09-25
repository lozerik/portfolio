import { profile, about, skills, projects } from "./data";
import Reveal from "./Reveal";
import "./App.css";

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav__inner">
          <a className="nav__mark" href="#top">
            {profile.name}
          </a>
          <nav className="nav__links" aria-label="Secciones">
            <a href="#about">Sobre mí</a>
            <a href="#work">Proyectos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="wrap">
            <p className="kicker hero-in" style={{ "--delay": "40ms" }}>
              {profile.role}
            </p>
            <h1 className="hero-in" style={{ "--delay": "140ms" }}>
              Hola, soy {profile.name}.
              <span className="hero__break"> Diseño y construyo software.</span>
            </h1>
            <p className="hero__lead hero-in" style={{ "--delay": "280ms" }}>
              {profile.tagline}
            </p>
            <div className="hero__actions hero-in" style={{ "--delay": "400ms" }}>
              <a className="btn btn--primary" href="#work">
                Ver proyectos
              </a>
              <a
                className="btn"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                target="_blank"
                rel="noreferrer"
              >
                Escribirme
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap about">
            <Reveal>
              <p className="kicker">01 — Perfil</p>
              <h2>Sobre mí</h2>
              {about.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <p className="about__meta">{profile.location}</p>
            </Reveal>
            <ul className="skills" aria-label="Stack">
              {skills.map((skill, i) => (
                <Reveal as="li" key={skill} delay={80 + i * 55}>
                  {skill}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <Reveal>
              <p className="kicker">02 — Trabajo</p>
              <h2>Proyectos</h2>
            </Reveal>
            <ul className="projects">
              {projects.map((project, i) => (
                <Reveal as="li" key={project.title} delay={i * 90}>
                  <a className="project" href={project.href}>
                    <div className="project__top">
                      <h3>{project.title}</h3>
                      <span>{project.year}</span>
                    </div>
                    <p>{project.description}</p>
                    <p className="project__tags">{project.tags.join(" · ")}</p>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="contact">
          <Reveal className="wrap contact">
            <p className="kicker">03 — Contacto</p>
            <h2>¿Hablamos?</h2>
            <p>
              Abierto a colaborar en producto, front o sistemas. El contenido
              de <code>src/data.js</code> es el único archivo que tienes que
              editar para personalizar casi todo el sitio.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                target="_blank"
                rel="noreferrer"
              >
                {profile.email}
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} {profile.name}. Hecho con React + Vite.
          </p>
        </div>
      </footer>
    </>
  );
}
