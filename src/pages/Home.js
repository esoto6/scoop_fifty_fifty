import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div
          id="body_container"
          className="p-8 grid gap-6 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-slate-600 content-evenly"
        >
          <div id="content_1">
            <h3 className="text-2xl font-bold mb-2 p-2">
              What do you mean super premium?
            </h3>
            <p className="text-lg p-2">
              What makes ice cream super premium? Our ice cream comes from a
              supplier utilizing 16% butterfat that provides the highest degree
              of quality in ice cream. Most people consider
            </p>
          </div>
          <div id="content_2">
            <h3 className="text-2xl font-bold mb-2 p-2">
              This is what we are about!
            </h3>
            <p className="text-lg p-2">
              Scoop 50Fifty ice cream parlor combines a modern, inviting
              ambiance with fun, on-trend flavors as well as tried and true
              classics. Scoop 50Fifty will house 50 premium flavors, including 2
              soft serve options, and 50 toppings so consumers are sure to be
              able to create their dream sundae or keep things simple and
              delicious. Seasonal flavors will rotate and the parlor will have
              numerous gluten, nut and dairy free options.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
