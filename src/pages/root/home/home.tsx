import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { loremIpsum } from 'lorem-ipsum'

import { FadeContainer } from '@/shared/animation'
import { withRenderLog } from '@/shared/render-log'
import { WhiteHead } from '@/shared/ui/white-head'

const Home: FC = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <FadeContainer id="home">
      <div className="absolute left-0 top-0 h-full w-full overflow-y-auto bg-stone-800 px-8 py-16">
        <div className="flex gap-8">
          <div className="w-96 flex-none">
            <WhiteHead className="w-full" />
          </div>
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold text-white">Home</h1>
            {loremIpsum({ count: 25, units: 'paragraphs' })}
          </div>
        </div>
      </div>
    </FadeContainer>
  </>
)

export default withRenderLog(Home)
