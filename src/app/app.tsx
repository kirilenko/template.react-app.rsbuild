import { FC } from 'react'

import { env } from '@/app/config'
import { Title } from '@/shared/ui/title'

import './app.css'

const App: FC = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <Title content="Rsbuild w/ React" />
      </div>
      <span className="hidden">{env.PUBLIC_TIMESTAMP}</span>
    </>
  )
}

export { App }
