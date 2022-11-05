import { Flavors } from "../utilities/flavors";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Menu() {
  return (
    <>
      <div className="bg-waffle_cone bg-no-repeat">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Flavors!
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Flavors.map((Flavors) => (
              <div key={Flavors.ID} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={Flavors.imageSrc}
                    alt={Flavors.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700">
                      <a href={Flavors.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {Flavors.Name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {Flavors.Description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {Flavors.Carb}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div class="flex flex-col items-center">
            {/* <!-- Help text --> */}
            <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span class="font-semibold text-gray-900 dark:text-white">1</span>{" "}
              to{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                10
              </span>{" "}
              of{" "}
              <span class="font-semibold text-gray-900 dark:text-white">
                100
              </span>{" "}
              Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
              {/* <!-- Buttons --> */}
              <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  aria-hidden="true"
                  class="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Prev
              </button>
              <button class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg
                  aria-hidden="true"
                  class="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
