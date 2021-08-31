import "./styles/main.scss";
import colors from "vuetify/lib/util/colors";

import { createApp } from "vue";
import { createVuetify } from "vuetify";

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
});
app.use(vuetify);
app.mount("#app");
