# dumi-theme-taro

[![NPM version](https://img.shields.io/npm/v/dumi-theme-taro.svg?style=flat)](https://npmjs.org/package/dumi-theme-taro)
[![NPM downloads](http://img.shields.io/npm/dm/dumi-theme-taro.svg?style=flat)](https://npmjs.org/package/dumi-theme-taro)

A theme package for the [dumi](https://d.umijs.org) framework.

## Usage

Install this theme into `devDependencies`:

```bash
$ npm i dumi-theme-taro -D
```

Configure it in dumi config file `.dumirc.ts`:

```ts
import { defineConfig } from 'dumi';

export defineConfig({
  themeConfig: {
    ...
  },
});
```

That's all, now you can execute `dumi dev` and enjoy this theme.

## Options

TODO

## Development

```bash
$ pnpm install
```

After the dependencies are installed, a symlink from `example/.dumi/theme` to `../../src` will be created automatically, the symlink makes dumi load our theme package as a local theme, so we can start the example directly, HMR is also available:

```bash
# switch to example directory
$ cd example

# start dev server to preview
npm run dev
```

> Note: all Node.js-runtime files should be put into `src/plugin` directory, `father-plugin-dumi-theme` will transform them to CommonJS dist automatically.

dumi theme development documentation: https://d.umijs.org/theme

## LICENSE

MIT
