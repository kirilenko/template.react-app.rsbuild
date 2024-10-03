import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { FadeContainer } from '@/shared/animation'
import { useRoutingContext } from '@/shared/routing'

const Logout: FC = () => {
  const { setAuthed } = useRoutingContext()

  return (
    <>
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <FadeContainer id="logout">
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-y-auto bg-stone-800 px-8 py-16">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setAuthed(false)}
            type="button"
          >
            Logout
          </button>
        </div>
      </FadeContainer>
    </>
  )
}
export { Logout }
