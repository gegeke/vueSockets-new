<template>
	<div class="toolbar">
		<div class="workspace header content-center">
			<div class="float-left text-grey">
				{{ workspace }}
			</div>
			<div class="float-right">
				<i class="far fa-bell"></i>
			</div>
		</div>

		<div class="workspace content-center">
			<div class="float-left text-grey">
				<router-link to="channel/default-channel" tag="span">Default channel</router-link>
			</div>
			<div class="float-right">
				<i class="far fa-plus-square"></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				workspace: this.$store.state.appName,
				localToken: localStorage.getItem('token')
			}
		}
	}
</script>

<style lang="scss">
	.toolbar {
		position:fixed;
		width: 220px;
		height: 100vh;
		background: #212121;
		float: left;
		padding:24px;
	}

	.workspace {
		width: 100%;
		display: block;
		margin-bottom: 24px;

		&.header {
			font-size:23px;
			margin-bottom: 54px;
		}
	}
</style>
