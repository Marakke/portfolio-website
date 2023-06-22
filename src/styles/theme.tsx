const breakpoints = ['0px', '600px', '768px', '960px', '1200px']

const baseTheme = {
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
})
