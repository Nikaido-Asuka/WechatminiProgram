<template>
	<view class="container">
		
		<!-- 1.用户行 -->
		<view class="user_box">
			<view class="left">
				<image mode="widthFix" :src="userinfo.avatar"/>
				<text>{{ userinfo.username }}</text>
				<image mode="widthFix" src="https://pic.imgdb.cn/item/652368cac458853aef30998c.png"/>
			</view>
			
			<view class="right">
				<text>查看我的音乐DNA</text
				<uni-icons style="margin-top: 1px;" type="forward" color="gray" size="15"></uni-icons>
			</view>
		</view>
		
		
		<!-- 2.滑块行 -->
		<scroll-view class="scroll_box" scroll-x="auto">
			<!-- 2.1猜你喜欢 -->
			<view class="like_box box">
				<view class="head">
					<view class="left">
						<text class="title">猜你喜欢</text>
						<text class="info">听点宝藏歌曲醒醒神</text>
					</view>
					
					<view class="right">
						<image mode="widthFix" src="https://pic.imgdb.cn/item/656557a3c458853aef80e435.jpg"/>
					</view>
				</view>
				
				<text style="font-size: 12px;">一天到晚游泳的鱼 - 张雨生</text>
			</view>
			
			<!--  -->
			<view class="box song_box" v-for="(item, index) in songBox" :key="item.id">
				<view class="head" :style="{ '--bgurl': 'url(' + item.img + ')' }">
					<view class="dot" :style="{ backgroundColor: item.color }">
						<view class="text">{{ item.title }}</view>
					</view>
				</view>
				<text style="font-size: 12px;">{{ item.info }}</text>
			</view>
			
			
			
		</scroll-view>
		
		
		<!-- 3.主体 -->
		<view class="content">
			<SwiperSong 
				v-for="(item, index) in titleArr" 
				:key="item.id" 
				:title="item.title" 
				:arrList="item.arrList"/>
		</view>
	</view>
</template>


<script>
import { mapState } from 'vuex'
import imgSongItem from '@/components/singerDetail/imgSongItem.vue'
import SwiperSong from '@/components/swiperSong/swiperSong.vue'
export default {
	components: { imgSongItem, SwiperSong },
	computed:{
		...mapState('user', ['userinfo']),
	},
	data(){
		return {
			options:[
				{
					text: '删除',
					style: {
					backgroundColor: '#dd524d'
					}
				}
			],
			songBox:[{
				id: '1',
				title: 'Daily 30',
				img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
				color: '#f8da7c',
				info: '每日30首'
			},{
				id: '2',
				title: '快听',
				img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg',
				color: '#383eff',
				info: '快听',
			},{
				id: '3',
				title: '排行榜',
				img: 'https://pic.imgdb.cn/item/65684686c458853aefd602ee.jpg',
				color: '#7d4aab',
				info: '排行榜'
			},{
				id: '4',
				title: 'Hot',
				img: 'https://pic.imgdb.cn/item/656557a3c458853aef80e493.jpg',
				color: '#ff5339',
				info: '百万收藏'
			}],
			titleArr: [{
				id: '1',
				title: '听「一念之间」的也会听',
				arrList:[[{
					id: '1',
					name: '流沙（Reimagined）',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg'
				},{
					id: '3',
					name: "I'm OK（Reimagined）",
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg'
				},{
					id: '2',
					name: '蝴蝶',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg'
				}],[{
					id: '4',
					name: '就是爱你',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/65083df1204c2e34d3a4e84e.jpg'
				},{
					id: '5',
					name: '太美丽',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg'
				},{
					id: '6',
					name: '飞机场的十点半',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg'
				}],[{
					id: '7',
					name: '爱很简单',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg'
				},{
					id: '8',
					name: '黑色柳丁',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg'
				},{
					id: '9',
					name: '不爱',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg'
				}]],
			}, {
				id: '2',
				title: '红心歌曲预定',
				arrList:[[{
					id: '10',
					name: '大海',
					singer: '张雨生',
					img: 'https://pic.imgdb.cn/item/656557aac458853aef80f49c.jpg'
				},{
					id: '11',
					name: "宁可让我苦",
					singer: '张雨生',
					img: 'https://pic.imgdb.cn/item/656557aac458853aef80f49c.jpg'
				},{
					id: '3',
					name: '爱是个什么东西',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg'
				}],[{
					id: '12',
					name: '口是心非',
					singer: '张雨生',
					img: 'https://pic.imgdb.cn/item/656557acc458853aef80f8a7.jpg'
				},{
					id: '5',
					name: '不爱',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg'
				},{
					id: '6',
					name: '望春风',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg'
				}],[{
					id: '7',
					name: '爱很简单',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg'
				},{
					id: '8',
					name: '月亮代表谁的心',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg'
				},{
					id: '9',
					name: '不爱',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg'
				}]],
			}, {
				id: '3',
				title: '大家都在听',
				arrList:[[{
					id: '13',
					name: 'カメレオン (变色龙)',
					singer: 'King Gnu',
					img: 'https://pic.imgdb.cn/item/656557a3c458853aef80e51e.jpg'
				},{
					id: '14',
					name: "カナタハルカ (遥远的彼方)",
					singer: 'RADWIMPS',
					img: 'https://pic.imgdb.cn/item/656557b0c458853aef810109.jpg'
				},{
					id: '15',
					name: '虹',
					singer: '菅田将晖',
					img: 'https://pic.imgdb.cn/item/656557b6c458853aef810e45.jpg'
				}],[{
					id: '16',
					name: '夕烧けの歌',
					singer: '近藤真彦',
					img: 'https://pic.imgdb.cn/item/656557a3c458853aef80e4c1.jpg'
				},{
					id: '17',
					name: '我期待',
					singer: '张雨生',
					img: 'https://pic.imgdb.cn/item/656557a3c458853aef80e493.jpg'
				},{
					id: '6',
					name: '飞机场的十点半',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg'
				}],[{
					id: '7',
					name: '爱很简单',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg'
				},{
					id: '8',
					name: '黑色柳丁',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg'
				},{
					id: '9',
					name: '不爱',
					singer: '陶喆',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg'
				}]],
			}],			
		}
	},
}
	

</script>


<style lang="scss">
.container{
	.user_box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.left{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 10px;
			
			image{
				width: 30px;
				border-radius: 50%;
			}
			
			text{
				font-weight: bold;
				font-size: 15px;
			}
		}
		
		.right{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-weight: 300;
			font-size: 13px;
		}
	}
	
	.scroll_box{
		margin-top: 10px;
		white-space: nowrap;
		width: 100%;
		
		.box{
			display: inline-block;
			margin-right: 10px;
			
		}
		
		
		.like_box{
			.head{
				width: 230px;
				height: 100px;
				border-radius: 12px;
				background-color: white;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-image: url("https://pic.imgdb.cn/item/6482bc7b1ddac507cc752d89.png");
				background-size: 100%;
				background-repeat: no-repeat;
				
				.left{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					
					.title{
						color: white;
						font-size: 20px;
						font-weight: bold;
					}
					
					.info{
						font-size: 12px;
						color: rgba(255, 255, 255, 0.7);
					}
				}
				
				.right{
					image{
						border-radius: 12px;
						width: 80px;
					}
				}
			}
		}
		
		.song_box{
			
			.head{
				position: relative;
				overflow: hidden;
				width: 100px;
				height: 100px;
				border-radius: 12px;
				background-image: var(--bgurl);
				background-size: 100%;
				background-repeat: no-repeat;
				
				.dot{
					z-index: 1;
					position: absolute;
					width: 80px;
					height: 80px;
					border-radius: 50%;
					left: -40px;
					top: -40px;
					
					.text{
						z-index: 2;
						color: white;
						font-weight: bold;
						font-size: 20px;
						background: none;
						position: absolute;
						left: 45px;
						bottom: 10px;
					}
				}
				
			}
			
			
		}
		
		
	}
	
	.content{
		margin-top: 20px;
	}
}
</style>



