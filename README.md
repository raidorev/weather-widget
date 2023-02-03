# Weather widget

A weather widget that shows the current weather for given locations. The widget is built with Vue 3, Vite, TypeScript, Tailwind CSS and OpenWeatherMap API.

By default the widget shows the weather for the current location. The user can add, remove and order locations in settings menu.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
pnpm exec playwright install

# When testing on CI, must build the project first
pnpm run build

# Runs the end-to-end tests
pnpm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```
