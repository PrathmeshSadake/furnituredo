import React from "react";

const Header = () => {
  return (
    <section>
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap items-center -mx-4 lg:my-20">
          <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2
              class="mb-6 text-3xl lg:text-5xl font-semibold max-w-md leading-tight"
              data-config-id="header"
            >
              Take care of your performance every day.
            </h2>
            <p
              class="mb-6 text-lg text-gray-500 leading-loose max-w-lg"
              data-config-id="desc"
            >
              Build a well-presented brand that everyone will love. Take care to
              develop resources continually and integrity them with previous
              projects.
            </p>
            <div class="flex flex-wrap">
              <a
                class="inline-block px-6 py-2 mr-4 text-sm text-white font-bold leading-loose bg-blue-500 hover:bg-blue-600 rounded transition duration-200"
                href="#"
                data-config-id="hero-primary-action"
              >
                Track your performance
              </a>
              <a
                class="inline-block px-6 py-2 text-sm text-gray-500 hover:text-gray-600 font-bold leading-loose border border-blue-400 hover:border-blue-600 rounded"
                href="#"
                data-config-id="hero-secondary-action"
              >
                Learn More
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <img
              class="object-cover w-full rounded-sm h-96"
              src="https://source.unsplash.com/FBXuXp57eM0"
              alt=""
              data-config-id="image"
            />
          </div>
          <button class="block mt-10 lg:mt-20 mx-auto w-16 h-16 p-5 rounded-full bg-blue-50 hover:bg-blue-100">
            <i class="fas fa-caret-down"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
