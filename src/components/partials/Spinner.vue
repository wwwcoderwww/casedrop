<template>
	<div class="loader-wrap">
		<bounce-loader :size="size"></bounce-loader>
	</div>
</template>

<script>
import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

export default {
	props: {
		size: {
			type: String,
			default: '100px'
		}
	},
	components: {
		BounceLoader
	}
}
</script>

<style lang="scss">
.loader-wrap {
	width: 100%;
	.v-spinner {
		margin: 15px auto;
		.v-bounce {
			margin: 0 auto
		}
	}
}
.v-bounce2 {
	background: linear-gradient(135deg, #ef2849 0%, #7568e7 100%) !important;
}

.v-bounce3 {
	background: linear-gradient(135deg, #ef2849 0%, #7568e7 100%) !important;
}
</style>

