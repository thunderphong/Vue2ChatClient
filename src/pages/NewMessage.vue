<template>
	<div>
		<div><the-header></the-header></div>
		<div class="main-content">
			<p v-if="error">Tên phòng không được để trống!</p>
			<input
				type="text"
				class="form-control in"
				placeholder="Nhập tên phòng"
				v-model.trim="roomName"
			/>
			<div>
				<ul>
					<li
						v-for="user in userArray"
						:key="user._id"
						@click.prevent="select(user)"
					>
						{{ user.username }}
					</li>
				</ul>
				(( Nhấn vào tên để thêm vào phòng ))
			</div>
			<br />
			<div>
				(( Danh sách user trong phòng ))
				<ul>
					<li v-for="user in userSelected" :key="user._id">
						{{ user.username }}
					</li>
				</ul>
			</div>
			<button @click.prevent="newRoom">Tạo phòng mới</button>
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
			const responseData = await (
				await fetch("http://localhost:3000/user")
			).json();
			this.userArray = responseData;
		},
		select(value) {
			if (this.userSelected.every((user) => user != value))
				this.userSelected.push(value);
		},
		async newRoom() {
			if (this.roomName == "") this.error = true;
			else {
				const commitData = {
					namespace: this.roomName,
					listUser: this.userSelected,
				};

				const response = await fetch(
					"http://localhost:3000/addNamespace",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(commitData),
					}
				);
				const responseData = await response.json();
				if (!response.ok) console.log(responseData.error);
				else this.$router.push("/dashboard");
			}
		},
	},
};
</script>

<style scoped>
li {
	cursor: pointer;
}
</style>
