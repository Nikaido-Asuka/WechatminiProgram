<template>
	<view class="container">
		<view class="item" :class=" currentId === item.id ? 'item_active' : '' " v-for="(item, index) in searchList.songList" :key="item.id">
			<view class="left">
				<text v-show="searchList.isSheet">{{ index + 1 }}</text>
				
				<view class="left_info" @click="toPlay(item.id)">
					<text class="active_name">{{ item.name }}</text>
					<view class="buttom">
						<view v-show="item.isVip" class="my_tag success">VIP</view>
						<view class="my_tag warning">臻品母带</view>
						<text class="info info_active">陶喆 · {{ item.album.name }}</text>
					</view>
				</view>
				
			</view>
			
			<view class="right">
				<uni-icons size="22" color="#8a8a8a" type="heart"></uni-icons>
				<uni-icons size="22" color="#8a8a8a" type="plusempty"></uni-icons>
				<uni-icons size="22" color="#8a8a8a" type="more-filled"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:"songRow",
		props: ['searchList'],
		data() {
			return {
				singer: '陶喆',
			};
		},
		mounted(){
			console.log(this.searchList);
		},
		computed:{
			...mapState('song', ['song']),
			currentId(){
				return this.song.id;
			}
		},
		methods:{
			toPlay(id){
				uni.navigateTo({
					url: '/pages/songDetail/songDetail?id = ' + id,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	margin-top: 50px;
	.item:nth-child(1){
		margin-top: -15px!important;
	}
	.item{
		height: 50px;
		display: flex;
		margin-top: 15px;
		justify-content: space-between;
		align-items: center;
		
		.left{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 20px;
			
			.left_info{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
				text{
					color: white;
					font-size: 30rpx;
				}
				
				.buttom{
					margin-top: 5px;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					gap: 5px;
					
					.my_tag{
						padding: 0 5px;
						font-size: 16rpx;
						text-align: center;
						border-radius: 3px;
					}
					
					.info{
						 color: gray;
						  font-size: 12px;
						  width: 100px;
						  overflow: hidden; /* 隐藏溢出部分 */
						  white-space: nowrap; /* 禁止换行 */
						  text-overflow: ellipsis; /* 显示省略号 */
					}
					
					.success{
						border: 1px solid #2fce85;
						color: #2fce85;
					}
					.warning{
						border: 1px solid #ce992c;
						color: #ce992c;
					}
				}
			}
			
			
		}
		.right{
			display: flex;
			gap: 10px;
		}
	}
	.item_active{
		border-left: 5px solid #31c27c;
		padding-left: 15px;
		color: #31c27c!important;
		
		.active_name{
			color: #31c27c!important;
		}
		
		.info_active{
			color: #31c27c!important;
		}
		
	}
	
}

</style>