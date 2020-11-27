<template>
	<div class="container-chatField">
		<div class="chatFieldHeader">{{ $route.params.namespace }}</div>
		<div class="chatFieldMain">
			<div class="cot1">
				<div class="mainChat" id="scroll">
					<my-messdialog v-if="isDialogEmpty">No message</my-messdialog>
					<!-- <template v-else>
						<my-messdialog v-for="d in dialog" :key="d.id">{{ d.message }}</my-messdialog>
						<my-messdialog>2020</my-messdialog>
					</template> -->
					<template v-else>
						<my-messdialog v-for="d in dialog" :key="d.id" :user="d.username">
							<template>{{ d.message }}</template>
							<template slot="time">
								{{ d.timeSend }}
							</template>
							<!-- <template slot="user">
								{{ d.username }}
							</template> -->
						</my-messdialog>
					</template>
				</div>
				<div class="chatInput">
					<button class="btn btn-primary">File</button>
					<form @submit.prevent="submitDialog">
						<input
							type="text"
							class="form-control"
							placeholder="Nhập tin nhắn"
							v-model="inputDialog"
						/>
						<button class="btn btn-primary">
							Send
						</button>
					</form>
				</div>
			</div>
			<div class="cot2">
				<p>Danh sách user trong room</p>
				<div>
					<ul>
						<li v-for="user in userList" :key="user.id">
							{{ user.username }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MessDialog from "../UI/MessDialog.vue";
import { io } from "socket.io-client";
export default {
	data() {
		return {
			isDialogEmpty: true,
			socket: null,
			inputDialog: "",
		};
	},
	components: {
		"my-messdialog": MessDialog,
	},
	created() {
		this.fetchData();
	},
	mounted() {
		this.socket.on("HELLO", () => {
			this.fetchData();
		});
	},
	updated() {
		this.scrollToEnd();
	},
	computed: {
		dialog() {
			return this.$store.getters["chat/showDiaLog"];
		},
		userList() {
			return this.$store.getters["chat/showUserArray"];
		},
	},
	watch: {
		$route: "fetchData",
		dialog(value) {
			if (value.length == 0) this.isDialogEmpty = true;
			else this.isDialogEmpty = false;
		},
	},
	methods: {
		fetchData() {
			const namespace = this.$route.params.namespace;
			this.socket = io("http://localhost:3000/" + namespace);
			this.$store.dispatch("chat/setNamespace", namespace);
			this.$store.dispatch("chat/getDialogOfNamespace", namespace);
			this.$store.dispatch("chat/getUserListOfNamespace", namespace);
		},
		scrollToEnd() {
			const container = document.getElementById("scroll");
			container.scrollTop = container.scrollHeight;
		},
		submitDialog() {
			this.socket.emit("SEND_HELLO", this.inputDialog);
			this.$store.dispatch("chat/postDialogOfNamespace", this.inputDialog);
			this.inputDialog = "";
		},
	},
};
</script>

<style scoped>
.container-chatField {
	display: grid;
	grid-template-rows: 3rem auto;
	/* align-items: center;
		justify-items: center; */
}
.chatFieldHeader {
	border: 1px solid #d3d3d3;
	padding: 0.5rem 1rem;
}
.chatFieldMain {
	display: grid;
	grid-template-rows: calc(100vh - 3rem - 4rem);
	grid-template-columns: 2fr 1fr;
}
.cot1 {
	display: grid;
	grid-template-rows: auto 3rem;
}
.mainChat {
	padding-right: 5px;
	overflow-y: scroll;
}
.chatInput {
	display: flex;
	justify-content: center;
	margin: 4px 0;
}
.chatInput > * {
	margin-right: 0.5rem;
}
.cot2 {
	background: burlywood;
	/* overflow-y: scroll; */
}
.mocktext {
	height: 50px;
	background: chocolate;
}

form {
	display: flex;
	width: 100%;
}

form > input {
	margin-right: 10px;
}
</style>
