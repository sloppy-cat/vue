import { useState } from "./hooks/useState"
import { useSecondState } from "./hooks/useSecondState"
const myStore = {
  ...useState(),
  ...useSecondState()
}
export default myStore
