import iceCreamImage from "../assets/img/scoop_fifty_fifty_ice_cream_and_graffiti.jpg";
import { ReactComponent as ReactLogo } from "../assets/img/ice-cream-solid.svg";

export default function Header() {
  const backgroundImageStyle = {
    backgroundImage: `url("${iceCreamImage}")`,
    backgroundSize: "cover ",
    backgroundPosition: "bottom center",
  };

  return (
    // Header Elements
    <div id="App" className="text-white w-screen">
      <div id="header_img" className="text-white" style={backgroundImageStyle}>
        <div
          id="header_content"
          className="bg-gradient-to-r from-black px-8 py-8"
        >
          <div
            id="header_container"
            className=" max-w-xl grid grid-cols-1 gap-8"
          >
            <div id="logo" className="w-20">
              <ReactLogo className="fill-teal-500 hover:fill-cyan-700" />
            </div>
            <h1 id="header_bold" className="text-6xl font-bold pt-11">
              Scoop50Fifty
            </h1>
            <p id="header_pgh" className="text-lg">
              Ice Cream Parlor offering a fun and modern experience on super
              premium ice cream. We look foward to seeing you soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
