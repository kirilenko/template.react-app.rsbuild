import { FC, PropsWithChildren } from 'react'
import { Helmet } from 'react-helmet-async'

type Props = {
  title?: string
}

const Page: FC<PropsWithChildren<Props>> = ({ title = null, children }) => {
  if (title === null) return children

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}

export { Page }
