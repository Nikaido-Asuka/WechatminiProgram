<template>
	<view>
	<!-- 写帖子 -->
	<view @click="toWrite" class="addPost">
		<uni-icons size="25" color="white" type="plusempty"></uni-icons>
	</view>
	
	<view class="item" v-for="(item, index) in postsList" :key="item.id">
		
		
		
		<!-- 头部 -->
		<view class="head">
			<image class="avatar" :src="item.userInfo.avatar"></image>
			<view class="head_info">
				<text :style="{ color: item.isStar ? '#31c27c' : 'gray'}" class="username">{{ item.userInfo.username }}</text>
				<text class="time">{{ item.time }}</text>
			</view>
		</view>
		
		<!-- info -->
		<view class="info">
			<view class="text">{{ item.text }}</view>
			
			<view class="image_box" v-if="item.imgs.length > 0">
				<image @tap="previewImg" v-for="(item2, index2) in item.imgs" :data-imgUrl="item2" :key="index2" :src="item2"/>
			</view>
			
			<view class="song_box">
				<image class="play" src="../../static/community/播放.png"></image>
				<image :src="item.song.img"></image>
				<view class="center">
					<text class="name">{{ item.song.name }}</text>
					<text class="singer">{{ item.song.singer }}</text>
				</view>
				<uni-icons @click="changeLike(index)" v-if="!item.song.isLike" class="icon" type="heart" color="gray" size="25"></uni-icons>
				<uni-icons @click="changeLike(index)" v-else class="icon" type="heart-filled" color="brown" size="25"></uni-icons>
			</view>
			
			<view class="buttom">
				<view class="left">
					<view class="icon_box">
						<uni-icons type="chat" size="22" color="gray"><text>18</text></uni-icons>
						{{ item.commentNum }}
					</view>
					
					<view class="icon_box">
						<uni-icons type="hand-up" size="22" color="gray"></uni-icons>
						{{ item.likeNum }}
					</view>
				</view>
				
				<view class="right" @click="toggle('bottom', index)" >
					<uni-icons type="more-filled" size="22" color="gray"></uni-icons>
				</view>
				
			</view>
			
		</view>
		
	</view>
			
			
		<uni-popup ref="popup" background-color="#2c2c2c" @change="stateChange">
			<view class="popup-content">
				
				<view class="operate_box" @click="editPost()">
					<view class="head">
						<uni-icons type="compose" size="30" color="#fcfcfc"></uni-icons>
					</view>
					
					<text style="color: #fcfcfc; font-size: 12px;">编辑</text>
				</view>
				
				<view class="operate_box" @click="deletePost()">
					<view class="head">
						<uni-icons type="trash-filled" size="30" color="#fcfcfc"></uni-icons>
					</view>
					
					<text style="color: #fcfcfc; font-size: 12px;">删除</text>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import request from '@/utils/request.js'
	export default {
		name: 'square',
		data() {
			return {
				type: '',
				currentPostIndex: -1,
				postsList: [],
			};
		},
		mounted(){
			this.getPostList();
		},
		computed:{
			...mapState('post', ['isShow']),
		},
		methods:{
			...mapMutations('post', ['changeIsShow', 'updatePostsList']),
			
			previewImg(e){
				const imgUrl = e.currentTarget.dataset.imgurl;
				uni.previewImage({
					urls: [imgUrl],
				})
			},
			
			getPostList(){
				request({
					url: '/qqmusic/post/getPosts'
				}).then((response) => {
					this.postsList = response.data;
					this.updatePostsList(this.postsList);
				}).catch(err => console.log(err));
			},
			stateChange(e){
				const { show } = e;
				this.changeIsShow(!show);
			},
			editPost(){
				const currentPost = this.postsList[this.currentPostIndex];
				console.log(currentPost);
				const fuckPost = {
					id: currentPost.id,
					userId: currentPost.userId,
					isMusic: 1,
					text: currentPost.text,
					song: currentPost.song,
				}
				uni.navigateTo({
					url: '/subpages/postForm/postForm?post=' + encodeURIComponent(JSON.stringify(fuckPost)) + '&isEdit=true',
				})
				this.changeIsShow(true);
				this.$refs.popup.close();
			},
			toggle(type, index){
				this.type = type;
				this.currentPostIndex = index;
				console.log(this.currentPostIndex);
				this.$refs.popup.open(type);
			},
			changeLike(index){
				this.postsList[index].song.isLike = !this.postsList[index].song.isLike;
				event.defaultPrevented();
			},
			toWrite(){
				uni.navigateTo({
					url: '/subpages/postForm/postForm'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
.popup-content{
	padding: 0px 20px;
	padding-top: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	
	.operate_box{
		gap: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		
		.head{
			width: 50px;
			height: 50px;
			border-radius: 18px;
			background-color: #3c3b3c;
			text-align: center;
			line-height: 50px;
		}
	}
}

.addPost{
	position: fixed;
	bottom: 70px;
	right: 20px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #31c27c;
	z-index: 20;
	text-align: center;
	line-height: 50px;
	
}
.item{
	border-radius: 8px;
	margin: 10px 10px;
	background-color: #2e2e2e;
	padding-bottom: 20px;
	position: relative;
	
	.head{
		padding: 10px 20px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		
		.avatar{
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
		.head_info{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 10px;
			height: 40px;
			
			.username{
				
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
			padding-top: 5px;
			height: 100px;
			width: 100%;
			display: grid;
			grid-template-columns: 31% 31% 31%;
			grid-template-rows: 45% 45%;
			gap: 15px 10px;
			
			image{
				width: 100px;
				height: 100px;
				border-radius: 12px;
				overflow: hidden;
			}
		}
		
		.song_box{
			width: 100%;
			height: 55px;
			overflow: hidden;
			border-radius: 8px;
			margin-top: 10px;
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
			.icon{
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
			justify-content: space-between;
			align-items: center;
			
			.left{
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
}
</style>
