import React from "react";

const ProductEditPage = () => {
    return (
        <div>
            <div>
                {/* Page Name */}
                <span className="text-xl font-semibold">Edit product</span>
                {/* Main Section */}
                <div>
                    {/* First Row */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* Basic Information */}
                        <div className="flex flex-col w-full lg:w-5/12 p-4 mt-5 bg-white rounded-2xl">
                            <h4 className="text-xl font-semibold py-1">Basic Information</h4>
                            <form className=" pt-5 px-1 w-full space-y-6">

                                {/* Product Name */}

                                <div className="w-full">
                                    <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="Product Name"
                                        required
                                    />
                                </div>
                                {/* Product Code */}
                                <div className="w-full">
                                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                        Product Code
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                        placeholder="Product Code"
                                        required
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                        Description
                                    </label>
                                    <textarea
                                        type="text"
                                        cols={8}
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                        placeholder="Description"
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                        {/* Product Image */}
                        <div className="flex flex-col w-full lg:w-7/12 p-4 mt-5 bg-white rounded-2xl">
                            <h4 className="text-xl font-semibold py-1">Product Image</h4>
                            <span className="text-sm text-gray-400 py-2">Choose a product photo or simply drag and drop up to 5 photos here.</span>

                            <div className="bg-white  rounded-lg flex items-start justify-center mx-auto p-4 w-full">

                                <div className="flex items-center flex-wrap gap-5">
                                    <div className="w-[150px] h-[150px] bg-white p-2 rounded-lg border-[1px] border-gray-300">
                                        <div className="bg-white rounded-lg  overflow-hidden">
                                            <img src="https://ecme-react.themenate.net/img/products/product-1.jpg" className="w-full h-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-[150px] h-[150px] bg-white p-2 rounded-lg border-[1px] border-gray-300">
                                        <div className="bg-white rounded-lg  overflow-hidden">
                                            <img src="https://ecme-react.themenate.net/img/products/product-1.jpg" className="w-full h-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-[150px] h-[150px] bg-white p-2 rounded-lg border-[1px] border-gray-300">
                                        <div className="bg-white rounded-lg  overflow-hidden">
                                            <img src="https://ecme-react.themenate.net/img/products/product-1.jpg" className="w-full h-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-[150px] h-[150px] bg-white p-2 rounded-lg border-[1px] border-gray-300">
                                        <div className="bg-white rounded-lg  overflow-hidden">
                                            <img src="https://ecme-react.themenate.net/img/products/product-1.jpg" className="w-full h-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div className="w-[150px] h-[150px] bg-white p-2 rounded-lg border-[1px] border-gray-300">
                                        <div className="bg-white rounded-lg  overflow-hidden">

                                            <img
                                                src="https://ecme-react.themenate.net/img/others/upload.png"
                                                alt="upload"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* Pricing */}
                        <div className="flex flex-col w-full lg:w-5/12 p-4 mt-5 bg-white rounded-2xl">
                            <h4 className="text-xl font-semibold py-1">Pricing</h4>
                            <form className=" pt-5 px-1 w-full space-y-6">

                                {/* Product Price*/}

                                <div className="w-full">
                                    <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                                        placeholder="$ 0.00"
                                        required
                                    />
                                </div>
                                {/* Product Code */}
                                <div className="w-full">
                                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                        Cost Price
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                        placeholder="$ 0.00"
                                        required
                                    />
                                </div>

                                {/* Discount and Tax Price */}
                                <div className="flex items-center gap-4">
                                    <div className="w-1/2 ">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                            Bulk discount price
                                        </label>
                                        <input
                                            type="text"
                                            className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                            placeholder="$ 0.00"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                            Tax rate(%)
                                        </label>
                                        <input
                                            type="text"
                                            className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* {Attribute} */}
                        <div className="flex flex-col w-full lg:w-7/12 p-4 mt-5 bg-white rounded-2xl">
                            <h4 className="text-xl font-semibold py-1">Attribute</h4>
                            <form className=" pt-5 px-1 w-full space-y-6">

                                {/* Product Category */}
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-medium text-gray-400">
                                        Category
                                    </label>
                                    <select className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5">
                                        <option>Bags</option>
                                        <option>Cloths</option>
                                        <option>Devices</option>
                                        <option>Shoes</option>
                                        <option>Watches</option>
                                    </select>
                                </div>


                                {/* Product Tags */}
                                <div className="w-full">
                                    <label className="block mb-2 text-sm font-medium text-gray-400">
                                        Tags

                                    </label>
                                    <select className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5">
                                        <option>trend</option>
                                        <option>unisex</option>
                                    </select>
                                </div>

                                {/* Product Brand */}

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                                        Brand
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
                                        placeholder="Product Brand"
                                        required
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEditPage;