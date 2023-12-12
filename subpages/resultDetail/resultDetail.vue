<template>
	<view class="container">
		<!-- 1.头部 -->
		<view class="search_box">
			<view class="search">
				<uni-search-bar
					@confirm="search" 
					v-model="searchValue"
					bgColor="black"
					radius="18"
					>
				</uni-search-bar>
			</view>
		</view>
		
		<!-- 2.内容 -->
		<view class="null" v-if="code === 20001">
			<image mode="widthFix" src="https://pic.imgdb.cn/item/655ac964c458853aef683423.png"/>
			<text>没有这首歌哦 试试换一个关键词呢</text>
		</view>
		
		<view v-if="code === 20000" class="content">
			
			<!-- 2.1歌手信息 -->
			<view class="singer_box" @click="toSingerDetail">
				<image mode="widthFix" :src="singer.img"/>
				<view class="singer_info">
					<text class="info">歌手</text>
					<text>{{singer.name}}</text>
					<text class="info">歌曲：333 专辑：27 视频：496</text>
				</view>
			</view>
			
			
			<!-- 2.2单曲列表 -->
			<view class="song_list">
				
				<view class="head">
					<view class="left">
						<text>单曲</text>
					</view>
				</view>
				
				<view v-if="searchList.songList.length >= 0" class="list">
					<songRow :searchList="searchList"/>
				</view>
				
			</view>
			
			
		</view>
		
		<view class="music_bar">
			<musicBar/>
		</view>
		
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	import songRow from '@/components/songRow/songRow.vue'
	export default {
		components: { songRow },
		onLoad(options){
			console.log(options);
			this.searchValue = options.query;
			this.getInfo(this.searchValue);
		},
		methods:{
			getInfo(query){
				console.log(query);
				request({
					url: '/qqmusic/song/search?query=' + query,
				}).then(response => {
					console.log(response);
					if(response.code === 20001){
						this.code = 20001
						this.searchList.songList = [];
						return ;
					}
					this.singer = response.data.singer;
					this.searchList = {songList: response.data.songList, isSheet: false};
					console.log(this.singer);
					console.log(this.searchList);
				}).catch(err => console.log(err));
			},
			toSingerDetail(){
				uni.navigateTo({
					url: '/subpages/singerDetail/singerDetail?id=' + 1,
				})
			},
			search(e){
				this.getInfo(e.value);
			}
		},
		data() {
			return {
				searchValue: '',
				singer: {},
				searchList:[],
				code: 20000,
			};
		}
	}
</script>

<style scoped lang="scss">
.container{
	
	.search_box{
		position: fixed;
		top: 0px;
		padding-top: 40px;
		padding-left: 15px;
		display: flex;
		align-items: center;
		width: 358px;
		
		.search{
			width: 300px;
		}
	}

	.content{
		margin-top: 100px;
		height: 200px;
		
		
		.singer_box{
			background-color: #252628;
			width: 80%;
			padding: 0 20px;
			height: 100px;
			border-radius: 20px;
			margin: 0 auto;
			display: flex;
			gap: 20px;
			justify-content: flex-start;
			align-items: center;
			
			image{
				width: 80px;
				border-radius: 50%;
			}
			
			.singer_info{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				.info{
					color: gray;
					font-size: 12px;
					
				}
			}
			
		}
	
		.song_list{
			.head{
				padding: 20px 20px;
				.left{
					display: flex;
					gap: 15px;
					
					text{
						font-size: 20px;
						font-weight: bold;
						color: white;
					}
				}
			}
			
			.list{
				padding: 5px 20px;
			}
		}
	}
	
	.null{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
		
		image{
			width: 200px;
		}
		
	}
	
	.music_bar{
		left: 15px;
		position: fixed;
		bottom: 0px;
		z-index: 10;
	}
}
</style>
