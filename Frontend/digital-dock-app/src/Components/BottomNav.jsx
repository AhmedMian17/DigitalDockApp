export default function BottomNav() {
    return (
      <div className="sticky bottom-0 w-full bg-[#259D08] flex border-t-[1px] border-black h-[8%]">
        <button className="flex-1 bg-[#259D08] text-white font-bold text-xl border-r-[1px] border-black active:bg-blue-600">
          Back
        </button>
        <button className="flex-1 bg-[#259D08] text-white font-bold text-xl active:bg-blue-600">
          Next
        </button>
      </div>
    );
  }
  