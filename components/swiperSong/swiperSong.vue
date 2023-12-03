<template>
	<view class="container">
		<view class="head">
			
			<view class="head_left">
				<text>{{title}}</text>
				<view class="playTag">
					<image mode="widthFix" src="../../static/community/播放.png"/>
					<text>播放</text>
				</view>
			</view>
			
			<uni-icons color="#dadada" size="20" type="more-filled"></uni-icons>
			
		</view>
		
		<swiper class="swiper" :current="currentIndex" @change="handleSwiperChange">
			<swiper-item 
				class="swiper_item" 
				v-for="(item1, index1) in arrList" 
				:key="index1"
				:class="{active_swiper_item: currentIndex === index1}" 
				>
				<view class="list">
					<view class="item" v-for="(item2, index2) in item1" :key="index2" @click="toPlay(item2.id)">
						
						<view class="left">
							<image style="width: 55px; border-radius: 12px;" mode="widthFix" :src="item2.img"/>
						</view>
						
						<view class="right">
							<text class="name">{{ item2.name }}</text>
							<text class="singer">{{ item2.singer }}</text>
						</view>
						
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"swiperSong",
		props: ['title', 'arrList'],
		computed:{
		},
		methods:{
			handleSwiperChange(e){
				this.currentIndex = e.detail.current;
				console.log(this.currentIndex);
			},
			toPlay(id){
				uni.navigateTo({
					url: '/pages/songDetail/songDetail?id=' + id,
				})
			}
		},
		data() {
			return {
				currentIndex: 0,
				
			};
		}
	}
</script>

<style scoped lang="scss">
.container{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	
	.head{
		font-size: 18px;
		font-weight: bold;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.head_left{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 5px;
			
			.playTag{
				border-radius: 8px;
				background-color: rgba(49,194,124, 0.4);
				padding: 2px 7px;
				font-size: 10px;
				display: flex;
				align-items: center;
				gap: 3px;
				
				image{
					width: 10px;
				}
			}
		}
	}
	
	.swiper{
		margin-top: 10px;
		height: 230px;
		
		.swiper_item{
			position: relative;
			margin-left: -30px;
		
			.list{
				display: flex;
				flex-direction: column;
				gap: 10rpx;
				
				.item{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					gap: 10px;
					
					.right{
						display: flex;
						flex-direction: column;
						justify-content: center;
						gap: 5px;
						
						.name{
							font-size: 15px;
							font-weight: bold;
						}
						.singer{
							color: gray;
							font-weight: 300;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
	.active_swiper_item{
		margin-left: 0px!important;
	}
}
</style>