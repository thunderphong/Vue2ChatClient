<template>
	<div class="left-grid">
		<nav>
			<h2>Recent</h2>
			<button class="btn btn-primary">New message</button>
		</nav>

		<input type="text" class="form-control in" placeholder="Tìm kiếm" />

		<div class="chatlist">
			<div v-for="(ten, index) in chatArray" :key="index">
				<router-link :to="{ name: 'dashboardProps', params: { namespace: ten } }" class="namespaceHolder">
					<div class="namespaceImage"><img src="../../assets/logo.png" /></div>
					<div class="namespaceItem">{{ ten }}</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["chatArray"],
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style scoped>
	h2 {
		font-size: 1.2rem;
	}
	nav {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 0 0.5rem 0 0;
		align-items: center;
	}

	.left-grid {
		display: grid;
		grid-template-rows: 4rem 3rem calc(100vh - 4rem - 7rem - 1rem);
		padding: 0 1rem 1rem 1rem;
	}
	.chatlist {
		overflow-y: scroll;
	}
	.chatlist a {
		text-decoration: none;
	}
	.namespaceHolder {
		display: flex;
		/* border: 1px solid black; */
		/* background: lightgrey; */
		border-radius: 10px;
		padding: 20px 0;
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
