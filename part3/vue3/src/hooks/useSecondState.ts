import { reactive } from "vue"
import myStore from "../myStore"

export const useSecondState = () => {
  function isMainInitial() {
    return myStore.isInitial()
  }

  return {isMainInitial}
}
