// const links = [
//   { name: 'Open roles', href: '#' },
//   { name: 'Internship program', href: '#' },
//   { name: 'Our values', href: '#' },
//   { name: 'Meet our leadership', href: '#' },
// ]
// const stats = [
//   { name: 'Offices worldwide', value: '12' },
//   { name: 'Full-time colleagues', value: '300+' },
//   { name: 'Hours per week', value: '40' },
//   { name: 'Paid time off', value: 'Unlimited' },
// ]

import NavBar from "./Navbar";
import Wave from "./Wave";

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 z-10 sm:py-9">
      <Wave />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Chanakya Sharma</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Full Stack Software Developer
          </p>
        </div>
      </div>
    </div>
    <NavBar />
    </div>
  )
}
