<template>
	<view class="bigbox">
		<!-- 1.歌手头像盒子 -->
		<view class="singer_img">
			<view class="return" @click="goBack">
				<uni-icons type="left" color="white" size="25"></uni-icons>
			</view>
			
			<image mode="widthFix" :src="singerInfo.img"></image>
		</view>
		
		<!-- 2.歌手信息盒子 -->
		<view class="singer_info">
			
			<!-- 2.1姓名 -->
			<view class="head">
				<text>{{ singerInfo.name }}</text>
				<view>已关注</view>
			</view>
			
			<!-- 2.2其他信息 -->
			<view class="other_info">
				<text>入驻艺人</text>
				<text>{{ singerInfo.focusNum }} 关注 &nbsp;&nbsp;&nbsp; {{ singerInfo.fansNum }}万粉丝</text>
				<view class="buttom">
					<view class="item">扑通小组</view>
					<view class="item">乐迷勋章</view>
				</view>
			</view>
		</view>
		
		<!-- 3.2列表信息 -->
		<view class="list_box">
			<view class="list_title_box" scroll-x="true">
				<text 
					:class="titleIndex === index ? 'active' : ''" 
					v-for="(item, index) in titleArr" 
					:key="index"
					@click="changePage(index)"
					>{{ item }}</text>
			</view>
		</view>
		
		<view class="content_box">
			
			<!-- 1.百科 -->
			<singerInfo v-if="hasSingerInfo" :singerInfo="singerInfo" v-show="titleIndex === 0"/>
			   
			<!-- 2.歌曲 -->
			<songList v-show="titleIndex === 1"/>
			
			<!-- 3.专辑 -->
			<view v-show="titleIndex === 2" style="padding: 10px 20px;">
				<Album/>
			</view>
			
			<!-- 4.视频 -->
			<view v-if="titleIndex === 3" class="video">
				<image src="https://pic.imgdb.cn/item/655ac964c458853aef683423.png"/>
				<text>暂无视频</text>
			</view>
			
			<!-- 5.歌单 -->
			<view v-if="titleIndex === 4" class="video">
				<image src="https://pic.imgdb.cn/item/655ac964c458853aef683423.png"/>
				<text>暂无歌单</text>
			</view>
				
		</view>
		
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	import songList from '@/components/singerDetail/songList.vue'
	import singerInfo from '@/components/singerDetail/singerInfo.vue'
	import Album from '@/components/sheet/sheet.vue'
	import { mapMutations } from 'vuex'
	export default {
		components: { songList, singerInfo, Album },
		data() {
			return {
				titleIndex: 1,
				titleArr: ['百科', '歌曲', '专辑', '视频', '歌单'],
				singerInfo: {},
			};
		},
		computed: {
		    hasSingerInfo() {
		      return Object.keys(this.singerInfo).length !== 0;
		    }
		},
		onLoad(options) {
			this.getSingerInfo(options.id);
		},
		methods:{
			...mapMutations('singer', ['updateSinger', 'updateSongList']),
			getSingerInfo(id){
				request({
					url: '/qqmusic/singer/getSingerInfo/' + id,
					method: 'GET',
				}).then((response)=>{
					this.updateSinger(response.data.singer);
					this.singerInfo = response.data.singer;
					this.updateSongList(response.data.songList);
				}).catch(err => console.log(err));
			},
			changePage(index){
				this.titleIndex = index;
			},
			goBack(){
				uni.navigateBack();
			}
		}
	}
</script>

<style scoped lang="scss">
.bigbox{
	padding-bottom: 100px;
	
	
	.singer_img{
		margin-top: -40px;
		position: relative;
		
		.return{
			position: absolute;
			top: 95px;
			left: 20px;
		}
		
		image{
			width: 380px;
			display: block;
		}
	}
	.singer_info{
		padding: 10px 20px;
		padding-bottom: 15px;
		position: relative;
		top: -70px;
		width: 300px;
		height: 130px;
		margin: 0 auto;
		background-color: #1f1f1f;
		z-index: 2;
		border-radius: 12px;
		
		.head{
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			text{
				color: white;
				font-size: 30px;
				font-weight: bold;
			}
			
			view{
				background-color: #2e2e2e;
				color: gray;
				font-weight: bold;
				width: 70px;
				height: 30px;
				border-radius: 12px;
				text-align: center;
				line-height: 30px;
				font-size: 14px;
			}
		}
		
		.other_info{
			padding-top: 10px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			color: rgba(255, 255, 255, 0.5);
			gap: 10px;
			font-size: 12px;
			font-weight: 400;
			
			.buttom{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				
				.item{
					margin-right: 10px;
					width: 80px;
					height: 20px;
					border-radius: 12px;
					border: 1px solid white;
					line-height: 20px;
					text-align: center;
					color: white;
					font-weight: bold;
				}
			}
		}
	}
	.list_box{
		padding: 0 20px;
		margin-top: -50px;
		
		.list_title_box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			text{
				font-size: 18px;
				transition: all 0.3s;
			}
			.active{
				color: #31c27c;
				font-weight: bold;
				transition: all 0.3s;
				font-size: 22px;
			}
		}
	}
	.content_box{
		.video{
			height: 200px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			image{
				width: 200px;
				height: 200px;
			}
		}
	}
}
</style>
