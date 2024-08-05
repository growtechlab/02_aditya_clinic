import Link from "next/link";

import { FiMenu } from "react-icons/fi";

import { CiHospital1 } from "react-icons/ci";


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
        <li><a href="#services">Services</a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a href="#about">About</a></li>
      </ul>
      {/* mobile screen */}


    </div>
    <Link href="/" className="btn btn-ghost text-xl">
    {/* <CiHospital1 className="text-primary" size={30} /> */}
    <img src="/img/logo.png" width={40} height={40} alt="Logo of doctor"/>
      Aditya Clinic
    </Link>
  </div>


        {/* permanent for all screeen */}
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 hidden lg:flex">

  <li><a href="#services">Services</a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a href="#about">About</a></li>
    </ul>


    <a className="btn btn-primary btn-outline btn-sm" 
    href={"tel:"+process.env.MOBILE_NUMBER}
    >CALL</a>
  </div>

</div>
    )
}

export default Navbar