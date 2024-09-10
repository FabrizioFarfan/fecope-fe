import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { MainNavigation } from "../components/navbar/MainNavigation";
import React, { useEffect } from "react";
import { Footer } from "../components/footer/Footer";
import { getTokenDuration } from "../util";

export const RootLayout = () => {
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      redirect("/");
      return;
    }
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      redirect("/");
    }, tokenDuration);
  }, [token]);
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};
