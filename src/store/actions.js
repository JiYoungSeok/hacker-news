import {
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from '@/api/index.js'

export default {
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName).then(({ data }) => {
      commit('SET_LIST', data)
      return data
    }).catch(error => {
      console.log(error)
    })
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName).then(({ data }) => {
      commit('SET_USER', data)
    }).catch(error => {
      console.log(error)
    })
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchCommentItem(itemId).then(({ data }) => {
      commit('SET_ITEM', data)
    }).catch(error => {
      console.log(error)
    })
  }
}
