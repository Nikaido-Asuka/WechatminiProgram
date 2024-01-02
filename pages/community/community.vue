<template>
	<view class="bigbox">
		<!-- 头部导航 -->
		<view class="nav_box">
			<view class="nav">
				<view class="item" v-for="(item, index) in  routerTitle" :key="index" :class="pageIndex === index ? 'active' : ''" @click="changePage(index)">
					{{ item }}
				</view>
			</view>
			
			<view class="buttom" :class="pageIndex === 1 ? 'right': '' "></view>
		</view>
		
		
		
		<!-- 路由页面内容 -->
		<view class="content">
			
			<view class="panel">
				<text class="title">推荐歌手</text>
				<scroll-view class="singer_list" scroll-x="true">
					<view class="singer_item" v-for="(item, index) in singerList" :key="item.id" @click="toSingerDetail(item.id)" :style="{ background: 'linear-gradient(' + item.color1 + ',' + item.color2 +')', }">
						<view class="item_content">
							<image class="img" :src="item.img"></image>
							<text class="name">{{ item.name }}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			
			
			
			
			<!-- 广场 -->
			<view class="square">
				<Square v-show="pageIndex === 0"></Square>
			</view>
			
			
			
			<!-- 关注 -->
			<Focus v-show="pageIndex === 1"></Focus>
		</view>
		
		<view v-show="isShow" class="music_bar">
			<musicBar/>
		</view>
	</view>
</template>

<script>
	import Square from '@/pages/community/square.vue'
	import Focus from '@/pages/community/focus.vue'
	import musicBar from '@/components/musicBar/musicBar.vue'
	import { mapState } from 'vuex'
	export default {
		name: 'community',
		components:{ Square, Focus, musicBar },
		computed:{
			...mapState('post', ['isShow']),
		},
		data() {
			return {
				addPost: {},
				pageIndex: 0,
				routerTitle:[ '广场', '关注'],
				singerList:[{
					id: '1',
					name: '陶喆',
					img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg',
					color1: '#6495ed',
					color2: '#acc1e5',
				},{
					id: '2',
					name: '周杰伦',
					img: 'https://pic.imgdb.cn/item/650e4032c458853aefbfbdb4.jpg',
					color1: '#663399',
					color2: '#7567b4',
				},{
					id: '3',
					name: '张雨生',
					img: 'https://pic.imgdb.cn/item/650e4032c458853aefbfbdd1.jpg',
					color1: '#ffdead',
					color2: '#f3fcca'
				},{
					id: '4',
					name: '王力宏',
					img: 'https://pic.imgdb.cn/item/650f9eb7c458853aef466149.webp',
					color1: '#f3fd66',
					color2: '#c8fe7b',
				}],
			};
		},
		methods:{
			changePage(index){
				this.pageIndex = index;
			},
			toSingerDetail(id){
				uni.navigateTo({
					url: '/subpages/singerDetail/singerDetail?id=' + id,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.bigbox{
	padding-bottom: 150px;
	position: relative;
	background-color: black;
	
	.nav_box{
		position: fixed;
		padding-top: 50px;
		width: 100%;
		background-color: #2e2e2e;
		z-index: 10;
		
		.nav{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			margin-left: 20px;
			
			.item{
				margin-right: 20px;
				font-size: 23px;
				transition: all 0.3s ;
				width: 70px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				color: gray;
			}
			
			.active{
				color: white;
				font-weight: bold;
				font-size: 27px;
				border-radius: 3px;
				transition: all 0.3s ;
			}
		}
		
		.buttom{
			margin-left: 26px;
			width: 60px;
			height: 5px;
			border-radius: 8px;
			background-color: #31c27c;
			transition: all 0.3s;
		}
		.right{
			margin-left: 115px;
			transition: all 0.3s;
		}
	}
	.content{
		position: relative;
		top: 100px;
		z-index: 0;
		
		.panel{
			padding:10px 10px;
			background-color: #2e2e2e;
			
			.title{
				color: white;
				font-weight: bold;
				font-size: 18px;
			}
			
			.singer_list{
				margin-top: 10px;
				white-space: nowrap;
				width: 100%;
				
				.singer_item{
					display: inline-block;
					width: 110px;
					height: 150px;
					border-radius: 8px;
					margin-right: 20px;
					
					
					.item_content{
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: flex-start;
						padding: 10px 0px;
					
						.img{
							width: 65px;
							height: 65px;
							border-radius: 50%;
						}
						.name{
							color: #2e2e2e;
							font-size: 18px;
							font-weight: 400;
							margin-top: 20px;
						}
					}
				}
			}
		}
		
		.square{
			z-index: 20!important;
		}
	}
}
.music_bar{
		left: 15px;
		position: fixed;
		bottom: 10px;
		z-index: 10;
}
</style>
