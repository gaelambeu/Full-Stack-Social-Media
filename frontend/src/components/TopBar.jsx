import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TbSocial } from "react-icons/tb"
import TextInput from './TextInput'
import CustomButton from './CustomButton'


const TopBar = () => {
    const {theme} = useSelector((state) => state.theme)
    const {user} = useSelector((state) => state.user)
    const dispatch = useDispatch();

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
        <Link to='/' className="flex gap-2 items-center">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">
              ShareFun
            </span>
        </Link>

        <form 
            className="hidden md:flex items-center justify-center"
            onSubmit={handleSubmit(handleSearch)}
        >
            <TextInput 
                placeholder='Search...'
                styles='w-[18rem] lg:w-[38rem] rounded-1-full py-3'
                register={register("search")}
            />

            <CustomButton 
                title='Search'
                type='submit'
                containerStyles='bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full'
            />
        </form>
    </div>
  )
}

export default TopBar