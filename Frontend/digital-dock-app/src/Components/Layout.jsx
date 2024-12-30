import { Outlet } from "react-router";
import HeaderBar from "./HeaderBar";
import BottomNav from "./BottomNav";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
        <HeaderBar />
        <div className="grow overflow-y-auto">
            <Outlet />
        </div>
        <BottomNav />
    </div>
  );
}
