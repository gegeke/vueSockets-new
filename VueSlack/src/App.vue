<template>
	<div class="wrapper">
		<Toolbar></Toolbar>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Toolbar from './components/Toolbar'

	export default {
		data: function() {
			return {

			}
		},
		components: {
			Toolbar
		}
	}
</script>

<style lang="scss">
	html, body {
		height: 100%;
		box-sizing: border-box;
	}

	.text-grey {
		color: #A2A6A6;
	}

	.indent-left {
		padding-left: 24px;
	}

	.indent-right {
		padding-right: 24px;
	}


	.content {
		padding: 0 0 0 220px;
		height: 100%;
	}

	.margin-top-35 {
		margin-top: 35px !important;
	}

	.full-width {
		width: 100%;
	}

	.float-left {
		float: left;
	}

	.float-right {
		float: right;
	}

	.content-center {
		text-align: center;
	}
</style>