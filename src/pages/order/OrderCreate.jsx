import React from "react";

const OrderCreatePage = () => {
    return (
        <div>
            {/* Page Name */}
            <div>
                <span className="text-2xl font-bold">Create order</span>
            </div>

            {/* Main Section */}
            <div className="flex flex-col lg:flex-row gap-7">
                {/* Left Side */}
                <div className="w-full flex self-start sticky z-5  flex-col lg:w-5/12 bg-white rounded-2xl p-7 gap-5 mt-5">
                    <a href="#select">
                        <div className="flex items-center p-3 gap-3 hover:bg-gray-100 rounded-xl">
                            <div>
                                <div className="rounded-full bg-gray-100 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold">Select products</span>
                                <span className="text-sm text-gray-400">
                                    Add product to purchase list.
                                </span>
                            </div>
                        </div>
                    </a>
                    <a href="#customer">
                        <div className="flex items-center p-3 gap-3 hover:bg-gray-100 rounded-xl">
                            <div>
                                <div className="rounded-full bg-gray-100 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold">Customer details</span>
                                <span className="text-sm text-gray-400">
                                    Enter customer information like name, email & phone number.
                                </span>
                            </div>
                        </div>
                    </a>
                    <a href="#address">
                        <div className="flex items-center p-3 gap-3 hover:bg-gray-100 rounded-xl">
                            <div>
                                <div className="rounded-full bg-gray-100 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold">Address Information</span>
                                <span className="text-sm text-gray-400">
                                    Provide shipping address details.
                                </span>
                            </div>
                        </div>
                    </a>
                    <a href="#payment">
                        <div className="flex items-center p-3 gap-3 hover:bg-gray-100 rounded-xl">
                            <div>
                                <div className="rounded-full bg-gray-100 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold">Payment</span>
                                <span className="text-sm text-gray-400">
                                    Enter payment method and details to complete the transaction.
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                {/* Right Side */}

                <div className="w-full flex flex-col lg:w-7/12 ">
                    <form action="">
                        {/* Select Product */}
                        <div className="flex flex-col w-full p-4 mt-5 bg-white rounded-2xl">
                            <h4 className="text-xl font-semibold py-1 pb-6">
                                Select products
                            </h4>
                            {/* Product Select */}
                            <div id="select" className="w-full flex items-center gap-3 ">
                                <span className="flex items-center w-full lg:w-7/12 bg-gray-100 relative py-1 px-3 rounded-xl focus:border-blue-500 ">
                                    <input
                                        className="w-full border-0 bg-transparent text-gray-400  h-10 "
                                        placeholder="Search product"
                                        type="text"
                                    />
                                    <div className="text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                            />
                                        </svg>
                                    </div>
                                </span>
                                <button className=" bg-blue-500 w-full lg:w-5/12 border-0 text-sm font-bold text-white h-12 rounded-xl px-5 py-2">
                                    Browse products
                                </button>
                            </div>
                            {/* order */}
                            <div className="overflow-x-auto w-full my-4">
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className=" border-b border-gray-400">
                                            <td className="px-4 py-2 text-sm font-bold text-gray-400">
                                                Product
                                            </td>
                                            <td className="px-4 py-2 text-sm font-bold text-gray-400">
                                                PRICE
                                            </td>
                                            <td className="px-4 py-2 text-sm font-bold text-gray-400">
                                                Quantity
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center">
                                                    <span className="w-[40px] h-[40px] rounded-xl overflow-hidden">
                                                        <img
                                                            src="https://ecme-react.themenate.net/img/products/product-3.jpg"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </span>
                                                    <div className="ml-2">
                                                        <h3 className=" font-semibold text-gray-900">
                                                            Sanan
                                                        </h3>
                                                        <span className="text-gray-500 text-sm">
                                                            ID: 9798785K
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="font-bold">$99.00</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-cente    py-2">
                                                    <button className="text-xl text-gray-600  border-[1px] border-gray-400 rounded-lg px-2 ">
                                                        –
                                                    </button>

                                                    <span className="text-lg font-medium px-5  text-center text-gray-400">
                                                        1
                                                    </span>

                                                    <button className="text-xl text-center text-gray-600  border-[1px] border-gray-400 rounded-lg  px-2">
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Total */}
                            <div className="flex items-center justify-end mt-6">
                                <div>
                                    <span className="font-bold text-xl">
                                        {" "}
                                        <span className="font-bold text-lg text-gray-400">
                                            Total:{" "}
                                        </span>
                                        $99.00
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Customer details */}
                        <div id="customer" className="flex flex-col w-full p-4 mt-3 bg-white rounded-2xl">
                            <h4 className="text-xl font-semibold py-1">Customer details</h4>
                            {/*Customer Name */}

                            <div className="w-full flex items-center mt-5 gap-4">
                                <div className="w-6/12">
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
                                <div className="w-6/12">
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
                        </div>

                        {/* Address Information */}

                        <div id="address" className="flex flex-col w-full p-4 mt-3 bg-white rounded-2xl">
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

                            <div className="w-full flex items-center my-8 gap-4">
                                <div className="w-6/12">
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
                                <div className="w-6/12">
                                    <label
                                        htmlFor="postal-code"
                                        className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
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


                        {/* Payment Information */}

                        <div id="payment" className="flex flex-col w-full p-4 mt-3 bg-white rounded-2xl">
                            <h4 className="text-xl font-semibold py-1">Payment</h4>


                            {/* Payment method */}
                            <div className="w-full mt-6">
                                <label
                                    htmlFor="Payment-method"
                                    className="block mb-2 text-sm font-medium text-gray-400"
                                >
                                    Payment method
                                </label>
                                <select
                                    id="Payment-method"
                                    className="shadow-xs bg-gray-100 border-0 rounded-xl text-gray-400 text-sm rounded-lgfocus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                >
                                    <option value="">Credit/Debit card</option>
                                    <option value="">PayPal</option>
                                    <option value="+1">Bank Transfer</option>
                                </select>
                            </div>

                            {/* User Name */}
                            <div className="w-full mt-8">
                                <label
                                    htmlFor="address"
                                    className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                    placeholder="Card holder name"
                                    required
                                />
                            </div>

                            {/* Credit card number */}
                            <div className="w-full mt-8">
                                <label
                                    htmlFor="address"
                                    className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                >
                                    Credit card number
                                </label>
                                <input
                                    type="text"
                                    className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                    placeholder=".... .... .... ...."
                                    required
                                />
                            </div>

                            {/*Expire Date and CVV Code */}

                            <div className="w-full flex items-center my-8 gap-4">
                                <div className="w-6/12">
                                    <label
                                        
                                        className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                    >
                                        Expiration date
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="../.."
                                        required
                                    />
                                </div>
                                <div className="w-6/12">
                                    <label
                                    
                                        className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                                    >
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="..."
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    );
};

export default OrderCreatePage;
