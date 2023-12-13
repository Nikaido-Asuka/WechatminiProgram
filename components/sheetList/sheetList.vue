<template>
	<view class="container">
		<uni-swipe-action class="item" v-for="(item, index) in albumList" :key="item.id">
			<uni-swipe-action-item
				:right-options="options2"
				:show="isOpened"
				:auto-close="false"
				@click="bindClick(item.id)"
			>
				<view class="content-box">
					<view class="left">
						<image mode="widthFix" :src="item.img"/>
						<view class="left-info">
							<text>{{ item.name }}</text>
							<view class="left-info-bottom">
								<text>来自 {{ item.singer }}</text>
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
		name:"sheetList",
		methods:{
			bindClick(id){
				this.$refs.alertDialog.open();
				this.currentAlbumId = id;
			},
			dialogConfirm(){
				request({
					url: '/qqmusic/user/removeLikeAlbum/' + this.currentAlbumId,
					method: 'DELETE',
				}).then(response => {
					console.log(response.data);
					uni.reLaunch({
						url: '/subpages/collectDetail/collectDetail'
					})
					uni.showToast({
						title: '取消成功！',
						icon: 'success',
						duration: 2000
					})
				}).catch(err => {
					console.error(err);
					uni.showToast({
						title: '网络错误，请稍后重试！',
						icon: 'error',
						duration: 2000,
					})
				})
			},
			dialogClose(){
				this.$refs.alertDialog.close();
			}
		},
		props: ['albumList'],
		data() {
			return {
				isOpened: 'none',
				currentAlbumId: -1,
				options2:[{
					text: '取消收藏',
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
		margin-top: 30px;
		
		.content-box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20px;
			
			.left{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 20px;
				
				image{
					width: 60px;
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
						gap: 20px;
						color: gray;
						font-size: 15px;
					}
				}
			}
		}
	}
}
</style>