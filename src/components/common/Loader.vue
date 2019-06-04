<template>
	<div class="loader-wrap">
		<clip-loader :size="size + 'px'" :class=" fullRow ? 'full-row': '' " :color="color"></clip-loader>
	</div>
</template>

<script>

export default {
	props: {
		size: {
			type: Number,
			default: '100'
		},
		fullRow: {
			tyle: Boolean,
			default: true
		}
    },
    data() {
        return {
            color: '#eb4b4b'
        }
    },
	components: {
		ClipLoader: () => import('vue-spinner/src/ClipLoader.vue')
	}
}
</script>

<style lang="scss">
.loader-wrap {
	.full-row {
		width: 100%;
		.v-spinner {
			margin: 15px auto;
		}
	}
	.v-spinner {
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

