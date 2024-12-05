import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browrse = () => {
  useNowPlayingMovies()
  return (
    <div>
    <Header isLoggedIn={true} />
    </div>
  )
}

export default Browrse
