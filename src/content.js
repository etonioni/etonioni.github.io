// All site copy lives here, taken from sito-personale-spec.md.
// Blocks: { p: '...' } paragraph, { ul: [...] } bullet list, { ol: [...] } numbered list.
// A list item or paragraph can be { label, text } to render a bold lead-in.

export const profile = {
  site: 'tonio.work',
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
      p: 'A PostgreSQL client: schema browsing, a SQL editor with autocomplete, query execution, data editing, ER diagrams with reverse engineering and DDL generation, and schema comparison.',
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

// GitHub Releases of tonio-work/postgres-fx. The file name contains the version:
// update href, label and version at every new release.
export const download = {
  version: '3.1.24',
  files: [
    {
      label: 'Windows x64 installer (.exe, 45 MB)',
      href: 'https://github.com/tonio-work/postgres-fx/releases/download/3_1_24/PostgresFx-3.1.24-setup-x64.exe',
    },
  ],
};

export const contact = {
  message:
    'Questions, feedback, bug reports or ideas for new features? Write me an email.',
  // Anonymous Proton mailbox. Planned: hello@tonio.work forwarded here via ImprovMX.
  email: 'tonio.work@proton.me',
};
