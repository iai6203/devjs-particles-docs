import React from 'react'

// hooks
import { useNavState, useNavDispatch } from '../../../context/NavProvider'

// components
import NavList from './NavList'

// styling
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { XIcon } from '@heroicons/react/solid'

// variants
const backgroundVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}
const sideNavVariants = {
  hidden: {
    x: 200,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const Index = () => {
  const dispatch = useNavDispatch()
  const { isSideNavOpened } = useNavState()

  const handleClose = React.useCallback(() => {
    dispatch({ type: 'CLOSE_SIDE_NAV' })
  }, [])

  return (
    <AnimatePresence>
      {isSideNavOpened && (
        <motion.div
          className={cn('fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-50')}
          variants={backgroundVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <button
            className={cn(
              'absolute top-0 right-0 mt-6 mr-6 p-2 rounded shadow z-50 transition-colors duration-200',
              'hover:text-white hover:bg-red-500'
            )}
            onClick={handleClose}
          >
            <XIcon className={cn('w-5 h-5')} />
          </button>

          <motion.nav
            className={cn(
              'absolute top-0 right-0 bottom-0 w-4/5 max-w-[400px] h-full bg-white shadow'
            )}
            variants={sideNavVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className={cn('px-6 py-20')}>
              <NavList />
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default React.memo(Index)
