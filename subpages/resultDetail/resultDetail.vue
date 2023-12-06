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
		<view class="content">
			
			<!-- 2.1歌手信息 -->
			<view class="singer_box" @click="toSingerDetail">
				<image mode="widthFix" src="https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg"/>
				<view class="singer_info">
					<text class="info">歌手</text>
					<text>陶喆</text>
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
				
				<view class="list">
					<songRow :searchList="searchList"/>
				</view>
				
			</view>
			
			
		</view>
	</view>
</template>

<script>
	import songRow from '@/components/songRow/songRow.vue'
	export default {
		components: { songRow },
		onLoad(options){
			console.log(options);
			this.searchValue = options.query;
		},
		methods:{
			toSingerDetail(){
				uni.navigateTo({
					url: '/subpages/singerDetail/singerDetail?id=' + 1,
				})
			},
			search(){
				console.log("????");
			}
		},
		data() {
			return {
				searchValue: '',
				searchList:{
					isSheet: false,
					songList:[{
							id: 20,
							name: "流沙",
							singer: '陶喆',
							album: '陶喆同名专辑',
							isVip: true,
						},{
							id: 1,
							name: '流沙（Reimagined）',
							album: "流沙（Reimagined）",
							singer: '陶喆'
						},{
							id: 4,
							name: '流沙（Live）',
							album: 'Soul Power',
							singer: '陶喆'
						}]
				}
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
}
</style>
