<template>
	<view class="container" :style="{ backgroundColor: album.color }">
		<view class="head">
			<uni-icons @click="back" type="left" size="25" color="white"></uni-icons>
		</view>
		
		<!-- 1.专辑信息盒子 -->
		<view class="album_info">
			<image mode="widthFix" :src="album.img"/>
			<view class="right">
				<text>{{ album.name }}</text>
				<view class="singer">
					<view class="singer_box">
						<image mode="widthFix" src="https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg"/>
						<text @click="toSingerDetail" style="font-size: 13px;">{{ album.singer }}</text>
					</view>
					
					<view class="focus">已关注</view>
				</view>
			</view>
		</view>
		
		<!-- 2.图标盒子 -->
		<view class="icon_box">
			<view class="icon_item">
				<uni-icons type="heart" size="25" color="white"></uni-icons>
				<text>1199</text>
			</view>
			
			<view class="icon_item">
				<uni-icons type="chat" size="25" color="white"></uni-icons>
				<text>1199</text>
			</view>
			
			<view class="icon_item">
				<uni-icons type="redo" size="25" color="white"></uni-icons>
				<text>分享</text>
			</view>
		</view>
		
		
		<!-- 3.主体部分 -->
		<view class="content">
			<!-- 3.1头部 -->
			<view class="content_head">
				<view class="left">
					<view class="play">
						<image src="../../static/community/播放.png"/> 
					</view>
					<text>播放全部 {{ album.songList.length }} </text>
				</view>
				<view class="right">
					<uni-icons type="pulldown" color="gray" size="20"></uni-icons>
					<uni-icons type="list" color="gray" size="20"></uni-icons>
				</view>
			</view>
			
			<!-- 3.2歌曲列表部分 -->
			<view class="content_list">
				<songRow v-if="album !== '{}' " :searchList="album"/>
			</view>
			
			<!-- 3.3歌手其他专辑 -->
			<view class="other_album">
				
				<view class="other_album_head">
					<text style="font-size: 18px;">该歌手的其他专辑</text>
					<view class="right">
						<text style="color: gray;">更多</text>
						<uni-icons type="right" size="12" color="gray"></uni-icons>
					</view>
				</view>
				
				<view class="album_list">
					<view class="album_item" v-for="(item, index) in albumList" :key="item.id">
						<image :src="item.img"/>
						<text class="song_name">{{ item.album }}</text>
						<text class="singer">陶喆</text>
					</view>
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
	import musicBar from '@/components/musicBar/musicBar.vue'
	import request from '@/utils/request.js'
	export default {
		components:{ songRow, musicBar },
		methods:{
			toSingerDetail(){
				uni.navigateTo({
					url: '/subpages/singerDetail/singerDetail?id=' + this.album.singerId
				})
			},
			back(){
				uni.navigateBack();
			},
			getAlbumDetailInfo(id){
				request({
					url: '/qqmusic/album/' + id,
				}).then((response)=>{
					const { data } = response;
					this.album = data;
					console.log(this.album);
				}).catch(err => {
					console.log(err);
				})
			}
		},
		onLoad(options){
			console.log(options);
			this.getAlbumDetailInfo(options.id);
		},
		data() {
			return {
				album:{},
				
				albumList:[{
					id: 1,
					album: '流沙（Reimagined）',
					img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg'
				},{
					id: 2,
					album: '太美丽',
					img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg'
				},{
					id: 3,
					album: '太平盛世',
					img: 'https://pic.imgdb.cn/item/65083df1204c2e34d3a4e84e.jpg'
				}]
			};
		}
	}
</script>

<style scoped lang="scss">
.container{
	position: relative;
	
	.head{
		padding-top: 55px;
		padding-left: 10px;
	}
	
	.album_info{
		width: 310px;
		margin: 20px auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 40px;
		
		image{
			width: 100px;
			border-radius: 12px;
		}
		
		.right{
			display: flex;
			flex-direction: column;
			gap: 10px;
			
			.singer{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 25px;
				
				.singer_box{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					gap: 10px;
					
					image{
						width: 30px;
						border-radius: 50%;
					}
					
				}
				
				
				
				.focus{
					font-size: 10px;
					padding: 1px 5px;
					border-radius: 12px;
					border: 1px solid #c7c7c7;
					color: #c7c7c7;
				}
			}
		}
	}
	
	.icon_box{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30px;
		margin-top: 20px;
		
		.icon_item{
			display: flex;
			gap: 10px;
			align-items: center;
			
			text{
				font-size: 12px;
				color: #d9d9d9;
				position: relative;
				top: -2px;
			}
		}
	}
	
	.content{
		margin-top: 10px;
		padding: 10px 20px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background-color: #191919;
		position: relative;
		
		.content_head{
			padding-top: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.left{
				display: flex;
				align-items: center;
				gap: 10px;
				color: white;
				font-weight: 300;
				
				.play{
					width: 30px;
					height: 30px;
					border-radius: 50%;
					background-color: #259863;
					display: flex;
					align-items: center;
					justify-content: center;
					
					image{
						width: 15px;
						height: 15px;
					}
				}
			}
			.right{
				display: flex;
				gap: 10px;
			}
		}
		
		.content_list{
			margin-top: 20px;
		}
		
		.other_album{
			height: 200px;
			margin-top: 150px;
			padding-bottom: 70px;
			
			.other_album_head{
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.right{
					display: flex;
					align-items: center;
					justify-content: flex-start;
				}
			}
			
			.album_list{
				margin-top: 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.album_item{
					display: flex;
					flex-direction: column;
					
					image{
						width: 100px;
						height: 100px;
						border-radius: 12px
					}
					
					.song_name{
						width: 100px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-size: 13px;
					}
					
					.singer{
						color: gray;
						font-size: 12px;
						font-weight: 400;
					}
				}
			}
			
		}
	}
	.music_bar{
		left: 15px;
		position: fixed;
		bottom: 20px;
		z-index: 10;
	}
}
</style>
