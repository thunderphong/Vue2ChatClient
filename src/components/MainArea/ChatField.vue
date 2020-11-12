<template>
	<div class="container-chatField">
		<div class="chatFieldHeader">TEST</div>
		<div class="chatFieldMain">
			<div class="cot1">
				<div class="mainChat">
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
					<div class="mocktext">MOCKTEXT</div>
				</div>
				<div class="chatInput">
					<button class="btn btn-primary">File</button>
					<input type="text" class="form-control" placeholder="Nhập tin nhắn" />
					<button class="btn btn-primary">Send</button>
				</div>
			</div>
			<div class="cot2">COT 2</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.container-chatField {
		display: grid;
		grid-template-rows: 3rem auto;
		/* align-items: center;
		justify-items: center; */
	}
	.chatFieldHeader {
		border: 1px solid grey;
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
		background: green;
		/* overflow-y: scroll; */
	}
	.mocktext {
		height: 50px;
		background: chocolate;
	}
</style>
