import JoshChelsea from "../assets/img/josh_n_chelsea.jpg";
import GaryJocelyn from "../assets/img/gary_n_jocelyn.jpg";

export default function About() {
  return (
    <>
      <div
        id="about_content"
        className="place-content-evenly grid grid-cols-2 gap-4 justify-self-center pt-8 bg-gradient-to-r from-black to-teal-500"
      >
        <div id="photo_1" className="w-full px-2 justify-items-right">
          <img
            src={JoshChelsea}
            alt="Mr and Mrs Pitts"
            className=" shadow rounded-full max-w-full h-auto align-middle border-none mx-auto "
          />
          <h3 id="photo_1_text" className="text-center text-3xl text-white">
            Mr. and Mrs.
            <br />
            Pitts
          </h3>
        </div>

        <div id="photo_2" className="w-full px-2 ">
          <img
            src={GaryJocelyn}
            alt="Mr and Mrs Campbell"
            className="shadow rounded-full max-w-full h-auto align-middle border-none mx-auto"
          />
          <h3
            id="photo_2_text"
            className="text-center text-3xl text-white pb-2"
          >
            Mr. and Mrs.
            <br />
            Campbell
          </h3>
        </div>
      </div>
      <div
        id="about_container"
        className=" text-slate-600 w-5/6 m-auto content-evenly pt-8 pb-8"
      >
        <div className="text-teal-500">
          <h1
            id="about_header"
            className="text-4xl text-black justify-items-center text-center p-4"
          >
            About Us!
          </h1>
        </div>
        <div
          id="about_story"
          className="text-slate-600 justify-items-start text-2xl"
        >
          <div className="text-slate-600 p-4">
            <p>
              &emsp;The concept of Scoop 50Fifty was inspired by founders Josh
              Pitts and Gary Campbell's love of ice cream and their desire to
              educate the Lowcountry on the luxury of super premium ice cream.
            </p>
            <br />
            <p>
              &emsp;Prior to entering the ice cream industry, the partners and
              friends built a successful trucking company from the ground up
              which continues to grow and fruitfully operate in the Charleston
              area. In June of 2021, Josh and Gary knew now was the time to
              embark on a passion project and located a prime spot in the
              massively expanding Nexton/Cane Bay area of Summerville.
            </p>
            <br />
            <p>
              &emsp;Scoop 50Fifty ice cream parlor combines a modern, inviting
              ambiance with fun, on-trend flavors as well as tried and true
              classics. Scoop 50Fifty will house 50 premium flavors, including 2
              soft serve options, and 50 toppings so consumers are sure to be
              able to create their dream sundae or keep things simple and
              delicious. Seasonal flavors will rotate and the parlor will have
              numerous gluten, nut and dairy free options.
            </p>
            <br />
            <p>
              &emsp; Our ambitions are growing as we are in the process of
              getting together our ice cream trailer to mix our passion for
              trucking and ice cream. We hope to have this up and ready by
              *****. We look forward to partnering with local schools and
              non-profits and fostering a strong relationship with our
              Summerville community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
