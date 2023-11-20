import Vue from "vue";
import Vuex from 'vuex'

import moduleSong from "@/store/song.js";
import moduleUser from "@/store/user.js"

Vue.use(Vuex)

const store =  new Vuex.Store({
    modules: {
        'song': moduleSong,
		'user': moduleUser,
		
    }
}) 

export default store;