<template>
	<div class="cont">
		<!-- <div class="container">
			<div><slot></slot></div>
			<div>
				{{ user }}
			</div>
			<div><slot name="time"></slot></div>
		</div> -->
		<div class="container left" v-if="!isOwner">
			<div class="user">{{ user }}</div>
			<div class="test"><slot></slot></div>
			<div class="time">{{ timeModified }}</div>
		</div>
		<div v-else></div>
		<div class="container right" v-if="isOwner">
			<div class="test"><slot></slot></div>
			<div class="time">{{ timeModified }}</div>
		</div>
		<div v-else></div>
	</div>
</template>

<script>
//:class="{ containerOwner: isOwner, container: !isOwner }"
export default {
	props: ["user", "time"],
	computed: {
		username() {
			return this.$store.getters["user/showUsername"];
		},
		isOwner() {
			return this.username == this.user;
		},
		timeModified() {
			return (
				(parseInt(this.time.substring(11, 13), 10) + 7).toString() +
				":" +
				this.time.substring(14, 19) +
				" - " +
				this.time.substring(8, 10) +
				"/" +
				this.time.substring(5, 7) +
				"/" +
				this.time.substring(0, 4)
			);
		},
	},
};
</script>

<style scoped>
.cont {
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 20px 0px;
}

.right {
	text-align: right;
}

.test {
	padding: 0.6em;
	background-color: lightblue;
	display: inline-block;
	border: 1px solid black;
	border-radius: 20px;
	margin: 0.25em;
	min-width: 70px;
	text-align: center;
}

.time {
	margin-left: 1em;
	margin-right: 0.5em;
	font-size: 0.75em;
	font-style: italic;
}
.user {
	font-style: bold;
	font-size: 0.8rem;
	margin-left: 1em;
}
</style>
