import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navbarData = {
    _id: 1,
    title: "Content QL",
    navItems: [
      {
        id: 1,
        name: "Home",
        link: "/",
      },
      {
        id: 2,
        name: "Features",
        link: "/features",
      },
      {
        _id: 3,
        name: "Integrations",
        link: "/integrations",
      },
      {
        _id: 4,
        name: "Pricing",
        link: "/pricing",
      },
      {
        _id: 5,
        name: "FAQ",
        link: "/faq",
      },
    ],
  };

  return (
    <nav className="navbar bg-base-100 p-2 md:px-28 sticky top-0 z-50 bg-opacity-80">
      <div className="navbar-start">
        <Link href="/" className="text-xl font-bold">
          {navbarData.title}
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navbarData.navItems.map((navItem) => (
            <li key={navItem._id}>
              <Link href={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-2 items-center">
        <a className="btn btn-sm text-accent-content rounded">Register</a>
        <a className="btn btn-primary btn-sm text-secondary-content rounded">
          Login
        </a>
        <div className="dropdown dropdown-hover dropdown-end md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn m-2  btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>

          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
            {navbarData.navItems.map((navItem) => (
              <li key={navItem._id}>
                <a>{navItem.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
