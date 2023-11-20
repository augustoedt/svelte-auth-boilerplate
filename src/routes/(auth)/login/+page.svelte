<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;

	let formData = {
		email: 'test@test.com',
		password: '123456'
	};
</script>

<article>
	<fieldset>
		<legend><h1>Login</h1></legend>
		<form action="login" method="post">
			<label for="email"
				>Email

				<input
					id="email"
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
				/>
			</label>
			<label for="password"
				>Password
				<input
					id="password"
					type="password"
					name="password"
					placeholder="Password"
					value={formData.password}
				/>
			</label>
			{#if form?.status === 'error'}
				<span>{form.message}</span>
			{/if}
			<button type="submit">Login</button>
		</form>
	</fieldset>
</article>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	article {
		max-width: 450px;
		margin: 0 auto;
	}

	fieldset {
		box-shadow: 0 10px 20px rgba(19, 17, 17, 0.1);
	}

	form > span {
		color: red;
		font-size: small;
		font-weight: bold;
		text-align: center;
	}
</style>
