import Header from "../components/header";
import Footer from "../components/footer";

export default function Menu() {
  return (
    <>
      <Header />
      <div
        id="body_container"
        className="p-8 grid gap-6 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-slate-600 content-evenly"
      >
        <h1> Menu </h1>
      </div>
      <Footer />
    </>
  );
}
