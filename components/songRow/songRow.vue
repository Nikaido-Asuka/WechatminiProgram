<template>
	<view>
		<view class="item" v-for="(item, index) in songList" :key="item.id">
			
			<view class="left">
				<text>{{ item.name }}</text>
				<view class="buttom">
					<view v-show="item.isVip" class="my_tag success">VIP</view>
					<view class="my_tag warning">臻品母带</view>
					<text class="info">陶喆 · {{ item.album }}</text>
				</view>
			</view>
			
			<view class="right">
				<uni-icons size="22" color="#8a8a8a" type="videocam-filled"></uni-icons>
				<uni-icons size="22" color="#8a8a8a" type="plusempty"></uni-icons>
				<uni-icons size="22" color="#8a8a8a" type="more-filled"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"songRow",
		data() {
			return {
				singer: '陶喆',
				songList:[{
					id: '1',
					name: '流沙（Reimagined）',
					album: '流沙（Reimagined）',
					isVip: false,
				},{
					id: '2',
					name: '爱我还是他',
					album: '太平盛世',
					isVip: true,
				},{
					id: '3',
					name: "I'm OK（Reimagined）",
					album: "I'm OK（Reimagined）",
					isVip: false,
				},{
					id: '4',
					name: '飞机场的十点半',
					album: '陶喆同名专辑',
					isVip: true,
				}]
			};
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
	.right{
		display: flex;
		gap: 10px;
	}
}

</style>