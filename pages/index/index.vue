<template>
	<view class="container">
		
		<view class="head">
			<view 
				class="title" 
				:class="titleIndex === index ? 'title_active' : '' " 
				v-for="(item, index) in titleArr" 
				:key="index"
				@click="changePage(index)"
				>{{ item }}</view>
			<view class="active_box" :style="{ left: titleIndex * 60 + 12 + 'px' }"></view>
		</view>
		
		
		<view class="search">
			<Search/>
		</view>
	
		
		
		<view class="content">
			<Recommend/>
		</view>
		
		<view class="music_bar">
			<musicBar/>
		</view>
		
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import Login from '@/components/user/Login.vue'
	import Search from '@/components/mySearch/mySearch.vue'
	import Recommend from '@/pages/index/recommend.vue'
	import musicBar from '@/components/musicBar/musicBar.vue'
	export default {
		components: { Login, Recommend, Search, musicBar },
		data() {
			return {
				titleIndex: 0,
				titleArr: ['推荐', '乐馆', '听书', '故事'],
				searchValue: '',
				
			}
		},
		computed:{
			...mapState('user', ['userinfo', 'token'])
		},
		methods: {
			changePage(index){
				this.titleIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	position: relative;
	height: 200px;
	padding-top: 60px;
	
	.head{
		width: 360px; 
		height: 80px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 20px;
		padding: 0 15px;
		padding-top: 30px;
		position: fixed;
		top: 0px;
		z-index: 20;
		background-color: #191919;
		
		.title{
			font-size: 20px;
			transition: all 0.5s;
		}
		
		.title_active{
			font-size: 25px;
			transition: all 0.5s;
		}
		
		.active_box{
			padding: 3px 3px;
			width: 50px;
			height: 30px;
			border-bottom: 5px solid #31c27c;
			position: absolute;
			transition: all 0.5s;
		}
	}
	
	.search{
		margin-top: 40px;
	}
	

	.content{
		padding: 5px 15px;
	}
	
	.music_bar{
		left: 15px;
		position: fixed;
		bottom: 0px;
		z-index: 10;
	}
}
</style>
