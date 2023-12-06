<template>
	<view class="bigbox">
		<!-- 1.头部 -->
		<view class="head">
			
			<view class="left">
				<view class="radio">
					<image src="../../static/community/播放.png"></image>
				</view>
				<text style="font-weight: 300; margin-left: 10px;">全部歌曲</text>
			</view>
			
			<view class="right">
				<text>热门</text>
				<image src="../../static/singerDetail/无序列表.png"/>
			</view>
			
		</view>
		
		<!-- 2.内容 -->
		<view>
			<songRow v-if="songList.length !== 0" :searchList="searchList"/>
		</view>
		
		
		
	</view>
</template>

<script>
import songRow from '@/components/songRow/songRow.vue'
import { mapState } from 'vuex'
export default {
	name: 'songList',
	components: { songRow },
	computed:{
		...mapState('singer', ['songList']),
		searchList(){
			const searchList = {
				isSheet: false,
				songList: this.songList
			}
			return searchList;
		}
	},
	data(){
		return{
		}
	}
}
</script>

<style lang="scss" scoped>
.bigbox{
	padding: 10px 20px;
	.head{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.left{
			display: flex;
			align-items: center;
			justify-content: flex-start;
			
			.radio{
				border-radius: 50%;
				width: 30px;
				height: 30px;
				text-align: center;
				line-height: 35px;
				background-color: #2fce85;
				
				image{
					width: 15px;
					height: 15px;
				}
			}
		}
		
		.right{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			
			text{
				color: #8a8a8a;
			}
			
			image{
				width: 20px;
				height: 20px;
				margin-left: 20px;
			}
		}
	}
}
</style>