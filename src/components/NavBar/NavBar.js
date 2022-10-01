import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Support", path: "/support" },
  ];
  return (
    <nav className="bg-black md:p-7 w-full ">
      <div onClick={() => setOpen(!open)} className="h-8 w-8 text-white md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul className={` bg-black md:flex justify-center w-full  text-white absolute md:static  ease-in-out ${open? 'top-8' :'top-[-120px]'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
