<template>
	<view class="container">
		<!-- 1.头部导航 -->
		<view class="uni-navbar-box">
			<view class="head">
				<view class="left" @click="back">
					<uni-icons type="left" size="20" color="white"></uni-icons>
				</view>
				
				<text class="uni-nav-bar-text">我的收藏</text>
			</view>
			
			<view class="navbar">
				<view class="active_box" :style="{ left: currentIndex * 93 + 25 + 'px' }" ></view>
				<view class="title-item" @click="changeIndex(index)" v-for="(item, index) in titleArr" :key="index">{{ item.title }} {{ item.number }} </view>
			</view>
		</view>
		
		
		<!-- 2.主体内容 -->
		<view class="uni-content">
			
			<!-- 2.1歌曲 -->
			<view class="song-list" v-if="currentIndex === 0">
				<view class="head">
					<view class="left">
						<view class="playbox">
							<image src="../../static/community/播放.png"/>
						</view>
						<text>全部播放</text>
					</view>
					<view class="right">
						<uni-icons type="download" size="20" color="white"></uni-icons>
						<uni-icons type="list" size="20" color="white"></uni-icons>
					</view>
				</view>
				
				<view class="song-list-content">
					<songRow :searchList="searchList"/>
				</view>
			</view>
			
			
			<!-- 2.2专辑 -->
			<view class="album-list" v-if="currentIndex === 1">
				<view class="head">
					<view class="left">18张专辑</view>
					<view class="right">
						<uni-icons type="list" size="20" color="#939393"></uni-icons>
					</view>
				</view>
				
				<view class="album-list-content">
					<sheetList :albumList="albumList"/>
				</view>
			</view>
			
			
			
			
		</view>
		
		
		<view class="music_bar">
			<musicBar/>
		</view>
		
	</view>
</template>

<script>
	import songRow from '@/components/songRow/songRow.vue'
	import sheetList from '@/components/sheetList/sheetList.vue'
	import request from '@/utils/request.js'
	import { mapState } from 'vuex'
	export default {
		components: { songRow, sheetList },
		data() {
			return {
				titleArr:[{
					title: '歌曲',
					number: 0,
				},{
					title: '专辑',
					number: 0,
				},{
					title: '歌单',
					number: 0,
				},{
					title: '有声',
					number: 0,
				}],
				currentIndex: 0,
				searchList:{
					isSheet: true,
					isLikeList: true,
					songList:[]
				},
				albumList:[],
			};
		},
		mounted(){
			this.getSongList();
			this.getAlbumList();
		},
		computed:{
			...mapState('user', ['userinfo']),
		},
		methods:{
			back(){
				uni.navigateBack();
			},
			changeIndex(index){
				this.currentIndex = index;
			},
			getSongList(){
				request({
					url: '/qqmusic/user/getLikeSongs/' + this.userinfo.id,
				}).then(response => {
					this.searchList.songList = response.data;
					this.titleArr[0].number = this.searchList.songList.length;
				}).catch(err => console.log(err));
			},
			getAlbumList(){
				request({
					url: '/qqmusic/user/getLikeAlbum/' + this.userinfo.id
				}).then( response => {
					this.albumList = response.data;
					this.titleArr[1].number = this.albumList.length;
				}).catch( err => {
					console.log(err);
					uni.showToast({
						title: '网络错误！',
						icon: 'error',
						duration: 2000
					})
				})
			}
		}
	}
</script>

<style lang="scss">
.container{
	position: relative;
	
	.uni-navbar-box{
		position: fixed;
		padding-top: 50px;
		background-color: #191919;
		height: 70px;
		top: 0px;
		left: 0;
		right: 0;
		z-index: 20;
		
		
		
		.head{
			display: flex;
			justify-content: center;
			align-items: center;
			
			.left{
				position: absolute;
				left: 20px;
			}
			
			.uni-nav-bar-text{
				font-size: 20px;
				font-weight: bold;
			}
		}
		
		.navbar{
			margin-top: 10px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			
			.active_box{
				border-bottom: 3px solid #31c27c;
				width: 45px;
				height: 30px;
				position: absolute;
				transition: all 0.5s;
			}
			
			
			.title-item{
				font-size: 15px;
			}
		}
		
		
	}
	
	.uni-content{
		margin-top: 130px;
		padding: 0 20px;
				
				
		.song-list{
			
			.head{
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					gap: 10px;
					
					.playbox{
						width: 30px;
						height: 30px;
						border-radius: 50%;
						background-color: #31c27c;
						position: relative;
						
						image{
							width: 18px;
							height: 18px;
							position: absolute;
							left: 7px;
							top: 6px;
						}
					}
				}
				.right{
					display: flex;
					justify-content: flex-start;
					align-items: center;
				}
			}
			
			.song-list-content{
				padding-top: 10px;
				padding-bottom: 50px;
			}
		}
	
		
		.album-list{
			.head{
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.left{
					font-size: 17px;
				}
				
				.right{
					
				}
			}
		}
	}
	
	.music_bar{
		left: 15px;
		position: fixed;
		bottom: 10px;
		z-index: 10;
	}
}
</style>
