export default {
    namespaced: true,

    state: () => ({
        songList:[{
			id: '1',
			songName: '流沙（Reimagined）',
			singerName: '陶喆',
        	currentTime: 0,
        	duration: 291,
        	intervalId: null, // setInterval返回的定时器ID
        	isPlay: false,
        	currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: "https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg",
			audio: "https://3wt.music.eduingame.cn/2023/09-21/ef6ebc4c78794dbf92ce08533442338a3wcn474791.mp3",
        	lyrics:[
        		{ text: "流沙(Reimagined) -- 陶喆(David Tao)", startTime: 2},
        		{ text: "并不是真的 路过而已", startTime: 30 },
        		{ text: "也不是真的 不会想你", startTime: 36 },
        		{ text: "全都不是真的 是骗自己", startTime: 43 },
        		{ text: "其实还爱你 爱着你", startTime: 48 },
				{ text: "我以为我早想清楚", startTime: 54 },
			    { text: "不由自主恍恍惚惚", startTime: 61 },
				{ text: "又走回头路", startTime: 65 },
				{ text: "再看一眼有过的 幸福", startTime: 67 },
			    { text: "爱情好像流沙", startTime: 74 },
				{ text: "我不挣扎 随他去吧 我不害怕", startTime: 79 },
				{ text: "爱情好像流沙", startTime: 87 },
				{ text: "心里的牵挂 不愿放下", startTime: 92 },
				{ text: "Oh baby 让我这样吧", startTime: 97 },
				{ text: "并不是真的 路过而已", startTime: 116 },
				{ text: "也不是真的 不会想你", startTime: 121 },
				{ text: "全都不是真的 是骗自己", startTime: 128 },
				{ text: "其实还爱你 爱着你", startTime: 134 },
				{ text: "我以为我早想清楚", startTime: 139 },
				{ text: "不由自主恍恍惚惚", startTime: 146 },
				{ text: "又走回头路", startTime: 150 },
				{ text: "再看一眼有过的 幸福", startTime: 152 },
				{ text: "爱情好像流沙", startTime: 159 },
				{ text: "我不说话 等待黑暗 泪能落下", startTime: 164 },
				{ text: "爱情好像流沙", startTime: 172 },
				{ text: "明知该躲他 无法自拔", startTime: 177 },
				{ text: "Oh baby 是我太傻", startTime: 183 },
				{ text: "是一再的做一再的错不由我", startTime: 189 },
				{ text: "我一步一步一步一步", startTime: 197 },
				{ text: "慢慢走向流沙", startTime: 200 },
				{ text: "走向流沙", startTime: 203 },
				{ text: "爱情好像流沙", startTime: 207 },
				{ text: "我不挣扎 随他去吧 我不害怕", startTime: 212 },
				{ text: "爱情好像流沙", startTime: 220 },
				{ text: "心里的牵挂 不愿放下", startTime: 224},
				{ text: "Oh baby 让我这样吧", startTime: 230 },
        		]
        },{
			id: '2',
			songName: "One Summery's Day",
			singerName: '久石让',
			currentTime: 0,
			duration: 269,
			intervalId: null, // setInterval返回的定时器ID
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: "https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg",
			audio: 'https://3wt.music.eduingame.cn/2023/09-21/54364ff93c304cbcb6832577511ae9f03wcn474791.mp3',
			lyrics:[{ text: '纯音乐 暂无歌词', startTime: 0}]
		}],
		song: {},
    }),


    mutations: {
		// 根据id获得歌曲
		getSong(state, id){
			state.songList.map( item => {
				if(item.id === id){
					state.song = item;
				}
			})
		},
		
		
		// 修改歌词索引和时间
		updateLyricIndex(state, index) {
		    state.song.currentLyricIndex = index;
			state.song.currentTime = state.song.lyrics[state.song.currentLyricIndex].startTime;
			state.song.songContext.seek(state.song.currentTime);
		},
		
		// 更新播放状态
		playChange(state){
			state.song.isPlay = !state.song.isPlay
		},
		
		// 播放
		play(state){
			state.song.songContext.src = state.song.audio;
			state.song.songContext.play();
			state.song.intervalId = setInterval(()=>{
				state.song.currentTime += 1;
				 if(state.song.currentTime >= state.song.duration){
						console.log("结束");
						clearInterval(state.song.intervalId);
						state.song.isPlay = false;
						return ;
					}
				 else{
					 if(state.song.currentLyricIndex < state.song.lyrics.length - 1 && state.song.currentTime >= state.song.lyrics[state.song.currentLyricIndex + 1].startTime ){
						 state.song.currentLyricIndex += 1;
					 }
				 }
			},1000)
		},
		
		// 暂停
		playOver(state){
			clearInterval(state.song.intervalId);
			state.song.songContext.pause();
		},
		
		// 跳转到指定地点
		toDesignate(state){
			state.song.songContext.seek(state.song.currentTime);
		}
		
		
		
    },

    actions:{
       
    },

    getters:{
        
    },
}
