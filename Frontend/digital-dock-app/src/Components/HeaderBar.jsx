import { useLocation, useParams } from "react-router";

export default function HeaderBar() {
  const location = useLocation();
  const params = useParams();
  let header = "";

  if (location.pathname === "/") {
    header = "Dashboard";
  }

  return (
    <div className="fixed top-0 left-0 w-full h-[15%] bg-[#54b848] flex items-center justify-center font-sans text-4xl text-white font-bold">
      {header}
    </div>
  );
}
