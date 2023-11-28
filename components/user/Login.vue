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
	import { mapState, mapMutations } from 'vuex'
	export default {
	  data() {
	    return {
	    }
	  },
	  methods:{
	    ...mapMutations('user', ['updateUserInfo', 'updateToken']),
	    login(){
		  const user = {
		    id: '1',
		    username: 'Nikaido Asuka',
		    avatar: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
			bgImg: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg',
		    focusNum: 16,
		    fansNum: 16,
		    firend: 189,
		    visitorNum: 298
		  }
		  const token = "e123hu92ehhoiei1o2iu3i"
		  this.updateUserInfo(user);
		  this.updateToken(token);
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
