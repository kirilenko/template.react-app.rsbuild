import { FC } from 'react'

type Props = {
  content: string
}

const Title: FC<Props> = ({ content }) => <h1>{content}</h1>

export { Title }
