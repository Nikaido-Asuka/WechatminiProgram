<template>
	<view class="bigbox">
		
		<view class="back" @click="back">
			<uni-icons type="left" size="20" color="white"></uni-icons>
		</view>
		
		<view class="content_box">
			<!-- 头部盒子 -->
			<view class="head">
				<text class="name">ENFP</text>
				<text class="icon">🤪</text>
				<text>自由创造家</text>
			</view>
			
			<!-- 内容 -->
			<view class="content">
				<text class="title">音乐人格·ENFP</text>
				<text class="info">音乐世界中的另一个你：“热情、自由、有创造力”。你希望在音乐当中寻求放松和慰籍，音乐的律动是你外在能量的来源。你奉行不破不立的准则，以超强的感知力捕捉音符的律动，配合你充沛的想象力与创造力渲染出更华丽的乐章</text>
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
		methods:{
			back(){
				uni.navigateBack();
			}
		},
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
		}
	}
</script>

<style scoped lang="scss">
.bigbox{
	padding-bottom: 350px;
	background: linear-gradient(#185132, #2c2c2e);
	
	.back{
		position: absolute;
		top: 55px;
		left: 20px;
	}
	
	.content_box{
		padding: 100px 20px;
		
		.head{
			width: 200px;
			height: 200px;
			border-radius: 12px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			background: linear-gradient(to right bottom, #106fdc, #0eb9f7 );
			
			text{
				font-weight: bold;
				font-size: 22px;
			}
			
			.name{
				font-size: 30px;
				padding-left: 80px;
				width: 100%;
				padding-top: 10px;
			}
			.icon{
				font-size: 70px;
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
