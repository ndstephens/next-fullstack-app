module.exports = {
  singleQuote: true,
  // 'prettier-plugin-tailwindcss' must be loaded last if you add others to this list
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindFunctions: ['clsx', 'cva', 'tw'],
  importOrder: ['^@/components/(.*)$', '^@/lib/(.*)$', '^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
