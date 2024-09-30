import { FC } from 'react'
import { NavLink } from 'react-router-dom'

const AboutIndex: FC = () => (
  <div className="flex gap-2">
    <NavLink
      className="flex h-80 w-80 items-center justify-center rounded-lg border border-stone-700 bg-stone-700 text-xl font-bold text-white hover:border-stone-500 hover:bg-stone-500"
      to="/about/achievements"
    >
      Achievements
    </NavLink>
    <NavLink
      className="flex h-80 w-80 items-center justify-center rounded-lg border border-stone-700 bg-stone-700 text-xl font-bold text-white hover:border-stone-500 hover:bg-stone-500"
      to="/about/intention"
    >
      Intention
    </NavLink>
  </div>
)

export { AboutIndex }
