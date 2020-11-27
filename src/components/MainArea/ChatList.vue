<template>
	<div class="left-grid">
		<nav>
			<h2>Tin nhắn gần đây</h2>
			<router-link to="/dashboard/newMessage">
				Tin nhắn mới
			</router-link>
		</nav>

		<input type="text" class="form-control in" placeholder="Nhập và enter để tìm kiếm" v-model="searchText" />

		<div class="chatlist">
			<div v-for="(ten, index) in chatArray" :key="index">
				<router-link
					:to="{ name: 'dashboardProps', params: { namespace: ten } }"
					class="namespaceHolder"
				>
					<div class="namespaceImage">
						<img src="../../assets/logo.png" />
					</div>
					<div class="namespaceItem">{{ ten }}</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchText: "",
		};
	},
	created() {
		this.fetchData();
	},
	computed: {
		username() {
			return this.$store.getters["user/showUsername"];
		},
		chatArray() {
			const chat = this.$store.getters["chat/showNamespaceArray"];
			return chat.filter((user) => user.startsWith(this.searchText));
		},
	},
	methods: {
		fetchData() {
			this.$store.dispatch("chat/retrieveNamespace", this.username);
			this.chatArrayList = this.$store.getters["chat/showNamespaceArray"];
		},
	},
};
</script>

<style scoped>
h2 {
	font-size: 1.2rem;
	margin: 0;
}
nav {
	display: flex;
	width: 100%;
	justify-content: space-between;
	/* padding: 0 0.5rem 0 0; */
	align-items: center;
}

a {
	color: blue;
}

.left-grid {
	display: grid;
	grid-template-rows: 4rem 3rem calc(100vh - 4rem - 7rem - 1rem);
	padding: 0 1rem 1rem 1rem;
}
.chatlist {
	padding-right: 5px;
	overflow-y: scroll;
}
.chatlist a {
	text-decoration: none;
}
.namespaceHolder {
	display: flex;
	/* border: 1px solid black; */
	background: lightgrey;
	border-radius: 10px;
	padding: 20px 0;
	margin: 5px 0;
}
.namespaceHolder:hover {
	background: grey;
	cursor: pointer;
}
.namespaceItem {
	font-size: 1.1rem;
}
.namespaceImage img {
	width: 30px;
	height: 30px;
	margin: 0px 10px;
}
.selected {
	background: oldlace;
}
</style>
