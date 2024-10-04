import { ComponentType } from 'react'

import { RenderLogProvider } from './render-log.provider'
import {
  OwnRenderLogProviderProps,
  WithRenderLogProvider,
} from './render-log.types'

// eslint-disable-next-line func-names
export const withRenderLogProvider: WithRenderLogProvider = function <
  Props extends Record<string, unknown>,
>(
  this: OwnRenderLogProviderProps,
  Component: ComponentType<Props>,
): ComponentType<Props> {
  const renderLogProviderProps: OwnRenderLogProviderProps = this // eslint-disable-line @typescript-eslint/no-this-alias

  return (props: Props) => (
    <RenderLogProvider {...renderLogProviderProps}>
      <Component {...props} />
    </RenderLogProvider>
  )
}
