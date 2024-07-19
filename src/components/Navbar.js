import Link from "next/link";

import { FiMenu } from "react-icons/fi";


function Navbar(){


    return (
<div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <FiMenu size={24} />
      </div>

      {/* mobile screen */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a>Item 3</a></li>
      </ul>
      {/* mobile screen */}


    </div>
    <a href="#" className="btn btn-ghost text-xl">

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-8 h-8"
      >
        <path d="M12 6v4"></path>
        <path d="M14 14h-4"></path>
        <path d="M14 18h-4"></path>
        <path d="M14 8h-4"></path>
        <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path>
        <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
      </svg>
      Dr. Aditya
    </a>
  </div>


        {/* permanent for all screeen */}
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 hidden lg:flex">
      <li><a>Item 1</a></li>
      {/* <li>
        <details>
          <summary>Laptop</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><a>Item 3</a></li>
    </ul>


    <a className="btn">Button</a>
  </div>

</div>
    )
}

export default Navbar