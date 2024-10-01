import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

const NoMatch: FC = () => (
  <>
    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
    <div className="flex flex-1 items-center justify-center overflow-y-auto bg-stone-800 px-8 py-16">
      No match found
    </div>
  </>
)

export { NoMatch }
