import React from 'react'
import { TbSocial } from "react-icons/tb"
import { TextInput } from '../components'

const Login = () => {
  return (
    <div className="w-full bg-bgColor h-[100vh] flex items-center justify-center p-6">
      <div className="flex w-full py-8 overflow-hidden shadow-xl md:w-2/3 h-fit lg:h-full 2xl:h-5/6 lg:py-0 bg-primary rounded-xl ">
        
        {/* LEFT */}
        <div classname="w-full lg:w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <div className="flex items-center w-full gap-2 mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8] font-semibold">
              ShareFun
            </span>
          </div>


          <p className="text-ascent-1 text-base font-semibold">
            Log in to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">Welcome back</span>


          <form action="" className="py-8 flex flex-col gap-5">
            <TextInput 
              name='email'
              placeholder='email@example.com'
              label='email'
              register={register("email", {
                required: "Email Address is required"
              })}
            />
          </form>
        </div>
        
        {/* RIGHT */}
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Login