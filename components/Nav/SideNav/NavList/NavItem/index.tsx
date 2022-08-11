import React from 'react'

// context
import { useNavDispatch } from "../../../../../context/NavProvider"

// hooks
import { useRouter } from 'next/router'

// styling
import cn from 'classnames'
import { ChevronRightIcon } from '@heroicons/react/solid'

// ts
interface Props {
  href: string
  text: string
}

const Index = ({ href, text }: Props) => {
  const dispatch = useNavDispatch()
  const router = useRouter()

  const handleClick = React.useCallback(() => {
    dispatch({ type: 'CLOSE_SIDE_NAV' })
    router.push(href)
  }, [href])

  return (
    <li className={cn('group flex gap-4 items-center', 'hover:cursor-pointer')} onClick={handleClick}>
      <div
        className={cn(
          'p-2 text-black/50 rounded shadow transition-colors duration-200',
          'group-hover:text-white group-hover:bg-sky-400'
        )}
      >
        <ChevronRightIcon className={cn('w-5 h-5')} />
      </div>
      <span
        className={cn(
          'text-black/50 text-base font-bold transition-colors duration-200',
          'group-hover:text-black'
        )}
      >
        {text}
      </span>
    </li>
  )
}

export default React.memo(Index)
