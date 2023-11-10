<template>
	<view class="list">
		<view class="item" v-for="(item, index) in sheetList" :key="item.id">
			<image :src="item.img"/>
			
			<view class="info">
				<text class="name">{{ item.name }}</text>
				<text class="text">{{ item.first }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"sheet",
		data() {
			return {
				sheetList:[{
					id: '1',
					name: '陶喆精选',
					img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
					first: '流沙(Reimagined) - 陶喆'
				},{
					id: '2',
					name: '23秋冬',
					img: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
					first: '太美丽(Live) - 陶喆'
				},{
					id: '3',
					name: '20夏',
					img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg',
					first: '逆さまの蝶 - 中岛幸惠'
				}]
			};
		}
	}
</script>

<style lang="scss">
.list{
	margin-top: 10px;
	.item{
		display: flex;
		margin-bottom: 20rpx;
		
		image{
			width: 80px;
			height: 80px;
			border-radius: 12px;
		}
		
		
		.info{
			color: white;
			display: flex;
			flex-direction: column;
			margin-left: 20px;
		
			
			.name{
				margin-top: 10px;
				color: white;
				font-size: 16px;
				font-weight: bold;
			}
			.text{
				margin-top: 25px;
				font-size: 12px;
				color: gray;
			}
		}
	}
}
</style>