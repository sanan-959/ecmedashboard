import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex w-64 flex-col  h-screen bg-white border-r border-gray-300 z-50">
      <div className="p-4 bg-white">
        <img
          className="w-32"
          src="https://ecme-react.themenate.net/img/logo/logo-light-full.png"
          alt="Logo"
        />
      </div>

      <div className="flex-1 overflow-y-auto mt-2 px-4 text-black">
        <ul className="space-y-2">
          {/* /////////////////////////////////////////////////////////////// */}
          {/* First part */}
          {/* Dashboard */}
          <li>
            <span className="text-[18px] font-semibold text-gray-400">
              Dashboard
            </span>
          </li>
          {/* Ecommerce */}
          <li className="text-gray-400 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
            <a href="#" className="block py-2">
              <div className="flex gap-2 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                  </svg>
                </span>
                <span className="font-semibold">Ecommerce</span>
              </div>
            </a>
          </li>
          {/* Project */}
          <li className="text-gray-400 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
            <a href="#" className="block py-2">
              <div className="flex gap-2 ">
                <span>
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </span>
                <span className="font-semibold">Project</span>
              </div>
            </a>
          </li>
          {/* Marketing */}
          <li className="text-gray-400 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
            <a href="#" className="block py-2">
              <div className="flex gap-2 ">
                <span>
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </span>
                <span className="font-semibold">Marketing</span>
              </div>
            </a>
          </li>
          {/* Analytic */}
          <li className="text-gray-400 hover:bg-slate-100 hover:text-black py-1 px-2 rounded">
            <a href="#" className="block py-2">
              <div className="flex gap-2 ">
                <span>
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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                </span>
                <span className="font-semibold">Analytic</span>
              </div>
            </a>
          </li>

          {/* second part */}
          {/* ///////////////////////////////////////////////////////////// */}

          {/* AI */}
          <li>
            <div className="w-full">
              <div className="hover:bg-gray-100 rounded">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-2 py-2 text-gray-700 font-semibold dark:text-gray-200 dark:hover:bg-gray-700"
                  data-collapse-toggle="analytic-collapse"
                  aria-expanded="false"
                  aria-controls="analytic-collapse"
                >
                  {/* Left: Icon + Text */}
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                      />
                    </svg>
                    Ai
                  </span>

                  {/* Right: Down Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Collapse Content */}
              <div
                id="analytic-collapse"
                className="hidden px-6 py-2 space-y-1 text-sm text-gray-600 dark:text-gray-400"
              >
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700"
                    >
                      Sub item 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          
          {/* Projects */}
          <li>
            <div className="w-full">
              <div className="hover:bg-gray-100 rounded">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-2 py-2 text-gray-700 font-semibold dark:text-gray-200 dark:hover:bg-gray-700"
                  data-collapse-toggle="analytic-collapse2"
                  aria-expanded="false"
                  aria-controls="analytic-collapse"
                >
                  {/* Left: Icon + Text */}
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                      />
                    </svg>
                    Projects
                  </span>

                  {/* Right: Down Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Collapse Content */}
              <div
                id="analytic-collapse2"
                className="hidden px-6 py-2 space-y-1 text-sm text-gray-600 dark:text-gray-400"
              >
                <a
                  href="#"
                  className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700"
                >
                  Sub item 1
                </a>
                <a
                  href="#"
                  className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700"
                >
                  Sub item 2
                </a>
              </div>
            </div>
          </li>

          {/* Customer */}
          <li>
            <div className="w-full">
              <div className="hover:bg-gray-100 rounded">
                <button type="button" className="w-full flex items-center justify-between px-2 py-2 text-gray-700 font-semibold dark:text-gray-200 dark:hover:bg-gray-700" data-collapse-toggle="analytic-collapse3" aria-expanded="false" aria-controls="analytic-collapse" >
                  {/* Left: Icon + Text */}
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    Customer
                  </span>

                  {/* Right: Down Arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* Collapse Content */}
              <div
                id="analytic-collapse3"
                className="hidden px-6 py-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc text-gray-500">
                  <li>
                    <a href="/customer/edit"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Edit</a>
                  </li>

                  <li>
                    <a href="/customer/list"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">List</a>
                  </li>
                  <li>
                    <a href="/customer/details"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Details</a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Create</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/*Product */}

          <li>
            <div className="w-full">
              <div className="hover:bg-gray-100 rounded">
                <button type="button" className="w-full flex items-center justify-between px-2 py-2 text-gray-700 font-semibold dark:text-gray-200 dark:hover:bg-gray-700" data-collapse-toggle="analytic-collapse4" aria-expanded="false" aria-controls="analytic-collapse" >
                  {/* Left: Icon + Text */}
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    Product
                  </span>

                  {/* Right: Down Arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* Collapse Content */}
              <div
                id="analytic-collapse4"
                className="hidden px-6 py-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc text-gray-500">
                  <li>
                    <a href="/product/edit"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Edit</a>
                  </li>

                  <li>
                    <a href="/product/list"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">List</a>
                  </li>
                  
                  <li>
                    <a
                      href="/product/create"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Create</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="w-full">
              <div className="hover:bg-gray-100 rounded">
                <button type="button" className="w-full flex items-center justify-between px-2 py-2 text-gray-700 font-semibold dark:text-gray-200 dark:hover:bg-gray-700" data-collapse-toggle="analytic-collapse5" aria-expanded="false" aria-controls="analytic-collapse" >
                  {/* Left: Icon + Text */}
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    Order
                  </span>

                  {/* Right: Down Arrow */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* Collapse Content */}
              <div
                id="analytic-collapse5"
                className="hidden px-6 py-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <ul className="list-disc text-gray-500">
                  <li>
                    <a href="/order/edit"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Edit</a>
                  </li>

                  <li>
                    <a href="/order/list"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">List</a>
                  </li>
                  
                  <li>
                    <a
                      href="/order/create"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Create</a>
                  </li>
                  <li>
                    <a
                      href="/order/details"
                      className="block px-2 py-1 hover:bg-gray-100 rounded dark:hover:bg-gray-700">Details</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* //////////////////////// */}
          <li>
            <a href="#" className="block py-2">
              Item 8
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 9
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 10
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 4
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 5
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 6
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 7
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 8
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 9
            </a>
          </li>
          <li>
            <a href="#" className="block py-2">
              Item 10
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
