### Remix Routes Plugin and $path Helper

The `remix-routes` plugin provides a way to reference URL strings for routes.
The `$path` helper typechecks string URL paths against the existing routes.

Here is an example of how to use the `$path` helper:
```ts
import { $path } from 'remix-routes';

const url = $path('/dashboard/quizzes'); // => typesafe string
```