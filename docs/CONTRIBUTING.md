# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a [code of conduct](CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Development environment setup

To set up a development environment, please follow these steps:

1. Clone the repo

   ```sh
   git clone https://github.com/coder-newcomer/quest-cbt
   ```

2. Then install dependencies, recommended using [pnpm](https://pnpm.io/)

   ```sh
   pnpm install
   ```

3. Start development server

   ```sh
   pnpm run dev
   ```

> [!IMPORTANT]
> While this project using [`electron-vite`](https://electron-vite.org) and its bundler, in order to add packages, install package for main process as `devDependencies` while for renderer process as `dependencies`. For example:
>
> ```sh
> # main process
> pnpm add -D mime
>
> # renderer process
> pnpm add solid-router
> ```

## Issues and feature requests

You've found a bug in the source code, a mistake in the documentation, or maybe you'd like a new feature? You can help us by [submitting an issue on GitHub](issues). Before you create an issue, make sure to search the issue archive -- your issue may have already been addressed!

Please try to create bug reports that are:

- _Reproducible._ Include steps to reproduce the problem.
- _Specific._ Include as much detail as possible: which version, what environment, etc.
- _Unique._ Do not duplicate existing opened issues.
- _Scoped to a Single Bug._ One bug per report.

**Even better: Submit a pull request with a fix or new feature!**

### How to submit a Pull Request

1. Search our repository for open or closed
   [Pull Requests](pulls)
   that relate to your submission. You don't want to duplicate effort.
2. Fork the project
3. Create your feature branch (`git checkout -b feat/amazing_feature`)
4. Commit your changes (`git commit -m 'feat: add amazing_feature'`) this project uses [conventional commits](https://www.conventionalcommits.org), so please follow the specification in your commit messages.
5. Push to the branch (`git push origin feat/amazing_feature`)
6. [Open a Pull Request](compare?expand=1)
