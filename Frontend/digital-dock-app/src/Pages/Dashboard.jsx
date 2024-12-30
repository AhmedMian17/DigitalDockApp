import GreenButton from "../Components/GreenButton";

export default function Dashboard() {

    return (
      <div className="bg-[#877979] flex flex-col items-center min-h-full">
        <p className="text-white text-2xl font-bold mt-[1.5rem] mb-[2rem]">Current Load Session: None</p>
        <GreenButton text="Join Load Session" path="/sessions" disabled={false} />
        <GreenButton text="My Statistics" disabled={true} />
        <GreenButton text="Settings" disabled={true} />
        <GreenButton text="Logout" disabled={true} />
      </div>
    )
  }
  