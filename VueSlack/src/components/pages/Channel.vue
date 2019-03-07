<template>
	<div class="wrapper">
		<div class="header indent-left indent-right">
			<div class="float-left">
				<strong>
					#{{ channelName }}
				</strong>
			</div>
			<div class="float-right header-options">
				<i class="fas fa-info"></i>
				<i class="far fa-heart"></i>
				<i class="fas fa-cog"></i>
			</div>
		</div>
		<div class="chat-menu indent-left indent-right">
			<div class="input-wrap">
				<input type="text" placeholder="Type you're text here..." v-on:click="sendMessage" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				channelName: this.$route.params.channelName
			}
		},
		methods: {
			sendMessage() {
				this.$socket.emit('SEND_MESSAGE', 'Hello Node!')
			}
		},
		created() {

			// this.sockets.subscribe('hello_vue', (data) => {
			// 	console.log(data);
			// });

			this.$options.sockets.hello_vue = (data) => {
				console.log(data)
			}

		},
		sockets: {
			connect: function () {
				console.log('socket connected')
			}
		}
	}
</script>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;

		> * {
			flex-grow: 1;
		}
	}

	.header {
		height: 60px;
		width: 100%;
		line-height: 60px;
		border-bottom: 1px solid #DEDEDE;

		.header-options {

			.fa-info,
			.fa-heart,
			.fa-cog {
				margin-left: 12px;
				display: inline-block;
				cursor: pointer;
			}
		}
	}

	.chat-menu {
		height: 60px;
		width: 100%;
		border-top: 1px solid #DEDEDE;
		margin-top: 30px;
		display: flex;
		align-self: flex-end;
		align-items: center;
		line-height: 60px;

		.input-wrap {
			position: relative;
			width: 100%;

			input[type="text"] {
				border: 2px solid #DEDEDE;
				padding: 8px 60px;
				width: 100%;
				height: 50px;
				border-radius: 12px;
			}
		}
	}
</style>