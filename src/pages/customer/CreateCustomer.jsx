
import ImageUploadPage from "./ImageUpload";
import CustomerFormPage from "./CustomerForm";
import AddressFormPage from "./AddressForm";

const CreateCustomerPage = () => {

    return (
        <div className="">
            <div>
                <h1 className="text-2xl font-semibold">Create Customer</h1>
            </div>
            {/* Main Section */}
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Left Column*/}
                <div className="w-full lg:w-3/5 p-4 mt-8 bg-white rounded-2xl">
                    <h4 className="text-xl font-semibold py-3">Overview</h4>
                    <CustomerFormPage />
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-2/5 flex flex-col gap-6">
                    <div className="p-4 mt-8 bg-white rounded-2xl">
                        <h4 className="font-semibold text-lg py-2">Image</h4>
                        <ImageUploadPage />
                    </div>

                    <div className="p-4 mt-0 bg-white rounded-2xl">
                        <h4 className="font-semibold text-lg py-2">Customer Tags</h4>
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Select Tag
                            </label>
                            <select
                                className="shadow-xs bg-gray-100 border-0 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:text-white 
                         dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">Frequent Shoppers</option>
                                <option value="">Inactive</option>
                                <option value="">New</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-3/5 p-4 mt-8 bg-white rounded-2xl">
                <h4 className="text-xl font-semibold py-3">Address</h4>
                <AddressFormPage />
            </div>
        </div>
    )
}


export default CreateCustomerPage;