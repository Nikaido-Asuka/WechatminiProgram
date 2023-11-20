<template>
	<view class="bigbox">
		<Userinfo></Userinfo>
	</view>
</template>

<script>
	import Userinfo from '@/components/user/userinfo.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			Userinfo
		}
	}
</script>

<style lang="scss" scoped>
.bigbox{
	background-color: #2e2e2e;
}
</style>
