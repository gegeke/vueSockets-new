<template>
	<div class="login content-center">
		<h1>Sign in to {{ this.$store.state.appName }}</h1>
		<small>
			Enter you're e-mail and password
		</small>

		<input type="email" placeholder="email" class="margin-top-35" required v-model="email"
			   v-bind:class="{ error: invalidCredentials }"/>
		<input type="password" placeholder="password" required v-model="password"
			   v-bind:class="{ error: invalidCredentials }"/>

		<button class="btn btn-success full-width" v-on:click="loginUser">Login</button>

		<transition name="slide">
			<div class="toast" v-if="toast">
				<div class="float-left">
					Wrong login credentials
				</div>
				<div class="float-right" v-on:click="removeToast">
					<i class="fas fa-times"></i>
				</div>
			</div>
		</transition>

	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				email: '',
				password: '',
				invalidCredentials: false,
				toast: false
			}
		},
		methods: {
			loginUser: function () {
				this.$router.push('account');
				// this.$http.post('https://boinu.nl/vuechat/login', {
				//
				// 	email: this.email,
				// 	password: this.password
				//
				// }).then(function (response) {
				//
				// 	this.$store.state.token = response.body.token;
				// 	localStorage.setItem('token', response.body.token);
				// 	this.$router.push('account');
				//
				// }, function (error) {
				//
				// 	this.invalidCredentials = true;
				// 	this.toast = true;
				//
				// });

			},
			removeToast: function () {

				this.toast = false;

			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		width: 100%;
		min-height: 150px;
		max-width: 25%;
		background: white;
		border-radius: .25rem;
		box-shadow: 0 1px 0 rgba(0, 0, 0, .25);
		padding: 2rem 6rem;
		border: 1px solid #ddd;
		position: relative;
		left: 0;
		right: 0;
		top: 110px;
		bottom: 0;
		margin: auto;
		overflow: hidden;

		small {
			display: block;
			width: 100%;
		}

		input[type="email"],
		input[type="password"] {
			line-height: normal;
			padding: .75rem;
			border: 1px solid #868686;
			border-radius: .25rem;
			outline: 0;
			color: #1d1c1d;
			width: 100%;
			max-width: 100%;
			margin: .5rem 0 .5rem;
			display: block;
		}

		button {
			outline: 0;
			text-decoration: none;
			background: #007a5a;
			box-shadow: 0 1px 4px rgba(29, 28, 29, .3);
			color: #fff;
			line-height: 1rem;
			padding: 14px 32px 16px;
			font-size: 20px;
			font-weight: 900;
			cursor: pointer;
			text-shadow: none;
			border: none;
			border-radius: .25rem;
		}

		.error {
			border: 1px solid red !important;
		}
	}

	.toast {
		background-color: #323232;
		box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
		color: #fff;
		line-height: 1.5;
		height: 48px;
		padding: 14px 24px;
		justify-content: space-between;
		width: auto;
		max-width: 260px;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	.slide-enter-active, .slide-leave-active {
		transition: margin-bottom .8s ease-out;
	}

	.slide-enter, .slide-leave-to {
		margin-bottom: -48px;
	}

	.slide-enter-to, .slide-leave {
		margin-bottom: 0px;
	}
</style>
