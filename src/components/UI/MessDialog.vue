<template>
	<div class="container">
		<div><slot></slot></div>
		<div>
			{{ user }}
		</div>
		<div><slot name="time"></slot></div>
	</div>
</template>

<script>
//:class="{ containerOwner: isOwner, container: !isOwner }"
export default {
	props: ["user"],
	computed: {
		username() {
			return this.$store.getters["user/showUsername"];
		},
		isOwner() {
			return this.username == this.user;
		},
	},
};
</script>

<style scoped>
.container {
	box-sizing: border-box;
	background: #bacbd2;
	/* border: 1px solid black; */
	padding: 0.5em 5px;
	margin: 8px 0;
	border-radius: 8px;
	/* margin: 1em 2em; */
}

/* .container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 60%;
}

.containerOwner {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 60%;
} */
</style>
