# render-log

This package logs the rendering of components in console by debug and highlights the extra renderings.

## Usage

**app.tsx** (variant 1 - with provider as a wrapper):

```typescript jsx
// app.tsx
import { FC } from 'react'
import { RenderLogProvider } from 'react-render-log'

import { Home } from './home'

const App: FC = () => (
  <RenderLogProvider
    debugEnabled={import.meta.env.MODE !== 'production'}
    isStrictMode={import.meta.env.MODE === 'development'}
  >
    <Home />
  </RenderLogProvider>
)

export default App
```

or
**app.tsx** (variant 2 - with provider as a HOC `withRenderLogProvider`):

```typescript jsx
// app.tsx
import { FC } from 'react'
import {
  OwnRenderLogProviderProps,
  withRenderLogProvider,
} from 'react-render-log'

import { Home } from './home'

const App: FC = () => <Home />

export default withRenderLogProvider.apply(
  {
    debugEnabled: import.meta.env.MODE !== 'production',
    isStrictMode: import.meta.env.MODE === 'development',
  } satisfies OwnRenderLogProviderProps,
  [App],
)
```

or **app.tsx** (variant 3 - with combine providers via `combine-function`):

```typescript jsx
// app.tsx
import { FC } from 'react'

import { Home } from './home'
import { withProviders } from './providers'

const App: FC = () => <Home />

export default withProviders(App)
```

where `withProviders` is a function that wraps the component in all the providers you need.  
You need to install for this case `compose-function` package.

```typescript jsx
// providers.ts
import { withRenderLogProvider } from 'react-render-log'
import compose from 'compose-function'

export const withProviders = compose(
  withRenderLogProvider.bind({
    debugEnabled: import.meta.env.MODE !== 'production',
    isStrictMode: import.meta.env.MODE === 'development',
  }),
)
```

**home.tsx** (as example of using `withRenderLog` HOC):

```typescript jsx
// home.tsx
import { FC } from 'react'
import { withRenderLog } from 'react-render-log'

import { Smt } from './smt'

const Home: FC = () => (
  <div>
    <Smt renderLogId="1" title="first" />
    <Smt renderLogId="2" title="second" />
  </div>
)

export default withRenderLog(Home) // or withRenderLog(Home, 'SomeCustomName')
```

By render list of the same components (like above), you should use `renderLogId` prop (like a `key`).
In this case, the props of this component should be wrapped in `PropsWithRenderLog` type.

**smt.tsx** (as example of using `withRenderLog` HOC and `PropsWithRenderLog`):

```typescript jsx
// smt.tsx
import { FC } from 'react'
import { PropsWithRenderLog, withRenderLog } from 'react-render-log'

type Props = {
  title: string
}

const Smt: FC<PropsWithRenderLog<Props>> = ({ title }) => <div>{title}</div>

export default withRenderLog(Smt)
```

If you want to use render-log without wrapping components in HOC, you can use `useRenderLog` hook:

```typescript jsx
// smt.tsx
import { FC } from 'react'
import { useRenderLog } from 'react-render-log'

type Props = {
  title: string
}

const Smt: FC<Props> = ({ title }) => {
  useRenderLog()('Smt')

  return (
    <div>{title}</div>
  )
}

export default Smt
```

## Options for `RenderLogProvider`

- ### debugEnabled

  Type: `boolean`

  Enable debug mode.

- ### isStrictMode

  Type: `boolean`

  Enable strict mode.

- ### colors (optional)

  Type:

  ```typescript
  {
    firstRender: string
    extraRender: string
  }
  ```

  Customize colors. By default, they are:

  ```
  {
    firstRender: 'lightgreen',
    extraRender: 'orange',
  }
  ```

- ### timeToLive (optional)

Type: `number`

Time to live for the extra renderings. By default, it is `500` ms.
