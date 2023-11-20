<template>
	<view class="bigbox">
		<view class="head">
			<image mode="widthFix" src="https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg"></image>
		</view>
		
		<image class="avatar" :src="userinfo.avatar"></image>
		
		
		<!-- 个人信息 -->
		<view class="userinfo_bigbox">
			<view class="userinfo">
				<view class="username">
					<text style="color: white; font-size: 20px; margin-left: 20px;">{{ userinfo.username }}</text>
					<image @click="logout" src="../../static/userinfo/退出.png"/>
				</view>
				
				
				<button class="btn" @click="navigate('editInfo')">编辑资料</button>
				
				<view class="tag">
					<image mode="widthFix" class="VIP" src="https://pic.imgdb.cn/item/652368cac458853aef30998c.png"></image>
				</view>
				
				
				<view class="ul">
					<view class="li">关注<text>{{ userinfo.focusNum}}</text></view>
					<view class="li">粉丝<text>{{ userinfo.fansNum}}</text></view>
					<view class="li">好友<text>{{ userinfo.firend }}</text></view>
					<view class="li">访客<text>{{ userinfo.visitorNum}}</text></view>
				</view>
			</view>
		</view>
		
		<!-- 个性化信息 -->
		<view class="personal_info box">
			<text class="title">音乐基因</text>
			
			<scroll-view class="gene_scroll" scroll-x="true">
				
				 <view class="gene_item" @click="navigate('gene','annualSinger')">
					 <view class="inward">
						 <text class="title">我的年度歌手榜</text>
						 <text class="name">陶喆</text>
						 <image src="https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg"/>
						 <text class="text">真爱就是循环一千遍</text>
					 </view>
				 </view>
				
				<view class="gene_item" @click="navigate('gene', 'flavour')">
					<view class="inward">
						<text class="title">音乐口味</text>
						<text class="name">独特</text>
						<image src="../../static/userinfo/Compass.png"/>
						<text class="text">做自己 不跟随</text>
					</view>
				</view>
				
				<view class="gene_item" @click="navigate('gene', 'personal')">
					<view class="inward">
						<text class="title">音乐人格</text>
						<text class="name">ENFP</text>
						<text style="font-size: 40px; margin-top: -4px;">🤪</text>
						<text class="text" style="margin-top: -15px;">快乐的缔造者</text>
					</view>
				</view>
				
			</scroll-view>
			
		</view>
		
		<!-- 乐库 -->
		<view class="box music">
			<text class="title">乐库</text>
			
			<view class="music_list">
				<view class="music_item">
					<view class="left">
						<image src="https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg"/>
						<uni-icons class="heart" size="25" type="heart-filled" color="#d94b47"></uni-icons>
						<view class="left_info">
							<text style="color: white; font-size: 18px;">我喜欢</text>
							<text class="info">12首歌曲 3张专辑 8张歌单</text>
						</view>
					</view>
					
					<uni-icons type="forward" size="20" color="gray"></uni-icons>
				</view>
			</view>
		</view>
		
		
		<!-- 自建歌单 -->
		<view class="box sheet">
			<text class="title">歌单</text>
			<Sheet/>
		</view>
		
		<!-- 提示窗示例 -->
		<view>
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="通知" content="是否确定退出登陆？" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>
		
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'
	import Sheet from '@/components/sheet/sheet.vue'
	export default {
		name:"userinfo",
		components:{ Sheet },
		data() {
			return {
				
			};
		},
		computed:{
			...mapState('user', ['userinfo']),
		},
		methods:{
			...mapMutations('user', ['removeUser']),
			logout(){
				this.$refs.alertDialog.open();
			},
			dialogConfirm(){
				this.removeUser();
				this.$refs.alertDialog.close();
			},
			dialogClose(){
				this.$refs.alertDialog.close();
			},
			navigate(path1, path2){
				console.log(path1 + path2);
				var path = null;
				if(path2 === undefined){
					path = '/pages/' + path1 + '/' + path1;
				}else{
					path = '/pages/' + path1 + '/' + path2 + '/' + path2;
				}
				
				uni.navigateTo({
					url: path,
				})
			}
		}
	}
</script>

<style lang="scss">
.bigbox{
	width: 100%;
	position: relative;
	padding-bottom: 100px;
	
	
	.head{
		width: 100%;
		height: 300px;
		overflow: hidden;
		
		image{
			width: 100%;
		}
	}


	.avatar{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		position: absolute;
		top: 170px;
		left: 45px;	
		z-index: 10;
	}
	
	.userinfo_bigbox{
		width: 90%;
		height: 150px;
		position: absolute;
		top: 220px;
		left: 17px;
		z-index: 2;
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.2);
		
		.userinfo{
			width: 100%;
			height: 150px;
			margin-top: 50px;
			position: relative;
			
			.username{
				display: flex;
				align-items: center;
				
				image{
					width: 30px;
					height: 30px;
					margin-left: 10px;
				}
			}
			
			.btn{
				position: absolute;
				top: -10px;
				right: 20px;
				display: inline-block;
				background-color: transparent;
				border-radius: 25px;
				width: 100px;
				height: 40px;
				color: white;
				font-size: 15px;
				line-height: 40px;
				border: 1px solid white;
			}
			
			.tag{
				width: 90%;
				margin: 0 auto;
				
				.VIP{
					width: 50px;
				}
				
			}
			
			.ul{
				width: 90%;
				margin: -10px auto;
				height: 50px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.li{
					color: gray;
					
					text{
						color: white;
						font-size: 17px;
						margin-left: 5px;
					}
				}
			}
		}
	}	
	.personal_info{
		margin: 70px auto!important;
		display: flex;
		flex-direction: column;
		
		.gene_scroll{
			white-space: nowrap;
			width: 100%;
			height: 200px;
			
			.gene_item{
				width: 180px;
				height: 150px;
				border-radius: 20px;
				color: white;
				margin-top: 10px;
				font-size: 36px;
				background: rgba(255, 255, 255, 0.1);
				margin-right: 20px;
				display: inline-block;
				padding-bottom: 6px;
					
				.inward{
					display: flex;
					flex-direction: column;
					padding-top: 5px;
					padding-left: 15px;
					position: relative;
					
					
					.title{
						color: gray;
						font-size: 15px;
					}
					.name{
						margin-top: 3px;
						color: white;
						font-size: 25px;
						font-weight: bold;
					}
					image{
						width: 50px;
						height: 50px;
						border-radius: 50%;
						margin-left: 0px;
					}
					.text{
						color: white;
						font-weight: bold;
						font-size: 15px;
						position: absolute;
						bottom: -30px;
					}
				}
			}
			
			
			  
		}
	}
	
	.music{
		.music_list{
			height: 200px;
			
			.music_item{
				width: 100%;
				height: 100px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.left{
					display: flex;
					position: relative;
					justify-content: flex-start;
					
					.heart{
						position: absolute;
						top: 20px;
						left: 20px;
					}
					
					
					image{
						width: 60px;
						height: 60px;
						border-radius: 12px;
						opacity: 0.5;
					}
					
					.left_info{
						width: 200px;
						padding-left: 10px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						
						.info{
							color: gray;
							font-size: 12px;
							width: 100px;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
	
	.sheet{
		
	}
	
}
.box{
	width: 90%;
	height: 200px;
	margin: -40px auto;
	padding-top: 10px;
}

.title{
	color: white;
	font-size: 20px;
	font-weight: bold;
}
</style>