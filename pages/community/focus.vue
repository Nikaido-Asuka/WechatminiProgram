<template>
	<view>
	<view class="item" v-for="(item, index) in postsList" :key="item.id" @click="toDetail(index)" >
		<!-- 头部 -->
		<view class="head">
			<image class="avatar" :src="item.avatar"></image>
			<view class="head_info">
				<text :style="{ color: item.isStar ? '#31c27c' : 'gray'}" class="username">{{ item.username }}</text>
				<text class="time">2023.07.03</text>
			</view>
			
		</view>
		
		<!-- info -->
		<view class="info">
			<view class="text">{{ item.text }}</view>
			
			<!-- image部分 -->
			<view class="image_box">
				<image v-for="(img, index2) in item.image" :key="index2" :src="img"></image>
			</view>
			
			<view class="song_box">
				<image :src="item.song.img"></image>
				<view class="center">
					<text class="name">{{ item.song.name }}</text>
					<text class="singer">{{ item.song.singer }}</text>
				</view>
				<uni-icons @click="changeLike(index)" v-if="!item.song.isLike" class="icon" type="heart" color="gray" size="25"></uni-icons>
				<uni-icons @click="changeLike(index)" v-else class="icon" type="heart-filled" color="brown" size="25"></uni-icons>
			</view>
			
			<view class="buttom">
				<view class="icon_box">
					<uni-icons type="chat" size="22" color="gray"><text>18</text></uni-icons>
					{{ item.commentNum }}
				</view>
				
				<view class="icon_box">
					<uni-icons type="hand-up" size="22" color="gray"></uni-icons>
					{{ item.likeNum }}
				</view>
				
			</view>
			
		</view>
		
		
	</view>
	</view>
</template>

<script>
	export default {
		name: 'focus',
		data() {
			return {
				postsList:[{
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
						img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
						name: '流沙(Reimagined)',
						singer: '陶喆(David Tao)',
						isLike: true
					},
					
				}],
			};
		},
		methods:{
			changeLike(index){
				this.postsList[index].song.isLike = !this.postsList[index].song.isLike;
			},
			toDetail(index){
				// 我们使用 JSON.stringify 将 A 页面的整个 data 对象转换为 JSON 字符串，并将其作为 URL 的 query 参数传递给 B 页面。
				// 在 B 页面的 onLoad 生命周期钩子函数中，通过 JSON.parse 将接收到的 JSON 字符串解析为对象，并进行相应的处理。
				uni.navigateTo({
					url: '/pages/postDetail/postDetail?data=' + JSON.stringify(this.postsList[index])
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.item{
	border-radius: 8px;
	margin: 10px 10px;
	background-color: #2e2e2e;
	padding-bottom: 20px;
	
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
				float: right;
				position: absolute;
				right: 50px;
			}
			
			image{
				width: 55px;
				height: 55px;
				opacity: 0.5;
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
</style>
