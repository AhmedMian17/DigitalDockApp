import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export default function GreenButton(props) {
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDisabled(props.disabled);
    }, [props.disabled]);

    const nav = () => {
        navigate(`${props.path}`);
    }

    return (
        <>
            <button onClick={() => {nav()}} disabled={isDisabled} className="disabled:opacity-50 bg-[#259D08] w-[16rem] active:bg-blue-600 rounded-full px-6 py-6 font-sans text-2xl text-white font-semibold mb-[3rem]">{props.text}</button>
        </>
    )
}