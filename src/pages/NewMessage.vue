<template>
	<div>
		<div><the-header></the-header></div>
		<div class="infomation">
			<h1>Tạo phòng chat</h1>
			<p>Nhấn vào tên user để thêm vào phòng chat</p>
		</div>

		<div class="main-content">
			<p v-if="error">Tên phòng không được để trống!</p>
			<input type="text" class="form-control in" placeholder="Nhập tên phòng" v-model.trim="roomName" />
			<!-- <div>(( Nhấn vào tên để thêm vào phòng ))</div> -->
			<div class="choosingField">
				<div class="list-group mr-5">
					<h3>Danh sách user</h3>
					<button
						v-for="user in userArray"
						:key="user._id"
						@click.prevent="select(user)"
						class="list-group-item list-group-item-action"
					>
						{{ user.username }}
					</button>
				</div>
				<br />
				<div class="list-group">
					<h3>User đã chọn</h3>
					<button
						class="list-group-item list-group-item-action"
						v-for="user in userSelected"
						@click.prevent="unselect(user)"
						:key="user._id"
					>
						{{ user.username }}
					</button>
				</div>
			</div>
			<button @click.prevent="newRoom" class="btn btn-primary">Tạo phòng mới</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			error: false,
			roomName: "",
			userArray: [],
			userSelected: [],
		};
	},
	created() {
		this.loadUser();
	},
	methods: {
		async loadUser() {
			const responseData = await (await fetch("http://localhost:3000/user")).json();
			this.userArray = responseData;
		},
		select(value) {
			if (this.userSelected.every((user) => user != value)) this.userSelected.push(value);
		},
		unselect(value) {
			this.userSelected = this.userSelected.filter((user) => user.username != value.username);
		},
		async newRoom() {
			if (this.roomName == "") this.error = true;
			else {
				const commitData = {
					namespace: this.roomName,
					listUser: this.userSelected,
				};

				const response = await fetch("http://localhost:3000/addNamespace", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(commitData),
				});
				const responseData = await response.json();
				if (!response.ok) console.log(responseData.error);
				else this.$router.push("/dashboard");
			}
		},
	},
};
</script>

<style scoped>
.infomation {
	margin: 20px 0px;
	text-align: center;
}

.main-content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	margin: 30px auto;
	max-width: 600px;
	flex-wrap: wrap;
}

.choosingField {
	display: flex;
	margin: 30px 0px;
}

/* listGroupModified */
</style>
