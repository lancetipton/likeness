import type { TElFun } from '@lkns/simple'
import { ActionsContainer } from './Actions.sx'

export const Actions:TElFun = (props={}, ...kids) => {
  return ActionsContainer({ class: [`lk-actions-container`] }, ...kids)
}