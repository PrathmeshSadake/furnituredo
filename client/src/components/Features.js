import React from "react";

const Features = () => {
  return (
    <div class="container py-10 px-4 mx-auto">
      <div class="flex flex-wrap items-center -mx-4">
        <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <img
            class="rounded-sm w-full object-cover"
            src="https://source.unsplash.com/E5lK_COkD2E"
            alt=""
            data-config-id="image"
          />
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div class="lg:max-w-sm lg:ml-auto">
            <div class="flex mb-6">
              <div class="mr-5 mt-2 text-blue-600">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="max-w-sm">
                <h3
                  class="mb-2 text-2xl font-bold font-heading"
                  data-config-id="header1"
                >
                  Quick problem-solving contact
                </h3>
                <p class="text-gray-500 leading-loose" data-config-id="desc1">
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
            </div>
            <div class="flex mb-6">
              <div class="mr-5 mt-2 text-blue-600">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="max-w-sm">
                <h3
                  class="mb-2 text-2xl font-bold font-heading"
                  data-config-id="header2"
                >
                  Making changes simple and easy
                </h3>
                <p class="text-gray-500 leading-loose" data-config-id="desc2">
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
            </div>
            <div class="flex">
              <div class="mr-5 mt-2 text-blue-600">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="max-w-sm">
                <h3
                  class="mb-2 text-2xl font-bold font-heading"
                  data-config-id="header3"
                >
                  Exchangeable at any time
                </h3>
                <p class="text-gray-500 leading-loose" data-config-id="desc3">
                  Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                  tellus sit amet tempus vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
