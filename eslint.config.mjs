import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { 
    languageOptions: { 
      globals: { 
        ...globals.browser, 
        ...globals.node 
      } 
    } 
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error', 
        { 
          "operator-linebreak": "off",
          "function-argument-newline": "off", 
          "object-property-newline": "off",
          "max-len": "off",
          "proseWrap": "preserve"
        },
        { usePrettierrc: true }
      ],
    }
  }
]