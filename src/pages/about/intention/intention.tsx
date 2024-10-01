import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import { loremIpsum } from 'lorem-ipsum'

const Intention: FC = () => (
  <>
    <Helmet>
      <title>Intention</title>
    </Helmet>
    <div className="absolute left-0 top-0 flex min-h-full w-full gap-4 overflow-y-auto bg-stone-800">
      <NavLink className="w-8 flex-none text-4xl" to="/about">
        ←
      </NavLink>
      <div className="flex-1">
        <h1 className="mb-4 text-4xl">Intention</h1>
        {loremIpsum({ count: 25, units: 'paragraphs' })}
      </div>
    </div>
  </>
)

export { Intention }
