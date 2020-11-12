<template>
	<div class="dashboard-content">
		<div><the-header></the-header></div>
		<div class="row-two">
			<chat-list></chat-list>
			<chat-field></chat-field>
		</div>
	</div>
</template>

<script>
	import ChatList from "../components/MainArea/ChatList.vue";
	import ChatField from "../components/MainArea/ChatField.vue";

	export default {
		data() {
			return {};
		},
		components: {
			"chat-list": ChatList,
			"chat-field": ChatField,
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
