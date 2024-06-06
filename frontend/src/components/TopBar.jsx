import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TbSocial } from "react-icons/tb"
import TextInput from './TextInput'
import CustomButton from './CustomButton'
import { useForm } from 'react-hook-form'
import { BsMoon, BsSunFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import {SetTheme} from "../redux/theme"

const TopBar = () => {
    const {theme} = useSelector((state) => state.theme)
    const {user} = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm();

    const handleTheme = () => {
        const themeValue = theme === "light" ? "dark" : "light";

        dispatch(SetTheme(themeValue))
    }

    const handleSearch = async (data) => {};


  return (
    <div className="flex items-center justify-between w-full px-4 py-3 topbar md:py-6 bg-primary">
        <Link to='/' className="flex items-center gap-2">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">
              ShareFun
            </span>
        </Link>

        <form 
            className="items-center justify-center hidden md:flex"
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

        {/******** ICONS *********/}
        <div className="flex items-center gap-4 text-ascent-1 text-md md:text-xl">
            <button onClick={()=> handleTheme()}> {theme ? <BsMoon /> : <BsSunFill />} </button>
            <div className="hidden lg:flex">
                <IoMdNotificationsOutline />
            </div>
        </div>
    </div>
  )
}

export default TopBar