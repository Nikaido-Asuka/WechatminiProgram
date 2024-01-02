import request from '@/utils/request.js'
export default {
    namespaced: true,

    state: () => ({
		sheetList:[{
			id: 1,
			name: '陶喆',
			number: 3,
			img: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
			isSheet: true,
			first_song: {
				id: 2,
				name: "I'm OK（Reimagined）",
				album: "I'm OK（Reimagined）",
				singer: '陶喆'
			},
			songList:[{
				id: 2,
				name: "I'm OK（Reimagined）",
				album: {
					name:  "I'm OK（Reimagined）",
				},
				singer: '陶喆'
			},{
				id: 1,
				name: '流沙（Reimagined）',
				album: {
					name:  "流沙（Reimagined）",
				},
				singer: '陶喆'
			},{
				id: 4,
				name: '爱是个什么东西',
				album: {
					name: '太平盛世',
				},
				singer: '陶喆'
			}]
		},{
			id: 2,
			name: '23春',
			number: 10,
			img: 'https://pic.imgdb.cn/item/6565577dc458853aef808fec.jpg',
			isSheet: true,
			first_song: {
				id: 13,
				name: '大海',
				singer: '张雨生'
			},
			songList:[{
				id: 13,
				name: '大海',
				album: {
					name:  "大海",
				},
				singer: '张雨生'
			},{
				id: 1,
				name: '流沙（Reimagined）',
				album: {
					name:  "流沙（Reimagined）",
				},
				singer: '陶喆'
			},{
				id: 4,
				name: '爱是个什么东西',
				album: {
					name: '太平盛世',
				},
				singer: '陶喆'
			}]
		}],
    }),


    mutations: {
		addSheet(state, sheet){
			state.sheetList.unshift(sheet);
			request({
				url: '/qqmusic/sheet/addSheet',
				method: 'POST',
				data: sheet
			}).then((response => {
				console.log(response);
			})).catch(err => console.log(err.message));
		},
		
		confirmAddSheet(state, {id, song}){
			const sheet = getters.getSheetById(id);
			let flag = false;
			sheet.songList.map(item => {
				if (item.id === song.id) flag = true;
			})
			if (!flag){
				sheet.songList.unshift(song);
				request({
					url: '/qqmusic/sheet/addSong/' + id + '/' + song.id,
					method: 'POST'
				}).then((response) => {
					console.log(response);
					uni.showToast({
						icon: 'success',
						title: '添加成功！',
					})
				}).catch(err => {
					console.log(err);
					uni.showToast({
						icon: 'error',
						title: '网络错误，请稍后重新试！'
					})
				});
			}else{
				uni.showToast({
					icon: 'error',
					title: '已存在该歌曲！'
				})
			}
		}
		
    },

    actions:{
       
    },

    getters: {
      getSheetById: (state) => (id) => {
        const result = state.sheetList.find(item => item.id === id);
        return result;
      }
    }

}
