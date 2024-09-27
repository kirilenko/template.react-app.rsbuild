import { FC } from 'react'

import { Title } from '@/shared/ui/title'

import './app.css'

const App: FC = () => {
  return (
    <div className="app">
      <Title content="Rsbuild w/ React" />
    </div>
  )
}

export { App }
