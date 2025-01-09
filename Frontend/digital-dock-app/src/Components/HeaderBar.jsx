import { useLocation, useParams } from "react-router";

export default function HeaderBar() {
  const location = useLocation();
  const params = useParams();
  let header = "";

  if (location.pathname === '/') {
    header = "Dashboard";
  } else if (location.pathname === '/sessions') {
    header = "Active Load Sessions";
  } else if (location.pathname === `/sessions/${params.sessionID}`) {
    header = params.sessionID;
  } else if (location.pathname === `/sessions/${params.sessionID}/truck/${params.transitCode}`) {
    header = `${params.sessionID}`;
  }

  return (
    <div className="sticky top-0 min-h-[15%] w-full bg-[#259D08] flex flex-col items-center justify-evenly font-sans text-3xl text-white font-bold">
      {header}
      {params.transitCode ?
        <div>
            Truck: {params.transitCode}
        </div>
        :
        <></>
        }
    </div>
  );
}
