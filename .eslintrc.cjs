const internalPackages = '@/app|@/entities|@/modules|@/pages|@/public|@/shared'

const styleExtensions = '\\.style$|\\.s?css$'

const rules = {
  '@typescript-eslint/ban-ts-comment': 'off', // - for @ts-ignore or @ts-expect-error

  '@typescript-eslint/no-unused-expressions': 'off', // - for <condition> && <expression>

  'hooks/sort': [
    2,
    {
      groups: [
        'useReducer',
        'useContext',
        'useState',
        'useRef',
        'useDispatch',
        'useCallback',
        'useEffect',
      ],
    },
  ],

  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],

  'import/no-extraneous-dependencies': 'off', // - for import in vite.config ets

  'import/no-internal-modules': [
    'error',
    {
      forbid: [
        'src/**/*',
        '../*',
        '../**/*',
        '@/app/!(config)/**/*', // use @/app/something only except @/app/config
        '@/entities/**/*', // use @/entities/something only
        '@/modules/**/*', // use @/modules/something only
        '@/shared/!(ui)/**/*',
      ],
    },
  ],

  'import/prefer-default-export': 'off', // - for reexport from index

  'jsx-a11y/anchor-is-valid': 'off', // - for using anchor w/ button together

  'no-redeclare': 'off', // - for typescript fn-overloading

  'no-restricted-exports': 'off', // - for export { default } from somewhere

  'no-underscore-dangle': 'off', // - for typescript getters/setters

  'no-unused-vars': 'warn',

  'prettier/prettier': [
    'error',
    {},
    { endOfLine: 'auto', usePrettierrc: true },
  ],

  'react/display-name': 'off', // - for anonymous components in HOCs

  'react/function-component-definition': 'off', // - for defining component as a function-declaration

  'react/jsx-filename-extension': 'off', // - for jsx in tsx

  'react/jsx-props-no-spreading': 'off', // - for props spreading in jsx

  'react/react-in-jsx-scope': 'off', // React since v.18 does not require importing React for JSX

  'react/require-default-props': 'off', // - disable SomeComponent.defaultProps defining

  'simple-import-sort/imports': [
    'warn',
    {
      groups: [
        // External `react` packages come first.
        ['^react', `^(?!${internalPackages}|\\./|\\.\\./|\\u0000)`],

        // Imports w/o from.
        ['^\\u0000'],

        // Internal packages.
        [
          `^(${internalPackages})(?!${styleExtensions})`,

          // Parent imports. Put `..` last.
          '^\\.\\.(?!/?$)',
          '^\\.\\./?$',

          // Other relative imports. Put same-folder imports and `.` last.
          '^\\./(?=.*/)(?!/?$)',
          '^\\.(?!/?$)',
          '^\\./?$',
        ],

        // Siblings style imports.
        [`^.+${styleExtensions}`],
      ],
    },
  ],

  'sort-keys-fix/sort-keys-fix': 'warn',
}

const extendsDict = {
  airbnb: [
    'airbnb', // from eslint-config-airbnb
    'airbnb/hooks', // from eslint-config-airbnb
    'airbnb-typescript', // from eslint-config-airbnb-typescript
  ],
  base: [
    'eslint:recommended', // from eslint: enables eslint-core rules
    'plugin:import/recommended', // from enables eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  prettier: [
    'plugin:prettier/recommended', // from eslint-plugin-prettier: enables eslint-plugin-prettier and eslint-config-prettier (runs Prettier as an ESLint rule)
    // 'prettier', // from eslint-config-prettier: turns off all rules that are unnecessary or might conflict with Prettier
  ],
  react: [
    'plugin:react/recommended', // from eslint-plugin-react
    'plugin:react-hooks/recommended', // from eslint-plugin-react-hooks
    'plugin:jsx-a11y/recommended', // from eslint-plugin-jsx-a11y
  ],
  typescript: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript', // from enables eslint-plugin-import
  ],
}

module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    ...extendsDict.airbnb,
    ...extendsDict.base,
    ...extendsDict.typescript,
    ...extendsDict.react,
    ...extendsDict.prettier, // should be at last
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-import',
    'hooks', // from eslint-plugin-hooks
    'sort-keys-fix', // from eslint-plugin-sort-keys-fix
    'simple-import-sort', // from eslint-plugin-simple-import-sort
    'react-refresh', // from eslint-plugin-react-refresh
  ],
  rules,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
