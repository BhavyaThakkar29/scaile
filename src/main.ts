import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("./pages/Index.vue") },
        { path: "/about", component: () => import("./pages/About.vue") },
        { path: "/config", component: () => import("./pages/Config.vue") },
        {
            path: "/advanced-options-doc",
            component: () => import("./pages/AdvancedOptionsDoc.vue"),
        },
    ],
});

const vuetify = createVuetify({
    theme: {
        defaultTheme: "dark",
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives,
});

createApp(App).use(vuetify).use(VueViewer).use(router).mount("#app");
