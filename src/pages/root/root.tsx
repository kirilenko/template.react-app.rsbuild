import { FC } from 'react'
import { Outlet } from 'react-router'
import { loremIpsum } from 'lorem-ipsum'

import { Menu } from '@/modules/menu'
import { Tmp } from '@/shared/ui/tmp'

const Root: FC = () => (
  <div className="flex h-full w-full items-stretch justify-stretch">
    <div className="flex w-64 flex-none flex-col items-stretch justify-start overflow-y-auto bg-stone-600 px-8 py-16">
      <Tmp
        handleClick={() => {
          console.log('%c• Tmp: click', 'color: orange') // eslint-disable-line no-console
        }}
      />
      <h1 className="mt-4 text-xl">Rsbuild w/ React</h1>
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
