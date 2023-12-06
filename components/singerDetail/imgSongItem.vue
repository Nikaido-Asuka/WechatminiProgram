<template>
	<view>
		<uni-swipe-action>
			<block v-for="(item, index) in songList.slice(0,3)" :key="item.id" >
				<uni-swipe-action-item @click="open" :right-options="options">
					<view class="item">
							<view class="left">
								<image :src="item.img"/>
								<view class="left_info">
									<text>{{ item.name }}</text>
									<text class="info">{{ getSingerName }} · {{ item.album.name }}</text>
								</view>
							</view>
							
							<uni-icons size="25" color="gray" type="videocam-filled"></uni-icons>
					</view>
				</uni-swipe-action-item>
			</block>
		</uni-swipe-action>
		
	</view>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	export default {
		computed:{
			...mapState('singer', ['songList']),
			...mapGetters('singer', ['getSingerName']),
			
		},
		data() {
			return {
				options: [{
						text: '删除',
						style: {
							backgroundColor: '#F56C6C'
						}
					}
				],
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
