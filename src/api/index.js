import axios from 'axios'

const config = {
  baseUrl: 'https://api.hnpwa.com/v0'
}

const fetchList = (pageName) => {
  return axios.get(`${config.baseUrl}/${pageName}/1.json`)
}

const fetchUserInfo = (userName) => {
  return axios.get(`${config.baseUrl}/user/${userName}.json`)
}

const fetchCommentItem = (itemId) => {
  return axios.get(`${config.baseUrl}/item/${itemId}.json`)
}

export {
  fetchList,
  fetchUserInfo,
  fetchCommentItem
}
