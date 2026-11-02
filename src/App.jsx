import {
  Column,
  Content,
  Grid,
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Link,
  SkipToContent,
} from '@carbon/react';
import { LogoLinkedin } from '@carbon/icons-react';
import { contact, notes, profile, projects, tools } from './content.js';

const SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'notes', label: 'Notes' },
  { id: 'tools', label: 'Tools' },
  { id: 'contact', label: 'Contact' },
];

const CRITICISM_MARKER = 'If I had to offer a criticism';

function Inline({ item }) {
  if (typeof item === 'string') return item;
  return (
    <>
      <strong>{item.label}:</strong> {item.text}
    </>
  );
}

function Blocks({ blocks }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        if (block.p) return <p key={i}>{block.p}</p>;
        const List = block.ol ? 'ol' : 'ul';
        return (
          <List key={i}>
            {(block.ol || block.ul).map((item, j) => (
              <li key={j}>
                <Inline item={item} />
              </li>
            ))}
          </List>
        );
      })}
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Grid>
        <Column sm={4} md={8} lg={16}>
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
        </Column>
        {children}
      </Grid>
    </section>
  );
}

function ToolText({ text }) {
  const idx = text.indexOf(CRITICISM_MARKER);
  if (idx === -1) return <Blocks blocks={[{ p: text }]} />;
  return (
    <div className="prose">
      <h4 className="card__subtitle">Strengths</h4>
      <p>{text.slice(0, idx).trim()}</p>
      <h4 className="card__subtitle">Criticism</h4>
      <p>{text.slice(idx).trim()}</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header aria-label={profile.name}>
        <SkipToContent />
        <HeaderName href="#top" prefix="">
          {profile.site}
        </HeaderName>
        <HeaderNavigation aria-label="Sections">
          {SECTIONS.map((s) => (
            <HeaderMenuItem key={s.id} href={`#${s.id}`}>
              {s.label}
            </HeaderMenuItem>
          ))}
        </HeaderNavigation>
      </Header>

      <Content id="main-content" className="site-content">
        <header id="top" className="hero">
          <Grid>
            <Column sm={4} md={8} lg={12}>
              <p className="hero__role">{profile.role}</p>
              <h1 className="hero__name">{profile.name}</h1>
              <p className="hero__headline">{profile.headline}</p>
            </Column>
          </Grid>
        </header>

        <Section id="projects" title="Projects I've Worked On">
          <Column sm={4} md={8} lg={12}>
            {projects.map((project) => (
              <article key={project.title} className="note">
                <h3 className="card__title">{project.title}</h3>
                <Blocks blocks={project.body} />
              </article>
            ))}
          </Column>
        </Section>

        <Section id="notes" title="Personal Notes">
          <Column sm={4} md={8} lg={12}>
            {notes.map((note) => (
              <article key={note.title} className="note">
                <h3 className="card__title">{note.title}</h3>
                <Blocks blocks={note.body} />
              </article>
            ))}
          </Column>
        </Section>

        <Section id="tools" title="Tools I Use">
          <Column sm={4} md={8} lg={12}>
            {tools.map((tool) => (
              <article key={tool.title} className="note">
                <h3 className="card__title">{tool.title}</h3>
                <ToolText text={tool.body[0].p} />
              </article>
            ))}
          </Column>
        </Section>

        <Section id="contact" title="Contact Me">
          <Column sm={4} md={8} lg={16}>
            <Link
              className="contact__link"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              renderIcon={LogoLinkedin}
            >
              LinkedIn
            </Link>
          </Column>
        </Section>

        <footer className="footer">
          <Grid>
            <Column sm={4} md={8} lg={16}>
              © {new Date().getFullYear()} {profile.name} · {profile.site}
            </Column>
          </Grid>
        </footer>
      </Content>
    </>
  );
}
