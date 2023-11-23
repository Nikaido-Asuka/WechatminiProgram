<template>
	<view class="bigbox">
		<!-- 1.封面 -->
		  <view class="img">
		   <image mode="widthFix" :src="song.img"></image>
		  </view>
		  
		  <!-- 2.歌曲信息 -->
		  <view class="info">
		   <!-- 2.1歌名 -->
		   <view class="head">
		    <text class="name">{{ song.songName }}</text>
		    <view class="icon_box">
		     <uni-icons type="heart" color="gray" size="30"></uni-icons>
		    </view>
		   </view>
		   
		   <!-- 2.2歌手 -->
		   <text class="singer">{{ song.singerName }}</text>
		   
		   <!-- 2.3歌词 -->
		   <text class="lyric">{{ song.lyrics[song.currentLyricIndex].text }}</text>
		   
		  </view>
		  
		  <!-- 3.操作 -->
		  <view class="operate">
		   
		   <!-- 3.1下载评论等 -->
		   <view class="operate_icon">
		    <uni-icons type="download-filled" color="gray" size="25"></uni-icons>
		    <uni-icons type="chat-filled" color="gray" size="25" @click="toPostForm"></uni-icons>
		    <uni-icons type="more-filled" color="gray" size="25"></uni-icons>
		   </view>
		   
		   <!-- 3.2进度条 -->
		   <view class="progress" @click="jumpTo($event)">
		    <view class="bar" :style="{ width : progressPercent }"></view>
		   </view>
		   
		   <!-- 3.3播放 -->
		   <view class="play_operate">
		    <image style="width: 20px;" mode="widthFix" src="../../static/songDetail/顺序循环.png"/>
		    <image style="width: 30px;" mode="widthFix" src="../../static/songDetail/上一首.png"/>
		    <view class="play">
		     <image v-if="!song.isPlay" src="../../static/community/播放.png" @click="playPause"></image>
		     <image v-else style="margin-left: 0px;!important" src="../../static/songDetail/暂停 (1).png" @click="playPause"></image>
		    </view>
		    <image style="width: 30px;" mode="widthFix" src="../../static/songDetail/下一首.png"/>
		    <uni-icons type="settings" color="gray" size="25"></uni-icons>
		   </view>
		   
		  </view>
	</view>
</template>

<script>
	import { mapState, mapMutations} from 'vuex'
	
	export default {
		data(){
			return{
				
			}
		},
		computed:{
			...mapState('song', ['song']),
			progressPercent(){
				if(this.song.currentTime === this.song.duration){
					console.log("???")
					return 0 + '%';
				}
				return (this.song.currentTime / this.song.duration) * 100 + '%';
			},
		},
		methods:{
			...mapMutations('song', ['updateLyricIndex', 'playChange', 'play', 'playOver', 'toDesignate']),
			toPostForm(){
				const song = this.song;
				
			},
			playPause(){
				this.playChange();
				if(this.song.isPlay){
					this.play()
				}else{
					this.playOver();
				}
			},
			
			jumpTo(event){
			    let query = uni.createSelectorQuery().in(this); // 创建一个查询对象
			    query.select('.progress').boundingClientRect(); // 选中类名为progress的元素
			    // 执行查询
			    query.exec((res) => {
					 let progressBar = res[0];
					 const clickPositionX = event.detail.x; // 获取点击位置的X坐标
					 const progressBarStartX = progressBar.left; // 获取进度条的起始X坐标
					 const progressBarWidth = progressBar.width; // 获取进度条的宽度
					 const clickPositionInProgressBar = clickPositionX - progressBarStartX; // 计算点击位置相对于进度条起始位置的距离
					 const clickPositionRatio = clickPositionInProgressBar / progressBarWidth; // 计算点击位置在进度条中的占比
					 this.song.currentTime = Math.round(clickPositionRatio * this.song.duration); // 使用占比更新当前播放时间
					 console.log(this.song.currentTime);
						 
						if(this.song.currentTime >= this.song.lyrics[this.song.lyrics.length - 1].startTime){
							this.song.currentLyricIndex = this.song.lyrics.length - 1;
						}else{
							for (let i = 0; i < this.song.lyrics.length - 1; i++) {
								if (this.song.currentTime >= this.song.lyrics[i].startTime && this.song.currentTime < this.song.lyrics[i + 1].startTime) {
									this.song.currentTime = this.song.lyrics[i].startTime;
									this.updateLyricIndex(i);
									break;
								}
							}
						 
					}

			     // 跳转到指定的时间点
			     this.toDesignate();
			    });
			   }
		},
	}
</script>

<style scoped lang="scss">
.bigbox{
	
	.img{
		padding-bottom: 0px;
		border-radius: 20px;
		overflow: hidden;
		width: 300px;
		margin: 20px auto;
	}
	.info{
		width: 300px;
		margin: 20px auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;
		
		.head{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			
			.name{
				color: white;
				font-size: 24px;
			}
		}
		.singer{
			color: gray;
		}
		.lyric{
			color: white;
			opacity: 0.8;
			font-size: 18px;
			height: 30px;
		}
	}
	.operate{
		width: 300px;
		margin: 50px auto;
		
		.operate_icon{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin: 0 auto;
		}
		.progress{
			margin-top: 20px;
			height: 6px;
			border-radius: 8px;
		    width: 300px;
		    background-color: #f0f0f0;
		    overflow: hidden;
			
			.bar{
				 height: 100%;
				 background-color: #007bff;
				 width: 0;
				 transition: width 0.3s;
			}
		}
		.play_operate{
			margin-top: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.play{
				width: 50px;
				height: 50px;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 3px solid white;
				
				image{
					margin-left: 4px;
					width: 30px;
					height: 30px;
				}
			}
		}
	}
}
</style>
