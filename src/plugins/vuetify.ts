/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Google's Icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Composables
import { createVuetify } from 'vuetify'

import { aliases, md } from 'vuetify/iconsets/md'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      // light: {
      //   colors: {
      //     primary: '#1867C0',
      //     secondary: '#5CBBF6',
      //   },
      // },
      // dark: {
      //   colors: {
      //     primary: '#121212',
      //     secondary: '',
      //   }
      lethalCompany: {
        colors: {
          terminalGreen: "#01fc01",
        }
      },
    }
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },

  // #01fc01
})

export enum Colors {
  terminalGreen = "#01fc01",
}