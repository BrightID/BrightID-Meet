import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
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
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
