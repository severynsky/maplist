<template>
    <div class="hello">
        <h1>{{ this.text }}</h1>
    </div>
</template>

<script>
	export default {
		name: 'Home page',
		props: {
			msg: String
		},
        data() {
            return {
                text: 'hello',
            };
        },
	}
</script>
