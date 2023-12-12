<template>
	<view>
		<view class="item" v-for="(item, index) in albumList" :key="item.id" @click="toAlbumDetail(item.id)">
			<view class="left">
				<image :src="item.img"/>
				<view class="left_info">
					<text class="name">{{ item.name }}</text>
					<text class="info">{{ item.time }}</text>
				</view>
			</view>
			
			<uni-icons type="forward" size="20" color="gray"></uni-icons>
		</view>
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	export default {
		props: [ 'my_id' ],
		mounted(){
			this.getAlbumListBySingerId(this.my_id);
		},
		methods:{
			getAlbumListBySingerId(id){
				request({
					url: '/qqmusic/singer/getAlbum/' + id,
				}).then((response) => {
					const { data } = response;
					this.albumList = data;
				}).catch(err => console.log(err));
			},
			toAlbumDetail(id){
				uni.navigateTo({
					url: '/subpages/albumDetail/albumDetail?id=' + id
				})
			}
		},
		data() {
			return {
				singer: '陶喆',
				albumList:[],
			};
		}
	}
</script>

<style scoped lang="scss">
.item{
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.left{
		display: flex;
		
		.left_info{
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 20rpx;
			padding-left: 10px;
			
			text{
				color: white;
				font-size: 18px;
			}
			
			.name{
				width: 200px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			
			.info{
				color: gray;
				font-size: 12px;
				width: 100px;
				overflow: hidden; /* 隐藏溢出部分 */
				white-space: nowrap; /* 禁止换行 */
				text-overflow: ellipsis; /* 显示省略号 */
			}
		}
		
		
		
		image{
			width: 60px;
			height: 60px;
			border-radius: 12px;
		}
	}
}
</style>
