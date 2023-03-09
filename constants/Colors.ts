const greenPrimary = '#328e62';
const redPrimary = '#e63f3e';
const whiteColor = '#ffffff';
const blackColor = '#000000';
const tintColorLight = '#202020';
const tintColorDark = '#fff';

export {
  greenPrimary, redPrimary,
  tintColorDark, tintColorLight,
  whiteColor, blackColor
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#e4e4e4',
    tabIconSelected: tintColorDark,
  },
};
