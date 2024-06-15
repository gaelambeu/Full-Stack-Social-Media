import React from 'react'
import { useSelector } from 'react-redux'
import { FriendsCard , ProfileCard, TopBar } from '../components'

const Home = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <div className="w-full h-screen px-0 pb-20 overflow-hidden home lg:px-10 2xl:px-40 bg-bgColor lg:rounded-lg">
      <TopBar />
      
      <div className="flex w-full h-full gap-2 pt-5 pb-10 lg:gap-4">
        {/* LEFT */}
        <div className="flex-col hidden w-1/3 h-full gap-6 overflow-y-auto lg:w-1/4 md:flex">
          <ProfileCard user={user} />
          <FriendsCard friends={user?.friends} />
        </div>
        
        {/* CENTER */}
        <div className="flex flex-col flex-1 h-full gap-6 px-4 overflow-y-auto bg-primary">
          
        </div>
        
        {/* RIGHT */}
        <div className="flex-col hidden w-1/4 h-full gap-8 overflow-y-auto lg:flex">
           {/* FRIEND REQUEST */}
           <div className="w-full"></div>
           
           
          {/* SUGGESTED FRIENDS */}
          <div></div>
        </div>

      </div>
    </div>
  )
}

export default Home