import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        petit: ['Petit Formal Script'],
      },
      backgroundImage: {
        heroImage: 'url(/src/images/wrapperBackground.svg)',
        heroImage2: 'url(/src/images/wrapperDark.svg)',
      },
      screens: {
        xl: { max: '1023px' },

        lg: { max: '767px' },

        md: { max: '639px' },

        sm: { max: '415px' },
      },
    },
  },
  plugins: [],
});
