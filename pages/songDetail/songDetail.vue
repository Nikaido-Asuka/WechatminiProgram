<template>
	<view class="bigbox" :style="{ '--bgurl': 'url(' + song.album.img + ')' }">
		<view class="head">
			<uni-icons type="bottom" color="gray" size="20" @click="goBack"></uni-icons>
			
			<view class="center">
				<text v-for="(item, index) in titleArr" :key="index" @click="changePage(index)" :class="index === activeIndex ? 'active' : ''">{{item}}</text>
			</view>
			<uni-icons type="redo" color="gray" size="20"></uni-icons>
		</view>
		
		<!-- 歌曲页面 -->
		<Song v-if="activeIndex === 0"/>
		
		<!-- 歌词页面 -->
		<Lyric :song="song" v-else/>
	</view>
</template>

<script>
	import request from '@/utils/request.js'
	import { mapState, mapMutations } from 'vuex'
	import Song from '@/pages/songDetail/song.vue'
	import Lyric from '@/pages/songDetail/lyric.vue'
	export default {
		components:{ Song, Lyric },
		data() {
			return {
				titleArr:['歌曲', '歌词'],
				activeIndex: 0,	
			};
		},
		onLoad(options){
			console.log(options);
			this.songDetailGetSong(Number(options.id));
		},
		computed:{
			...mapState('song', ['song']),
			backgroundImageStyle(){
				return {
					'background-image': `url(${this.song.img})`,
					'filter': 'blur(30px)'
				};
			}
		},
		methods:{
			...mapMutations('song', ['getSong']),
			songDetailGetSong(id){
				console.log(id);
				this.getSong(id);
			},
			changePage(index){
				this.activeIndex = index;
			},
			goBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
.bigbox{
	position: relative;
	padding-top: 50px;
	
	.head{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		position: relative; /* 设置为相对定位 */
		
		
		
		.center{
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			text{
				color: gray;
				font-size: 15px;
				transition: all 1s;
				padding: 5px;
			}
			.active{
				color: white;
				font-size: 20px;
				transition: all 1s;
			}
		}
	}
}
/* 添加伪元素 */
.bigbox::before{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: var(--bgurl);
	filter: blur(100px); /* 添加模糊效果 */
	z-index: -1; /* 设置为负层叠顺序，放在文字下方 */
}
</style>
