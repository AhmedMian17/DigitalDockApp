import { useLocation } from "react-router";

export default function HeaderBar() {
  const location = useLocation();
  let header = "";

  if (location.pathname === '/') {
    header = "Dashboard";
  } else if (location.pathname === '/sessions') {
    header = "Active Load Sessions";
  }

  return (
    <div className="sticky top-0 h-[15%] w-full bg-[#259D08] flex items-center justify-center font-sans text-3xl text-white font-bold">
      {header}
    </div>
  );
}
