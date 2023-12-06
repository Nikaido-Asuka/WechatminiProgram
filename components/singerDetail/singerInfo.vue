<template>
	<view class="bigbox">
		
		<!-- 1.简介 -->
		<view class="box">
			<!-- 1.1头部 -->
			<view class="head">
				<text class="title">简介</text>
				<text>更多 > </text>
			</view>
			<!-- 1.2内容  -->
			<view class="content">
				<text>认证信息：知名歌手，歌单达人</text>
				<text class="detail">
					{{ singerInfo.info }}
				</text>
			</view>
			
		</view>
		
		<!-- 2.歌曲 -->
		<view class="box">
			<!-- 2.1头部 -->
			<view class="head">
				<text class="title">精选歌曲</text>
				<text>更多 > </text>
			</view>
			
			<!-- 2.2歌曲部分 -->
			<imgSongItem/>
		</view>
		
		<!-- 3.视频 -->
		<view class="box">
			<!-- 3.1头部 -->
			<view class="head">
				<text class="title">精选视频</text>
				<text>更多 > </text>
			</view>
			
			<!-- 3.2视频部分 -->
			<view class="video">
				<image src="https://pic.imgdb.cn/item/655ac964c458853aef683423.png"/>
				<text>暂无视频</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import imgSongItem from '@/components/singerDetail/imgSongItem.vue'
	export default {
		components: { imgSongItem },
		props: ['singerInfo'],
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.head{
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	text{
		color: gray;
		font-size: 20rpx;
	}
	
	.title{
		color: white;
		font-size: 34rpx;
	}
}

.bigbox{
	padding: 0 20px;
	
	.box{
		margin-top: 20px;
		
		.content{
			padding-top: 10px;
			color: gray;
			font-size: 25rpx;
			text-overflow: ellipsis;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			
			
			.detail{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3; /* 控制显示行数 */
			}
		}
	}
	
	.box{
		
		.video{
			height: 200px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			image{
				width: 200px;
				height: 200px;
			}
		}
	}
}
</style>
