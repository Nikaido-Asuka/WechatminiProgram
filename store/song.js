import request from '@/utils/request.js'
export default {
    namespaced: true,

    state: () => ({
        songList:[{
			id: 1,
			songName: '流沙（Reimagined）',
			album: '流沙（Reimagined）',
			singer:{
				id: 1,
				name: '陶喆',
				img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg'
			},
			color: '#d2962e',
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
			id: 2,
			songName: "One Summery's Day",
			album: 'ENCORE（安可曲）',
			singerName: '久石让',
			color: '#75221b',
			currentTime: 0,
			duration: 269,
			intervalId: null, // setInterval返回的定时器ID
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: "https://pic.imgdb.cn/item/656d6f4ec458853aeff08291.jpg",
			audio: 'https://3wt.music.eduingame.cn/2023/09-21/54364ff93c304cbcb6832577511ae9f03wcn474791.mp3',
			lyrics:[{ text: '纯音乐 暂无歌词', startTime: 0}]
		},{
			id: 3,
			songName: "I'm OK（Reimagined）",
			album: "I'm OK（Reimagined）",
			singer:{
				id: 1,
				name: '陶喆',
				img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg'
			},
			color: '#b14a08',
			currentTime: 0,
			duration: 245,
			intervalId: null,
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
			audio: 'https://3wt.music.eduingame.cn/2023/11-30/f9a508b84b5e40bda617d7381da3cde13wcn474791.mp3',
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
				{ text: '没有解套 追溯不到 现在有多少的爱也救不了', startTime: 218},
				{ text: '现在你给我的爱 我都不要', startTime: 227},
			]
		},{
			id: 5,
			songName: '大海',
			album: '大海',
			singerName: '张雨生',
			color: '#d2962e',
			currentTime: 0,
			duration: 280,
			intervalId: null,
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: 'https://pic.imgdb.cn/item/656557aac458853aef80f49c.jpg',
			audio: '',
			lyrics:[
				{ text: '大海 -- 张雨生', startTime: 2 }
			]
		},{
			id: 4,
			songName: '爱是个什么东西',
			album: '太平盛世',
			singer:{
				id: 1,
				name: '陶喆',
				img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg'
			},
			color: '#8f380a',
			currentTime: 0,
			duration: 284,
			intervalId: null,
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: 'https://pic.imgdb.cn/item/65083df1204c2e34d3a4e84e.jpg',
			audio: '',
			lyrics:[
				{ text: '爱是个什么东西 -- 陶喆', startTime: 2 }
			]
		},{
			id: 6,
			songName: '爱要怎么说出口',
			album: '约定',
			singerName: '赵传',
			color: '#d2962e',
			currentTime: 0,
			duration: 279,
			intervalId: null,
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: 'https://pic.imgdb.cn/item/65684686c458853aefd603c0.jpg',
			audio: '',
			lyrics:[
				{ text: '爱要怎么说出口 -- 赵传', startTime: 2 }
			]
		},{
			id: 18,
			songName: '蝴蝶',
			album: '黑色柳丁',
			singer:{
				id: 1,
				name: '陶喆',
				img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg'
			},
			color: '#00d6ca',
			currentTime: 0,
			duration: 283,
			intervalId: null,
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg',
			audio: 'https://3wt.music.eduingame.cn/2023/12-04/4f9a437fc3f141f9a2331ece6b45568f3wcn474791.ogg',
			lyrics:[
				{ text: '蝴蝶 -- 陶喆', startTime: 0 },
				{ text: '当这世界已经准备将我遗弃', startTime: 1},
				{ text: '像一个伤兵 被留在孤独荒野里', startTime: 6},
				{ text: '开始怀疑我存在有没有意义', startTime: 12},
				{ text: '在别人眼里我似乎变成了隐形', startTime: 19},
				{ text: '难道失败就永远翻不了身', startTime: 25},
				{ text: '谁来挽救坠落的灵魂', startTime: 32},
				{ text: '每次一想到你 心里好平静', startTime: 38},
				{ text: '就像一只蝴蝶飞过废墟', startTime: 44},
				{ text: '我又能活下去 我又找回勇气', startTime: 50},
				{ text: '你的爱像氧气帮忙我呼吸 我又能呼吸', startTime: 57},
				{ text: '我又能呼吸', startTime: 70},
				{ text: '你就是不愿意放弃', startTime: 74},
				{ text: '生命中充满乱七八糟的问题', startTime: 78},
				{ text: '像走在没有出口的那个迷宫里', startTime: 84},
				{ text: '一次又一次只会用接口逃避', startTime: 90},
				{ text: '怎么你从来没对我彻底的死心', startTime: 98},
				{ text: '我有何德何能值得你珍惜', startTime: 105},
				{ text: '为何你对我有求必应', startTime: 111},
				{ text: '每次一想到你 像雨过天晴', startTime: 116},
				{ text: '看见一只蝴蝶飞过废墟', startTime: 122},
				{ text: '是那么的美丽', startTime: 129},
				{ text: '就像一个奇迹', startTime: 132},
				{ text: '让我从倒下的地方站起', startTime: 135},
				{ text: '只要一看见你就觉得安心', startTime: 142},
				{ text: '你看着我的眼没有怀疑', startTime: 149},
				{ text: '你对我的相信 让我又能重生', startTime: 155},
				{ text: '不管世界多冷我还有你 我有你', startTime: 162},
				{ text: '爱我这样的人对你来说不容易', startTime: 171},
				{ text: '我的痛苦你也经历', startTime: 177},
				{ text: '你是唯一 陪我到天堂与地狱', startTime: 181},
				{ text: '每次一想到你 像雨过天晴', startTime: 191},
				{ text: '看见一只蝴蝶飞过了废墟', startTime: 198},
				{ text: '我能撑得下去 我会忘了过去', startTime: 204},
				{ text: '是你让我找回新的生命', startTime: 210},
				{ text: 'Yeah 每次一见到你 就心存感激', startTime: 217},
				{ text: '现在我能坦然面对自己', startTime: 224},
				{ text: '我会永远珍惜', startTime: 230},
				{ text: '我会永远爱你', startTime: 233},
				{ text: '在我心底的你位置没有人能代替', startTime: 236},
				{ text: '你就是那唯一', startTime: 249},
			]
		}],
		song: {
			id: 2,
			songName: "I'm OK（Reimagined）",
			album: {
				id: 3,
				name: "I'm OK（Reimagined）",
				img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
				color: '#b14a08',
			},
			singer:{
				id: 1,
				name: '陶喆',
				img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg'
			},
			currentTime: 0,
			duration: 245,
			intervalId: null,
			isPlay: false,
			currentLyricIndex: 0,
			songContext : uni.createInnerAudioContext(),
			audio: 'https://3wt.music.eduingame.cn/2023/11-30/f9a508b84b5e40bda617d7381da3cde13wcn474791.mp3',
			tbLyrics:[
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
				{ text: '没有解套 追溯不到 现在有多少的爱也救不了', startTime: 218},
				{ text: '现在你给我的爱 我都不要', startTime: 227},
			]
		},
    }),


    mutations: {
		// 根据id获得歌曲
		getSong(state, id){
			if(id === state.song.id){
				return ;
			}
			state.song.songContext.stop();
			clearInterval(state.song.intervalId);
			state.song.isPlay = false;
			request({
				url: '/qqmusic/song/' + id,
				method: 'GET'
			}).then((response) => {
				const { data } = response;
				console.log(data);
				state.song = data.song;
				state.song = { ...state.song, singer: data.singer, album: data.album, currentLyricIndex: 0, songContext : uni.createInnerAudioContext(), intervalId: null, isPlay: false, currentTime: 0,}
				console.log(state.song);
			}).catch(err => console.log(err));
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
			state.song.currentTime = 0;
		},
		
		
		// 修改歌词索引和时间
		updateLyricIndex(state, index) {
		    state.song.currentLyricIndex = index;
			state.song.currentTime = state.song.tbLyrics[state.song.currentLyricIndex].startTime;
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
		          state.song.currentLyricIndex < state.song.tbLyrics.length - 1 &&
		          state.song.currentTime >= state.song.tbLyrics[state.song.currentLyricIndex + 1].startTime
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
