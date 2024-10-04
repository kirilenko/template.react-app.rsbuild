import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

import { paths } from '@/app/config/paths'
import { FadeContainer } from '@/shared/animation'
import { withRenderLog } from '@/shared/render-log'
import { useRoutingContext } from '@/shared/routing'

const Login: FC = () => {
  const { setAuthed } = useRoutingContext()

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <FadeContainer id="login">
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-2 overflow-y-auto bg-stone-800 px-8 py-16">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setAuthed(true)}
            type="button"
          >
            Login
          </button>
          <NavLink
            to={paths.root.restore.index}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            type="button"
          >
            Go to restore page
          </NavLink>
        </div>
      </FadeContainer>
    </>
  )
}
export default withRenderLog(Login)
