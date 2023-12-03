export default {
    namespaced: true,

    state: () => ({
		token: uni.getStorageSync('token') || '',
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
    }),


    mutations: {
		saveUserInfoStorage(state){
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo));
		},
		
		saveTokenToStorage(state){
			uni.setStorageSync('token', JSON.stringify(state.token));
		},
		
		updateUserInfo(state, user){
			state.userinfo = user;
			this.commit('user/saveUserInfoStorage');
		},
		
		updateToken(state, token){
			state.token = token;
			this.commit('user/saveTokenToStorage');
		},
		
		removeUser(state, token){
			uni.clearStorageSync();
			state.userinfo = {};
			state.token = "";
			console.log(uni.getStorageInfoSync());
		},
    },

    actions:{
       
    },

    getters:{
        
    },
}
