<template>
	<view>
	<!-- 写帖子 -->
	<view @click="toWrite" class="addPost">
		<uni-icons size="25" color="white" type="plusempty"></uni-icons>
	</view>
	<view class="item" v-for="(item, index) in postsList" :key="item.id">
		
		
		
		<!-- 头部 -->
		<view class="head">
			<image class="avatar" :src="item.avatar"></image>
			<view class="head_info">
				<text :style="{ color: item.isStar ? '#31c27c' : 'gray'}" class="username">{{ item.username }}</text>
				<text class="time">{{ item.time }}</text>
			</view>
		</view>
		
		<!-- info -->
		<view class="info">
			<view class="text">{{ item.text }}</view>
			
			<view class="song_box">
				<image class="play" src="../../static/community/播放.png"></image>
				<image :src="item.song.img"></image>
				<view class="center">
					<text class="name">{{ item.song.name }}</text>
					<text class="singer">{{ item.song.singer }}</text>
				</view>
				<uni-icons @click="changeLike(index)" v-if="!item.song.isLike" class="icon" type="heart" color="gray" size="25"></uni-icons>
				<uni-icons @click="changeLike(index)" v-else class="icon" type="heart-filled" color="brown" size="25"></uni-icons>
			</view>
			
			<view class="buttom">
				<view class="icon_box">
					<uni-icons type="chat" size="22" color="gray"><text>18</text></uni-icons>
					{{ item.commentNum }}
				</view>
				
				<view class="icon_box">
					<uni-icons type="hand-up" size="22" color="gray"></uni-icons>
					{{ item.likeNum }}
				</view>
				
			</view>
			
		</view>
		
		
	</view>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex'
	export default {
		name: 'square',
		data() {
			return {
				
			};
		},
		computed:{
			...mapState('post', ['postsList']),
		},
		methods:{
			changeLike(index){
				this.postsList[index].song.isLike = !this.postsList[index].song.isLike;
				event.defaultPrevented();
			},
			toWrite(){
				uni.navigateTo({
					url: '/subpages/postForm/postForm'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.addPost{
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #31c27c;
	z-index: 100;
	text-align: center;
	line-height: 60px;
	
}
.item{
	border-radius: 8px;
	margin: 10px 10px;
	height: 200px;
	background-color: #2e2e2e;
	padding-bottom: 20px;
	position: relative;
	
	.head{
		padding: 10px 20px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		
		.avatar{
			width: 50px;
			height: 50px;
			border-radius: 50%;
		}
		.head_info{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 10px;
			height: 40px;
			
			.username{
				
			}
			.time{
				color: gray;
				font-size: 10px;
				font-weight: bold;
			}
		}
	}
	.info{
		padding: 0 20px;
		
		.song_box{
			width: 100%;
			height: 55px;
			overflow: hidden;
			margin-top: 20px;
			border-radius: 8px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: rgba(255,255, 255, 0.1);
			position: relative;
			
			.center{
				margin-left: 10px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				.name{
					color: white;
					font-size: 17px;
				}
				.singer{
					color: gray;
					font-size: 10px;
				}
			}
			.icon{
				position: absolute;
				right: 25px;
			}
			
			image{
				width: 55px;
				height: 55px;
				opacity: 0.5;
			}
			.play{
				width: 25px;
				height: 25px;
				position: absolute;
				left: 15px;
				opacity: 1;
			}
		}
		
		.buttom{
			padding-top: 10px;
			height: 20px;
			display: flex;
			justify-content: flex-start;

			.icon_box{
				padding: 3px 3px;
				height: 24px;
				width: 70px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color: gray;
			}
		}
	}
}
</style>
