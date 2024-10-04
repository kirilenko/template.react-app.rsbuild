import { FC } from 'react'
import { Outlet } from 'react-router'

import { withRenderLog } from '@/shared/render-log'

const About: FC = () => (
  <div className="absolute left-0 top-0 flex h-full w-full flex-col gap-2 overflow-y-auto bg-stone-800 px-8 py-16">
    <h1 className="mb-4 text-4xl font-bold text-white">About</h1>
    <p className="mb-4">This is the about page.</p>
    <div className="relative flex-1">
      <Outlet />
    </div>
  </div>
)

export default withRenderLog(About)
