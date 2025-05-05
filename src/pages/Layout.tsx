import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="w-full p-4 flex justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
