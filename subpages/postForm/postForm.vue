<template>
	<view class="container">
		<view class="head">
			<view class="cancel" @click="cancel">取消</view>
			<view class="title">发扑通动态</view>
		</view>
		
		<view class="content">
			
			<!-- 1.添加音乐部分 -->
			<view class="add_music">
				<view v-if="!isMusic" class="add_music_content">
					<view class="left">添加音乐</view>
					<view class="right">分享音乐 传播温暖 > </view>
				</view>
				
				<view v-else class="add_music_content">
					<view class="left_active">流沙（Reimagined）-- 陶喆</view>
					<uni-icons type="closeempty" color="gray" size="15"></uni-icons>
				</view>
			</view>
			
			<!-- 2.评论部分 -->
			<view class="uni_textarea">
				<textarea/>
				
				<view class="image">
					<uni-icons type="plusempty" size="25" color="gray"></uni-icons>
					<text>图片</text>
				</view>
			</view>
			
			<!-- 3.音乐卡片部分 -->
			<view v-if="isMusic" class="music_card">
				<image src="https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg"/>
				<view class="info">
					<text class="name">流沙（Reimagined）</text>
					<text class="singer">陶喆</text>
				</view>
			</view>
				
			
			
			<view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isMusic: false,
			};
		},
		methods:{
			cancel(){
				uni.navigateBack();
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	
	.head{
		display: flex;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.1);
		padding-top: 41px;
		height: 50px;
		
		.cancel{
			font-size: 14px;
			color: gray;
			margin-left: 20px;
		}
		.title{
			font-size: 18px;
			font-weight: bold;
			width: 100px;
			text-align: center;
			margin-left: 85px;
		}
	}
	
	.content{
		padding: 0 20px;
			
		.add_music{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 0.5px solid #3e3e3e;
			padding: 7px 0px;
			padding-top: 10px;
			
			.add_music_content{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				
				.left{
					font-size: 17px;
				}
				
				.right{
					font-size: 15px;
					color: gray;
				}
				.left_active{
					color: #31c27c;
				}
			}
			
		}
		
		.uni_textarea{
			
			
			textarea{
				height: 70px;
				width: 100%;
				padding-top: 50px;
			}
			
			.image{
				width: 80px;
				height: 80px;
				border-radius: 8px;
				background-color: black;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				
				text{
					color: gray;
				}
			}
		}
		
		.music_card{
			background-color: rgba(255, 255, 255, 0.1);
			margin-top: 20px;
			height: 70px;
			border-radius: 12px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 20px;
			
			image{
				width: 70px;
				height: 70px;
				border-radius: 8px;
			}
			
			.info{
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				.name{
					font-size: 15px;
				}
				.singer{
					color: gray;
					font-size: 12px;
				}
			}
		}
		
		
		
	}
}
</style>
