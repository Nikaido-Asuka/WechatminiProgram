export default {
    namespaced: true,

    state: () => ({
		postsList:[{
			id: '1',
			isStar: false,
			avatar: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
			username: 'Nikaido Asuka',
			text: '流沙！太丝滑了！',
			likeNum: 100,
			commentNum: 21,
			time: '2023.07.03',
			song:{
				img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
				name: '流沙(Reimagined)',
				singer: '陶喆(David Tao)',
				isLike: true
			}
		},{
			id: '2',
			isStar: false,
			avatar: 'https://pic.imgdb.cn/item/654dd8bac458853aef834ff7.jpg',
			username: '林零柒',
			text: '纯纯的神专！',
			likeNum: 100,
			commentNum: 21,
			time: '2023.06.02',
			song:{
				img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg',
				name: '飞机场的十点半',
				singer: '陶喆(David Tao)',
				isLike: true
			}
		}],
    }),


    mutations: {
		addPost(state, post){
			post.likeNum = 0;
			post.commentNum = 0;
			post.isStar = false;
			state.postsList.unshift(post);
		}
    },

    actions:{
       
    },

    getters:{
        
    },
}
