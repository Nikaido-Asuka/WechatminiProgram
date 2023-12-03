export default {
    namespaced: true,

    state: () => ({
		postsList:[{
			id: '3',
			isStar: false,
			isMusic: true,
			avatar: 'https://pic.imgdb.cn/item/65684906c458853aefde8b32.jpg',
			username: 'カブタック',
			text: '哪有什么王诠胜 从来都是李子维啊.....',
			likeNum: 0,
			commentNum: 0,
			time: '2023.11.30',
			song:{
				img: 'https://pic.imgdb.cn/item/65684686c458853aefd602ee.jpg',
				name: "Last Dance",
				singer: '伍佰 & China Blue',
				isLike: true
			}
		},{
			id: '2',
			isStar: false,
			isMusic: true,
			avatar: 'https://pic.imgdb.cn/item/654dd85ac458853aef824d3b.jpg',
			username: 'カブタック',
			text: '希望有一天我真会OK',
			likeNum: 0,
			commentNum: 0,
			time: '2023.11.30',
			song:{
				img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
				name: "I'm OK（Reimagined）",
				singer: '陶喆(David Tao)',
				isLike: true
			}
		},{
			id: '1',
			isStar: false,
			isMusic: true,
			avatar: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
			username: 'Nikaido Asuka',
			text: '流沙！太丝滑了！',
			likeNum: 100,
			commentNum: 21,
			time: '2023.07.03',
			song:{
				img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
				name: '流沙（Reimagined）',
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
		},
		
		
		editPostInfo(state, { id, text }){
			console.log(text);
			const post = state.postsList.find(item => item.id === id);
			if (post) {
				post.text = text;
				return true;
			}
			return false;
		}
    },

    actions:{
       
    },

    getters:{
        
    },
}
