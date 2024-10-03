import { FC, PropsWithChildren, useMemo, useState } from 'react'

import { RoutingContext, RoutingContextValue } from './routing.context'

type Props = {
  authPaths: RoutingContextValue['authPaths']
}

const RoutingProvider: FC<PropsWithChildren<Props>> = ({
  authPaths,
  children,
}) => {
  const [authed, setAuthed] = useState<RoutingContextValue['authed']>(false)

  const value: RoutingContextValue = useMemo(
    () => ({ authPaths, authed, setAuthed }),
    [authPaths, authed, setAuthed],
  )

  return (
    <RoutingContext.Provider {...{ value }}>{children}</RoutingContext.Provider>
  )
}

export { RoutingProvider }
