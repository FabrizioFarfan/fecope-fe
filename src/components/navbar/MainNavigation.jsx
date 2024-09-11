import React, { useState } from "react";
import logo from "../../../dist/assets/logo.jpeg";
import { NavLink, useRouteLoaderData } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import { NavLinks } from "./NavLinks";
export const MainNavigation = () => {
  const token = useRouteLoaderData("root");
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="bg-true-red z-50 relative">
        <div className="flex items-center font-medium justify-around">
          <div className="flex gap-2 my-3 z-50 md:w-auto w-full justify-between">
            <div className=" flex">
              <img
                src={logo}
                alt="logo"
                className="md:cursor-pointer h-16 m-3"
              ></img>
            </div>
            <div className="text-true-white text-xl lobster-regular md:hidden lg:block ml-4">
              <h1 className="text-center lg:text-4xl md:text-3xl sm:text-2xl">
                Federación de la Comunidad
              </h1>
              <h1 className="text-center lg:text-4xl md:text-3xl sm:text-2xl">
                Peruana en Europa
              </h1>
            </div>
            <div
              className="text-3xl md:hidden text-true-white cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {!open ? (
                <Menu className="h-8 w-8 m-5 "></Menu>
              ) : (
                <X className="h-8 w-8 m-5"></X>
              )}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center font-extralight gap-7 text-true-white">
            <li>
              <NavLink
                to="/"
                className="relative py-5 px-3 inline-block group cursor-pointer"
              >
                Home
                {/* Subrayado animado */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] mb-4 bg-true-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/historia"
                className="relative py-5 px-3 inline-block group cursor-pointer"
              >
                Historia
                {/* Subrayado animado */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] mb-4 bg-true-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/asociaciones"
                className="relative py-5 px-3 inline-block group cursor-pointer"
              >
                Asociaciones
                {/* Subrayado animado */}
                <span className="absolute left-0 bottom-0 w-full h-[2px] mb-4 bg-true-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </NavLink>
            </li>
            <NavLinks></NavLinks>
          </ul>
          {token && (
            <NavLink to="/admin" className="text-true-white md:block hidden">
              <div className="py-5 px-3  uppercase font-extralight flex gap-1">
                <User></User>
                Admin
              </div>
            </NavLink>
          )}
        </div>
        {/*Mobile nav*/}
        <ul
          className={`
          md:hidden bg-true-red absolute w-2/3 h-full bottom-0 py-24  font-extralight gap-7 text-true-white uppercase duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li className="mt-24">
            <div className="bg-true-red">
              <NavLink
                to="/"
                className="py-5 px-3 inline-block w-full"
                onClick={() => setOpen(!open)}
              >
                Home
              </NavLink>
            </div>
          </li>
          <li>
            <div className="bg-true-red">
              <NavLink
                to="/historia"
                className="py-5 px-3 inline-block w-full"
                onClick={() => setOpen(!open)}
              >
                Historia
              </NavLink>
            </div>
          </li>
          <li>
            <div className="bg-true-red">
              <NavLink
                to="/asociaciones"
                className="py-5 px-3 inline-block w-full"
                onClick={() => setOpen(!open)}
              >
                Asociaciones
              </NavLink>
            </div>
          </li>
          <li>
            <div className="bg-true-red">
              <NavLink
                to="/eventos"
                className="py-5 px-3 inline-block w-full"
                onClick={() => setOpen(!open)}
              >
                Eventos
              </NavLink>
            </div>
          </li>
          <li>
            <div className="bg-true-red">
              <NavLink
                to="/noticias"
                className="py-5 px-3 inline-block w-full"
                onClick={() => setOpen(!open)}
              >
                Noticias
              </NavLink>
            </div>
          </li>
          <li>
            <div className="bg-true-red">
              <NavLink
                to="/album-fotos"
                className="py-5 px-3 inline-block w-full"
                onClick={() => setOpen(!open)}
              >
                Álbumes
              </NavLink>
            </div>
          </li>

          <li>
            <div className="bg-true-red">
              <NavLink
                to="/videos"
                className="py-5 px-3 inline-block w-full"
                onClick={() => setOpen(!open)}
              >
                Videos
              </NavLink>
            </div>
          </li>

          {token && (
            <NavLink
              to="/videos"
              className="text-true-white"
              onClick={() => setOpen(!open)}
            >
              <div className="py-7 px-3  uppercase font-extralight flex gap-1 bg-true-red">
                <User></User>
                Videos
              </div>
            </NavLink>
          )}
        </ul>
      </nav>
    </header>
  );
};
