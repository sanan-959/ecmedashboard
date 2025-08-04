import React from "react";

const OrderDetailsPage = () => {
    return (
        <div>
            {/* Page Name */}
            <div className="flex  justify-between items-center ">
                <div><span className="font-bold text-xl">Order: #95954</span></div>
                <div className="flex items-center gap-3 ">
                    <button className="border-[1px] border-gray-400 py-2 px-3 rounded-lg bg-white text-gray-700 font-semibold">Print</button>
                    <button className="border-[1px] border-blue-500 py-2 px-3 rounded-lg bg-blue-500 text-white font-semibold">Edit</button>
                </div>
            </div>

            {/* Main Section */}

            <div className="flex flex-col lg:flex-row gap-5 mt-5">
                {/* Left Side */}
                <div className="flex flex-col w-full lg:w-7/12 gap-5">
                    <div className="flex flex-col w-full bg-white p-4 rounded-2xl self-start">
                    <span className="font-semibold text-xl pb-5">Products ordered</span>
                    <div className="flex justify-between items-center py-3 my-3 bg-gray-50 p-4 rounded-xl">
                        <div className="flex gap-3 items-center">
                            <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
                                <img src="https://ecme-react.themenate.net/img/products/product-2.jpg" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">Snövalla</span>
                                <span className="text-gray-400">ID: 098359NT</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">$252.00</span>
                            <span className="text-gray-400 text-end">Qty: 2</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 my-3 bg-gray-50 p-4 rounded-xl">
                        <div className="flex gap-3 items-center">
                            <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
                                <img src="https://ecme-react.themenate.net/img/products/product-2.jpg" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">Snövalla</span>
                                <span className="text-gray-400">ID: 098359NT</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">$252.00</span>
                            <span className="text-gray-400 text-end">Qty: 2</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 my-3 bg-gray-50 p-4 rounded-xl">
                        <div className="flex gap-3 items-center">
                            <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
                                <img src="https://ecme-react.themenate.net/img/products/product-2.jpg" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold">Snövalla</span>
                                <span className="text-gray-400">ID: 098359NT</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold">$252.00</span>
                            <span className="text-gray-400 text-end">Qty: 2</span>
                        </div>
                    </div>

                    </div>

                    {/* left Second */}
                    
                    <div className="flex flex-col w-full bg-white p-4 rounded-2xl self-start">
                        <div className="flex gap-3 items-center">
                            <span className="font-semibold text-xl">Payment</span>
                            <span className=" bg-green-100 py-1 px-3 rounded-lg font-semibold text-sm text-green-600">Paid</span>
                        </div>
                        <div className="flex flex-col mt-7">
                           <div className="flex justify-between items-center py-2">
                            <span className="text-sm text-gray-400 font-semibold">Subtotal</span>
                            <span className="text-sm text-gray-400 ">$1,762.00</span> 
                           </div>

                           <div className="flex justify-between items-center py-2">
                            <span className="text-sm text-gray-400 font-semibold">Shipping</span>
                            <span className="text-sm text-gray-400 ">$15.00</span>
                           </div>

                           <div className="flex justify-between items-center py-2">
                            <span className="text-sm text-gray-400 font-semibold">Tax</span>
                            <span className="text-sm text-gray-400 ">$105.72</span>
                           </div>

                           <div className="flex justify-between items-center py-2">
                            <span className="text-md text-black font-bold">Total</span>
                            <span className="text-md text-black font-bold">$1,870.72</span>
                           </div>
                            
                            <hr className="my-5" />

                           <div className="flex justify-between items-center">
                            <span className="text-md text-gray-400 font-normal">Customer payment</span>
                            <span className="text-xl text-black font-bold">$1,870.72</span>
                           </div>
                           
                        </div>
                    </div>

                    {/* left Third */}

                    <div className="flex flex-col w-full bg-white p-4 rounded-2xl self-start">
                        <div className="flex gap-3 items-center">
                            <span className="font-semibold text-xl">Activity</span>
                            <span className=" bg-green-100 py-1 px-3 rounded-lg font-semibold text-sm text-green-600">Fulfilled</span>
                        </div>
                        <div className="mt-4">
                            <span className="font-bold">Sunday, 06 March</span>
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center gap-3 ">
                                <div>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle text-green-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-green-600">Parcel has been delivered</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-0.5 h-16 bg-gray-300 ml-2"></div>

                                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                                        <span>Recipient: Steve Sutton</span>
                                        <span>01:13 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center gap-3 ">
                                <div>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-black">Parcel is out for delivery</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-0.5 h-10 bg-gray-300 ml-2"></div>

                                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                                        
                                        <span>08:32 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center gap-3 ">
                                <div>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-black">Parcel has arrived at delivery station</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-0.5 h-10 bg-gray-300 ml-2"></div>

                                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                                        
                                        <span>06:15 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div className="mt-7">
                            <span className="font-bold">Saturday, 05 March</span>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center gap-3 ">
                                <div>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-black">Parcel has been picked up by courier</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-0.5 h-10 bg-gray-300 ml-2"></div>

                                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                                        
                                        <span>11:56 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-3">
                            <div className="flex items-center gap-3 ">
                                <div>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle text-blue-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-black">Seller is preparing to ship your parcel</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-0.5 h-10 bg-gray-300 ml-2"></div>

                                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                                        
                                        <span>08:59 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

                

                {/* Right Side  */}
                <div className="flex flex-col w-full lg:w-5/12 gap-5">
                    <div className="flex flex-col w-full bg-white p-4 rounded-2xl self-start ">
                        <span className="font-semibold text-xl">Customer</span>
                        <div className="flex items-center gap-3 mt-3">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                <img src="https://ecme-react.themenate.net/img/avatars/thumb-11.jpg" className="w-full h-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-md font-semibold">Steve Sutton</span>
                                <span className="text-sm text-gray-400">11 previous orders</span>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div>
                            <div className="flex items-center my-3 gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>

                                </span>
                                <span>handsome-obrien@hotmail.com</span>
                            </div>
                            <div className="flex items-center my-3 gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </span>
                                <span>+1 (541) 754-3010</span>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div>
                            <h3 className="text-lg font-bold py-2">Shipping Address</h3>
                            <div className="flex flex-col mt-3">
                                <span className="text-gray-400 text-sm">1527 Pond Reef Rd</span>
                                <span className="text-gray-400 text-sm">Ketchikan</span>
                                <span className="text-gray-400 text-sm">Alaska 99901</span>
                                <span className="text-gray-400 text-sm">United States of America</span>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div>
                            <h3 className="text-lg font-bold py-2">Billing address</h3>
                            <div className="flex flex-col mt-3">
                                <span className="text-gray-400 text-sm">1527 Pond Reef Rd</span>
                                <span className="text-gray-400 text-sm">Ketchikan</span>
                                <span className="text-gray-400 text-sm">Alaska 99901</span>
                                <span className="text-gray-400 text-sm">United States of America</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full bg-white p-4 rounded-2xl self-start ">
                        <span className="font-semibold text-xl">Note</span>
                        <div className="bg-gray-50 text-normal text-gray-500 p-4 text-justify rounded-lg mt-3">
                            <span>
                                If there are any issues or delays with my order, please don't hesitate to contact me, I value clear communication and appreciate your attention to detail.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderDetailsPage;