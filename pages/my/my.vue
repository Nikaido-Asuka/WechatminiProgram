<template>
	<view class="bigbox">
		<Userinfo v-if="token"></Userinfo>
		<Login v-else/>
	</view>
</template>

<script>
	import Userinfo from '@/components/user/userinfo.vue'
	import Login from '@/components/user/Login.vue'
	import { mapMutations, mapState } from 'vuex'
	export default {
		data() {
			return {
			};
		},
		computed:{
			...mapState('user', ['token']),
		},
		components:{
			Userinfo,
			Login
		}
	}
</script>

<style lang="scss" scoped>
.bigbox{
	background-color: #191919;
}
</style>
