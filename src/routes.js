import Welcome from "./pages/Welcome.vue";
import NotFound from "./pages/notFound.vue";
import Auth from "./pages/Auth.vue";
import DashBoard from "./pages/Dashboard.vue";
import NewMessage from "./pages/NewMessage.vue";
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
		redirect: "/dashboard/commonRoom",
	},
	{
		path: "/dashboard/newMessage",
		component: NewMessage,
		meta: { requiredAuth: true },
	},
	{
		path: "/dashboard/:namespace",
		name: "dashboardProps",
		component: DashBoard,
		meta: { requiredAuth: true },
		props: true,
	},
	
	{ path: "*", component: NotFound },
];
