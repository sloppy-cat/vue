import { reactive } from "vue"
import { useState } from "./hooks/useState"

const { state, changeKeyWord } = useState()

export const store = {
  state,
  changeKeyWord
}
