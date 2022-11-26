import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";

// import "./assets/main.css";

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.mount("#app");
