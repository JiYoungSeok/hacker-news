import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchAskList, fetchJobsList } from '@/api/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  getters: {
    fetchedNews(state) {
      return state.news
    },
    fetchedAsk(state) {
      return state.ask
    },
    fetchedJobs(state) {
      return state.jobs
    }
  },
  // State 에 기록
  mutations: {
    SET_NEWS(state, news) {
      state.news = news
    },
    SET_ASK(state, ask) {
      state.ask = ask
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    }
  },
  // API 호출
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewsList().then(({ data }) => {
        commit('SET_NEWS', data)
      }).catch(error => {
        console.log(error)
      })
    },
    FETCH_ASK({ commit }) {
      fetchAskList().then(({ data }) => {
        commit('SET_ASK', data)
      }).catch(error => {
        console.log(error)
      })
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList().then(({ data }) => {
        commit('SET_JOBS', data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
})
