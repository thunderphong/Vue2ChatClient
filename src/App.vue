<template>
	<router-view></router-view>
</template>

<style>
a {
	color: white;
}

a:hover {
	text-decoration: none;
	color: lightyellow;
}

::-webkit-scrollbar {
	width: 8px;
	background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
	border-radius: 8px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #343a40;
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	background-color: #f5f5f5;
}
</style>
