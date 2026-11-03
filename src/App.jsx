import {
  Column,
  Content,
  Grid,
  Header,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Link,
  SideNav,
  SideNavItems,
  SideNavLink,
  SkipToContent,
} from '@carbon/react';
import { useState } from 'react';
import { Download, Email } from '@carbon/icons-react';
import { contact, download, profile, software } from './content.js';

const SECTIONS = [
  { id: 'software', label: 'Software' },
  { id: 'download', label: 'Download' },
  { id: 'contact', label: 'Contact' },
];

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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header aria-label={profile.site}>
        <SkipToContent />
        {/* Carbon hides HeaderNavigation below the lg breakpoint (1056px):
            on smaller screens the sections live in the hamburger side nav. */}
        <HeaderMenuButton
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          isActive={menuOpen}
          aria-expanded={menuOpen}
        />
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
        <SideNav
          aria-label="Sections"
          expanded={menuOpen}
          isPersistent={false}
          onOverlayClick={() => setMenuOpen(false)}
        >
          <SideNavItems>
            {SECTIONS.map((s) => (
              <SideNavLink
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </SideNavLink>
            ))}
          </SideNavItems>
        </SideNav>
      </Header>

      <Content id="main-content" className="site-content">
        <header id="top" className="hero">
          <Grid>
            <Column sm={4} md={8} lg={16}>
              <p className="hero__role">{profile.role}</p>
              <h1 className="hero__name">
                <span className="visually-hidden">{profile.site}</span>
                <pre className="hero__ascii-art" aria-hidden="true">
                  {profile.asciiArt}
                </pre>
              </h1>
              <p className="hero__headline">{profile.headline}</p>
            </Column>
          </Grid>
        </header>

        <Section id="software" title="Software">
          <Column sm={4} md={8} lg={12}>
            <Blocks blocks={software.body} />
            {software.screenshot && (
              <a
                className="screenshot"
                href={`${import.meta.env.BASE_URL}${software.screenshot.src}`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${software.screenshot.src}`}
                  alt={software.screenshot.alt}
                  width={software.screenshot.width}
                  height={software.screenshot.height}
                  loading="lazy"
                />
              </a>
            )}
          </Column>
        </Section>

        <Section id="download" title="Download">
          <Column sm={4} md={8} lg={12}>
            <p className="prose">PostgresFx {download.version}</p>
            {download.files.map((file) => (
              <p key={file.href} className="download__file">
                <Link
                  className="download__link"
                  href={file.href}
                  renderIcon={Download}
                >
                  {file.label}
                </Link>
              </p>
            ))}
          </Column>
        </Section>

        <Section id="contact" title="Contact Me">
          <Column sm={4} md={8} lg={12}>
            <p className="prose contact__message">{contact.message}</p>
            <Link
              className="contact__link"
              href={`mailto:${contact.email}`}
              renderIcon={Email}
            >
              {contact.email}
            </Link>
          </Column>
        </Section>

        <footer className="footer">
          <Grid>
            <Column sm={4} md={8} lg={16}>
              © {new Date().getFullYear()} {profile.site}
            </Column>
          </Grid>
        </footer>
      </Content>
    </>
  );
}
