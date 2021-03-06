import {DefaultTheme} from 'styled-components'
import {darken, lighten} from 'polished'

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeT {}
}

const primaryColor = '#30d95e'
const secondaryColor = '#40bcff'
const tertiaryColor = '#e240ff'

export const theme = {
    variable: {
        barHeight: '40px',
    },
    color: {
        primary: {
            main: primaryColor,
            light: `${lighten(0.2, primaryColor)}`,
            dark: `${darken(0.2, primaryColor)}`
        },
        secondary: {
            main: secondaryColor,
            light: `${lighten(0.2, secondaryColor)}`,
            dark: `${darken(0.2, secondaryColor)}`
        },
        tertiary: {
            main: tertiaryColor,
            light: `${lighten(0.2, tertiaryColor)}`,
            dark: `${darken(0.2, tertiaryColor)}`
        },
        grey: {
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
        },
        black: '#000000',
        white: '#ffffff',
        success: '#6bff2b',
        error: '#ff2b2b',
        transparent: {
            black: 'rgba(43, 43, 43, .5);'
        }
    },
    font: {
        source: `https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto+Mono&display=swap`,
        family: {
            default: `'Roboto Mono', monospace`,
            montserrat: `'Montserrat', sans-serif`
        },
        size: {
            s3: '0.512rem',
            s2: '0.64rem',
            s1: '0.8rem',
            defaultXL: '22px', // 4k
            defaultL: '16px', // laptop:
            defaultM: '14px', // tablet:
            defaultS: '12px', // mobile
            b1: '1.25rem',
            b2: '1.563rem',
            b3: '1.953rem',
            b4: '2.441rem',
            b5: '3.052rem'
        }
    },
    shadow: {
        0: 'none',
        1: '2px 3px 15px 4px rgba(21, 21, 21, 0.15)',
        2: '4px 5px 17px 6px rgba(21, 21, 21, 0.15)',
        3: '6px 7px 19px 8px rgba(21, 21, 21, 0.15)',
    },
    mediaQuery: {
        mobileMax: '425px',
        tabletMax: '1024px',
        desktopMax: '1980px',
    }
}

// Types
export type ThemeT = typeof theme