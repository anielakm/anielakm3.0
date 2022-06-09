const fontSizes = {
    headline1: '2.1rem',
    headline2: '1.25rem',
    headline3: '1rem',
    headline4: '0.94rem',
    headline5: '0.88rem',
    headline6: '0.75rem',
    nav: '0.8rem',
    lang: '0.75rem',
    body: '.9rem',
    body2: '.85rem',
    body3: '.7rem',
    btn: '.65rem',
    // body2: '0.75rem',
    // body3: '0.7rem',
    // subtitle1: '1rem',
    // subtitle2: '0.875rem',
    // label: '0.75rem',
    // button: '0.875rem',
    // caption: '0.75rem',
    // overline: '0.625rem',
  }
  
  const lightColors = {
    white: '#FFFFFF',
    black: '#000',
    background: '#f6f6f6',
    beige: '#dbcabb',
    pistacio: '#dbd3bb',

  }

  const fontFamily = {
    lato: "'Lato', sans-serif",
    playf: "'Playfair Display', serif"
  }
  
  const LightTheme = {
    fontSizes,
    fontFamily,
    colors: {
      ...lightColors,
    },
  }
  
  export default LightTheme
  
  export type ThemeTypes = typeof LightTheme