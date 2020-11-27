<template>
	<div>
		<the-header></the-header>
		<div class="holder">
			<h2>WELCOME TO CHAT APP</h2>
			<div class="buttonHolder">
				<button class="btn btn-primary">
					<router-link to="/dashboard">
						Go to dashboard</router-link
					>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
	text-align: center;
	font-size: 3rem;
	margin: 30px 0px;
}
.holder {
	height: calc(100vh - 4rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center; */
}
.buttonHolder {
	display: flex;
	justify-content: center;
}
</style>
