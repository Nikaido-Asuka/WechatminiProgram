<template>
	<view class="bigbox">
		
		<!-- 1.简介 -->
		<view class="box">
			<!-- 1.1头部 -->
			<view class="head">
				<text class="title">简介</text>
				<text>更多 > </text>
			</view>
			<!-- 1.2内容  -->
			<view class="content">
				<text>认证信息：知名歌手，歌单达人</text>
				<text class="detail">
					陶喆，1969年7月11日出生于中国香港，在台北长大，15岁开始定居美国洛杉矶，华语创作流行歌手，实力派唱将。 1997年发行首张专辑《陶喆》，之后专辑的成功让他成为在华人区具有较高影响力的歌手。有华语R&B音乐教父和台湾Babyface的美誉。2013年10月11日，陶喆参与江苏卫视节目《全能星战》播出。 2015年1月18日，陶喆加盟2015年央视羊年春晚，同年，制作并演唱歌曲《请到长城来滑雪》。2017年12月28日，发行歌曲 《Mars Baby》，该曲以略微复古的曲风讲述梦想与爱从指间溜走的遗憾。2018年1月3日 ，参加台湾跨年晚会，并演唱了《小镇姑娘》、《Susan 说》、《找自己》等歌曲。2022年6月27日，参加《微博唱响未来毕业派对》。2023年7月3日，推出其1997年发行的歌曲《流沙》的重新演绎版；7月11日，推出单曲《全世界会唱的歌》；8月16日，推出单曲《活该》。10月28日，参加江西省扶“瑶”直上飞行音乐嘉年华。
				</text>
			</view>
			
		</view>
		
		<!-- 2.歌曲 -->
		<view class="box">
			<!-- 2.1头部 -->
			<view class="head">
				<text class="title">精选歌曲</text>
				<text>更多 > </text>
			</view>
			
			<!-- 2.2歌曲部分 -->
			<imgSongItem/>
		</view>
		
		<!-- 3.视频 -->
		<view class="box">
			<!-- 3.1头部 -->
			<view class="head">
				<text class="title">精选视频</text>
				<text>更多 > </text>
			</view>
			
			<!-- 3.2视频部分 -->
			<view class="video">
				<image src="https://pic.imgdb.cn/item/655ac964c458853aef683423.png"/>
				<text>暂无视频</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import imgSongItem from '@/components/singerDetail/imgSongItem.vue'
	export default {
		components: { imgSongItem },
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.head{
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	text{
		color: gray;
		font-size: 20rpx;
	}
	
	.title{
		color: white;
		font-size: 34rpx;
	}
}

.bigbox{
	padding: 0 20px;
	
	.box{
		margin-top: 20px;
		
		.content{
			padding-top: 10px;
			color: gray;
			font-size: 25rpx;
			text-overflow: ellipsis;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			
			
			.detail{
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3; /* 控制显示行数 */
			}
		}
	}
	
	.box{
		
		.video{
			height: 200px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			image{
				width: 200px;
				height: 200px;
			}
		}
	}
}
</style>
