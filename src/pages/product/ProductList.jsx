import React from "react";

const ProductListPage = () => {

    const users = [
        {
            id: 1,
            name: "Flörven",
            email: "ayesha@gmail.com",
            price: "$525.00",
            quantity: 93,
            sales: 80,
            avatar: "https://ecme-react.themenate.net/img/products/product-1.jpg",
        },
        {
            id: 2,
            name: "Snövalla",
            email: "ayesha@gmail.com",
            price: "$525.00",
            quantity: 56,
            sales: 40,
            avatar: "https://ecme-react.themenate.net/img/products/product-2.jpg",
        },
        {
            id: 3,
            name: "Kallaxa",
            email: "ayesha@gmail.com",
            price: "$525.00",
            quantity: 46,
            sales: 60,
            avatar: "https://ecme-react.themenate.net/img/products/product-3.jpg",
        },

    ];
    return (
        <div className="container mx-auto">
            <div className="bg-white p-4 border-1 border-gray-200 rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-bold">Products</h3>
                        <div className="flex flex-col md:flex-row gap-3">
                            <a href="#">
                                <button className=" bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700   dark:hover:border-white  dark:hover:text-white dark:hover:bg-transparent text-gray-600 dark:text-gray-100 h-12 rounded-xl px-5 py-2 w-full">
                                    <span className="flex gap-1 items-center justify-center">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                        </svg>
                                        </span>
                                        <span>Export</span>
                                    </span>
                                </button>
                            </a>
                            <button className="bg-blue-600 hover:bg-blue-400 h-12 rounded-xl px-5 py-2">
                                <span className="flex gap-1 items-center justify-center">
                                    <span className="text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>

                                    </span>
                                    <span className="text-white">Add products</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <span className="flex items-center w-full bg-gray-100 relative py-1 px-3 rounded-xl focus:border-blue-500 ">
                            <input className="w-full border-0 bg-transparent  h-12 " placeholder="Quick search..." type="text" />
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </div>
                        </span>
                        <button className=" bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700   dark:hover:border-white  dark:hover:text-white dark:hover:bg-transparent text-gray-600 dark:text-gray-100 h-12 rounded-xl px-4 py-2">
                            <span className="flex gap-1 items-center justify-center">
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                                </svg>

                                </span>
                                <span>Filter</span>
                            </span>
                        </button>
                    </div>

                    <div className="overflow-x-auto w-full my-4">
                        <table className="min-w-[750px] w-full table-auto border-separate border-spacing-y-2">
                            <thead>
                                <tr>
                                    <td className="px-4 py-2">
                                        <div>
                                            <label className="mb-0">
                                                <span className="">
                                                    <input type="checkbox" className="w-[22px] h-[22px] border-2 border-gray-200 rounded text-2xl  text-blue-600" />
                                                </span>
                                            </label>
                                        </div>
                                    </td>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            PRODUCT
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            EMAIL
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            PRICE
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            QUANTITY
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            SALES
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="bg-white border-b border-gray-200 rounded-lg shadow-sm">
                                        <td className="px-4 py-2">
                                            <input type="checkbox" className="w-[22px] h-[22px] border-2 border-gray-200 rounded text-blue-600" />
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center">
                                                <span className="w-[60px] h-[60px] rounded-xl overflow-hidden">
                                                    <img src={user.avatar} className="w-full h-full object-cover" alt={user.name} />
                                                </span>
                                                <div className="ml-2">
                                                    <h3 className=" font-semibold text-gray-900">{user.name}</h3>
                                                    <span className="text-gray-500 text-sm">ID {user.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2">{user.price}</td>
                                        <td className="px-4 py-2"><span>{user.quantity}</span></td>
                                        <td className="px-4 py-2">

                                            <div>
                                                <div className="flex gap-2">
                                                    <span><span>{user.sales}</span></span>
                                                    <span>Sales</span>
                                                </div>
                                                <div className="w-full bg-gray-300 rounded-full h-2">
                                                    <div
                                                        className="bg-green-700 h-2 rounded-full transition-all duration-300"
                                                        style={{ width: `${user.sales}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-4">
                                                <span>
                                                    <div class="text-xl cursor-pointer select-none font-semibold" role="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                        </svg>

                                                    </div>
                                                </span>
                                                <span>
                                                    <div class="text-xl cursor-pointer select-none font-semibold" role="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>


                                                    </div>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                    <div className="flex flex-row items-center justify-between ">
                        <div className="flex justify-center items-center gap-2 p-4">
                            <button className="px-3 py-1  rounded hover:bg-gray-200 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>

                            </button>

                            <button className="px-3 py-1 hover:bg-gray-200 rounded  text-sm">1</button>
                            <button className="px-3 py-1 hover:bg-gray-200 rounded  text-sm">2</button>


                            <button className="px-3 py-1 rounded hover:bg-gray-200 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                            </button>
                        </div>

                        <div className="w-1-12">
                            <select className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                                      focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                                       dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                                       dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option value="">10 / page</option>
                                <option value="">15 / page</option>
                                <option value="">20 / page</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductListPage;