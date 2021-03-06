module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'auto',
  overrides: [
    {
      files: ['*.scss'],
      options: {
        printWidth: 400,
      },
    },
  ],
}
