import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { loremIpsum } from 'lorem-ipsum'

const Home: FC = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="flex-1 overflow-y-auto bg-stone-800 px-8 py-16">
      <h1 className="mb-4 text-4xl font-bold text-white">Home</h1>
      {loremIpsum({ count: 25, units: 'paragraphs' })}
    </div>
  </>
)

export { Home }
