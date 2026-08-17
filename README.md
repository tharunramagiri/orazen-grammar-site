# Orazen Grammar (Site)

A branded landing page for Orazen Grammar, with a **live, fully client-side grammar-check
demo** powered by [Harper](https://github.com/automattic/harper) (Apache-2.0), via the
official `harper.js` npm package.

Unlike a copy of Harper's own docs/marketing site, this is a small, purpose-built Next.js
app: fast to build and deploy, genuinely functional (real WASM-based grammar checking runs
in the visitor's browser — nothing is faked), and branded for Orazen.

## Credits

Grammar-checking engine: [Harper](https://github.com/automattic/harper) by Automattic,
Apache-2.0 licensed. This site packages and brands it for Orazen; all credit for the
underlying engine goes to the Harper project.

## Running locally

```bash
npm install
npm run build
npm start
```
