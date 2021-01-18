import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);


export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
    theme: {
        themes: {
          darck: {
            primary: '#ed7a5d',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
          light: {
            primary: '#ed7a5d',
            secondary: '#fff1ed',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
