<template>
	<view>
		<view class="item" v-for="(item, index) in songList" :key="item.id">
			
			<view class="left">
				<text>{{ index + 1 }}</text>
				
				<view class="left_info" @click="toPlay(item.id)">
					<text>{{ item.name }}</text>
					<view class="buttom">
						<view v-show="item.isVip" class="my_tag success">VIP</view>
						<view class="my_tag warning">臻品母带</view>
						<text class="info">陶喆 · {{ item.album }}</text>
					</view>
				</view>
				
			</view>
			
			<view class="right">
				<uni-icons size="22" color="#8a8a8a" type="heart"></uni-icons>
				<uni-icons size="22" color="#8a8a8a" type="plusempty"></uni-icons>
				<uni-icons size="22" color="#8a8a8a" type="more-filled"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"songRow",
		props: ['songList'],
		data() {
			return {
				singer: '陶喆',
			};
		},
		methods:{
			toPlay(id){
				uni.navigateTo({
					url: '/pages/songDetail/songDetail?id = ' + id,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.item{
	margin-top: 20px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 20px;
		
		.left_info{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			text{
				color: white;
				font-size: 30rpx;
			}
			
			.buttom{
				margin-top: 5px;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 5px;
				
				.my_tag{
					padding: 0 5px;
					font-size: 16rpx;
					text-align: center;
					border-radius: 3px;
				}
				
				.info{
					 color: gray;
					  font-size: 12px;
					  width: 100px;
					  overflow: hidden; /* 隐藏溢出部分 */
					  white-space: nowrap; /* 禁止换行 */
					  text-overflow: ellipsis; /* 显示省略号 */
				}
				
				.success{
					border: 1px solid #2fce85;
					color: #2fce85;
				}
				.warning{
					border: 1px solid #ce992c;
					color: #ce992c;
				}
			}
		}
		
		
	}
	.right{
		display: flex;
		gap: 10px;
	}
}

</style>