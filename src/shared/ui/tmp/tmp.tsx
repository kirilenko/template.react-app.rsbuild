import { FC } from 'react'

type Props = {
  handleClick: () => void
  title?: string
}

const Tmp: FC<Props> = ({ handleClick, title = 'Hello world' }) => {
  return (
    <button
      className="m-2 flex flex-none items-center justify-center rounded bg-black p-8 text-red-400"
      onClick={handleClick}
      type="button"
    >
      {title}
    </button>
  )
}

export default Tmp
