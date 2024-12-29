import { Outlet } from "react-router";
import HeaderBar from "./HeaderBar";
import BottomNav from "./BottomNav";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <HeaderBar />
      <div className="flex-grow mt-[15%] mb-[8%]">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
