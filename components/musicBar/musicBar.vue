<template>
  <view class="container" :style="{ backgroundColor: song.color }">
	  
    <view class="content">
      <view class="left" @click="toSongDetail">
        <image mode="widthFix" :src="song.img" />
        <text class="lyric">{{ song.lyrics[song.currentLyricIndex].text }}</text>
      </view>
      <view class="right">
        <view class="circle">
          <image @click="playPause" v-show="song.isPlay" class="icon" mode="widthFix" src="../../static/songDetail/暂停 (1).png" />
          <image @click="playPause" v-show="!song.isPlay" class="icon" style="left: 6px!important;" mode="widthFix" src="../../static/community/播放.png" />
        </view>

        <uni-icons type="list" color="white" size="25"></uni-icons>
      </view>
    </view>
	
  </view>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: "musicBar",
  data() {
    return {
		
    };
  },
  computed: {
    ...mapState('song', ['song'])
  },
  methods: {
	...mapMutations('song', ['playChange', 'playOver', 'play']),
    playPause() {
		this.playChange();
		if(this.song.isPlay){
			this.play()
		}else{
			this.playOver();
		}
    },
    toSongDetail() {
      uni.navigateTo({
        url: '/pages/songDetail/songDetail?id=' + this.song.id,
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 340px;
  height: 50px;
  border-radius: 30px;
  overflow: hidden;
}

.content {
  margin-top: -5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
}

.left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  image {
    width: 60px;
  }

  .lyric {
    font-size: 15px;
    width: 150px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  .circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid white;

    .icon {
      width: 15px;
      position: relative;
      left: 5px;
      top: 3px;
    }
  }
}

.none{
	height: 30px;
	border: 1px solid red;
	z-index: 200;
}
</style>
