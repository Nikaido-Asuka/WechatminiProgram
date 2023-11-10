<template>
	<view class="bigbox">
		<view class="content_box">
			
			<!-- 头部盒子 -->
			<view class="head">
				<text class="name">独特</text>
				<image src="../../../static/userinfo/Compass.png"></image>
				<text >WIN DIRECTION</text>
			</view>
			
			<!-- 内容 -->
			<view class="content">
				<text class="title">音乐口味·独特</text>
				<text class="info">你的听歌口味涉猎广泛，有着不从众的音乐审美，总是可以发现很多宝藏</text>
			</view>
			
			<!-- 按钮 -->
			<view class="btn_box">
				<button v-for="(item, index) in btnList" :key="index" @click="btnIndex = index" class="btn" :class=" btnIndex === index ? 'active' : '' ">{{ item }}</button>
			</view>
			
			<!-- 列表 -->
			<view class="list">
				<view class="item" v-for="(item, index) in songsList[btnIndex]">
					<image :src="item.img"/>
					<view class="right">
						<text class="name">{{ item.name }}</text>
						<text class="singer">{{ item.singer }}</text>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name: "flavour",
		data() {
			return {
				btnList:['我的常听', '专属相关口味推荐'],
				songsList:[[{
					id: '1',
					name: '就是爱你',
					img: 'https://pic.imgdb.cn/item/65083df1204c2e34d3a4e84e.jpg',
					singer: '陶喆'
				},{
					id: '2',
					name: '太美丽',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg',
					singer: '陶喆'
				},{
					id: '3',
					name: '流沙(Reimagined)',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
					singer: '陶喆'
				}],[{
					id: '2',
					name: '太美丽',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg',
					singer: '陶喆'
				},{
					id: '3',
					name: '流沙(Reimagined)',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
					singer: '陶喆'
				}]],
				btnIndex: 0,
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
.bigbox{
	height: 300px;
	background: linear-gradient(#185132, #2c2c2e);
	
	.content_box{
		padding: 100px 20px;
		
		.head{
			width: 200px;
			height: 200px;
			border-radius: 12px;
			background-color: #2b88e4;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			
			text{
				font-weight: bold;
				font-size: 20px;
				opacity: 0.5;
			}
			
			.name{
				font-size: 30px;
				opacity: 1;
				padding-top: 10px;
			}
			
			
			image{
				width: 100px;
				height: 100px;
			}
		}
		
		.content{
			margin-top: 20px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			
			.title{
				font-weight: bold;
				font-size: 25px;
			}
			.info{
				padding-top: 5px;
				color: gray;
				font-weight: 300;
				font-size: 12px;
			}
		}
		
		.btn_box{
			margin-top: 20rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.btn{
				width: 48%;
				height: 40px;
				line-height: 40px;
				border-radius: 8px;
				color: gray;
				background-color: dimgray;
				font-size: 15px;
			}
			
			.active{
				color: white;
			}
		}
		
		.list{
			margin-top: 20px;
			
			.item{
				display: flex;
				margin-top: 10px;
				
				image{
					width: 70px;
					height: 70px;
					border-radius: 8px;
				}
				.right{
					margin-left: 20px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					
					.name{
						font-weight: bold;
						font-size: 20px;
					}
				}
			}
		}
	}
}
</style>
