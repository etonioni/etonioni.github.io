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

// Placeholder until the JavaFX app is released: then add name, description,
// screenshot and download links (GitHub Releases).
export const software = {
  body: [
    {
      p: 'A free desktop app built with JavaFX is on its way. Description, screenshots and downloads for Windows, macOS and Linux will be published here.',
    },
  ],
};

export const contact = {
  message:
    'Questions, feedback, bug reports or ideas for new features? Write me an email, I read every message.',
  // Anonymous Proton mailbox. Planned: hello@tonio.work forwarded here via ImprovMX.
  email: 'tonio.work@proton.me',
};
