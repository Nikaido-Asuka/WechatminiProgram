<template>
	<view class="bigbox">
		<!-- post -->
		<view class="post">
			<view class="head">
				<image class="avatar" :src="post.avatar"></image>
				<view class="head_info">
					<text :style="{ color: post.isStar ? '#31c27c' : 'gray'}" class="username">{{ post.username }}</text>
					<text class="time">{{ post.time }}</text>
				</view>
			</view>
			
			<view class="info">
				<view class="text">{{ post.text }}</view>
				
				<!-- image部分 -->
				<view class="image_box">
					<image @tap="preViewImg(index2)" v-for="(img, index2) in post.image" :key="index2" :src="img"></image>
				</view>
				
				<view class="song_box">
					<image class="play" src="../../static/community/播放.png"></image>
					<image @click.capture="toSongDetail" :src="post.song.img"></image>
					<view class="center">
						<text class="name">{{ post.song.name }}</text>
						<text class="singer">{{ post.song.singer }}</text>
					</view>
					<view class="icon_box" @click="changeLike(index, $event)">
						<uni-icons v-if="!post.song.isLike" type="heart" color="gray" size="25"></uni-icons>
						<uni-icons v-else type="heart-filled" color="brown" size="25"></uni-icons>
					</view>
					
				</view>
				
				<view class="buttom">
					<view class="icon_box">
						<uni-icons type="chat" size="22" color="gray"><text>18</text></uni-icons>
						{{ post.commentNum }}
					</view>
					
					<view class="icon_box">
						<uni-icons type="hand-up" size="22" color="gray"></uni-icons>
						{{ post.likeNum }}
					</view>
					
				</view>
				
			</view>
		</view>
		
		
		<!-- comment -->
		<view class="comment">
			
			<view class="head">
				<text style="color: white; font-size: 18px; font-weight: bold; margin-top: 5px;">评论区</text>
				<text style="color: gray; font-size: 15px; margin-left: 5px;">3</text>
			</view>
			
			<view class="comment_list">
				<view class="comment_item">
					
					<view class="item_head">
						<image src="https://pic.imgdb.cn/item/652368cac458853aef309984.jpg"/>
						<text>Nikaido Asuka</text>
					</view>
					
					<text class="item_content">流沙！太丝滑了！</text>
					
					<view class="buttom">
						<view class="icon_box">
							<uni-icons type="chat" size="22" color="gray"><text>18</text></uni-icons>
							{{ post.commentNum }}
						</view>
						
						<view class="icon_box">
							<uni-icons type="hand-up" size="22" color="gray"></uni-icons>
							{{ post.likeNum }}
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
				post:{
					id: '1',
					isStar: true,
					avatar: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg',
					username: '陶喆',
					text: '奔走相告！陶喆的音乐产房“生”啦!!!2023第一产',
					likeNum: 100,
					commentNum: 21,
					image:[
						'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
						'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg'
					],
					song:{
						id: '1',
						img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
						name: '流沙(Reimagined)',
						singer: '陶喆(David Tao)',
						isLike: true
					},
				},
			};
		},
		onLoad(options){
			// this.post = JSON.parse(options.data);
			// console.log(this.post);
		},
		methods:{
			preViewImg(index){
				uni.previewImage({
					urls: this.post.image,
					current: this.post.image[index]
				})
			},
			toSongDetail(){
				const songId = this.post.song.id;
				uni.navigateTo({
					url: `/pages/songDetail/songDetail?id=${sondId}`,
				})
			},
			 changeLike(index, event){
				console.log(event);
				event.preventDefault();
				event.stopPropagation();
			    this.post.song.isLike = !this.post.song.isLike;
			}
		}
	}
</script>

<style scoped lang="scss">
.bigbox{
	background-color: black;
	padding-bottom: 100px;
	
	.post{
		padding-bottom: 20px;
		background: rgba(255,255, 255, 0.1);
		
		.head{
			padding: 10px 20px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			
			.avatar{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
			.head_info{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 10px;
				height: 40px;
				
				.username{
					color: white;
				}
				.time{
					color: gray;
					font-size: 10px;
					font-weight: bold;
				}
			}
			
			
		}
		.info{
			padding: 0 20px;
			
			.image_box{
				width: 100%;
				display: grid;
				grid-template-columns: 31% 31% 31%;
				grid-template-rows: 45% 45%;
				gap: 15px 10px;
				
				
				image{
					width: 100px;
					height: 100px;
				}
			}
			
			.song_box{
				width: 100%;
				height: 55px;
				overflow: hidden;
				margin-top: 10px;
				border-radius: 8px;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				background: rgba(255,255, 255, 0.1);
				position: relative;
				
				.center{
					margin-left: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					
					.name{
						color: white;
						font-size: 17px;
					}
					.singer{
						color: gray;
						font-size: 10px;
					}
				}
				.icon_box{
					position: absolute;
					right: 25px;
				}
				
				
				image{
					width: 55px;
					height: 55px;
					opacity: 0.5;
				}
				
				.play{
					width: 25px;
					height: 25px;
					position: absolute;
					left: 15px;
					opacity: 1;
				}
			}
			
			.buttom{
				padding-top: 10px;
				height: 20px;
				display: flex;
				justify-content: flex-start;
		
				.icon_box{
					padding: 3px 3px;
					height: 24px;
					width: 70px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					color: gray;
				}
			}
		}
	}
	
	.comment{
		margin-top: 10px;
		padding-bottom: 30px;
		background: rgba(255,255, 255, 0.1);
		
		.head{
			margin: 0 20px;
		}
		
		.comment_list{
			margin-top: 20px;
			height: 200px;
			
			.comment_item{
				
				.item_head{
					display: flex;
					padding: 0 20px;
					line-height: 30px;
					
					image{
						width: 30px;
						height: 30px;
						border-radius: 50%;
					}
					text{
						color: gray;
						font-weight: bold;
						font-size: 12px;
						padding-left: 10px;
					}
				}
				
				.item_content{
					padding-left: 60px;
				}
				
				.buttom{
					padding-top: 10px;
					display: flex;
					padding-left: 55px;
					justify-content: flex-start;
				
					.icon_box{
						padding: 3px 3px;
						height: 24px;
						width: 70px;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						color: gray;
					}
				}
				
				
			}
		}
	}
}
</style>
