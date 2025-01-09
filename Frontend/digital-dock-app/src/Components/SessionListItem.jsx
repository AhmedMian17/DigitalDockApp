import { useNavigate } from "react-router";

export default function SessionListItem(props) {
    const store = props.store;
    const time = props.time;
    const date = props.date;

    const navigate = useNavigate();

    const sessionHomeNav = () => {
        navigate(`/sessions/${store}${time}${date}`)
    }

    return (
        <div 
            onClick={() => {sessionHomeNav()}}
            className="bg-white h-[7rem] w-full border-solid border-black border-b-[1.5px] active:bg-yellow-300"
        >
            <div className="ml-1 flex flex-col justify-evenly h-full font-extrabold text-lg">
                <div>Store: {store}</div>
                <div>Session Time: {time}</div>
                <div>Date: {date}</div>
            </div>
        </div>
    )
}