<template>
	<view class="bigbox">
		<view class="content">
			<view class="title">
				<text>我的年度歌手榜</text>
				<view class="right">
					<text>排行规则</text>
					<uni-icons type="help" size="20" color="gray"></uni-icons>
				</view>
			</view>
			
			
			<view class="list">
				
				<view class="item" v-for="(item, index) in singerList" :key="item.id">
					<text style="width: 20px;" :class="[0,1,2].includes(index) ? 'active' : '' ">{{index + 1}}</text>
					<image :src="item.img"/>
					<view class="end">
						<text class="name">{{item.name}}</text>
						<view class="buttom">
							<text class="playNum">{{item.playNum}}次</text>
							<text class="contribute" v-if="item.playNum > 2500">本周播放量贡献排名999+</text>
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				singerList:[{
					id: '1',
					name: '陶喆',
					img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg',
					playNum: 6035,
				},{
					id: '2',
					name: '张雨生',
					img: 'https://pic.imgdb.cn/item/650e4032c458853aefbfbdd1.jpg',
					playNum: 2547
				},{
					id: '3',
					name: '周杰伦',
					img: 'https://pic.imgdb.cn/item/650e4032c458853aefbfbdb4.jpg',
					playNum: 1057,
				},{
					id: '4',
					name: '张韶涵',
					img: 'https://pic.imgdb.cn/item/650e4335c458853aefc0e9a3.jpg',
					playNum: 450
				},{
					id: '5',
					name: '王力宏',
					img: 'https://pic.imgdb.cn/item/650f9eb7c458853aef466149.webp',
					playNum: 380
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
.bigbox{
	padding-bottom: 350px;
	background: linear-gradient(#185132, #2c2c2e);
	
	.content{
		padding: 100px 20px;
		
		.title{
			display: flex;
			justify-content: space-between;
			
			text{
				color: white;
				font-size: 25px;
				font-weight: bold;
			}
			
			.right{
				display: flex;
				justify-content: space-between;
				align-items: center;
				text{
					color: gray;
					font-size: 15px;
				}
			}
		}
		
		
		.list{
			height: 200px;
			margin-top: 20px;
			
			.item{
				height: 80px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-direction: row;
				margin-top: 10px;
				
				.active{
					color: #31c27c;
					font-weight: bold;
					font-size: 26px;
				}
				
				text{
					color: gray;
					font-weight: bold;
				}
				
				image{
					width: 70px;
					height: 70px;
					border-radius: 50%;
					margin-left: 20px;
				}
				
				.end{
					height: 60px;
					margin-left: 20px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					
					.name{
						color: white;
						font-size: 18px;
						font-weight: 300;
					}
					.buttom{
						width: 200px;
						display: flex;
						justify-content: space-between;
						
						.playNum{
							font-size: 12px;
						}
						
						.contribute{
							font-size: 12px;
						}
					}
				}
			}
		}
	}
	
}

</style>
