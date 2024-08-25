import React from 'react'
import { FaUser } from 'react-icons/fa'

const ProfilePage = () => {
    return (
        <>
            <div className='flex w-full h-screen justify-center items-start overflow-y-hidden'>
                <div className='flex w-full h-80 justify-center items-start bg-blue-500'>
                    <div className='flex flex-col w-[600px] min-h-[400px] h-auto justify-center items-center shadow-lg rounded-xl bg-gray-100 text-black overflow-y-hidden mt-20'>
                        <div className='flex flex-col w-full h-full gap-5'>
                            <div className='flex w-full h-22 justify-center items-center mb-10'>
                                <div className='flex w-20 h-20 justify-center items-center bg-gray-200 rounded-full shadow-lg'>
                                    <FaUser 
                                        size={35}
                                        color='gray'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row w-full h-full justify-center items-center gap-5'>
                                <label className='mb-2 text-2xl font-bold'>User Name: </label>
                                <span className='mb-2 text-2xl'>Mahimna</span>
                            </div>
                            <div className='flex flex-row w-full h-full justify-center items-center gap-5'>
                                <label className='mb-2 text-2xl font-bold'>Email: </label>
                                <span className='mb-2 text-2xl'>mahimna@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage