import { useState } from 'react';

function ToggleDivs() {
    const [activeDiv, setActiveDiv] = useState('second'); // default to 'first'

    return (
        <div className="p-4 space-y-4 max-w-full mx-auto">
            {/* Tabs as Text */}
            <div className="flex space-x-8 border-b border-gray-300">
                <div
                    onClick={() => setActiveDiv('first')}
                    className={`cursor-pointer pb-2 transition-all ${activeDiv === 'first'
                        ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                        : 'text-gray-500 hover:text-blue-500'
                        }`}
                >
                    Billing
                </div>
                <div
                    onClick={() => setActiveDiv('second')}
                    className={`cursor-pointer pb-2 transition-all ${activeDiv === 'second'
                        ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                        : 'text-gray-500 hover:text-blue-500'
                        }`}
                >
                    Activity
                </div>
            </div>

            {/* Conditional Divs */}
            {activeDiv === 'first' && (
                <div className="p-1">
                    <div>
                        <span className='text-lg font-bold'>Purchase history</span>
                        <div className='overflow-x-auto max-w-full mt-3'>
                            <table className='min-w-full w-full table-auto'>
                                <tbody>
                                    <tr className='border-b-[1px] border-gray-300 hover:bg-gray-100 rounded'>
                                        <td className='py-4 px-6 text-gray-500'>Acme pro plan (monthly)</td>
                                        <td className='py-4 px-6 font-semibold'>
                                            <div className='flex items-center gap-1 justify-center'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='size-3'>
                                                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z"></path>
                                                    </svg>
                                                </span>
                                                <span>Pending</span>
                                            </div>
                                        </td>
                                        <td className='py-4 px-6 text-gray-500'>02/10/2025</td>
                                        <td className='py-4 px-6 text-gray-500'>$59.90</td>
                                    </tr>
                                    <tr className='border-b-[1px] border-gray-300 hover:bg-gray-100 rounded'>
                                        <td className='py-4 px-6 text-gray-500'>Acme pro plan (monthly)</td>
                                        <td className='py-4 px-6 font-semibold'>
                                            <div className='flex items-center gap-1 justify-center'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='size-3'>
                                                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z"></path>
                                                    </svg>
                                                </span>
                                                <span>Pending</span>
                                            </div>
                                        </td>
                                        <td className='py-4 px-6 text-gray-500'>02/10/2025</td>
                                        <td className='py-4 px-6 text-gray-500'>$59.90</td>
                                    </tr>
                                    <tr className='border-b-[1px] border-gray-300 hover:bg-gray-100 rounded'>
                                        <td className='py-4 px-6 text-gray-500'>Acme pro plan (monthly)</td>
                                        <td className='py-4 px-6 font-semibold'>
                                            <div className='flex items-center gap-1 justify-center'>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='size-3'>
                                                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z"></path>
                                                    </svg>
                                                </span>
                                                <span>Pending</span>
                                            </div>
                                        </td>
                                        <td className='py-4 px-6 text-gray-500'>02/10/2025</td>
                                        <td className='py-4 px-6 text-gray-500'>$59.90</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-10'>
                            <div><span className='text-lg font-semibold'>Addresses</span></div>

                            <div className='mt-5 flex flex-col md:flex-row gap-4'>
                                <div className='p-4 gap-2 w-full flex flex-col md:w-6/12 border-[1px] border-gray-300 rounded-2xl'>
                                    <span className='font-semibold pb-3'>Billing Address</span>
                                    <span className='text-gray-500 font-medium text-sm'>123 Main St</span>
                                    <span className='text-gray-500 font-medium text-sm'>New York</span>
                                    <span className='text-gray-500 font-medium text-sm'>10001</span>
                                    <span className='text-gray-500 font-medium text-sm'>United States</span>
                                </div>
                                <div className='p-4 gap-2 w-full flex flex-col md:w-6/12 border-[1px] border-gray-300 rounded-2xl'>
                                    <span className='font-semibold pb-3'>Billing Address</span>
                                    <span className='text-gray-500 font-medium text-sm'>123 Main St</span>
                                    <span className='text-gray-500 font-medium text-sm'>New York</span>
                                    <span className='text-gray-500 font-medium text-sm'>10001</span>
                                    <span className='text-gray-500 font-medium text-sm'>United States</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div>
                                <span className='text-lg font-semibold'>Payment Methods</span>
                            </div>
                            <div className='mt-4 w-full border-[1px] border-gray-300 p-6 flex flex-col gap-5 rounded-2xl'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 '>
                                        <span>
                                            <img src="https://ecme-react.themenate.net/img/others/img-8.png" alt="" />
                                        </span>
                                        <div className='flex flex-col'>
                                            <span>Angelina Gotelli •••• 0392</span>
                                            <span className='text-gray-500'>Expired Dec 2025</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='border-[1px] border-gray-300 px-3 py-2 rounded-xl'>Edit</button>
                                    </div>
                                </div>
                                <hr className="w-full border-t border-gray-400" />
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 '>
                                        <span>
                                            <img src="https://ecme-react.themenate.net/img/others/img-9.png" alt="" />
                                        </span>
                                        <div className='flex flex-col'>
                                            <span>Angelina Gotelli •••• 0392</span>
                                            <span className='text-gray-500'>Expired Dec 2025</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='border-[1px] border-gray-300 px-3 py-2 rounded-xl'>Edit</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            {activeDiv === 'second' && (
                <div className="p-4">
                    <div>
                        <div className="flex items-center w-full py-4">
                            <span className="whitespace-nowrap text-gray-700 mr-2">06 MAY</span>
                            <div className="flex-grow w-full border-t border-3 border-dashed border-gray-400"></div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <span className='text-gray-500'>4:08 PM</span>
                            </div>
                            <div className='flex items-center gap-5 border-[1px] border-gray-300 rounded-2xl p-4'>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Support Ticket Update</span>
                                    <span className='text-gray-500'>Customer service team is working on support ticket #123456</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center w-full py-4">
                            <span className="whitespace-nowrap text-gray-700 mr-2">06 MAY</span>
                            <div className="flex-grow w-full border-t border-3 border-dashed border-gray-400"></div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <span className='text-gray-500'>4:08 PM</span>
                            </div>
                            <div className='flex items-center gap-5 border-[1px] border-gray-300 rounded-2xl p-4'>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Support Ticket Update</span>
                                    <span className='text-gray-500'>Customer service team is working on support ticket #123456</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="flex items-center w-full py-4">
                            <span className="whitespace-nowrap text-gray-700 mr-2">06 MAY</span>
                            <div className="flex-grow w-full border-t border-3 border-dashed border-gray-400"></div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <span className='text-gray-500'>4:08 PM</span>
                            </div>
                            <div className='flex items-center gap-5 border-[1px] border-gray-300 rounded-2xl p-4'>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Support Ticket Update</span>
                                    <span className='text-gray-500'>Customer service team is working on support ticket #123456</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center w-full py-4">
                            <span className="whitespace-nowrap text-gray-700 mr-2">06 MAY</span>
                            <div className="flex-grow w-full border-t border-3 border-dashed border-gray-400"></div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <span className='text-gray-500'>4:08 PM</span>
                            </div>
                            <div className='flex items-center gap-5 border-[1px] border-gray-300 rounded-2xl p-4'>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Support Ticket Update</span>
                                    <span className='text-gray-500'>Customer service team is working on support ticket #123456</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center w-full py-4">
                            <span className="whitespace-nowrap text-gray-700 mr-2">06 MAY</span>
                            <div className="flex-grow w-full border-t border-3 border-dashed border-gray-400"></div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div>
                                <span className='text-gray-500'>4:08 PM</span>
                            </div>
                            <div className='flex items-center gap-5 border-[1px] border-gray-300 rounded-2xl p-4'>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>

                                    </span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Support Ticket Update</span>
                                    <span className='text-gray-500'>Customer service team is working on support ticket #123456</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center mt-6'>
                            <button className='border-[1px] border-gray-300 py-3 px-5 rounded-xl font-semibold'>Load More</button>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default ToggleDivs;
