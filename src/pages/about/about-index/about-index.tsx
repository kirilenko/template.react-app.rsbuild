import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

import { paths } from '@/app/config/paths'
import { FadeContainer } from '@/shared/animation'

const AboutIndex: FC = () => (
  <>
    <Helmet>
      <title>About</title>
    </Helmet>
    <FadeContainer id="about-index">
      <div className="absolute left-0 top-0 flex min-h-full w-full gap-2">
        <NavLink
          className="flex h-80 w-80 items-center justify-center rounded-lg border border-stone-700 bg-stone-700 text-xl font-bold text-white hover:border-stone-500 hover:bg-stone-500"
          to={paths.root.about.achievements.index}
        >
          Achievements
        </NavLink>
        <NavLink
          className="flex h-80 w-80 items-center justify-center rounded-lg border border-stone-700 bg-stone-700 text-xl font-bold text-white hover:border-stone-500 hover:bg-stone-500"
          to={paths.root.about.intention.index}
        >
          Intention
        </NavLink>
      </div>
    </FadeContainer>
  </>
)

export { AboutIndex }
