import React from 'react';
import ProfilePage from './profile';
import SecurityPage from './security';
const SettingsPage = () => {
    return (
        <div>
            <span className="text-2xl font-bold mb-4">Settings</span>
            <div className='bg-white p-4 rounded-xl flex flex-col lg:flex-row mt-5  '>
                {/* Left Side */}
                <div className='flex flex-col gap-1 w-full lg:w-4/12 p-4 self-start static'>
                    <div className=' hover:bg-gray-100 text-gray-400 hover:text-black p-3 rounded-lg'>
                        <a href="/settings/profile" className='flex items-center gap-4'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-square"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /></svg>
                            </span>
                            <span className='text-sm font-semibold'>Profile</span>
                        </a>
                    </div>
                    <div className=' hover:bg-gray-100 p-3 rounded-lg text-gray-400 hover:text-black'>
                        <a href="http://" className='flex items-center gap-4'>
                            <span>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>
                            </span>
                            <span className='text-sm font-semibold '>Security</span>
                        </a>
                    </div>
                    <div className=' hover:bg-gray-100 p-3 rounded-lg text-gray-400 hover:text-black'>
                        <a href="http://" className='flex items-center gap-4'>
                            <span>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bell"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
                            </span>
                            <span className='text-sm font-semibold '>Notification</span>
                        </a>
                    </div>
                    <div className=' hover:bg-gray-100 p-3 rounded-lg text-gray-400 hover:text-black'>
                        <a href="http://" className='flex items-center gap-4'>
                            <span>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-word"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /><path d="M9 12l1.333 5l1.667 -4l1.667 4l1.333 -5" /></svg>
                            </span>
                            <span className='text-sm font-semibold '>Billing</span>
                        </a>
                    </div>
                     <div className=' hover:bg-gray-100 p-3 rounded-lg text-gray-400 hover:text-black'>
                        <a href="http://" className='flex items-center gap-4'>
                            <span>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-a-b-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3z" /><path d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3z" /><path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" /><path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" /><path d="M8 7h-4" /></svg>
                            </span>
                            <span className='text-sm font-semibold '>Integration</span>
                        </a>
                    </div>
                </div>

                

                {/* Right Side */}
                <div className='flex flex-col gap-4 w-full lg:w-8/12 '>

                <SecurityPage/>
                 
                 
                 
                </div>
            </div>
        </div>
    )
}

export default SettingsPage;