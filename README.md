# tonio.work

Sito anonimo per software gratuito, online su **https://tonio.work**.

Pagina singola costruita con Vite, React e [Carbon Design System](https://carbondesignsystem.com/).
Tutto il sito usa il font IBM Plex Mono. I contenuti vengono da `sito-personale-spec.md`
(versione italiana: `sito-personale-spec-it.md`).

## Struttura

| File | Contenuto |
|---|---|
| `src/content.js` | Tutti i testi: intestazione, software, contatti |
| `src/App.jsx` | Layout della pagina |
| `src/index.scss` | Tema, font e stili |
| `src/main.jsx` | Avvio di React e import del font |
| `index.html` | Titolo, meta description, Open Graph, favicon |
| `public/favicon.svg` | Icona "Carbon" dal set ufficiale `@carbon/icons` (Apache-2.0) |
| `public/CNAME` | Dominio personalizzato `tonio.work` |
| `.github/workflows/deploy.yml` | Build e pubblicazione su GitHub Pages |

Sezioni della pagina: introduzione (mare con barca a vela in ASCII art, headline), Software,
Download, Contact (email tonio.work@proton.me). La barra in alto porta alle sezioni; sotto i 1056px
le sezioni sono in un menu ad hamburger.

## Scelte di design

- **Font**: solo IBM Plex Mono, dal pacchetto `@ibm/plex-mono` (servito dal sito, nessun CDN).
  Il caricamento dei font di Carbon è disattivato (`$css--font-face: false`) e tutte le famiglie
  di Carbon (`sans`, `mono`, `serif`) sono mappate su Plex Mono.
- **Tema**: chiaro (`white`) o scuro (`g100`) in base alle impostazioni del sistema.
- **Layout**: testo semplice in colonna, senza riquadri (`Tile`) né etichette (`Tag`).
  Titoli di sezione e di voce in grassetto.
- **Carbon caricato solo in parte**: `index.scss` importa solo le basi (config, type, reset,
  grid, layer, theme) e gli stili dei componenti usati: UI Shell (header, navigazione,
  skip-to-content, content) e Link.
  **Se aggiungi un componente Carbon, aggiungi anche il suo
  `@use '@carbon/react/scss/components/<nome>'`**, altrimenti appare senza stile.
- **Navigazione**: `scroll-padding-top` è uguale all'altezza dell'header (3rem), così la linea
  di separazione della sezione precedente resta nascosta sotto l'header. La sezione Contact è
  alta quanto lo schermo, perché il link "Contact" possa portarla in cima.

## Sviluppo

```bash
npm install
npm run dev        # http://localhost:5173, si aggiorna a ogni salvataggio
npm run build      # build di produzione in dist/
npm run preview    # anteprima della build su http://localhost:4173
```

## Pubblicazione

Ogni push su `main` avvia `.github/workflows/deploy.yml`, che compila il sito e lo pubblica
su GitHub Pages in 1–2 minuti. Si può anche lanciare a mano dalla scheda Actions
(`workflow_dispatch`).

Impostazioni di GitHub Pages (Settings → Pages del repository):

- **Source**: GitHub Actions (non "Deploy from a branch": pubblicherebbe i sorgenti non compilati).
- **Custom domain**: `tonio.work`. Con il deploy tramite Actions il file `public/CNAME` non
  basta: il dominio va impostato anche qui.
- **Enforce HTTPS**: attivo. Il certificato Let's Encrypt per `tonio.work` e `www.tonio.work`
  è emesso e rinnovato da GitHub.

Se il certificato non viene emesso, togliere e rimettere il dominio personalizzato di solito
fa ripartire l'emissione.

## Dominio e DNS (GoDaddy)

Il dominio `tonio.work` è registrato su GoDaddy, che gestisce anche i DNS
(`ns17`/`ns18.domaincontrol.com`). Su GoDaddy non deve esserci nessun **inoltro**: un inoltro
attivo sostituisce i record A con gli indirizzi di GoDaddy.

| Tipo | Nome | Valore | Scopo |
|---|---|---|---|
| A | `@` | `185.199.108.153` | GitHub Pages |
| A | `@` | `185.199.109.153` | GitHub Pages |
| A | `@` | `185.199.110.153` | GitHub Pages |
| A | `@` | `185.199.111.153` | GitHub Pages |
| CNAME | `www` | `etonioni.github.io` | `www` reindirizza a `tonio.work` |
| MX | `@` | `.` (priorità 0) | Il dominio non riceve posta |
| TXT | `@` | `v=spf1 -all` | Il dominio non invia posta |
| TXT | `_dmarc` | `v=DMARC1; p=reject;` | Rifiuta le email false a nome del dominio |
| NS | `zone1` | nameserver AWS Route 53 | Sottodominio delegato ad AWS, **in uso: non toccare** |

Più i record NS e SOA di GoDaddy per `@`, da non modificare.

Note:

- Le modifiche ai DNS su GoDaddy possono richiedere fino a circa un'ora per essere pubblicate,
  e nel frattempo i server possono dare risposte diverse.
- Il dominio non usa più servizi di posta (Mailgun, Brevo, Amazon SES): i loro record sono stati
  rimossi. Per tornare a inviare email da `@tonio.work` vanno adattati anche SPF e DMARC.
