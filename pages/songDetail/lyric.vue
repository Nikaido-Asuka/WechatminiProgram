<template>
	<view class="bigbox">
		<!-- 1.头部 -->
		  <view class="head">
		   <view class="left">
		    <text class="name">{{ song.name }}</text>
		    <text class="singer">{{ song.singer.name }} &nbsp;&nbsp;&nbsp;&nbsp;制作团队 > </text>
		   </view>
		   
		   <view class="right">
		    <uni-icons v-if="!isLike" type="heart" color="gray" size="35"></uni-icons>
		    <uni-icons v-else type="heart-filled" color="red" size="35"></uni-icons>
		   </view>
		  </view>
		  
		  <!-- 2.歌词 -->
		  <scroll-view 
				class="lyric_box" 
				:scroll-top="scrollTop" 
				@scroll="onScroll"
				scroll-y="true"
				scroll-with-animation="true"
				>
			   <text
				   v-for="(item, index) in song.tbLyrics" 
				   :key="index" class="lyric_item" 
				   :class="index === song.currentLyricIndex ? 'lyric_active' : '' " 
				   @tap="changeLyric(index)"
			   >{{ item.text }}</text>
		  </scroll-view>
		  
		  
		  <!-- 3.底部 -->
		  <view class="bottom">
		   <view class="left">
		    <uni-icons type="chat-filled" color="gray" size="30px"></uni-icons>
		    <uni-icons type="medal-filled" color="gray" size="30px"></uni-icons>
		    <uni-icons type="star-filled" color="gray" size="30px"></uni-icons>
		    
		   </view>
		   
		   <view class="right" @click="playPause">
		    <image v-if="!song.isPlay" src="../../static/community/播放.png"/>
			<image style="margin-left: 0px;" v-else src="../../static/songDetail/暂停 (1).png"></image>
		   </view>
		  </view>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex'
	export default {
	  data() {
		   return {
				isLike: true,
		   };
	  },
	  computed:{
			...mapState('song',['song']),
			scrollTop:{
				get(){
					return this.song.currentLyricIndex * 60;
				},
				
				set(){
					
				}
			}
	  },
	  methods:{
			...mapMutations('song', ['updateLyricIndex', 'playChange', 'play', 'playOver']),
			onScroll(e) {
			  // 更新滚动位置
			  this.scrollTop = e.detail.scrollTop;
			},
			changeLyric(index){
				this.song.currentLyricIndex = index;
				this.updateLyricIndex(index);
				console.log(this.song.currentTime);
			},
			playPause(){
				this.playChange();
				if(this.song.isPlay){
					this.play()
				}else{
					this.playOver();
				}
			},
	  }

}
	
</script>

<style scoped lang="scss">
.bigbox{
	margin-top: 40px;
	padding: 0 20px;
	color: white;
	
	.head{
		display: flex;
		justify-content: space-between;
		align-items: center;
		opacity: 0.7;
		
		.left{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 20px;
			
			.name{
				font-size: 25px;
			}
		}
	}
	.lyric_box{
		height: 400px;
		margin-top: 50px;
		
		.lyric_item{
			display: block;
			height: 50px;
			color: white;
			font-size: 17px;
			padding: 5px 0;
			opacity: 0.7;
			transition: all 0.3s;
		}
		.lyric_active{
			color: #31c27c;
			opacity: 1!important;
			font-size: 22px;
			transition: all 0.3s;
		}
	}
	
	.bottom{
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		
		.left{
			width: 150px;
			margin-top: 30px;
			display: flex;
			justify-content: space-between;			
		}
		
		.right{
			opacity: 0.7;
			border-radius: 50%;
			border: 4px solid  white;
			height: 50px;
			width: 50px;
			text-align: center;
			line-height: 70px;
			
			image{
				width: 30px;
				height: 30px;
				margin-left: 5px;
			}
		}
	}
}
</style>
