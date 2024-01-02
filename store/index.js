import Vue from "vue";
import Vuex from 'vuex'

import moduleSong from "@/store/song.js";
import moduleUser from "@/store/user.js"
import modulePost from "@/store/post.js"
import moduleSinger from "@/store/singer.js"
import moduleSheet from '@/store/sheet.js'

Vue.use(Vuex)

const store =  new Vuex.Store({
    modules: {
        'song': moduleSong,
		'user': moduleUser,
		'post': modulePost,
		'singer': moduleSinger,
		'sheet': moduleSheet,
    }
}) 

export default store;