import { FC } from 'react'

import { env } from '@/app/config'

import './app.css'

const App: FC = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <h1>Rsbuild w/ React</h1>
      </div>
      <span className="hidden">{env.PUBLIC_TIMESTAMP}</span>
    </>
  )
}

export { App }
