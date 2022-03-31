import { reactive } from "vue"

export const useState = () => {
  const state = reactive({
    keyWord: "initial value"
  })

  function changeKeyWord(value:string) {
    state.keyWord = value
  }
  return {state, changeKeyWord}
}
