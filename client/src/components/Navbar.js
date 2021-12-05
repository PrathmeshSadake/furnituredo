import React from "react";

const Navbar = () => {
  return (
    <nav class="px-10 py-8">
      <div class="flex justify-between items-center">
        <a
          class="text-gray-800 text-2xl font-semibold leading-loose"
          href="#"
          data-config-id="brand"
        >
          Furnituredo.
        </a>
        <div class="lg:hidden">
          <button class="block navbar-burger text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              class="h-4 w-4"
              fill="currentColor "
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
          <li>
            <a
              class="text-sm text-gray-600 hover:text-gray-800"
              href="#"
              data-config-id="link1"
            >
              About
            </a>
          </li>
          <li>
            <a
              class="text-sm text-gray-600 hover:text-gray-800"
              href="#"
              data-config-id="link2"
            >
              Company
            </a>
          </li>
          <li>
            <a
              class="text-sm text-gray-600 hover:text-gray-800"
              href="#"
              data-config-id="link3"
            >
              Services
            </a>
          </li>
          <li>
            <a
              class="text-sm text-gray-600 hover:text-gray-800"
              href="#"
              data-config-id="link4"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <a
          class="hidden lg:block px-6 py-3 text-sm text-gray-600 hover:text-gray-800 font-bold border border-gray-100 hover:border-gray-200 rounded"
          href="#"
          data-config-id="primary-action"
        >
          Sign Up
        </a>
      </div>
      <div class="hidden navbar-menu relative z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div class="flex items-center mb-8">
            <a
              class="mr-auto text-2xl font-semibold leading-none"
              href="#"
              data-config-id="brand"
            >
              <img
                class="h-8"
                src="mockup-assets/logos/shuffle-ux.svg"
                alt=""
                width="auto"
              />
            </a>
            <button class="navbar-close">
              <svg
                class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-6000"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  data-config-id="link1"
                >
                  About
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  data-config-id="link2"
                >
                  Company
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  data-config-id="link3"
                >
                  Services
                </a>
              </li>
              <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                  data-config-id="link4"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <div class="pt-6">
              <a
                class="block px-6 py-2 mb-3 text-sm text-center text-gray-6000 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
                href="#"
                data-config-id="secondary-action"
              >
                Sign In
              </a>
              <a
                class="block px-6 py-2 mb-2 text-sm text-center text-gray-6000 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
                href="#"
                data-config-id="primary-action"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
