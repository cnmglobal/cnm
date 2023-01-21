const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const customPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.rotate-x-180': {
      transform: "rotateX(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    },
    '.-rotate-x-180': {
      transform: "rotateX(-180deg)"
    },
    '.preserve-3d': {
      transformStyle: "preserve-3d"
    },
    '.perspective': {
      perspective: "1000px"
    },
    '.backface-hidden': {
      backfaceVisibility: "hidden"
    }
  })
});
module.exports =
{
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        'sans': ['inter', ...defaultTheme.fontFamily.sans],
        'brand': ['Recline', 'Fredoka One']
      },
      screens: {
        'xl': '1200px',
        '2xl': '1436px',
      },
    },
  },
  plugins: [customPlugin, require("tailwindcss-animate")],
}
  ;
