import { FC, PropsWithChildren, useMemo } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { RoutingContext, RoutingContextValue } from './routing.context'

type Props = {
  defaultPageTitle: string
}

const RoutingProvider: FC<PropsWithChildren<Props>> = ({
  children,
  defaultPageTitle,
}) => {
  const value = useMemo<RoutingContextValue>(
    () => ({ defaultPageTitle }),
    [defaultPageTitle],
  )

  return (
    <HelmetProvider>
      <RoutingContext.Provider {...{ value }}>
        {children}
      </RoutingContext.Provider>
    </HelmetProvider>
  )
}

export { RoutingProvider }
