# 📦 view-html-react-js — Safely Render Raw HTML in React via iframe

[![npm version](https://img.shields.io/npm/v/view-html-react-js)](https://www.npmjs.com/package/view-html-react-js) [![license](https://img.shields.io/npm/l/view-html-react-js)](LICENSE)

> **`view-html-react-js`** is a lightweight React component that securely renders raw HTML content inside a sandboxed `<iframe>`. Ideal for embedding charts, maps, or WYSIWYG outputs, it offers security, flexibility, and full TypeScript support.

---

## ✨ Features

- 🚀 **Dynamic HTML rendering** using `Blob` and `ObjectURL`
- 🔐 **Secure sandboxing** with customizable options
- 💡 **TypeScript support** out of the box
- 📐 **Customizable iframe size, title, and loading behavior**
- ⚙️ **Compatible with React, Next.js, CRA, and Vite**

## Use it to embed:

- Live dashboards or reports
- Visualizations from chart libraries
- HTML widgets or preview editors
- Exported WYSIWYG or CMS content

---

## 📦 Installation

```bash
npm install view-html-react-js
```

```bash
yarn add view-html-react-js
```

---

## 🔧 Usage

```bash
import React from "react";
import ViewHtml, {useHtmlUrl} from "view-html-react-js";

export default function App() {

  /**
 * HTML content to be rendered inside an iframe.
 * This string includes a full HTML document structure.
 * - Can be dynamically generated, e.g., from an API response.
 * - HTML content with any script in it can be rendered.
 */

  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>body { margin: 0; }</style>
    </head>
    <body>
      <h1 style="text-align:center;">Hello from Iframe</h1>
    </body>
  </html>
`;

  /**
 * Generates a temporary Blob URL from HTML content.
 * Can be used to:
 * - Open the HTML in a new tab using `window.open(blobUrl)`
 * - Embed it in an <iframe> or any custom render logic
 * - Avoid external hosting or CORS issues
 *
 * @param {string} htmlContent - The full HTML content as a string
 * @returns {string} - A temporary Blob URL
 */

  const htmlContentUrl = useHtmlUrl(htmlContent); // return a temporary blob url

  return (
     <ViewHtml
      htmlContent={htmlContent}
      options={{
        iframe: {
          width: "100%",
          height: "80vh",
          sandbox: "allow-scripts allow-same-origin",
          title: "Embedded HTML View",
          loading: "lazy",
        },
      }}
    />
  );
}

```

---

## 🧩 Props

| Prop               | Type                                                                                                               | Required | Default  | Description                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ | -------- | -------- | ---------------------------------------------- |
| `htmlContent`      | `string`                                                                                                           | ✅       | –        | Raw HTML string to render securely             |
| `options`          | `{ iframe?: { width?: string; height?: string; title?: string; sandbox?: string; loading?: "eager" \| "lazy"; } }` | ❌       | `{}`     | Optional iframe configuration                  |
| └ `iframe.width`   | `string`                                                                                                           | ❌       | `"100%"` | Width of the iframe                            |
| └ `iframe.height`  | `string`                                                                                                           | ❌       | `"100%"` | Height of the iframe                           |
| └ `iframe.title`   | `string`                                                                                                           | ❌       | `""`     | Accessible title attribute for the iframe      |
| └ `iframe.sandbox` | `string`                                                                                                           | ❌       | `""`     | Sandbox policy to restrict iframe capabilities |
| └ `iframe.loading` | `"eager"` \| `"lazy"`                                                                                              | ❌       | `"lazy"` | Defines the iframe's loading behavior          |

---

## 🔒 Security Note

The default sandbox setting do not allow any scripts. Add `allow-script` if needed.

> ⚠️ Warning: Always sanitize user-generated HTML before rendering it with view-html-react-js. Avoid injecting untrusted content directly.

---

## 🧠 Use Cases

- Embedding data visualizations (Chart.js, D3, Plotly)

- Integrating third-party maps (e.g., Leaflet, Mapbox)

- Previewing CMS/WYSIWYG HTML output

- Rendering HTML reports or templates

---

## 🧪 Compatibility

- ✅ React 16+

- ✅ TypeScript

- ✅ Next.js (App/Pages Router)

- ✅ Vite / CRA / Webpack / Rollup

---

## 📄 License

MIT License
