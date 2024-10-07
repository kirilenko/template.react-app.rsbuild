import { FC } from 'react'
import { Outlet } from 'react-router'

import { withRenderLog } from '@/shared/render-log'

const Circles: FC = () => {
  return <Outlet />
}

export default withRenderLog(Circles)
