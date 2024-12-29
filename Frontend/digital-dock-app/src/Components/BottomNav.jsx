import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

export default function BottomNav() {
  const [backEnabled, setBackEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false); 

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full h-[8%] flex border-t-[1px] border-black">
      <button
        className="flex-1 bg-[#54b848] p-2 font-sans text-3xl text-white font-bold border-r-[1px] border-black active:bg-blue-600"
        disabled={!backEnabled}
      >
        Back
      </button>
      <button
        className="flex-1 bg-[#54b848] p-2 font-sans text-3xl text-white font-bold active:bg-blue-600"
        disabled={!nextEnabled}
      >
        Next
      </button>
    </div>
  );
}
