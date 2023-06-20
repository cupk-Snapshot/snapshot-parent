import config from '@/config'
import storage from '@/utils/storage'
import constant from '@/utils/constant'
import { login, logout, getInfo,loginOn } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const baseUrl = config.baseUrl

const user = {
  state: {
    token: getToken(),
    name: storage.get(constant.name),
    avatar: storage.get(constant.avatar),
    // roles: storage.get(constant.roles),
    // permissions: storage.get(constant.permissions)
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
      storage.set(constant.name, name)
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
      storage.set(constant.avatar, avatar)
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login(username, password).then(res => {
		  uni.setStorageSync('SET_TOKEN',res.data.access_token)
		  uni.setStorageSync('user',res.data.user)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

 LoginOn({ commit }, userInfo) {
      const phone_num = userInfo.mobile
      const sms_code = userInfo.code
      return new Promise((resolve, reject) => {
        loginOn(phone_num, sms_code).then(res => {
		  uni.setStorageSync('SET_TOKEN',res.data.access_token)
		  uni.setStorageSync('user',res.data.user)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          const user = res.user
          const avatar = (user == null || user.avatar == "" || user.avatar == null) ? require("@/static/images/profile.jpg") : baseUrl + user.avatar
          const username = (user == null || user.userName == "" || user.userName == null) ? "" : user.userName
          commit('SET_NAME', username)
          commit('SET_AVATAR', avatar)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
		  uni.removeStorageSync('user_id')
          storage.clean()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
