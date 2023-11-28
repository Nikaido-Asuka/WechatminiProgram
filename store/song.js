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
		},{
			id: '3',
			songName: "I'm OK（Reimagined）",
			singerName: '陶喆',
			currentTime: 0,
			duration: 245,
			intervalId: null,
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
			audio: 'https://m701.music.126.net/20231126192311/5dac6301d177ba0a63baf00d68cceee5/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/30580366126/2d2e/3017/982a/b44588998b545ee41a4fc63c522b45e1.mp3',
			lyrics:[
				{ text: "I'm OK(Reimagined) -- 陶喆(David Tao)", startTime: 2},
				{ text: 'Sorry我不在 请在b声后留言', startTime: 23},
				{ text: '我在忙着放空 请你允许我飞在梦里', startTime: 28},
				{ text: '他永远不在回来 回忆一大片空白', startTime: 34},
				{ text: '希望有一天我会OK', startTime: 40},
				{ text: '是谁忘记了初心 还是半途就放弃', startTime: 46},
				{ text: '现在只能苦笑对着镜头傻傻比爱心', startTime: 51},
				{ text: '或许不必再期待 直接cancel比较快', startTime: 57},
				{ text: '再多遗憾也不能重来', startTime: 62},
				{ text: '希望那一天我还会OK', startTime: 68},
				{ text: '你靠进来 我却越走越远', startTime: 74},
				{ text: '说不出来 痛苦藏在里面', startTime: 79},
				{ text: '耐心等待 无法逆转时间', startTime: 85},
				{ text: '没有解套 追溯不到 现在有多少的爱也救不了', startTime: 91},
				{ text: '再说Sorry你还在 请把这当作留言', startTime: 114},
				{ text: '我要继续放空 请你允许我飞在过去', startTime: 120},
				{ text: '过去的让它过去 只剩残留的回忆', startTime: 125},
				{ text: '希望有一天我真会ok', startTime: 131},
				{ text: '其实我现在非常不ok', startTime: 137},
				{ text: '你靠进来 我就越走越远', startTime: 142},
				{ text: '说不出来 痛苦藏在里面', startTime: 148},
				{ text: '耐心等待 无法逆转时间', startTime: 154},
				{ text: '没有解套 追溯不到 现在有多少的爱也救不了', startTime: 159},
				{ text: '还有很多事我还想跟你说', startTime: 171},
				{ text: '这些秘密要从生命中感受', startTime: 177},
				{ text: 'Carpe diem活在当下我想说', startTime: 181},
				{ text: '听了愿你将会比较OK', startTime: 188},
				{ text: '这个世界生病很不OK', startTime: 194},
				{ text: '你靠进来 我就越走越远', startTime: 199},
				{ text: '说不出来 痛苦藏在里面', startTime: 205},
				{ text: '耐心等待 无法逆转时间', startTime: 211},
				{ text: '没有解套 追溯不到 现在有多少的爱也救不了', startTime: 216},
				{ text: '现在你给我的爱 我都不要', startTime: 227},
			]
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
		
		cutToNext(state){
			var currentIndex = state.songList.findIndex(item => item.id === state.song.id);
			console.log(currentIndex);
			state.song.songContext.stop();
			clearInterval(state.song.intervalId);
			state.song.isPlay = false;
			if(currentIndex >= state.songList.length - 1){
				currentIndex = 0;
			}else{
				currentIndex += 1;
			}
			state.song = state.songList[currentIndex];
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
		  clearInterval(state.song.intervalId); // 先清除之前的计时器
		  
		    state.song.intervalId = setInterval(() => {
		      state.song.currentTime += 1;
		      if (state.song.currentTime >= state.song.duration) {
		        console.log("结束");
		        clearInterval(state.song.intervalId);
		        state.song.isPlay = false;
		        return;
		      } else {
		        if (
		          state.song.currentLyricIndex < state.song.lyrics.length - 1 &&
		          state.song.currentTime >= state.song.lyrics[state.song.currentLyricIndex + 1].startTime
		        ) {
		          state.song.currentLyricIndex += 1;
		        }
		      }
		    }, 1000);
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
