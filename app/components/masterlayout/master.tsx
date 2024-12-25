import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const MasterLayout:React.FC<any> = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navbar */}
    <Navbar/>
      {/* Main Content */}
      <main className="h-full">{children}</main>

      {/* Footer */}
   <Footer/>
    </div>
  );
};

export default MasterLayout;
