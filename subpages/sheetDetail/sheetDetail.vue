<template>
	<view class="container" @longtap="changeImage" :style="{ backgroundImage: 'url(' + sheet.img + ')' }">
		<view class="head">
			<uni-icons @click="back" type="left" size="22" color="white"></uni-icons>
		</view>
		
		<view class="info_box">
			<text class="sheet_name">{{ sheet.name }}</text>
			<view class="user">
				<view class="left">
					<image mode="widthFix" :src="userinfo.avatar"/>
					<text class="username">{{ userinfo.username }}</text>
				</view>
				<view class="right">
					<uni-icons type="headphones" color="white" size="20"></uni-icons>
					<text>{{ sheet.playNum }}</text>
				</view>
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
					<text>播放全部 {{ sheet.songList.length }} </text>
				</view>
				<view class="right">
					<uni-icons type="pulldown" color="gray" size="20"></uni-icons>
					<uni-icons type="list" color="gray" size="20"></uni-icons>
				</view>
			</view>
			
			<!-- 3.2歌曲列表部分 -->
			<view class="content_list">
				<songRow :searchList="sheet"/>
			</view>
		</view>
		
		<view class="music_bar">
			<musicBar/>
		</view>
		
		
	</view>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import musicBar from '@/components/musicBar/musicBar.vue'
	export default {
		components: { musicBar },
		computed:{
			...mapGetters('sheet', ['getSheetById']),
			...mapState('user', ['userinfo']),
		},
		onLoad(options){
			this.sheet = this.getSheetById(Number(options.id));
		},
		methods:{
			changeImage(){
				
			},
			back(){
				uni.navigateBack();
			}
		},
		data() {
			return {
				sheet:{
					id: 1,
					name: '陶喆',
					playNum: 4931,
					img: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
					isSheet: true,
					songList:[{
						id: 2,
						name: "I'm OK（Reimagined）",
						album: {
							name:  "I'm OK（Reimagined）",
						},
						singer: '陶喆'
					},{
						id: 1,
						name: '流沙（Reimagined）',
						album: {
							name:  "流沙（Reimagined）",
						},
						singer: '陶喆'
					},{
						id: 4,
						name: '爱是个什么东西',
						album: {
							name: '太平盛世',
						},
						singer: '陶喆'
					}]
				},
			};
		}
	}
</script>

<style scoped lang="scss">
.container{
	background-repeat: no-repeat;
	background-size: 100%;
	height: 300px;

	
	.head{
		padding-top: 60px;
		padding-left: 15px;
	}
	.info_box{
		padding: 20px 20px;
		padding-bottom: 0px;
		margin-top: 110px;
		backdrop-filter: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: auto;
		gap: 15px;
		
		.sheet_name{
			font-size: 22px;
			font-weight: bold;
		}
		.user{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 30px;
			
			.left{
				width: 100px;
				gap: 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				image{
					width: 40px;
					border-radius: 50%;
				}
				
				.username{
					width: 100px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					font-size: 12px;
				}
			}
			.right{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 5px;
				
				text{
					color: white;
					font-size: 12px;
				}
			}
		}
	}
	.content{
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
		
		.other_album{
			height: 200px;
			margin-top: 150px;
			
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
