import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NoProfile } from '../assets';
import { Link } from 'react-router-dom';

const ProfileCard = ({user}) => {
    const { user: data, edit } = useSelector((state) => state.user)
    const dispatch = useDispatch();

  return (
    <div>
        <div className="flex flex-col items-center w-full px-6 py-4 rounded shadow-sm bg-primary-xl">
            <div className="flex items-center justify-between w-full pb-5 border-[#66666645] border-b">
                <Link to={"/profile/" + user?._id} className="flex gap-2">
                    <img 
                        src={user?.profileUrl ?? NoProfile} 
                        alt={user?.email}
                        className="rounded-full w-14 h-14 objet-cover" 
                    />

                    <div className="flex flex-col justify-center">
                        <p className="text-lg font-medium text-ascent-1">
                            {user?.firstName} {user?.lastName}
                        </p>
                        <span className="text-ascent-2">{user?.profession}</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard