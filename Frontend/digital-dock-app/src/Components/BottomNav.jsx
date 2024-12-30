import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function BottomNav() {
    const [nextDisable, setNextDisable] = useState(false);
    const [backDisable, setBackDisable] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (location.pathname === '/') {
            setBackDisable(true);
            setNextDisable(true);
        } else if (location.pathname === '/sessions') {
            setBackDisable(false);
            setNextDisable(false);
        }
    }, [location.pathname])

    return (
      <div className="sticky bottom-0 w-full bg-[#259D08] flex border-t-[1px] border-black h-[8%]">
        <button onClick={() => {navigate(-1)}} disabled={backDisable} className="disabled:opacity-50 flex-1 bg-[#259D08] text-white font-bold text-xl border-r-[1px] border-black active:bg-blue-600">
          Back
        </button>
        <button onClick={() => {navigate(1)}} disabled={nextDisable} className="disabled:opacity-50 flex-1 bg-[#259D08] text-white font-bold text-xl border-r-[1px] border-black active:bg-blue-600">
          Next
        </button>
      </div>
    );
  }
  