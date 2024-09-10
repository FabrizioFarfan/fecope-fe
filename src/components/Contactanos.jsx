import React from "react";
import { Mail, TvMinimalPlay } from "lucide-react";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import tiktok from "../assets/tiktok.svg";

export const Contactanos = () => {
  return (
    <div className="w-full flex justify-center py-10 bg-gray-100">
      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com/reel/C_sPanriu_m/?igsh=MWNlYWNzanM1aGVibw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-true-red hover:text-dark-red"
        >
          <img
            src={instagram}
            alt="instagram"
            className="w-8 h-8 hover:w-9 hover:h-9"
          />
        </a>
        <a
          href="https://www.tiktok.com/@fecopeoficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-true-red hover:text-dark-red"
        >
          <img
            src={tiktok}
            alt="tiktok"
            className="w-8 h-8 hover:w-9 hover:h-9"
          />
        </a>
        <a
          href="https://www.facebook.com/fecope.federacionpex"
          target="_blank"
          rel="noopener noreferrer"
          className="text-true-red hover:text-dark-red"
        >
          <img
            src={facebook}
            alt="facebook"
            className="w-8 h-8 hover:w-9 hover:h-9"
          />
        </a>
        <a
          href="https://www.youtube.com/@DIASPORAPERUANA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-true-red hover:text-dark-red"
        >
          <TvMinimalPlay
            alt="youtube"
            className="w-8 h-8  hover:w-9 hover:h-9"
          />
        </a>
        <Link
          to="/contactanos"
          className="text-[#9b7e2f] hover:text-[#55451a] "
        >
          <Mail className="w-8 h-8 hover:w-9 hover:h-9" />
        </Link>
      </div>
    </div>
  );
};
