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
import dayjs from "dayjs";

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
			if (this.time) {
				return dayjs(this.time).format("DD/MM/YYYY hh:mm A");
			} else {
				return null;
			}
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
