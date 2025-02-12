"use client"

import { useState, useEffect } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { MdOutlineInventory2 } from 'react-icons/md'

import axios from 'axios'
import { BASE_URL } from '../utility/Base_URL'
import { loginEndPoint } from '../utility/Autho_End_Point'

import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {

  const router = useRouter();

  const [User, setUser] = useState({
    Email: '',
    Password: ''
  });

  const OnLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${BASE_URL}${loginEndPoint}`, User)
      console.log(response?.data);

      const UserData = response?.data
      const notify = () => toast("Login Successfull");

      notify()
      
      router.push('/Home/', UserData)
      sessionStorage.setItem('user', JSON.stringify(UserData));
    } catch (error) {
      console.log("There is an error while login ", error);
    }
  }

  const onEmailChange = (e) => {
    setUser({ ...User, Email: e.target.value });
  };

  const onPasswordChange = (e) => {
    setUser({ ...User, Password: e.target.value });
  };

  return (
    <>
      <div className='grid grid-cols-2 w-full h-screen place-items-center'>
        <div className='flex flex-col'>
          <h1 className='text-black text-2xl font-bold'>Welcome Back!</h1>
          <hr className='border-gray-800 rounded-full mt-2' />
          <div className='w-[450px] mt-5'>
            <form className='flex flex-col justify-center items-center'>
              <input
                type='text'
                id='Email'
                value={User?.Email}
                placeholder='Enter your Email'
                onChange={onEmailChange}
                className='w-full border-2 p-2 rounded-md text-black bg-gray-100'
              />
              <input
                type='password'
                id='Password'
                value={User?.Password}
                placeholder='Enter your password'
                onChange={onPasswordChange}
                className='w-full border-2 p-2 rounded-md text-black bg-gray-100 mt-5'
              />
              <button
                onClick={OnLogin}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white 
                text-lg rounded-lg mt-5 p-2">
                Sign in to your account
              </button>
              <ToastContainer />
            </form>

            <h1 className='flex w-full justify-center mt-5 font-bold'>Or</h1>

            <div className='grid grid-cols-2 w-full place-items-center gap-2'>
              <button
                className="flex justify-center gap-3 items-center w-[215px] bg-gray-200 hover:bg-gray-300
                 text-black text-lg rounded-lg mt-5 p-2">
                Sign in with
                <FaGoogle
                  size={25}
                />
              </button>
              <button
                className="flex justify-center gap-3 items-center w-[215px] bg-gray-200 hover:bg-gray-300 
                text-black text-lg rounded-lg mt-5 p-2">
                Sign in with
                <FaGithub
                  size={25}
                />
              </button>
            </div>
          </div>
        </div>

        <div className='bg-blue-500 h-full w-full flex flex-col justify-center items-center text-white'>
          <div className='mb-3'>
            <MdOutlineInventory2 size={60} color="white" />
          </div>
          <h1 className='text-3xl'>Explore the World's Best <span className='font-bold'>Inventrolly</span></h1>
          <p className='w-[510px] h-auto mt-3 text-lg justify-start'>
            Manage your business with one of the best platform in industry, Introducing
            <span className='font-bold ml-1 mr-1'>
              Inventrolly.
            </span>
            One of the top leading industry product, which will make your business
            <span className='font-bold ml-1 mr-1'>
              "trolly"
            </span>
            better.
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage