<template lang="pug">
.pa-5
	.zag Logs
	br
	br
	.mygrid
		.box.box0 0
		.box.box1 1
		.box.box2 2
		.box.box3 3
		.box.box4 4
</template>

<style scoped lang="scss">

.mygrid {
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	grid-template-rows: 1fr 2fr 100px;
	grid-gap: 1rem;
	grid-template-areas: "header header header"
												 "test side body"
												 "test . body"
												 "footer footer footer";
}

.box {
	height: 100%;
	background: #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
}
.box0 {
	grid-area: header;
}
.box1 {
	grid-area: side;
}
.box2 {
	grid-area: test side;
	width: 800px;
	
	z-index: 2;
	/* width: 100px; */
	background: red;
	opacity: .8;
}
.box3 {
	grid-area: footer;
}
.box4 {
	grid-area: body;
}


</style>
