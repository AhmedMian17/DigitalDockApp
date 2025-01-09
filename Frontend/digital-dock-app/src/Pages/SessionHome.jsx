import { useLocation } from "react-router";
import GreenButton from "../Components/GreenButton";

export default function SessionHome() {
    // const params = useParams();
    const location = useLocation();
    let trucks = ["KBB", "KBC", "KBD"];

    return (
        <div className="bg-[#877979] flex flex-col items-center min-h-full justify-evenly">
            <GreenButton path={`${location.pathname}/truck/${trucks[0]}`} text="Load Next Truck" />
            <GreenButton disabled={true} path="" text="Dock Status" />
            <GreenButton path="/" text="Leave Session" />
        </div>
    )
}