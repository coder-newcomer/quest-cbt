# Developing Renderer Process (Frontend)

Here's a brief guide to developing the renderer process (frontend), including code structure and directories. Look at the tree:

- [`index.html`](index.html) - The main HTML file for renderer, you shall NOT modify this file except for preprocessed properties which impossible to pass by JSX (e.g `<meta>`), instead:
- [`src`](src) - Store everything in here, which:
  - [`assets`](assets) - Assets directory, for arbitrary files likes images, videos, etc.
  - [`components`](components) - Components directory, store individual component's styles here as well.
  - [`pages`](pages) - Components to be rendered as Pages used by the Router, store individual component's styles here as well.
  - [`scripts`](scripts) - Scripts or modules directory which used cross Components or Pages.
  - [`index.tsx`](index.tsx) - The main entry file for renderer, only modify for routing, baseline CSS, and temporal debugging.

## Libraries used

- [Typescript](https://www.typescriptlang.org/) - to prevents bugs caused by unexpected types inconsistencies. If you're coming from plain JavaScript background, go a bit learn of type-safety and type inference until you good to go. It'll benefits if you have a clear understanding of what you're doing especially in this kind of project.
- [SolidJS](https://docs.solidjs.com/) - at first this project about to use [React](https://react.dev), but I think [this pretty new but performant](https://krausest.github.io/js-framework-benchmark/current.html) library is interesting. Why not give a shoot?
- [Anime.js](https://animejs.com/) - I want some fluid animation with this library. Works well alongside SolidJS with [DOM Node](https://animejs.com/documentation/#domNode) or [Selector](https://animejs.com/documentation/#cssSelector).
