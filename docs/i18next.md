// TODO: Add typesafe translation capability

## Resources

#### i18next API Overview
[official i18next api documentation](https://www.i18next.com/overview/api).

#### i18next utils and plugins
[i18next utils and plugins](https://www.i18next.com/overview/plugins-and-utils).

#### Remix i18next
[remix-i18next](https://github.com/sergiodxa/remix-i18next)

#### React i18next
[React i18next](https://react.i18next.com/)


## Overview

The translation resoruces are loaded into memory at build time inside of `initResources.server.ts`. It looks for two patterns of files:

1. `/app/**/translations/*.json`
Any file in a directory called `translations` will be loaded as `{{namespace}}.{{language}}.json`.

```
ComponentName/
  |-- translations/
    |-- ComponentName.en.json
    |-- ComponentName.es.json
```
This component has translations for English and Spanish in the namespace `ComponentName`.



2. `/app/locales/*.json`

This directory has a directory for each language, and each json file below that is loaded as `{{language}}/{{namespace}}.json`

```
locales/
  |-- en/
    |-- SomeNamespace.json
  |-- es/
    |-- SomeNamespace.json
```

All of these namespaces will be loaded into memory at runtime. 

## Providing Namespaces for components

A non-route component can have a static i18n property attached to it of type `string | string[]`. Any component rendering a component needs to spread all child components' `i18n` property within their own. 

```tsx 
// app/components/path/to/SomeComponent.tsx
SomeComponent.handle = {
  i18n: [
    "SomeComponent", //my own namespace
    "other_namespace_I_depend_on" // maybe "terminology" or something common
    ];
}
```

**The route** is **<<responsible\>\>** for exporting these values in a handle. 

```tsx
// app/routes/path/to/_index.tsx <-- renders SomeComponent
export const handle = {
  i18n: ["homepage", ...SomeComponent.handle.i18n]
}
```

This allows the server to preload all the translations on the server side which is necessary for SEO and UX, and preventing hydration errors.

## When not to include namespaces

If SEO is not a concern, then you can wrap the component in a `Suspense` component instead. This will asynchronously load the translations from the client. 

```tsx
// app/components/routes/Index/HeroSection.tsx
<Suspense fallback={<div>Loading...</div>}>
    <HeroSection />
</Suspense>
```

This is okay for dashboards and things that aren't public. 
