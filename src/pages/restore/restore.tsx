import { FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { FadeContainer } from '@/shared/animation'
import { useRoutingContext } from '@/shared/routing'

const Restore: FC = () => {
  const { setAuthed } = useRoutingContext()

  return (
    <>
      <Helmet>
        <title>Restore</title>
      </Helmet>
      <FadeContainer id="restore">
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-y-auto bg-stone-800 px-8 py-16">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setAuthed(true)}
            type="button"
          >
            Restore
          </button>
        </div>
      </FadeContainer>
    </>
  )
}
export { Restore }
