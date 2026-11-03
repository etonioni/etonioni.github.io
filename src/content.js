// All site copy lives here, taken from sito-personale-spec.md.
// Blocks: { p: '...' } paragraph, { ul: [...] } bullet list, { ol: [...] } numbered list.
// A list item or paragraph can be { label, text } to render a bold lead-in.

export const profile = {
  site: 'tonio.work',
  role: 'Free desktop software',
  // ASCII seascape shown in the hero, 72 characters wide: it is scaled to the full
  // page width. String.raw keeps the backslashes; the block starts and ends with a
  // newline (a trailing \ would escape the backtick), removed by slice(1, -1).
  asciiArt: String.raw`
       .--.                 \/                            \  |  /
     .(    ).     |>           \/     .-.                  .---.
    (___.____)    |                 (__.__)             --(     )--
                 /|\                            \/         ${"`"}---'
                / | \                                     /  |  \
               /  |  \
              /   |   \
             /____|____\
~^~^~~^~~^\_______________/~^~~^~~~^~^~~^~~^~^~~^~~~^~^~~^~~^~^~~^~~~^~^
  ~    ~~     ~      ~~~     ~    ~~      ~     ~~~    ~      ~~    ~
 ~~~      ~      ~~      ~~~      ~     ~~~      ~      ~~      ~~~
     ~~      ~~~     ~      ~~      ~~~      ~      ~~~     ~      ~~
`.slice(1, -1),
  headline: 'Simple tools, free to use.',
};

export const software = {
  body: [
    {
      p: 'A PostgreSQL client built in Java: schema browsing, a SQL editor with autocomplete, query execution, data editing, ER diagrams with reverse engineering and DDL generation, and schema comparison — all against self-contained portable PostgreSQL archives.',
    },
  ],
  // Served from public/ at the site root.
  screenshot: {
    src: 'postgre-fx.png',
    alt: 'PostgresFx main window: database tree on the left, SQL editor and query results table on the right.',
    width: 1627,
    height: 1102,
  },
};

// Placeholder until the app is released: then add the download links.
export const download = {
  body: [{ p: 'Downloads for Windows and Linux (.deb package for Debian, Ubuntu and derivatives) will be available here soon.' }],
};

export const contact = {
  message:
    'Questions, feedback, bug reports or ideas for new features? Write me an email, I read every message.',
  // Anonymous Proton mailbox. Planned: hello@tonio.work forwarded here via ImprovMX.
  email: 'tonio.work@proton.me',
};
