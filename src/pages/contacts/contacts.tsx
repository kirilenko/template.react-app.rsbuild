import { FC } from 'react'
import { loremIpsum } from 'lorem-ipsum'

const Contacts: FC = () => (
  <div className="flex-1 overflow-y-auto bg-stone-800 px-8 py-16">
    <h1 className="mb-4 text-4xl font-bold text-white">Contacts</h1>
    {loremIpsum({ count: 5, units: 'paragraphs' })}
  </div>
)

export { Contacts }
