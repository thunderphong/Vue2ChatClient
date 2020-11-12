import Welcome from "./pages/Welcome.vue";
import NotFound from "./pages/notFound.vue";
import Auth from "./pages/Auth.vue";
import DashBoard from "./pages/Dashboard.vue";

export const routes = [
	{ path: "/", redirect: "/welcome" },
	{ path: "/welcome", component: Welcome },
	{
		path: "/auth",
		name: "auth",
		component: Auth,
		props: true,
		meta: {
			unRequiredAuth: true,
		},
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: DashBoard,
		meta: { requiredAuth: true },
	},
	{ path: "*", component: NotFound },
];