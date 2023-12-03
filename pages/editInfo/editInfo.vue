<template>
	<view>
		<view class="head">
			<uni-icons @click="goBack" class="icon" type="left" color="gray" size="20"></uni-icons>
			<view class="title">编辑资料</view>
		</view>
		
		
		<view class="list">
			<view class="item">
				<text>头像</text>
				<view class="right">
					<image :src="userinfo.avatar"/>
					<uni-icons type="forward" size="15" color="gray"></uni-icons>
				</view>
			</view>
			
			<view class="item">
				<text>昵称</text>
				<view class="right" @click="inputDialogToggle">
					<text>{{userinfo.username}}</text>
					<uni-icons type="forward" size="15" color="gray"></uni-icons>
				</view>
			</view>
			
			<view class="item">
				<text>性别</text>
				<view class="right" @click="toggle('bottom')">
					<text>{{userinfo.sex}}</text>
					<uni-icons type="forward" size="15" color="gray"></uni-icons>
				</view>
			</view>
			
			<view class="item">
				<text>手机号</text>
				<view class="right">
					<text>+86 {{ secretePhoneNumber }}</text>
					<uni-icons type="forward" size="15" color="gray"></uni-icons>
				</view>
			</view>
			
			<view class="item">
				<text>生日</text>
				<view class="right">
					<text>{{userinfo.birthday}}</text>
					<uni-icons type="forward" size="15" color="gray"></uni-icons>
				</view>
			</view>
			
			
			<!-- 更改年龄下框 -->
			<view>
				<uni-popup ref="popup" background-color="#2e2e2e">
					<view class="popup-content">
						<view class="sex" @click="changeSex('男')" style="padding-top: 20px;">男</view>
						<view class="sex" @click="changeSex('女')">女</view>
						<view class="cancel sex" @click="cancel">取消</view>
					</view>
				</uni-popup>
			</view>
			
			<!-- 更改昵称弹出框 -->
			<view class="dialog">
				<uni-popup class="content" ref="inputDialog" type="dialog">
					<uni-popup-dialog  ref="inputClose"  mode="input" title="输入昵称" @confirm="dialogInputConfirm">
						<input type="text" v-model="userinfo.username"/>
						<view class="charNumber">{{charNumber}}/15</view>
					</uni-popup-dialog>
				</uni-popup>
			</view>
			
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				type: 'center',
				startX: 0,
				endX: 0
			};
		},
		computed:{
			...mapState('user', ['userinfo']),
			charNumber(){
				return this.userinfo.username.length;
			},
			secretePhoneNumber(){
				return this.userinfo.phoneNumber.substring(0, 3) + '****' + this.userinfo.phoneNumber.substring(7);
			}
		},
		mounted(){
			console.log(this.userinfo);
		},
		methods:{
			...mapMutations('user', ['updateUserInfo']),
			goBack(){
				uni.navigateBack({
					delta: 1,
				})
			},
			inputDialogToggle(){
				this.$refs.inputDialog.open()
			},
			dialogInputConfirm(){
				if(this.charNumber === 0){
					uni.showToast({
					  title: '失败，请输入合理的昵称',
					  icon: 'error',
					  duration: 3000
					})
				}else if(this.charNumber > 15){
					uni.showToast({
					  title: '昵称长度过长，请输入合理的昵称',
					  icon: 'error',
					  duration: 3000
					})
				}else{
					this.updateUserInfo(this.userinfo);
					uni.showToast({
						title: '修改昵称成功！',
						icon: 'success',
						duration: 3000
					})
				}
			},
			toggle(type){
				this.type = type;
				this.$refs.popup.open(type);
			},
			cancel(){
				console.log("???")
				this.$refs.popup.close();
			},
			changeSex(sex){
				this.userinfo.sex = sex;
				this.$refs.popup.close();
				this.updateUserInfo(this.userinfo);
			}
		}
	}
</script>

<style lang="scss">
.head{
	display: flex;
	align-items: center;
	height: 30px;
	padding-top: 55px;
	background-color: #2e2e2e;
	
	.icon{
		position: absolute;
		left: 15px;
	}
	
	.title{
		width: 100px;
		margin: 0 auto;
		text-align: center;
		font-size: 17px;
		font-weight: bold;
	}
}
.popup-height {
	width: 200px;
}
.popup-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px;
	height: 80px;
	background-color: #2e2e2e;
	
	.sex{
		padding-top: 10px;
		margin-top: 10px;
	}
}
.dialog{
	color: black;
	height: 200px;
	display: flex;
	flex-direction: column;
	
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
input{
	display: block;
	text-align: center;
	margin: 0 auto;
	width: 200px;
	color: black;
}

.charNumber{
	display: block!important;
	margin: 0 auto;
	text-align: center;
}
.list{
	
	.btn{
		width: 200px;
		margin: 0 auto;
	}
	
	.item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
		padding-top: 0px;
		margin-top: 15px;
		
		
		text{
			color: white;
			font-size: 15px;
		}
		
		image{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			margin-right: 10px;
		}
		
		.right{
			margin-right: -10px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			
			text{
				color: gray;
				margin-right: 10px;
			}
		}
	}
}
</style>
