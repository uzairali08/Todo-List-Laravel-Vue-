import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faPlusSquare, faTrash);

const app = createApp();
app.component("app", App);
app.component("font-awesome-icon", FontAwesomeIcon);
export const eventBus = app;
app.mount("#app");
