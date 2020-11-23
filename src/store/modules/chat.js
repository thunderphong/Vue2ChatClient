export default {
	namespaced: true,
	state: {
		name: "",
		namespaceArray: [],
		dialog: [],
	},
	getters: {
		showNamespaceArray(state) {
			return state.namespaceArray;
		},
		showDiaLog(state) {
			return state.dialog;
		},
		showName(state) {
			return state.name;
		},
	},
	mutations: {
		setNamespaceArray: (state, data) => {
			state.namespaceArray = data;
		},
		setDialog: (state, data) => {
			state.dialog = data;
		},
		setName: (state, data) => {
			state.name = data;
		},
	},
	actions: {
		async retrieveNamespace({ commit }, username) {
			const response = await fetch("http://localhost:3000/getNamespaceOfMe/" + username, {
				method: "GET",
				// headers: { "Content-Type": "application/json" },
			});

			const responseData = await response.json();

			if (!response.ok) throw new Error(responseData.error);
			else {
				commit("setNamespaceArray", responseData);
			}
		},
		async getDialogOfNamespace(context, namespace) {
			const response = await fetch("http://localhost:3000/getDialogOfNamespace/" + namespace, {
				method: "GET",
			});

			const responseData = await response.json();

			if (!response.ok) throw new Error(responseData.error);
			else {
				context.commit("setDialog", responseData);
			}
		},
		setNamespace(context, namespace) {
			context.commit("setName", namespace);
		},
		async postDialogOfNamespace(context, data) {
			const commitData = {
				namespace: context.getters["showName"],
				username: context.rootGetters["user/showUsername"],
				message: data,
			};

			const response = await fetch("http://localhost:3000/dialog", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(commitData),
			});

			const responseData = await response.json();

			if (!response.ok) throw new Error(responseData.error);
			else {
				context.commit("setDialog", responseData);
			}
		},
	},
};
