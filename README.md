# template.react-app.rsbuild

## Requirements

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [PNPM](https://pnpm.io/)

## Setup

Install the dependencies:

```bash
pnpm setup
```

## IDE Setup

TailWind's Config for WebStorm

```json
{
  "includeLanguages": {
    "ftl": "html",
    "jinja": "html",
    "jinja2": "html",
    "smarty": "html",
    "tmpl": "gohtml",
    "cshtml": "html",
    "vbhtml": "html",
    "razor": "html",
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "files": {
    "exclude": ["**/.git/**", "**/node_modules/**", "**/.hg/**", "**/.svn/**"]
  },
  "emmetCompletions": false,
  "classAttributes": ["class", "className", "ngClass", "tw"],
  "colorDecorators": false,
  "showPixelEquivalents": true,
  "rootFontSize": 16,
  "hovers": true,
  "suggestions": true,
  "codeActions": true,
  "validate": true,
  "lint": {
    "invalidScreen": "error",
    "invalidVariant": "error",
    "invalidTailwindDirective": "error",
    "invalidApply": "error",
    "invalidConfigPath": "error",
    "cssConflict": "warning",
    "recommendedVariantOrder": "warning"
  },
  "experimental": {
    "configFile": null,
    "classRegex": [
      "tw`([^`]*)",
      "tw=\"([^\"]*)",
      "tw={\"([^\"}]*)",
      "tw\\.\\w+`([^`]*)",
      "tw\\(.*?\\)`([^`]*)"
    ]
  }
}
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

Run unit tests via Jest:

```bash
pnpm test
```
