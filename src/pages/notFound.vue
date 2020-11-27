<template>
	<div>
		<the-header></the-header>
		<div class="container ">
			<h1>Error 404</h1>
			<h2>Không tìm thấy đường dẫn "{{ test }}"</h2>
			<router-link to="/" class="btn btn-primary mt-3">Trở lại trang chủ</router-link>
		</div>
	</div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
export default {
	components: { TheHeader },
	computed: {
		test() {
			return this.$route.params.pathMatch;
		},
	},
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 5rem);
	justify-content: center;
	align-items: center;
	/* text-align: center; */
}

.container h1 {
	font-size: 50px;
	display: inline-block;
	padding-right: 12px;
	animation: type 0.5s alternate infinite;
	color: #888;
}

@keyframes type {
	from {
		box-shadow: inset -3px 0px 0px #888;
	}
	to {
		box-shadow: inset -3px 0px 0px transparent;
	}
}
</style>
