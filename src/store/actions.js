import {
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from '@/api/index.js'

export default {
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName).then(response => {
      commit('SET_LIST', response.data)
      return response
    }).catch(error => {
      console.log(error)
    })
  },
  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName).then(response => {
      commit('SET_USER', response.data)
      return response
    }).catch(error => {
      console.log(error)
    })
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchCommentItem(itemId).then(response => {
      commit('SET_ITEM', response.data)
      return response
    }).catch(error => {
      console.log(error)
    })
  }
}
