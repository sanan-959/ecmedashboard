import React, { useState } from "react";

const CustomerFormPage = () => {
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <div>
            <form className="w-full space-y-5">

                {/* First & Last Name */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="w-full sm:w-1/2">
                        <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="sanan"
                            required
                        />
                    </div>

                    <div className="w-full sm:w-1/2">
                        <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last-name"
                            className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="nawaz"
                            required
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="pt-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                 dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="sanan@example.com"
                        required
                    />
                </div>

                {/* Phone Section */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    {/* Country Code */}
                    <div className="w-full sm:w-4/12">
                        <label htmlFor="country-code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Country
                        </label>
                        <select
                            id="country-code"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone-number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="3001234567"
                            required
                        />
                    </div>
                </div>
            </form>


        </div>
    )
}

export default CustomerFormPage;