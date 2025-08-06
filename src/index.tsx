// main.tsx
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { loadFontsWithFallback } from "./assets/fonts"; // เรียกจาก fonts/index.ts
import MainPage from "./pages/home";
import "./style/index.css";

async function bootstrap() {
  try {
    await loadFontsWithFallback();
    console.log("🎉 Fonts ready, rendering app!");
  } catch (err) {
    console.warn("⚠️ Font loading failed completely", err);
  }

  render(() => (
    <Router>
      <Route>
        <Route path="/" component={MainPage} />
      </Route>
    </Router>
  ), document.getElementById("root")!);
}

bootstrap();
