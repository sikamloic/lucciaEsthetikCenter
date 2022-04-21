module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgrounImage:{
        'banner1': "url('/src/assets/imageBanner.png')",
        'banner2':  "url('/src/assets/bannerFooter1.svg')",
      }
    },
  },
  plugins: [],
}
