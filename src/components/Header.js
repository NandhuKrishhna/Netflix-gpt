import React from 'react'
import { NETFLIX_LOGO_URL } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute px-8 py-2 '>
      <img className='w-[148px]' src={NETFLIX_LOGO_URL} alt="logo" />
    </div>
  )
}

export default Header
