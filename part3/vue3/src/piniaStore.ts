import { defineStore } from 'pinia'
import { getUser } from './api/user'

const useStore = defineStore('store', {
  state: () => {
    return {
      keyWord: "initial value",
      isLoading: false
    }
  },
  actions: {
    async changeKeyWord(value: string) {
      this.isLoading = true
      try {
        const res = await getUser(value)
        this.keyWord = res.user.id as string
      } catch (error) {
        this.isLoading = false
        return error
      }
      this.isLoading = false
    }
  }
})

export default useStore
