module.exports = {
  extends: [
    // Use the Standard config as the base
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // Enforce a standard order for CSS properties
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // Override rules that would interfere with Prettier
    // https://github.com/shannonmoeller/stylelint-config-prettier
    'stylelint-config-prettier',
  ],
  ignoreFiles: [
    './dist/**/*',
    './node_modules/**/*',
  ],
  rules: {
    // Allow newlines inside class attribute values
    'string-no-newline': null,
    // @todo - determine my css class and id rules. kebab?
    // 'selector-class-pattern': /^[a-z][a-zA-Z]*(-(enter|leave)(-(active|to))?)?$/,
    // 'selector-id-pattern': /^[a-z][a-zA-Z]*$/,
    // Limit the number of universal selectors in a selector,
    // to avoid very slow selectors
    'selector-max-universal': 1,
    // Disallow allow global element/type selectors in scoped modules
    'selector-max-type': [ 0, { ignore: [ 'child', 'descendant', 'compounded', ], }, ],
    // ===
    // PRETTIER
    // ===
    // HACK: to compensate for https://github.com/shannonmoeller/stylelint-config-prettier/issues/4
    // Modifying setting from Standard: https://github.com/stylelint/stylelint-config-standard/blob/7b76d7d0060f2e13a331806a09c2096c7536b0a6/index.js#L6
    'at-rule-empty-line-before': [
      'always',
      {
        except: [ 'blockless-after-same-name-blockless', 'first-nested', ],
        ignore: [ 'after-comment', ],
        ignoreAtRules: [ 'else', ],
      },
    ],
  },
}
