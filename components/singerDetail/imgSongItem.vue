<template>
	<view>
		<view class="item" v-for="(item, index) in songList" :key="item.id">
			<view class="left">
				<image :src="item.img"/>
				<view class="left_info">
					<text>{{ item.name }}</text>
					<text class="info">{{ singer }} · {{ item.album }}</text>
				</view>
			</view>
			
			<uni-icons size="25" color="gray" type="videocam-filled"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				singer: '陶喆',
				songList:[{
					id: '1',
					name: '流沙（Reimagined）',
					album: '流沙（Reimagined）',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
					isVip: false,
				},{
					id: '3',
					name: "I'm OK（Reimagined）",
					album: "I'm OK（Reimagined）",
					img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
					isVip: false,
				},{
					id: '4',
					name: '飞机场的十点半',
					album: '陶喆同名专辑',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg',
					isVip: true,
				}]
			};
		}
	}
</script>

<style scoped lang="scss">
.item{
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.left{
		display: flex;
		
		.left_info{
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 20rpx;
			padding-left: 10px;
			
			text{
				color: white;
				font-size: 18px;
			}
			
			.info{
				 color: gray;
				  font-size: 12px;
				  width: 100px;
				  overflow: hidden; /* 隐藏溢出部分 */
				  white-space: nowrap; /* 禁止换行 */
				  text-overflow: ellipsis; /* 显示省略号 */
			}
		}
		
		
		
		image{
			width: 60px;
			height: 60px;
			border-radius: 12px;
		}
	}
}
</style>
