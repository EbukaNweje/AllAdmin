import {NavLink, useNavigate} from 'react-router-dom'
import logo from "../assets/logo2.png";
import {GoMail} from "react-icons/go";
import {LuKey} from "react-icons/lu";

const Login = () => {
  const nav = useNavigate()

  const handleLogin = () =>{
    nav("/admin/dashboard")
  }
  return (
      <>
          <div className="w-full h-screen bg-[#ebf8fc] flex justify-center">
              <div className="w-[29%] phone:w-[85%] h-[76%]">
                  <div className="w-full h-24 py-4 flex justify-center items-end ">
                      <img src={logo} alt="" />
                  </div>
                  <div className="w-full h-max bg-white shadow rounded py-12 px-12 flex flex-col gap-5">
                      <div className="w-full h-max text-2xl font-semibold text-center mb-2 text-[pry-text]">
                          <p>Manager Login</p>
                      </div>
                      <div className="w-full h-max flex flex-col gap-2">
                          <p className='text-[rgb(14,65,82)] flex gap-1 items-center font-bold text-sm'>
                              Your Email
                              <span className="text-red-700 flex items-center">
                                  *
                              </span>
                          </p>
                          <div className='w-full h-10 border border-solid border-[rgb(210,228,236)] rounded-md flex items-center px-4 gap-4 text-[0.80rem]'>
                              <GoMail />
                              <input
                                  className='border-none outline-none w-[90%] h-full'
                                  type="email"
                                  placeholder="name@example.com"
                              />
                          </div>
                      </div>
                      <div className="w-full h-max flex flex-col gap-2">
                          <p className='text-[rgb(14,65,82)] flex gap-1 items-center font-bold text-sm'>
                              Password
                              <span className="text-red-700 flex items-center">
                                  *
                              </span>
                          </p>
                          <div className='w-full h-10 border border-solid border-[rgb(210,228,236)] rounded-md flex items-center px-4 gap-4 text-[0.80rem]'>
                              <LuKey />
                              <input
                                  className='border-none outline-none w-[90%] h-full'
                                  type="password"
                                  placeholder="Enter password"
                              />
                          </div>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        <NavLink to="/admin/forget-password">

                          <p className='w-full flex justify-end text-sm font-bold cursor-pointer text-[#0e4152]'>Forget password ?</p>
                        </NavLink>
                          <button className='w-full flex items-center justify-center py-3 rounded text-white bg-[#0e4152]' onClick={handleLogin}>Sign in</button>
                      </div>
                      <div className="w-full text-center">
                          <p className='text-sm'>© Copyright 2023 Whitebit All Rights Reserved.</p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Login