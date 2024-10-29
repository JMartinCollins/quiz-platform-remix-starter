// TODO: Add documentation for i18next
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


## Providing Namespaces for components

A non-route component can have a static i18n property attached to it of type `string | string[]`. Any component rendering a component needs to spread all child components' `i18n` property within their own. 

```tsx 
// app/components/routes/Index/HeroSection.tsx
HeroSection.i18n = ["homepage"];
```

The route is responsible for exporting these values in a handle. 

```tsx
// app/routes/_index.tsx
export const handle = {
  i18n: ["homepage", ...Component.i18n]
}
```

This allows the server to preload all the translations on the server side which is necessary for SEO and UX.

## When not to include namespaces

If SEO is not a concern, then you can wrap the component in a `Suspense` component instead. This will asynchronously load the translations from the client. 

```tsx
// app/components/routes/Index/HeroSection.tsx
<Suspense fallback={<div>Loading...</div>}>
    <HeroSection />
</Suspense>
```
