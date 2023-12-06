export default {
    namespaced: true,

    state: () => ({
		singer:{},
		songList:[],
    }),


    mutations: {
		updateSinger(state, singer){
			state.singer = singer;
		},
		updateSongList(state, songList){
			state.songList = songList;
			console.log(state.songList);
		}
    },

    actions:{
       
    },

    getters:{
        getSingerName(state){
			return state.singer.name;
		}
    },
}
