module.exports = {
  bracketSpacing: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
}
