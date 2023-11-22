<template>
	<view class="container">
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
		
		
		
		<view class="content">
			<!-- 搜索历史 -->
			<view class="box">
				<view class="title">
					<text>搜索历史</text>
					<uni-icons color="gray" size="24" type="trash-filled"></uni-icons>
				</view>
				
				<view class="list"> 
					<view class="item" v-for="(item, index) in historyList" :key="index">{{ item }}</view>
				</view>
			</view>
			
			<!-- 搜索发现 -->
			<view class="box">
				<view class="title">
					<text>搜索发现</text>
				</view>
				
				<view class="list">
					<view class="item">陶喆</view>
					<view class="item">Soul Power</view>
				</view>
			</view>
			
			<!-- 热门列表 -->
			<scroll-view scroll-x="true" class="hot_list">
				<view class="hot_item" v-for="item1 in hotList" :key="item1.id">
					<view class="title">{{ item1.name }}</view>
					
					<view class="song_list">
						<view class="song_item" v-for="(item2, index) in item1.songList">
							<text class="index" :class="index < 3 ? 'index_active': ''">{{ index+1 }}</text>
							<text>{{ item2 }}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '普通朋友',
				historyList: ['一念之间', '蝴蝶', '流沙（reimagined）', '不爱'],
				hotList:[{
					id: '1',
					name: '热门搜索',
					songList:['陶喆', '如果这就是爱情', '瞬', '蔡徐坤新歌', '没有躺赢的命', '姑娘别哭泣', '你不知道的事情', '张靓颖 双关', '冷战', '罗生门', '其实都没有', '时代少年团', '悬溺', '王力宏', '想你的夜'],	
				},{
					id: '2',
					name: '听书热搜',
					songList:['以爱为营 精彩原著', '宁安如梦 白鹿张凌赫', '完美世界 动漫热映中', '故乡 别来无恙', '不死不灭 动漫开播', '十方武圣 精彩抢先听', '追光者', '去有风的地方', '莲花楼', '苍兰诀', '云之羽', '长月烬明', '斗罗大陆', '唯有暗香来', '当我飞奔向你'],
				},{
					id: '3',
					name: '抖音热搜',
					songList:['陶喆', '张雨生', '周杰伦', '悬溺', '奢香夫人', '王昭君', '一句先苦后甜', '你不知道的事', '太阳', '七子之歌', '情歌', '525', '没有什么不同', '直到你降临', '离别开出花']
				}],
			}
		},
		methods: {
			search(e){
				this.historyList.unshift(e.value);
				this.searchValue = '';
			},
		}
	}
</script>

<style scoped lang="scss">
.container{
	
	.search_box{
		padding-top: 38px;
		background-color: #2e2e2e;
		position: fixed;
		width: 375px;
		z-index: 10;
		height: 55px;
		
		.search{
			
		}
		
	}
	
	.content{
		padding: 90px 0px;
		
		.box{
			padding: 10px 15px;
			
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				text{
					font-weight: bold;
					font-size: 20px;
				}
			}
			
			.list{
				margin-top: 20px;
				display: flex;
				flex-wrap: wrap;  /* 自动换行 */
				gap: 15px;
				
				.item{
					padding: 5px 15px;
					color: white;
					background-color: #373737;
					border-radius: 18px;
					font-size: 12px;
					font-weight: 400;
				}
			}
		}
		
		.hot_list{
			padding: 10px 15px;
			width: 100%;
			white-space: nowrap;
			
			
			.hot_item{
				margin-right: 20px;
				padding-bottom: 20px;
				display: inline-block;
				width: 200px;
				border-radius: 8px;
				background-color: #373737;
				
				.title{
					padding: 10px 10px;
					font-weight: bold;
					font-size: 20px;
				}
				
				.song_list{
					padding: 2px 10px;
					display: flex;
					flex-direction: column;
					gap: 10px;
					
					.song_item{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						gap: 5px;
						
						.index{
							width: 20px;
							font-weight: bold;
							font-size: 20px;
							color: gray;
							text-align: left;
						}
						.index_active{
							font-size: 28px;
							color: #ff6b40;
						}
					}
				}
			}
		}
	}
	
}
</style>
