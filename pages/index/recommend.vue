<template>
	<view class="container">
		<view class="user_box">
			<view class="left">
				<image mode="widthFix" :src="userinfo.avatar"/>
				<text>{{ userinfo.username }}</text>
				<image mode="widthFix" src="https://pic.imgdb.cn/item/652368cac458853aef30998c.png"/>
			</view>
			
			<view class="right">
				<text>查看我的音乐DNA</text>
				<uni-icons style="margin-top: 1px;" type="forward" color="gray" size="15"></uni-icons>
			</view>
		</view>
	</view>
</template>


<script>
import { mapState } from 'vuex'
import imgSongItem from '@/components/singerDetail/imgSongItem.vue'
export default {
	components: { imgSongItem },
	computed:{
		...mapState('user', ['userinfo']),
	},
	data(){
		return {
			options:[
				{
					text: '删除',
					style: {
					backgroundColor: '#dd524d'
					}
				}
			]
		}
	},
}
	

</script>


<style lang="scss">
.container{
	.user_box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.left{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 10px;
			
			image{
				width: 30px;
				border-radius: 50%;
			}
			
			text{
				font-weight: bold;
				font-size: 15px;
			}
		}
		
		.right{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-weight: 300;
			font-size: 13px;

		}
	}
}
</style>



