import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  // Translate the eslintrc format into flat config format
  ...compat.config({
    overrides: [
      {
        files: ['*.mjs', '*.js', '*.jsx', '*.ts', '*.tsx'],
        rules: {
          'simple-import-sort/imports': [
            'error',
            {
              groups: [
                // Node.js modules with `node:` prefix
                ['^node:'],
                ['^react', '^next', '^@?\\w'],
                // Internal packages
                ['^(@|components)(/.*|$)'],
                // Side effect imports
                ['^\\u0000'],
                // Parent imports
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                // Other relative imports
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                // Style imports
                ['^.+\\.?(css)$'],
              ],
            },
          ],
        },
      },
    ],
  }),
]

export default eslintConfig
