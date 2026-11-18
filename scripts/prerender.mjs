// Prerender: wstawia wyrenderowany HTML do plików w dist/public.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const pub = path.join(root, "dist/public");
const { render } = await import(pathToFileURL(path.join(root, "dist/server/entry-server.js")).href);
const template = fs.readFileSync(path.join(pub, "index.html"), "utf8");
const routes = [
  ["/", "index.html"],
  ["/regulamin", "regulamin.html"],
  ["/polityka-prywatnosci", "polityka-prywatnosci.html"],
  ["/wyprawka", "wyprawka.html"],
];
for (const [url, file] of routes) {
  const html = render(url);
  if (!html || html.length < 200) throw new Error(`Prerender ${url}: pusty wynik`);
  let out = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (url !== "/") out = out.replace('<link rel="canonical" href="https://dorotamatula.pl/" />', `<link rel="canonical" href="https://dorotamatula.pl${url}" />`).replace('<meta property="og:url" content="https://dorotamatula.pl/" />', `<meta property="og:url" content="https://dorotamatula.pl${url}" />`);
  fs.writeFileSync(path.join(pub, file), out);
  console.log(`prerender ${url} -> ${file} (${Math.round(html.length / 1024)} KB)`);
}
// Strony po płatności: pusty szkielet (bez treści strony głównej) i noindex.
fs.mkdirSync(path.join(pub, "checkout"), { recursive: true });
for (const name of ["success", "cancel"]) {
  const shell = template.replace("<head>", '<head>\n    <meta name="robots" content="noindex, nofollow" />');
  fs.writeFileSync(path.join(pub, "checkout", `${name}.html`), shell);
  console.log(`shell /checkout/${name} -> checkout/${name}.html`);
}
fs.rmSync(path.join(root, "dist/server"), { recursive: true, force: true });
