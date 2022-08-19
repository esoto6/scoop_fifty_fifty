import Header from "../components/header";
import Footer from "../components/footer";
import { Flavors } from "../utilities/flavors";
import { Toppings } from "../utilities/flavors";

export default function Menu() {
  return (
    <>
      <Header />
      <div className="bg-white">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
