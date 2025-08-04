import React from "react";

const SecurityPage = () => {
    return (
        <div className="p-2 lg:p-4 ">
            <form action="">
                <div className="flex flex-col w-full ">
                    <h4 className="text-xl font-semibold py-1">Password</h4>
                    <span className="text-sm text-gray-400">Remember, your password is your digital key to your account. Keep it safe, keep it secure!</span>

                    {/* Current Password */}
                    <div className="w-full mt-8">
                        <label

                            className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                        >
                            Current Password
                        </label>
                        <input
                            type="text"
                            className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            placeholder="........"
                            required
                        />
                    </div>

                    {/* New Password */}
                    <div className="w-full mt-8">
                        <label

                            className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                        >
                            New Password
                        </label>
                        <input
                            type="text"
                            className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            placeholder="........"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="w-full mt-8">
                        <label

                            className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            className="shadow-xs bg-gray-100 border-0 text-gray-400 text-sm font-semibold rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
                            placeholder="........"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-5">
                        <button className="bg-blue-500 text-white rounded-xl px-4 py-2  font-semibold">Update</button>
                    </div>
                </div>

            </form>

            <div className="flex flex-col mt-3">
                <div>
                    <h4 className="text-xl font-bold py-1">2-Step verification</h4>
                    <span className="text-sm text-gray-400">Your account holds great value to hackers. Enable two-step verification to safeguard your account!</span>
                </div>
                <div>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-14">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="w-[30px] h-[30px] overflow-hidden">
                                <img src="https://ecme-react.themenate.net/img/others/google.png" className="h-full w-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-semibold text-center">Google Authenticator</span>
                                <span className="text-sm text-gray-400">Using Google Authenticator app generates time-sensitive codes for secure logins.</span>
                            </div>
                        </div>
                        <div  className="pl-2 lg:pl-10">
                            <button className="border-2 border-green-700 text-green-700 rounded-xl px-4 py-2  font-semibold">Activated</button>
                        </div>
                    </div>

                    <hr className="my-7" />

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex flex-col md:flex-row  items-center gap-4">
                            <div className="w-[30px] h-[30px] overflow-hidden">
                                <img src="https://ecme-react.themenate.net/img/others/okta.png" className="h-full w-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-center">Okta Verify</span>
                                <span className="text-sm text-gray-400">Receive push notifications from Okta Verify app on your phone for quick login approval.</span>
                            </div>
                        </div>
                        <div className="pl-2 lg:pl-10">
                            <button className="border border-gray-300 text-gray-400 rounded-xl px-4 py-2  font-semibold">Enable</button>
                        </div>
                    </div>

                    <hr className="my-7" />

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between ">
                        <div className="flex flex-col md:flex-row  items-center gap-4">
                            <div className=" flex w-[30px] h-[30px] rounded-full overflow-hidden">
                                <img src="https://ecme-react.themenate.net/img/others/email.png" className="h-full w-full object-cover" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-center">E Mail verification</span>
                                <span className="text-sm text-gray-400">Unique codes sent to email for confirming logins.</span>
                            </div>
                        </div>
                        <div className="pl-2 lg:pl-10">
                            <button className="border border-gray-300 text-gray-400 rounded-xl px-4 py-2  font-semibold">Enable</button>
                        </div>
                    </div>

                   

                </div>
            </div>

        </div>
    )
}

export default SecurityPage;