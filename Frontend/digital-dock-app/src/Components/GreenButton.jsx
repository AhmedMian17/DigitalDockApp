export default function GreenButton(props) {

    return (
        <>
            <button className="bg-[#259D08] w-[16rem] active:bg-blue-600 rounded-full px-6 py-6 font-sans text-2xl text-white font-semibold mb-[3rem]">{props.text}</button>
        </>
    )
}