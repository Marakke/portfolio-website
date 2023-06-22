const breakpoints = ['0px', '600px', '768px', '960px', '1200px']

const palette = {
  black: '#000029',
  slateGray: '#292929',
  deepSea: '#38475',
  electricBlue: '#0073E6',
  coralRed: '#C35050',
  white: '#FFFFFF', 
}

const baseTheme = {
  colors: {
    black: palette.black,
    darkGray: palette.slateGray,
    gray: palette.deepSea,
    blue: palette.electricBlue,
    red: palette.coralRed,
    white: palette.white,
  },
  width: {
    max: '1300px',
    content: '41.5em',
    contentInside: '37.5em',
  },
  breakpoints: {
    xs: breakpoints[1],
    sm: breakpoints[2],
    md: breakpoints[3],
    lg: breakpoints[4],
  },
}

const createTheme = (fn: any) => ({
  ...baseTheme,
  ...{
    colors: {
      ...baseTheme.colors,
      ...fn(baseTheme),
    },
  },
})
