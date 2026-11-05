import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

// Używane tylko przy budowaniu: generuje gotowy HTML strony (prerender),
// żeby Google i boty AI widziały treść bez uruchamiania JavaScriptu.
export function render(url: string) {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
}
