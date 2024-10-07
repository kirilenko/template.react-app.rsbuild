import { FC } from 'react'
import { Outlet } from 'react-router'
import { loremIpsum } from 'lorem-ipsum'

import { Menu } from '@/modules/menu'

const Root: FC = () => (
  <div className="flex h-full w-full items-stretch justify-stretch">
    <div className="flex w-64 flex-none flex-col items-stretch justify-start overflow-y-auto bg-stone-600 px-8 py-16">
      <h1 className="text-xl">Rsbuild w/ React</h1>
      <hr className="my-8 border-gray-300" />
      <Menu />
      <hr className="my-8 border-gray-300" />
      {loremIpsum({ count: 10 })}
    </div>
    <div className="relative flex-1">
      <Outlet />
    </div>
  </div>
)

export default Root
