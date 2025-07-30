import React, { useState } from "react";

const AddressFormPage = () => {
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <div>
            <form className="w-full space-y-5">

  {/* Country */}
  <div className="w-full">
    <label
      htmlFor="country-code"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
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

  {/* Address */}
  <div>
    <label
      htmlFor="address"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Address
    </label>
    <input
      type="text"
      id="address"
      placeholder="Address"
      required
      className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                 dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>

  {/* City & Postal Code */}
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="w-full sm:w-1/2">
      <label
        htmlFor="city"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        City
      </label>
      <input
        type="text"
        id="city"
        placeholder="City"
        required
        className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>

    <div className="w-full sm:w-1/2">
      <label
        htmlFor="postal-code"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Postal Code
      </label>
      <input
        type="text"
        id="postal-code"
        placeholder="Postal Code"
        required
        className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                   focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                   dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  </div>
</form>


        </div>
    )
}

export default AddressFormPage;