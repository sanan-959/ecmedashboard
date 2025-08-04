import React from "react";

const ProfilePage = ()=>{
    return(
        <div className="p-2 lg:p-4 ">
            <span className="font-semibold text-xl">Personal information</span>
            <div className="mt-10">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div>
                        <div className="w-[80px] h-[80px] bg-gray-200 rounded-full overflow-hidden">
                            <img src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg" className="h-full w-full object-cover" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <button className="flex items-center gap-1 text-white bg-blue-500 font-semibold p-2 rounded-xl">
                            <span>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                            </span>
                            <span>Upload Image</span>
                        </button>
                        <button className="border border-gray-300 p-2 rounded-xl font-semibold text-gray-400">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            {/* Form */}
            
                <form action="">
                    <div className="w-full flex flex-col lg:flex-row items-center mt-5 gap-4">
                                <div className="w-full lg:w-6/12">
                                    <label
                                        htmlFor="first-name"
                                        className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="w-full lg:w-6/12">
                                    <label
                                        htmlFor="last-name"
                                        className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Customer Email */}
                            <div className="w-full mt-8">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            {/* Phone Section */}
                            <div className="flex flex-col sm:flex-row gap-4 my-5 pt-2">
                                {/* Country Code */}
                                <div className="w-full sm:w-4/12">
                                    <label
                                        htmlFor="country-code"
                                        className="block mb-2 text-sm font-medium text-gray-400"
                                    >
                                        Country
                                    </label>
                                    <select
                                        id="country-code"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                    >
                                        <option value="+92">🇵🇰 Pakistan (+92)</option>
                                        <option value="+91">🇮🇳 India (+91)</option>
                                        <option value="+1">🇺🇸 USA (+1)</option>
                                        <option value="+44">🇬🇧 UK (+44)</option>
                                        <option value="+971">🇦🇪 UAE (+971)</option>
                                    </select>
                                </div>

                                {/* Phone Number */}
                                <div className="w-full sm:w-8/12">
                                    <label
                                        htmlFor="phone-number"
                                        className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="3001234567"
                                        required
                                    />
                                </div>
                            </div>
                            <div id="address" className="flex flex-col w-full mt-3 ">
                            <h4 className="text-xl font-semibold py-1">Address Information</h4>


                            {/* Country */}
                            <div className="w-full mt-8">
                                <label
                                    htmlFor="country-code"
                                    className="block mb-2 text-sm font-medium text-gray-400"
                                >
                                    Country
                                </label>
                                <select
                                    id="country-code"
                                    className="shadow-xs bg-gray-100 border-0 rounded-xl text-gray-400 text-sm rounded-lgfocus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                >
                                    <option value="+92">🇵🇰 Pakistan</option>
                                    <option value="+91">🇮🇳 India</option>
                                    <option value="+1">🇺🇸 USA</option>
                                    <option value="+44">🇬🇧 UK</option>
                                    <option value="+971">🇦🇪 UAE</option>
                                </select>
                            </div>

                            {/* Customer Address */}
                            <div className="w-full mt-8">
                                <label
                                    htmlFor="address"
                                    className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                >
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                    placeholder="Address"
                                    required
                                />
                            </div>

                            {/*City and Postal Code */}

                            <div className="w-full flex flex-col lg:flex-row items-center my-8 gap-4">
                                <div className="w-full lg:w-6/12">
                                    <label
                                        htmlFor="city"
                                        className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="City"
                                        required
                                    />
                                </div>
                                <div className="w-full lg:w-6/12">
                                    <label
                                        htmlFor="postal-code"
                                        className="block mb-2 text-sm font-medium text-gray-400 "
                                    >
                                        Postal Code
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="Postal Code"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="bg-blue-500 text-white rounded-xl px-4 py-2  font-semibold">Save</button>
                        </div>
                </form>
            
        </div>
    )
}

export default ProfilePage;