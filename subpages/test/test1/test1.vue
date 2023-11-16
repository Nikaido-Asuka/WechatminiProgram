<template>
  <view class="lyric-container">
    <scroll-view
      class="lyric-scroll"
      scroll-y
      :scroll-top="scrollTop"
      @scroll="onScroll"
	  :scroll-with-animation="true"
    >
      <view
        class="lyric-line"
        v-for="(line, index) in lyrics"
        :key="index"
        @tap="onLyricLineTap(index)"
      >
        {{ line }}
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      lyrics: ['歌词1', '歌词2', '歌词3', '歌词4'], // 歌词数组
      currentLine: 0, // 当前行
      scrollTop: 0 // 滚动位置
    };
  },
  mounted(){
	  console.log("?")
  },
  methods: {
    onScroll(e) {
      // 更新滚动位置
      this.scrollTop = e.detail.scrollTop;
    },
    onLyricLineTap(index) {
      // 点击歌词行，跳转到对应位置
      this.currentLine = index;
      this.scrollTop = index * 50; // 假设每行歌词高度为30px
    }
  }
};
</script>

<style scoped lang="scss">
.lyric-container {
  color: white;
  height: 300rpx; // 容器高度
  overflow: hidden;
  border: 1px solid red;
  
  
	.lyric-scroll {
		height: 100%;
		
		
	.lyric-line {
		line-height: 30rpx; // 行高
		border: 1px solid red;
		height: 50px;
		text-align: center;
		transition: all 0.5s;
	}
	
	}
}


</style>
