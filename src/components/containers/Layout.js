import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <section className="absolute flex w-screen h-screen justify-center items-center">
        <div className="relative bg-gray-50 z-10 w-fit h-fit rounded-2xl shadow-lg">
          {children}
        </div>
      </section>
      <div className="fixed w-screen h-screen bg-gradient-to-bl to-[#8493ae] from-[#e9ecef] " />
    </>
  );
};

export default Layout;