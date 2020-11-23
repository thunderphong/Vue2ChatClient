<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
			<router-link to="/" class="navbar-brand"><h1>Chat App</h1></router-link>
			<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul class="navbar-nav">
					<template v-if="!isLoggedIn">
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'auth', params: { cState: 'login' } }"
								>Login</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" :to="{ name: 'auth', params: { cState: 'register' } }"
								>Register</router-link
							>
						</li>
					</template>
					<template v-else>
						<li class="nav-item">
							<span class="nav-link">{{ username }}</span>
						</li>
						<li class="nav-item"><a to="#" class="nav-link" @click.prevent="logout">Logout</a></li>
						<li class="nav-item"><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li>
						<li class="nav-item"><router-link to="/" class="nav-link">Welcome</router-link></li>
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

	// Bắt đầu làm chat
</script>

<style scoped>
	h1 {
		font-size: 1.5rem;
	}
	a {
		cursor: pointer;
	}
</style>
