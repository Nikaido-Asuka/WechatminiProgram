import request from '@/utils/request.js'
export default {
    namespaced: true,

    state: () => ({
		isShow: true,
		postsList:[],
    }),


    mutations: {
		updatePostsList(state, postsList){
			state.postsList = postsList;
			console.log(state.postsList);
		},
		
		changeIsShow(state, bool){
			state.isShow = bool;
		},
		
		addPost(state, post){
			post.likeNum = 0;
			post.commentNum = 0;
			post.isStar = 0;
			state.postsList.unshift(post);
			
			console.log(post.imgs);
			
			request({
				url: '/qqmusic/post/addPost',
				method: 'POST',
				data: post,
			}).then(response => {
				console.log(response);
				uni.showToast({
					title: '添加成功！',
					icon: 'success',
					duration: 2000,
					complete() {
						uni.navigateBack();
					}
				})
			}).catch(err => console.log(err));
			
		},
		
		
		editPostInfo(state, post){
			console.log(post);
			request({
				url: '/qqmusic/post/updatePost',
				data: post,
				method: 'PUT'
			}).then(response => {
				state.postsList.map((item)=>{
					if(item.id === post.id){
						item.text = post.text;
					}
				})
				
				
				uni.showToast({
					title: '添加成功！',
					icon: 'success',
					duration: 2000,
					complete() {
						uni.navigateBack();
					}
				})
			}).catch(err => console.log(err));
			
			
		}
    },

    actions:{
       
    },

    getters:{
        
    },
}
