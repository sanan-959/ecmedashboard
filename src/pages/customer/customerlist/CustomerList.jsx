import React from "react";

const CustomerListPage = () => {

    const users = [
        {
            id: 1,
            name: "Ayesha",
            email: "ayesha@gmail.com",
            location: "New York, US",
            status: "Active",
            spent: "$3667.15",
            avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg",
        },
        {
            id: 2,
            name: "Ayesha",
            email: "ayesha@gmail.com",
            location: "New York, US",
            status: "Active",
            spent: "$3667.15",
            avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg",
        },
        {
            id: 3,
            name: "Ayesha",
            email: "ayesha@gmail.com",
            location: "New York, US",
            status: "Active",
            spent: "$3667.15",
            avatar: "https://ecme-react.themenate.net/img/avatars/thumb-1.jpg",
        },

    ];


    return (
        <div className="container mx-auto">
            <div className="bg-white p-4 border-1 border-gray-200 rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-bold">Customers</h3>
                        <div className="flex flex-col md:flex-row gap-3">
                            <a href="#">
                                <button className=" bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700   dark:hover:border-white  dark:hover:text-white dark:hover:bg-transparent text-gray-600 dark:text-gray-100 h-12 rounded-xl px-5 py-2 w-full">
                                    <span className="flex gap-1 items-center justify-center">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                                        </svg>
                                        </span>
                                        <span>Download</span>
                                    </span>
                                </button>
                            </a>
                            <button className="bg-blue-600 hover:bg-blue-400 h-12 rounded-xl px-5 py-2">
                                <span className="flex gap-1 items-center justify-center">
                                    <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                    </span>
                                    <span className="text-white">Add new</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <span className="flex items-center w-full bg-slate-100 relative py-1 px-3 rounded-xl">
                            <input className="w-full border-0 bg-transparent  h-12 focus:ring-blue-500 focus-within:ring-blue-500 focus-within:border-blue-500 focus:border-blue-500" style={{ paddingRight: "2.125em" }} placeholder="Quick search..." type="text" />
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
                                            Name
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            Email
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            Location
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            Status
                                            <div className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
                                                    <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
                                                </svg>

                                            </div>
                                        </div>
                                    </th>
                                    <th className="px-4 py-2">
                                        <div className="flex items-center">
                                            Spent
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
                                                <span className="w-[40px] h-[40px] rounded-full overflow-hidden">
                                                    <img src={user.avatar} className="w-full h-full object-cover" alt={user.name} />
                                                </span>
                                                <h3 className="ml-2 font-semibold text-gray-900 dark:text-gray-100">{user.name}</h3>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2">{user.location}</td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center">
                                                <div className="px-3 py-0 rounded-lg font-semibold bg-emerald-200 text-gray-900">
                                                    <span>{user.status}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            <span>{user.spent}</span>
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
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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

export default CustomerListPage;