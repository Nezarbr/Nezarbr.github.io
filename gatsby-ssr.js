// gatsby-ssr.js
const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      key="katex-color-override"
      dangerouslySetInnerHTML={{
        __html: `
          /* force KaTeX black in light mode, gray in dark */
          .katex, .katex * {
            color: #000 !important;
          }
          @media (prefers-color-scheme: dark) {
            .katex, .katex * {
              color: #e5e7eb !important;
            }
          }
        `,
      }}
    />
  ])
}
