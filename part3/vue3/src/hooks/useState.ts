import { reactive } from "vue"

export const useState = () => {
  const state = reactive({
    keyWord: "initial value"
  })

  function changeKeyWord(value:string) {
    state.keyWord = value
  }

  function isInitial() {
    return state.keyWord === "initial value"
  }

  return {state, changeKeyWord, isInitial}
}
