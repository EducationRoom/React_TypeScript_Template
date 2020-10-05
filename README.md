# React Webpack Typescript Starter

> Minimal starter with hot module replacement (HMR) for rapid development.

- **[React](https://facebook.github.io/react/)** (16.x)
- **[Webpack](https://webpack.js.org/)** (4.x)
- **[Typescript](https://www.typescriptlang.org/)** (3.x)
- **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
- Production build script (Webpack)
- Image loading/minification ([Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader))
- [SASS](http://sass-lang.com/) support
- Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
- Test framework ([Jest](https://facebook.github.io/jest/))

## Installation

1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage

**Development**

`yarn start-dev`

- Build app continuously (HMR enabled)
- App served @ `http://localhost:8080`

**Production**

`yarn start-prod`

- Build app once (HMR disabled) to `/dist/`
- App served @ `http://localhost:3000`

---

**All commands**

| Command           | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `yarn start-dev`  | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`      |
| `yarn start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000` |
| `yarn build`      | Build app to `/dist/`                                                         |
| `yarn test`       | Run tests                                                                     |
| `yarn lint`       | Run linter                                                                    |
| `yarn lint --fix` | Run linter and fix issues                                                     |
| `yarn start`      | (alias of `yarn run start-dev`)                                               |

**Note**: replace `yarn` with `npm` in `package.json` if you use npm.
