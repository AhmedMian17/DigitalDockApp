import { useLocation } from "react-router";

export default function HeaderBar() {
  const location = useLocation();
  const header = location.pathname === "/" ? "Dashboard" : "";

  return (
    <div className="sticky top-0 h-[15%] w-full bg-[#259D08] flex items-center justify-center font-sans text-4xl text-white font-bold">
      {header}
    </div>
  );
}
