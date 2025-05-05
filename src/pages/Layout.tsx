import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <main>
      <Header />
      <div className="w-full p-4 flex justify-center">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
