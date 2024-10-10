import { FC } from 'react'

import viteLogo from '@/assets/vite.svg'

type Props = {
  className?: string
}

const ViteLogo: FC<Props> = ({ className }) => (
  <img alt="Vite logo" src={viteLogo} {...{ className }} />
)

export { ViteLogo }
