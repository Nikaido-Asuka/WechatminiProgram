<template>
	<view class="container">
		<uni-swipe-action class="item" v-for="(item, index) in sheetList" :key="item.id">
			<uni-swipe-action-item
				:right-options="options2"
				:show="isOpened"
				:auto-close="false"
				@click="bindClick(item.id)"
			>
				<view class="content-box" @click="toSheetDetail(item.id)">
					<view class="left">
						<image :src="item.img"/>
						<view class="left-info">
							<text>{{ item.name }}</text>
							<view class="left-info-bottom">
								<text>{{ item.number }}首</text>
								<text v-if="item.first_song">{{ item.first_song.name }}&nbsp;-&nbsp;{{ item.first_song.singer }}</text>
							</view>
						</view>
					</view>
					
					<view class="right">
						<uni-icons type="right" size="18" color="gray"></uni-icons>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		
		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="warn" cancelText="取消" confirmText="确认" title="注意" content="确定要取消收藏该专辑吗？" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	export default {
		name:"my-sheet",
		methods:{
			toSheetDetail(id){
				console.log(id);
				uni.navigateTo({
					url: '/subpages/sheetDetail/sheetDetail?id=' + id,
				})
			},
			bindClick(id){
				this.$refs.alertDialog.open();
				this.currentAlbumId = id;
			},
			dialogConfirm(){
				
			},
			dialogClose(){
				this.$refs.alertDialog.close();
			}
		},
		props: ['sheetList'],
		data() {
			return {
				isOpened: 'none',
				currentAlbumId: -1,
				options2:[{
					text: '删除歌单',
					style: {
						backgroundColor: '#F56C6C'
					}
				}]
			};
		}
	}
</script>

<style lang="scss">
.container{
	
	.item{
		
		.content-box{
			height: 70px;
			margin-top: 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.left{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 20px;
				
				image{
					width: 60px;
					height: 60px;
					border-radius: 12px;
				}
				
				.left-info{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					gap: 10px;
					
					.left-info-bottom{
						display: flex;
						justify-content: flex-start;
						align-items: center;
						gap: 10px;
						color: gray;
						font-size: 12px;
					}
				}
			}
		}
	}
}
</style>