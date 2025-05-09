import { faImage, faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ChatMainFooter() {
  return (
    <div className='flex items-center py-2 px-4 mt-auto border-y-[.85px] border-zinc-200'>
      <div className='w-full mr-2'>
        <input type="text" name="" id="" placeholder='type message here'  className='w-full text-sm p-2 focus:outline-none'/>
      </div>

      <div className='flex gap-4'>
        <FontAwesomeIcon icon={faImage} className='cursor-pointer text-zinc-400 hover:text-zinc-500'/>
        <FontAwesomeIcon icon={faMicrophone} className='cursor-pointer text-zinc-400 hover:text-zinc-500'/>
      </div>
    </div>
  )
}
