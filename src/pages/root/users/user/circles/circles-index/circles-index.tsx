import { FC } from 'react'

import { withRenderLog } from '@/shared/render-log'

const CirclesIndex: FC = () => {
  return (
    <div className="left-0 top-0 flex h-full w-full items-center justify-center">
      <h1>CirclesIndex</h1>
    </div>
  )
}

export default withRenderLog(CirclesIndex)
