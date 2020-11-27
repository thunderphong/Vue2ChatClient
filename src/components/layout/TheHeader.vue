<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
			<router-link to="/" class="navbar-brand"><h1>Chat App</h1></router-link>
			<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul class="navbar-nav">
					<template v-if="!isLoggedIn">
						<li class="nav-item">
							<router-link
								class="nav-link"
								:to="{ name: 'auth', params: { cState: 'login' } }"
								>Đăng nhập</router-link
							>
						</li>
						<li class="nav-item">
							<router-link
								class="nav-link"
								:to="{ name: 'auth', params: { cState: 'register' } }"
								>Đăng ký</router-link
							>
						</li>
					</template>
					<template v-else>
						<li class="nav-item">
							<router-link to="/" class="nav-link">Welcome</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/dashboard" class="nav-link">Dashboard</router-link>
						</li>
						<li>
							<div class="dropdown">
								<button
									class="dropdown-toggle btn custom-dropdown nav-item"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									{{ username.toUpperCase() }}
								</button>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#">Profile</a>
									<a class="dropdown-item" href="#">Đổi mật khẩu</a>
									<a class="dropdown-item" href="#" @click.prevent="logout"
										>Đăng xuất</a
									>
								</div>
							</div>
						</li>
					</template>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		isLoggedIn() {
			return this.$store.getters["user/isAuthenticated"];
		},
		username() {
			return this.$store.getters["user/showUsername"];
		},
	},
	methods: {
		logout() {
			this.$store.dispatch("user/logoutUser");
			this.$router.go();
		},
	},
};
</script>

<style scoped>
h1 {
	margin: 0 10px;
	font-size: 1.5rem;
}
.custom-dropdown {
	color: rgba(255, 255, 255, 0.5);
}

/* a:hover {
	cursor: pointer;
} */
</style>
