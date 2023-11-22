<template>
	<view class="search_box">
		<view class="search" @click="searchBoxHandler">
			<uni-icons style="margin-left: 10px;" color="gray" type="search" size="20"></uni-icons>
			<text class="placeholder">{{ searchSongArr[searchSongIndex] }}</text>
		</view>
		
		<image mode="widthFix" src="../../static/index/磁片唱片.png"/>
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				intervalId: null,
				searchValue: '',
				searchSongIndex: 0,
				searchSongArr: ['普通朋友', '流沙（Reimagined）', '蝴蝶'],
			};
		},
		mounted(){
			this.change();
		},
		destroyed(){
			clearInterval(this.intervalId);
		},
		methods:{
			searchBoxHandler(){
				uni.navigateTo({
					url: '/subpages/searchDetail/searchDetail'
				})
			},
			change(){
				this.intervalId = setInterval(()=>{
					this.searchSongIndex += 1;
					if(this.searchSongIndex >= 3){
						this.searchSongIndex = 0;
					}
				},5000)
			},
			
			toSearchDetail(){
				uni.navigateTo({
					url: '/subpages/searchDetail/searchDetail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.search_box{
	position: relative;
	height: 57px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.search{
		width: 80%;
		height: 35px;
		border-radius: 18px;
		background-color: black;
		margin-left: 15px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
		
		.placeholder{
			color: gray;
			transition: all 0.5s;
		}
	}
	
	image{
		width: 35px;
		position: absolute;
		top: 10px;
		right: 10px;
	}
}
</style>