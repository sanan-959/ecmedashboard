import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CreateCustomerPage from "./customer/CreateCustomer";
import CustomerListPage from "./customer/customerlist/CustomerList";
import EditCustomerPage from "./customer/EditCustomer";
import CustomerDetailsPage from "./customer/CustomerDetails";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 fixed"><Sidebar/></div>
            <div className=" flex flex-1 flex-col">
                <div className="lg:ml-64">
                    <Navbar/>
                </div>
                <div className="lg:ml-64 p-6 bg-gray-100">
                    <CustomerDetailsPage/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;