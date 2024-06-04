import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const {user} = useSelector((state) => state.user)

  return (
    <div className="home w-full">Home</div>
  )
}

export default Home