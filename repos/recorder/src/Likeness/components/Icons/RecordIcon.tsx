import type { TElFun } from '@lkns/simple'

import {
  Svg,
  Path,
  Title,
} from '@lkns/simple'

export const RecordIcon:TElFun = (props={}) => {
  return Svg({...props, viewBox: `0 0 24 24`},
    Title({}, `record-icon`),
    Path({
      d: `M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z`
    })
  )
}
