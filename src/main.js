import "./styles/main.scss";
import colors from "vuetify/lib/util/colors";

import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

import App from "./App.vue";

const app = createApp(App);
const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: colors.blue.base,
          secondary: colors.deepOrange.lighten1,
          background: colors.grey.lighten4,
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
app.use(vuetify);
app.mount("#app");
