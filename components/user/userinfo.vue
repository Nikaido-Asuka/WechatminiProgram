<template>
	<view class="bigbox">
		<view class="head">
			<image @tap="previewImg" mode="widthFix" :data-imgUrl="userinfo.bgImg" :src="userinfo.bgImg"></image>
		</view>
		
		<image @tap="previewImg" class="avatar" :data-imgUrl="userinfo.avatar" :src="userinfo.avatar"></image>
		
		
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
			
			<view class="music_list" @click="toLikeDetail">
				<view class="music_item">
					<view class="left">
						<image src="https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg"/>
						<uni-icons class="heart" size="25" type="heart-filled" color="#d94b47"></uni-icons>
						<view class="left_info">
							<text style="color: white; font-size: 18px;">我喜欢</text>
							<text class="info">{{ userinfo.songList.length }}首歌曲 3张专辑 8张歌单</text>
						</view>
					</view>
					
					<uni-icons type="forward" size="20" color="gray"></uni-icons>
				</view>
			</view>
			
		</view>
		
		
		<!-- 自建歌单 -->
		<view class="box sheet" :style="{ paddingBottom: this.sheetList.length * 80 + 'px' }">
			<view class="head">
				<text class="title">歌单</text>
				<uni-icons type="plusempty" color="white" size="20" @click="addSheet()"></uni-icons>
			</view>
			
			<Sheet :sheetList="sheetList"/>
		</view>
		
		<!-- 提示窗示例 -->
		<view>
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="通知" content="是否确定退出登陆？" @confirm="dialogConfirm1"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>
		
		<view>
		  <uni-popup ref="newSheetDialog" type="dialog">
		    <uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="新建歌单" @confirm="dialogConfirm2" @close="dialogClose">
		      <view class="content">
				  <input class="dialog_input" type="text" placeholder="请输入歌单名称" v-model="sheetName" />
				  <view class="charNumber" :class=" 20-charNumber < 0 ? 'error' : '' ">{{ 20 - charNumber}}</view>
			  </view>
		    </uni-popup-dialog>
		  </uni-popup>
		</view>

		
		<view class="music_bar">
			<musicBar/>
		</view>
		
	</view>
</template>

<script>
	import { mapMutations, mapState } from 'vuex'
	import Sheet from '@/components/my-sheet/my-sheet.vue'
	export default {
		name:"userinfo",
		components: { Sheet },
		data() {
			return {
				sheetName: '新建歌单',
				sheetList:[{
					id: 1,
					name: '陶喆',
					number: 3,
					img: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
					first_song: {
						id: 3,
						name: "I'm OK（Reimagined）",
						album: "I'm OK（Reimagined）",
						singer: '陶喆'
					}
				},{
					id: 2,
					name: '23春',
					number: 10,
					img: 'https://pic.imgdb.cn/item/6565577dc458853aef808fec.jpg',
					first_song: {
						id: 2,
						name: '大海',
						singer: '张雨生'
					}
				}],
			};
		},
		mounted(){
			console.log(this.userinfo);
		},
		computed:{
			...mapState('user', ['userinfo']),
			charNumber(){
				return this.sheetName.length;
			},
		},
		methods:{
			...mapMutations('user', ['removeUser']),
			...mapMutations('sheet', ['addSheet']),
			addSheet(){
				this.$refs.newSheetDialog.open();
			},
			toLikeDetail(){
				uni.navigateTo({
					url: '/subpages/collectDetail/collectDetail'
				})
			},
			previewImg(e){
				const imgUrl = e.currentTarget.dataset.imgurl;
				uni.previewImage({
					urls: [imgUrl],
				})
			},
			logout(){
				this.$refs.alertDialog.open();
			},
			dialogConfirm1(){
				this.removeUser();
				this.$refs.alertDialog.close();
			},
			dialogConfirm2(){
				if(this.charNumber > 20){
					uni.showToast({
						icon: 'error',
						title: '超出字数限制',
						duration: 2000,
					})
				}else{
					const sheet = {
						id: this.sheetList.length + 1,
						name: this.sheetName,
						number: 0,
						img: 'https://pic.imgdb.cn/item/658a8d12c458853aef1f39b8.jpg',
					};
					this.sheetList.unshift(sheet);
					this.addSheet(sheet);
					uni.showToast({
						icon: 'success',
						title: '新建成功！',
						duration: 2000,
					})
				}
				
				this.sheetName = '新建歌单';
				this.$refs.newSheetDialog.close();
			},
			dialogClose(){
				this.sheetName = '新建歌单';
				this.$refs.alertDialog.close();
				this.$refs.newSheetDialog.close();
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
.content{
	display: flex;
	justify-content: space-between;
	gap: 20px;
	align-items: center;
	background-color: #efefef;
	padding: 5px 10px;
	color: black;
	border-radius: 8px;
	
	.dialog_input{
		border-radius: 8px;
		width: 90%;
	}
	.error{
		color: red;
	}
}

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
		
		.head{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: auto;
		}
	}
	
	.music_bar{
		left: 15px;
		position: fixed;
		bottom: 10px;
		z-index: 10;
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