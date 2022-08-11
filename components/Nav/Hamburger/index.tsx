import React from 'react'

// context
import { useNavDispatch } from '../../../context/NavProvider'

// styling
import cn from 'classnames'
import { MenuIcon } from '@heroicons/react/solid'

const Index = () => {
  const dispatch = useNavDispatch()

  const handleClick = React.useCallback(() => {
    dispatch({ type: 'OPEN_SIDE_NAV' })
  }, [])

  return (
    <button onClick={handleClick}>
      <MenuIcon className={cn('w-6 h-6')} />
    </button>
  )
}

export default React.memo(Index)
