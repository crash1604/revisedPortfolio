import NavBar from "./Navbar";
import Wave from "./Wave";

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
    <div className="relative isolate overflow-hidden  bg-indigo-950 py-12 z-10 sm:py-8">
      <Wave />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Chanakya Sharma</h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Full Stack Software Developer
          </p>
        </div>
      </div>
    </div>
    <NavBar />
    </div>
  )
}


