import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { FadeContainer } from '@/shared/animation'

const NoMatch: FC = () => (
  <>
    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
    <FadeContainer id="no-match">
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-y-auto bg-stone-800 px-8 py-16">
        No match found
      </div>
    </FadeContainer>
  </>
)

export { NoMatch }
