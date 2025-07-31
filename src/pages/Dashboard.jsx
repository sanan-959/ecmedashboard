import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CreateCustomerPage from "./customer/CreateCustomer";
import CustomerListPage from "./customer/customerlist/CustomerList";
import EditCustomerPage from "./customer/EditCustomer";
import CustomerDetailsPage from "./customer/CustomerDetails";
import ProductListPage from "./product/ProductList";
import ProductCreatePage from "./product/ProductCreate";
import ProductEditPage from "./product/ProductEdit";
import OrderListPage from "./order/OrderList";
import { Routes, Route } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-64 fixed"><Sidebar/></div>
            <div className=" flex flex-1 flex-col">
                <div className="lg:ml-64">
                    <Navbar/>
                </div>
                <div className="lg:ml-64 p-6 bg-gray-100">
                    <Routes>
                        <Route path="/" element={<CreateCustomerPage/>} />
                        <Route path="/customer/edit" element={<EditCustomerPage/>}/>
                        <Route path="/customer/list" element={<CustomerListPage/>} />
                        <Route path="/customer/details" element={<CustomerDetailsPage/>} />
                        <Route path="/product/list" element={<ProductListPage/>}/>
                        <Route path="product/create" element={<ProductCreatePage/>}/>
                        <Route path="product/edit" element={<ProductEditPage/>}/>
                        <Route path="order/list" element={<OrderListPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
