import WebFont from 'webfontloader'

export const loadFonts = async () => {
  WebFont.load({
    google: {
      families: ['Oxygen:300,400,500,700&display=swap'],
    },
  })
}
