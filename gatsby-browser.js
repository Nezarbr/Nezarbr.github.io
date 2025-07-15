// gatsby-browser.js

// 1) KaTeX’s CSS
import "katex/dist/katex.min.css";

// 2) Your Tailwind build
import "./src/css/index.css";

// 3) Your existing global overrides
import "./src/styles/global.css";

// 4) Then your KaTeX-specific overrides last
import "./src/styles/katex-overrides.css";
