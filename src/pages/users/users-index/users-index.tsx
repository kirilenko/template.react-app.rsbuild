import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { withRenderLog } from '@/shared/render-log'

const UsersIndex: FC = () => (
  <>
    <Helmet>
      <title>Users</title>
    </Helmet>
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
      select some user
    </div>
  </>
)

export default withRenderLog(UsersIndex)
