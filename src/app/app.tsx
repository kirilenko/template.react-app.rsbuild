import { FC } from 'react'

import { Title } from '@/shared/ui/title'

import './app.css'

const App: FC = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Title content="Rsbuild w/ React" />
    </div>
  )
}

export { App }
