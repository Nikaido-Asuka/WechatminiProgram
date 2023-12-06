<template>
	<view class="bigbox">
		<view class="head">
			<image class="logo" src="https://pic.imgdb.cn/item/655b0b27c458853aef344398.png"/>
			<text>您还未登陆 更多功能请登录使用！</text>
		</view>
		
		<image src="https://pic.imgdb.cn/item/655b0a27c458853aef3118d0.png"/>
		<button class="btn" @click="login">一键登陆</button>
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	import { mapState, mapMutations } from 'vuex'
	export default {
	  data() {
	    return {
			id: 1,
	    }
	  },
	  methods:{
	    ...mapMutations('user', ['updateUserInfo', 'updateToken']),
	    login(){
			request({
				url: '/qqmusic/user/' + this.id,
				method: 'POST',
			}).then((response)=>{
				console.log(response);
				this.updateUserInfo(response.userinfo);
				this.updateToken(response.token);
			}).catch(err => console.log(err));
	    }
	  }
	}

</script>

<style scoped lang="scss">
.bigbox{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 150px 20px;
	padding-bottom: 0px;
	gap: 20px;
	
	.head{
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 5px;
		
		.logo{
			width: 20px;
			height: 20px;
		}
	}
	
	
	
	image{
		width: 150px;
		height: 150px;
	}
	
	.btn{
		width: 200px;
		border-radius: 32px;
		color: white;
		background-color: #52d54e;
	}
}
</style>
