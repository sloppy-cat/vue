import { reactive } from "vue"
import { getUser } from "../api/user"

export const useState = () => {
  const state = reactive({
    keyWord: "initial value",
    isLoading: false
  })

  async function changeKeyWord(value: string) {
    state.isLoading = true
    try {
      const res = await getUser(value)
      state.keyWord = res.user.id as string
    } catch (error) {
      state.isLoading = false
      return error
    }
    state.isLoading = false
  }

  function isInitial() {
    return state.keyWord === "initial value"
  }

  return {state, changeKeyWord, isInitial}
}
