import React from 'react'

const FriendsCard = ({ friends }) => {
  return (
    <div>
        <div className="w-full px-6 py-5 rounded-lg shadow-sm bg-primary">
            <div className="flex items-center justify-between pb-2 border-b text-ascent-1 border-[#66666645]">
                <span>Friends</span>
                <span>{friends?.length}</span>
            </div>

            <div className="flex flex-col w-full gap-4 pt-4">
            friends?.map((friend) => (
                    <Link 
                        to={"/profile/"+ friend?_id}
                        key={friend?._id}
                        className="flex items-center w-full gap-4 cursor-pointer"
                    >
                        <img  
                            src={friend?.profileUrl ?? NoProfile} 
                            alt={friend?.firstName} 
                            className="object-cover w-10 h-10 rounded-full"
                        />
                    </Link>
                ))
            </div>
        </div>
    </div>
  )
}

export default FriendsCard