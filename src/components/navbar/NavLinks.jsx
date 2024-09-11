import React, { useState } from "react";
import { links } from "../../constants";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export const NavLinks = (close, setClose) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const handleClose = (c) => {
    setClose(c);
  };
  return (
    <>
      {links.map((link, linkIndex) => (
        <div key={linkIndex}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group relative cursor-pointer">
              {link.name}
              <span
                className="text-true-white text-xl md:hidden inline"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                }}
              >
                {heading === link.name ? <ChevronUp /> : <ChevronDown />}
              </span>
              <span className="text-true-white text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180">
                {<ChevronDown />}
              </span>

              {/* Subrayado animado */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-true-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mb-4"></span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-true-red rotate-45"></div>
                  </div>
                  <div className="bg-true-red p-3.5">
                    {link.sublinks.map((mysublinks, sublinkIndex) => (
                      <div key={`${linkIndex}-${sublinkIndex}`}>
                        <Link
                          to={mysublinks.link}
                          className="text-lg hover:text-dark-red"
                          onClick={() => {
                            handleClose(false);
                          }}
                        >
                          {mysublinks.Head}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mobile menus */}

                <div
                  className={`bg-true-red ${
                    heading === link.name ? "md:hidden" : "hidden"
                  }`}
                >
                  {link.sublinks.map((slinks, slinksIndex) => (
                    <div key={`${linkIndex}-${slinksIndex}`}>
                      <div>
                        <Link
                          to={slinks.link}
                          onClick={() => {
                            handleClose(false);
                            subHeading !== slinks.Head
                              ? setSubHeading(slinks.Head)
                              : setSubHeading("");
                          }}
                          className="py-4 pl-7 font-extralight md:pr-0 pr-5 flex justify-between items-center "
                        >
                          {slinks.Head}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
