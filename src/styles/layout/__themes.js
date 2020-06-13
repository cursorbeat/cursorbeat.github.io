// These objects are imported in ThemeContext.js to be
// loaded to <ThemeContextWrapper> in gatsby-browser.js && gatsby-ssr.js

// Theme is determined via state in ____________ and
// switched via a button on every page in site.
const lightTheme = {
  transition: '0.37s',
  bgColor: `#f9f9f9`,
  textColor: `#080708`,
  accentColor: `#3289cd`,
};

const darkTheme = {
  transition: '0.37s',
  bgColor: `#1c1c1c`,
  textColor: `#f9f9f9`,
  accentColor: `#90bd33`,
};

export { darkTheme, lightTheme };
