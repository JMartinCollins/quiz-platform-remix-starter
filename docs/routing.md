This project uses `remix-flat-routes` for routing. You can find more information about this library on its [GitHub page](https://github.com/kiliman/remix-flat-routes).

Some basics:

reserved filenames:
- index.tsx
- route.tsx
- page.tsx
- layout.tsx

reserved symbols in pathnames:
- _ at ***beginning*** of directory: Indicates a dynamic route segment.
- _ at ***beginning*** of filename: Indicates a dynamic route segment.
- _ at the ***end*** of a directory: override inheriting parent layout.

---

***the table below is copied from the [remix-flat-routes GitHub page](https://github.com/kiliman/remix-flat-routes).***

## Conventions

| filename                        | convention             | behavior                        |
| ------------------------------- | ---------------------- | ------------------------------- |
| `privacy.jsx`                   | filename               | normal route                    |
| `pages.tos.jsx`                 | dot with no layout     | normal route, `.` -> `/`        |
| `about.jsx`                     | filename with children | parent layout route             |
| `about.contact.jsx`             | dot                    | child route of layout           |
| `about.index.jsx`               | index filename         | index route of layout           |
| `about._index.jsx`              | alias of index.tsx     | index route of layout\*         |
| `about_.company.jsx`            | trailing underscore    | url segment, no layout          |
| `app_.projects.$id.roadmap.tsx` | trailing underscore    | change default parent layout    |
| `_auth.jsx`                     | leading underscore     | layout nesting, no url segment  |
| `_auth.login.jsx`               | leading underscore     | child of pathless layout route  |
| `users.$userId.jsx`             | leading $              | URL param                       |
| `docs.$.jsx`                    | bare $                 | splat route                     |
| `dashboard.route.jsx`           | route suffix           | optional, ignored completely    |
| `investors/[index].jsx`         | brackets               | escapes conventional characters |

> NOTE: The underscore prefix for the index route is optional but helps sort the file to the top of the directory listing.
