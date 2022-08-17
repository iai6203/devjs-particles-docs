import React from 'react'

// styling
import cn from 'classnames'
import { motion } from 'framer-motion'
import { RefreshIcon } from '@heroicons/react/solid'

const Index = () => {
  return (
    <div className={cn('fixed bottom-0 right-0 mb-6 mr-6 p-2 rounded shadow')}>
      <motion.i
        className={cn('block')}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 1, repeat: Infinity }}
      >
        <RefreshIcon className={cn('w-5 h-5')} />
      </motion.i>
    </div>
  )
}

export default Index
