module.exports = {
  '*.js': [
    'yarn lint:eslint',
    'git add',
    // 'yarn test:unit:file',
  ],
  '{!(package)*.json,*.code-snippets,.*rc}': ['yarn lint:prettier --parser json', 'git add'],
  'package.json': ['yarn lint:prettier', 'git add'],
  '*.vue': ['yarn lint:eslint', 'yarn lint:stylelint', 'git add'],
  '*.css': ['yarn lint:stylelint', 'yarn lint:prettier', 'git add'],
  '*.scss': ['yarn lint:stylelint', 'yarn lint:prettier', 'git add'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged', 'git add'],
}