<script lang="ts">
	import { error, redirect } from '@sveltejs/kit';
	// throw error(404, '123 Not found');
	throw redirect(302, '/');
</script>
