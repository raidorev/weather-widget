export const loadFonts = async () => {
  const WebFont = await import('webfontloader')
  WebFont.load({
    google: {
      families: ['Oxygen:300,400,500,700&display=swap'],
    },
  })
}
