# AllWebSD.com

<a href="https://www.allwebsd.com" rel="AllWebSD.com">![Image of AllWebSD](https://github.com/marklreyes/react-router-allwebsd/blob/main/public/logo-allwebsd.png)</a>

Just a Web Developer storytelling, teaching and community building out of America's Finest City.

[![Netlify Status](https://api.netlify.com/api/v1/badges/cdacf90b-85f2-43ec-9490-d6290ee48524/deploy-status)](https://app.netlify.com/projects/allwebsd/deploys)

## Features

A modern, production-ready template for building full-stack React applications using React Router, deployed to Netlify.

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🌼 daisyUI for component library
- 🌓 Light/Dark Mode aka "City Connect"
- 🔍 Lexical Search for episodes
- ☁️  Netlify Functions (Weather data fetched from Open-Meteo, RSS Feed fetched from Castbox, OpenAI)
- 🧪 Unit testing with [Vitest](https://vitest.dev/)
- 📖 [React Router docs](https://reactrouter.com/)
- 💻 Configured for deployment to Netlify

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.


## Unit Testing:

Test all unit tests found in [__tests__](https://github.com/marklreyes/react-router-allwebsd/tree/main/app/__tests__) directory.
```bash
npm test
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Previewing a Production build

To preview a production build locally, use the [Netlify CLI](https://cli.netlify.com):

**Option 1 - Serve production build directly:**
```bash
npx netlify dev --dir build/client --port 8888
```

**Option 2 - Use default dev command (may have asset serving issues):**
```bash
npx netlify-cli dev
```

Make sure to build first:
```bash
npm run build
```

## Deployment

This template is preconfigured for deployment to Netlify.

Follow <https://docs.netlify.com/welcome/add-new-site/> to add this project as a site
in your Netlify account.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## See also

[Guide: how to deploy a React Router 7 site to Netlify](https://developers.netlify.com/guides/how-to-deploy-a-react-router-7-site-to-netlify/)

---

Built with ❤️ using React Router.
