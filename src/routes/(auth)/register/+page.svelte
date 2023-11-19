<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, SubmitFunction } from './$types';

	export let form: ActionData;

	let inputform = {
		email: 'augustoedt@gmail.com',
		name: 'Augusto Eduardo',
		password: 'fulano',
		confirmPassword: 'fulano'
	};

	let submitting = false;
	const onSubmit: SubmitFunction = () => {
		submitting = true;
		return ({ update }) => {
			submitting = false;
			update();
		};
	};

	$: {
		console.log({ form });
	}
</script>

<article>
	<fieldset>
		<legend><h1>Register</h1></legend>
		<form action="register" method="post" use:enhance={onSubmit}>
			<label 
				>Email
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={inputform.email ?? form?.data.email}
				/>
			</label>
			<label
				>Nome
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={inputform.name ?? form?.data.name}
				/>
			</label>
			<label 
				>Password

				<input type="password" name="password" placeholder="Password" value={inputform.password} />
			</label>
			<label
				>Confirm Password

				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={inputform.password}
				/>
			</label>

			<button type="submit">Register</button>
		</form>
	</fieldset>

	<div>
		{#if submitting}
			<p class="waitting-message alert-box">Submitting...</p>
		{:else if !submitting && form?.success}
			<p class="success-message alert-box">Usuário criado com sucesso!</p>
		{:else if form?.body && form.body.error}
			<p class="error-message alert-box">{form.body.error}</p>
		{/if}
	</div>
</article>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	article {
		max-width: 450px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	fieldset {
		box-shadow: 0 10px 20px rgba(19, 17, 17, 0.1);
		margin: 0;
		border: 2px solid #5a5a5a;
	}

	form > span {
		color: red;
		font-size: small;
		font-weight: bold;
		text-align: center;
	}
	/* create alert message */
	.alert-box {
		padding: 8px 8px;
		box-shadow: 0 5px 10px rgba(19, 17, 17, 0.1);
		border: 2px solid #5a5a5a;
		height: fit-content;
	}

	.success-message {
		color: green;
		font-weight: bold;
	}

	.error-message {
		color: red;
		font-weight: bold;
	}

	.waitting-message {
		color: goldenrod;
		font-weight: bold;
	}
</style>
