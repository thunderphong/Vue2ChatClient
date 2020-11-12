<template>
	<div class="left-grid">
		<nav>
			<h2>Recent</h2>
			<button class="btn btn-primary">New message</button>
		</nav>

		<input type="text" class="form-control in" placeholder="Tìm kiếm" />

		<div class="chatlist">
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN</div>
			</div>
			<div>
				<div>HÌNH</div>
				<div>TÊN LASTs</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
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
	/* .in {
		margin-right: 10px;
	} */
</style>
