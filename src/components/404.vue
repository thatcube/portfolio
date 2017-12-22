<template>
	<article transition="fade" v-cloak>
	<div class="detail-404">
		<h2 class="detail-404-heading">404 Not Found :(</h2>
		<a class="detail_btn" v-link="{ path: '/' }">Go Home</a>
	</div>
	</article>
</template>

<style scoped>
article {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.detail-404 {
	text-align: center;
}
.detail-404-heading {
	font-size: 5vw;
	letter-spacing: .15em;
	font-family: sans-serif;
	margin: 5% 0 5% 0;
}
.detail_btn {
	display: inline-block;
	width: 15vw;
	background: #4975D9;
	color: #fff;
	font-size: 2vw;
	text-align: center;
	text-decoration: none;
	line-height: 5vw;
	height: 5vw;
	border-radius: 2px;
	-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.45), inset 0 1px 0 rgba(200,200,200,.45);
	        box-shadow: 0 1px 1px rgba(0,0,0,.45), inset 0 1px 0 rgba(200,200,200,.45);
	-webkit-transition: .65s ease-in-out;
	-o-transition: .65s ease-in-out;
	transition: .65s ease-in-out;
	letter-spacing: .075em;
	font-family: sans-serif;
}
.detail_btn:hover {
	background: #2C51A6;
}
@media screen and (max-width: 480px) {
	.detail_btn {
		width: 25vw;
		height: 9vw;
		font-size: 4vw;
		line-height: 9vw;
	}
}
</style>