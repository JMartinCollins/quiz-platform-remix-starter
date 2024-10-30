

# Welcome to This Remix Starter!

- 📖 [Remix docs](https://remix.run/docs)

## Features 🍕

- Typescript
- [i18next](docs/i18next.md)
    - loads all translations into memory on the server
    - scans for translation files in locales folder and components folders
    - (no type safety yet for t() and useTranslation hooks yet)
- tailwind css
- shadcn/ui w/ lucide icons
- remix flat routes
- remix routes $path helper for typesafe routes

Coming soon...
- // testing
    - Vitest
- // dragndrop
- // logging
- // monitoring
- // auth (remix-auth)
- // remix utils
- // conform

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
