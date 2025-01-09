import SessionListItem from "../Components/SessionListItem";

export default function SessionList() {

    return (
        <div className="bg-[#877979] flex flex-col items-center min-h-full">
            <SessionListItem store="1800" time="AM" date="090125"/>
            <SessionListItem store="1300" time="AM" date="090125"/>
            <SessionListItem store="1000" time="AM" date="090125"/>
        </div>
    )
}