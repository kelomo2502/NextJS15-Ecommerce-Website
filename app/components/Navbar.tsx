

// // "use client";

// // import Link from "next/link";
// // import { signOut, useSession } from "next-auth/react";
// // import { useState } from "react";

// // export default function Navbar() {
// //   const { data: session } = useSession();
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <nav className="bg-black text-white">
// //       <div className="container mx-auto flex justify-between items-center p-4">
// //         {/* Logo */}
// //         <Link href="/" className="text-lg font-bold">
// //           MyApp
// //         </Link>

// //         {/* Hamburger Menu Button */}
// //         <button
// //           className="block lg:hidden"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           aria-label="Toggle Menu"
// //         >
// //           <svg
// //             className="w-6 h-6"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
// //             />
// //           </svg>
// //         </button>

// //         {/* Desktop Menu */}
// //         <div className="hidden lg:flex space-x-6">
// //           <Link href="/" className="hover:underline">
// //             Home
// //           </Link>
// //           {!session ? (
// //             <>
// //               <Link href="/auth/login" className="hover:underline">
// //                 Login
// //               </Link>
// //               <Link
// //                 href="/auth/register"
// //                 className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
// //               >
// //                 Register
// //               </Link>
// //             </>
// //           ) : (
// //             <>
// //               <span className="mr-4">Hello, {session.user?.name}</span>
// //               <button
// //                 onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
// //                 className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>

// //       {/* Mobile & Tablet Menu */}
// //       {menuOpen && (
// //         <div className="lg:hidden bg-blue-600">
// //           <div className="flex flex-col space-y-4 p-4">
// //             <Link
// //               href="/"
// //               onClick={() => setMenuOpen(false)}
// //               className="hover:underline"
// //             >
// //               Home
// //             </Link>
// //             {!session ? (
// //               <>
// //                 <Link
// //                   href="/auth/login"
// //                   onClick={() => setMenuOpen(false)}
// //                   className="hover:underline"
// //                 >
// //                   Login
// //                 </Link>
// //                 <Link
// //                   href="/auth/register"
// //                   onClick={() => setMenuOpen(false)}
// //                   className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
// //                 >
// //                   Register
// //                 </Link>
// //               </>
// //             ) : (
// //               <>
// //                 <span>Hello, {session.user?.name}</span>
// //                 <button
// //                   onClick={() => {
// //                     signOut({ redirect: true, callbackUrl: "/" });
// //                     setMenuOpen(false);
// //                   }}
// //                   className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
// //                 >
// //                   Logout
// //                 </button>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }

// "use client";

// import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";
// import { useState } from "react";

// export default function Navbar() {
//   const { data: session } = useSession();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-blue-500 text-white">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link href="/" className="text-lg font-bold">
//           MyApp
//         </Link>

//         {/* Hamburger Menu Button */}
//         <button
//           className="block lg:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle Menu"
//         >
//           <svg
//             className="w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-6">
//           <Link href="/" className="hover:underline">
//             Home
//           </Link>
//           {!session ? (
//             <>
//               <Link href="/auth/login" className="hover:underline">
//                 Login
//               </Link>
//               <Link
//                 href="/auth/register"
//                 className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
//               >
//                 Register
//               </Link>
//             </>
//           ) : (
//             <>
//               <span className="mr-4">Hello, {session.user?.name}</span>
//               <button
//                 onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
//                 className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Sliding Sidebar for Mobile & Tablet */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-blue-600 transition-transform transform ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:hidden w-64 shadow-lg`}
//       >
//         <div className="flex flex-col space-y-4 p-4">
//           <button
//             className="self-end text-white"
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>

//           <Link
//             href="/"
//             onClick={() => setMenuOpen(false)}
//             className="hover:underline text-white"
//           >
//             Home
//           </Link>
//           {!session ? (
//             <>
//               <Link
//                 href="/auth/login"
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:underline text-white"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/auth/register"
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
//               >
//                 Register
//               </Link>
//             </>
//           ) : (
//             <>
//               <span>Hello, {session.user?.name}</span>
//               <button
//                 onClick={() => {
//                   signOut({ redirect: true, callbackUrl: "/" });
//                   setMenuOpen(false);
//                 }}
//                 className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Background overlay when sidebar is open */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 lg:hidden"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Hamburger Menu Button */}
        <button
          className="block lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {!session ? (
            <>
              <Link href="/auth/login" className="hover:underline">
                Login
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="mr-4">Hello, {session.user?.name}</span>
              <button
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Sliding Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-600 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden w-64 shadow-lg`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <button
            className="self-end text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:underline text-white"
          >
            Home
          </Link>
          {!session ? (
            <>
              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="hover:underline text-white"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span>Hello, {session.user?.name}</span>
              <button
                onClick={() => {
                  signOut({ redirect: true, callbackUrl: "/" });
                  setMenuOpen(false);
                }}
                className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Background overlay when sidebar is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
