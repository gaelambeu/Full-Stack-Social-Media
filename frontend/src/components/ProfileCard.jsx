import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NoProfile } from '../assets';
import { Link } from 'react-router-dom';
import { UpdateProfile } from '../redux/userSlice';
import { LiaEditSolid } from "react-icons/lia"
import { BsPersonFillAdd } from 'react-icons/bs';
import { CiLoacationOn } from 'react-icons/ci';


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
                        <span className="text-ascent-2">
                            {user?.profession ?? "No Profession"}
                        </span>
                    </div>
                </Link>

                <div className="">
                    {user?._id === data?._id ? (
                        <LiaEditSolid 
                            size={22}
                            className="text-blue cursor-pointer"
                            onClick={() => dispatch(UpdateProfile(true))}
                        />
                        
                    ) : (
                        <button
                            className="bg-[#0444a430] text-sm text-white p-1 rounded"
                            onCliick={() => {}}
                        >
                            <BsPersonFillAdd size={20} className="text-[#0f52b6]" />
                        </button>
                    )}
                </div>
            </div>

            <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
                <div className="flex gap-2 items-center text-center-2">
                    <CiLoacationOn className="text-xl text-ascent-1" />
                    <span>{user?.location ?? "Add Location"}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard