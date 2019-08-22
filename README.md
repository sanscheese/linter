## Resources
https://medium.com/@natterstefan/how-to-create-your-own-shared-eslint-prettier-and-stylelint-configuration-3930dd764de3

# BHWS ESLint Config

<!-- [![Build Status](https://flat.badgen.net/circleci/github/sanscheese/eslint-config)](https://circleci.com/gh/sanscheese/eslint-config)
[![npm (scoped with tag)](https://flat.badgen.net/npm/v/sanscheese/eslint-config)](https://npmjs.com/package/sanscheese/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/sanscheese/eslint-config)](https://npmjs.com/package/sanscheese/eslint-config) -->

[ESlint](https://eslint.org/)

## Usage

1. Add this to devDependencies

```bash
$ npm i -D @bhws/eslint-config
# or
$ yarn add -D @bhws/eslint-config
```

2. Install `eslint` if not already present locally or globally

```bash
$ npm i -D eslint
# or
$ yarn add -D eslint
```

3. Create a `.eslintrc` file

4. Extend the config (you can use just the scope name as ESLint will assume the `eslint-config` prefix):

```json
{
  "extends": [
    "bhws"
  ]
}
```

## Full example

A full example `.eslintrc` for a project with babel support:
> Dont forget to `npm i -D babel-eslint` or `yarn add -D babel-eslint`

```json
{
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "extends": [
    "bhws"
  ]
}
```

## Additional Notes

Setup inspired by [@nuxtjs/eslint-config](https://github.com/nuxt/eslint-config) & [eslint-config-standard](https://github.com/standard/eslint-config-standard)