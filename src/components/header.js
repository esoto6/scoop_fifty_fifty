import iceCreamImage from "../assets/img/scoop_fifty_fifty_ice_cream_and_graffiti.jpg";
// import { ReactComponent as ReactLogo } from "../assets/img/ice-cream-solid.svg";
import NavBar from "./navbar";
// import { useState } from "react";

export default function Header() {
  const backgroundImageStyle = {
    backgroundImage: `url("${iceCreamImage}")`,
    backgroundSize: "cover ",
    backgroundPosition: "bottom center",
  };

  // const [navbar, setNavbar] = useState(false);

  return (
    // Header Elements
    <>
      <div id="App" className="text-white w-auto">
        <div
          id="header_img"
          className="text-white"
          style={backgroundImageStyle}
        >
          <div
            id="header_content"
            className="bg-gradient-to-r from-black px-8 py-8"
          >
            <NavBar />

            <div
              id="header_container"
              className=" max-w-xl grid grid-cols-1 gap-8"
            >
              {/* <div id="logo" className="w-20">
                <Link to="/">
                  <ReactLogo className="fill-teal-500 hover:fill-cyan-700" />
                </Link>
              </div> */}
              <h1 id="header_bold" className="text-6xl font-bold pt-11">
                Scoop50Fifty
              </h1>
              <p id="header_pgh" className="text-lg">
                Ice Cream Parlor offering a fun and modern experience on super
                premium ice cream. We look foward to seeing you soon.
              </p>
            </div>
            {/* <NavBar /> */}
          </div>
        </div>
      </div>
    </>
  );
}
