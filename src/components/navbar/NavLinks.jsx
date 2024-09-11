import React, { useState } from "react";
import { links, linki } from "../../constants";
import { ChevronDown, ChevronUp } from "lucide-react";

export const NavLinks = () => {
  const [heading, setHeading] = useState("");

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
                  <div className="py-3 pt-7">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-true-red rotate-45"></div>
                  </div>
                  <div className="bg-true-red p-3.5">
                    {link.sublinks.map((mysublinks, sublinkIndex) => (
                      <div key={`${linkIndex}-${sublinkIndex}`}>
                        {linki(mysublinks.link)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
