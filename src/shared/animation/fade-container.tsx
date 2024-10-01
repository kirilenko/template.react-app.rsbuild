import { FC, PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  duration?: number
  id: string
}

const FadeContainer: FC<PropsWithChildren<Props>> = ({
  children,
  duration = 0.3,
  id,
}) => (
  <AnimatePresence>
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration, ease: 'circOut' },
      }}
      className="absolute left-0 top-0 h-full w-full"
      exit={{
        opacity: 0,
        transition: { duration, ease: 'circIn' },
      }}
      initial={{ opacity: 0 }}
      key={id}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

export { FadeContainer }
