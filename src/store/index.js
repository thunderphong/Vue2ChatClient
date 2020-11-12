import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import chatModule from "./modules/chat.js";
import userModule from "./modules/user.js";

const store = new Vuex.Store({
	modules: {
		chat: chatModule,
		user: userModule,
	},
	state: {},
	mutations: {},
	getters: {},
});

export default store;
