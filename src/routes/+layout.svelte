<div>
	<nav class="">
		<ul>
			<li><a href="/">Home</a></li>
		</ul>
		<div class="space" />
		<ul>
			<li><a href="/login">Login</a></li>
			<li><a href="/register">Register</a></li>
		</ul>
	</nav>
	<div class="body-layout">
		<slot />
	</div>
</div>

<style>
	:global(body) {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
			sans-serif;
	}
	nav > ul {
		display: flex;
		font-weight: 700;
		list-style: none;
		padding: 0;
		gap: 1rem;
	}
	.space {
		flex-grow: 1;
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		max-width: 650px;
		margin: auto;
	}

	.body-layout {
		max-width: 650px;
		margin: auto;
		padding: 1rem;
	}

	a {
		text-decoration: none;
		color: #000;
	}
</style>
