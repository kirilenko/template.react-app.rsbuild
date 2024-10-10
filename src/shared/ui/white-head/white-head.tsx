import { FC } from 'react'

import whiteHead from '@/assets/white-head.jpeg'

type Props = {
  className?: string
}

const WhiteHead: FC<Props> = ({ className }) => (
  <img alt="White Head" src={whiteHead} {...{ className }} />
)

export { WhiteHead }
