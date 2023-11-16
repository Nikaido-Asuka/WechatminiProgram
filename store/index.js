import Vue from "vue";
import Vuex from 'vuex'

import moduleSong from "./song.js";

Vue.use(Vuex)

const store =  new Vuex.Store({
    modules: {
        'song': moduleSong
    }
}) 

export default store;