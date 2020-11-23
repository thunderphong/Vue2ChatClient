<template>
	<div class="dashboard-content">
		<div><the-header></the-header></div>
		<div class="row-two">
			<chat-list :chatArray="chatArray"></chat-list>
			<chat-field></chat-field>
		</div>
	</div>
</template>

<script>
	import ChatList from "../components/MainArea/ChatList.vue";
	import ChatField from "../components/MainArea/ChatField.vue";

	export default {
		data() {
			return {
				// namespace: undefined,
			};
		},
		components: {
			"chat-list": ChatList,
			"chat-field": ChatField,
		},
		computed: {
			chatArray() {
				return this.$store.getters["chat/showNamespaceArray"];
			},
			username() {
				return this.$store.getters["user/showUsername"];
			},
		},
		methods: {},
		created() {
			this.$store.dispatch("chat/retrieveNamespace", this.username); // Hàm fetch dữ liệu từ database và gán nó qua vuex
		},
	};
</script>

<style scoped>
	.dashboard-content {
		display: grid;
		grid-template-rows: 4rem 1fr;
		overflow: hidden;
	}

	.row-two {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}
</style>
