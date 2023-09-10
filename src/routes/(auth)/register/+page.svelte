<article>
	<fieldset>
		<legend><h1>Register</h1></legend>
		<form action="register" method="post">
			<label for="username"
				>Username
				<input type="text" name="username" placeholder="Username" />
			</label>
			<label for="password"
				>Password

				<input type="password" name="password" placeholder="Password" />
			</label>
			<label for="confirmPassword"
				>Confirm Password

				<input type="password" name="confirmPassword" placeholder="Confirm Password" />
			</label>
			<button type="submit">Register</button>
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
</style>
