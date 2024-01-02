<template>
	<view class="container">
		<view class="head">
			<view class="cancel" @click="cancel">取消</view>
			<view class="title">发扑通动态</view>
		</view>
		
		<view class="content">
			
			<!-- 1.添加音乐部分 -->
			<view class="add_music">
				<view v-if="!post.isMusic" class="add_music_content">
					<view class="left">添加音乐</view>
					<view class="right">分享音乐 传播温暖 > </view>
				</view>
				
				<view v-else class="add_music_content">
					<view class="left_active">{{ post.song.name }}</view>
					<uni-icons @click="removeSong" type="closeempty" color="gray" size="15"></uni-icons>
				</view>
			</view>
			
			<!-- 2.评论部分 -->
			<view class="uni_textarea">
				<textarea v-model="post.text"/>
				
				<view v-if="post.imgs.length <= 0 && post.imgs.length <=9 " @click="uploadImgs" class="image">
					<uni-icons type="plusempty" size="25" color="gray"></uni-icons>
					<text>图片</text>
				</view>
				
				<view v-if="post.imgs.length >= 1" class="image_show">
					<image style="width: 80px;" mode="widthFix" :src="post.imgs"/>
				</view>
				
			</view>
			
			<!-- 3.音乐卡片部分 -->
			<view v-if="post.isMusic" class="music_card">
				<image :src="post.song.img"/>
				<view class="info">
					<text class="name">{{ post.song.name }}</text>
					<text class="singer">{{ post.song.singer }}</text>
				</view>
			</view>
		</view>
		<!-- 4.发布按钮部分 -->
		<view class="btn" @click="submit">发布</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				isEdit: false,
				post:{
					id: null,
					userInfo: this.userinfo,
					isMusic: 1,
					text: '',
					imgs: [],
					song:{
						id: 1,
						name: '流沙（Reimagined）',
						singer: '陶喆',
						img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg'
					}
				}
			};
		},
		onLoad(options){
			const postStr = decodeURIComponent(options.post);
			console.log(JSON.parse(postStr).song);
			this.isEdit = JSON.parse(options.isEdit);
			if (options.isEdit === 'false') {
				this.post.song = JSON.parse(postStr).song;
				this.post.song.singer = JSON.parse(postStr).song.singer.name;
				console.log(this.post);
				console.log(this.isEdit);
				return ;
			}
			this.post = JSON.parse(postStr);
		},
		computed:{
			...mapState('user', ['userinfo']),
		},
		methods:{
			...mapMutations('post', ['addPost', 'editPostInfo']),
			uploadImgs(){
				uni.chooseImage({
					count: 9,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (chooseRes) => {
						const tempFilePaths = chooseRes.tempFilePaths;
						
						uni.uploadFile({
							url: 'http://localhost:8085/qqmusic/post/uploadImgs',
							filePath: tempFilePaths[0],
							name: 'file',
							formData:{
								user: 'test'
							},
							success:(uploadRes)=>{
								const { message } = JSON.parse(uploadRes.data);
								console.log(message);
								this.post.imgs.push(message);
 							},
							fail:(error)=>{
								console.log('上传失败', error);
							}
						})
					}
				})
			},
			removeSong(){
				this.post.song = {};
				this.post.isMusic = false;
			},
			cancel(){
				uni.navigateBack();
			},
			submit(){
				var currentDate = new Date();
				var year = currentDate.getFullYear();
				var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
				var day = ('0' + currentDate.getDate()).slice(-2);
				
				this.post.time = year + '.' + month + '.' + day;
				
				this.post.userId = this.userinfo.id;
				
				this.post.songId = this.post.song.id;
				
				this.post.userInfo = this.userinfo;
				
				if(this.isEdit){
					this.editPostInfo(this.post);
					return ;
				}
				this.addPost(this.post);
				// switchTab才能实现 从一个非 tabbar 页面跳转到一个 tabbar 页面
				uni.switchTab({
					url: '/pages/community/community',
					success: ()=>{
						console.log("成功")
					},
					fail: (err)=>{
						console.log("失败", err)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	position: relative;
	height: 800px;
	
	.head{
		display: flex;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.1);
		padding-top: 41px;
		height: 50px;
		
		.cancel{
			font-size: 14px;
			color: gray;
			margin-left: 20px;
		}
		.title{
			font-size: 18px;
			font-weight: bold;
			width: 100px;
			text-align: center;
			margin-left: 85px;
		}
	}
	
	.content{
		padding: 0 20px;
		position: relative;
			
		.add_music{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 0.5px solid #3e3e3e;
			padding: 7px 0px;
			padding-top: 10px;
			
			.add_music_content{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				
				.left{
					font-size: 17px;
				}
				
				.right{
					font-size: 15px;
					color: gray;
				}
				.left_active{
					color: #31c27c;
				}
			}
			
		}
		
		.uni_textarea{
			
			
			textarea{
				height: 70px;
				width: 100%;
				padding-top: 50px;
			}
			
			.image{
				width: 80px;
				height: 80px;
				border-radius: 8px;
				background-color: black;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				
				text{
					color: gray;
				}
			}
			
			.image_show{
				width: 80px;
				height: 80px;
				border-radius: 8px;
				overflow: hidden;
			}
			
		}
		
		.music_card{
			background-color: rgba(255, 255, 255, 0.1);
			margin-top: 20px;
			height: 60px;
			border-radius: 12px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 20px;
			
			image{
				width: 60px;
				height: 60px;
				border-top-left-radius: 8px;
				border-bottom-left-radius: 8px;
			}
			
			
			
			.info{
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				.name{
					font-size: 15px;
				}
				.singer{
					color: gray;
					font-size: 12px;
				}
			}
		}
	}
	
	.btn{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 20px;
		background-color: #31c27c;
		width: 300px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 20px;
	}
	
	
	
}
</style>
