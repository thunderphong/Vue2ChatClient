import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";

import VueRouter from "vue-router";
import { routes } from "./routes";

import TheHeader from "./components/layout/TheHeader.vue";
import Button from "./components/UI/Button.vue";

// Router

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes,
});

router.beforeResolve((to, from, next) => {
	const isToken = store.getters["user/isAuthenticated"];

	if (to.matched.some((record) => record.meta.requiredAuth)) {
		if (!isToken) next({ path: "/auth" });
		else next();
	} else next();

	if (to.matched.some((record) => record.meta.unRequiredAuth)) {
		if (isToken) next({ path: "/dashboard" });
		else next();
	} else next();
});

Vue.config.productionTip = false;
Vue.component("the-header", TheHeader);
Vue.component("my-button", Button);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
