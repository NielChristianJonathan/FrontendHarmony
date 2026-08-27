export function ButtonAuth({label, onClick}) {
    return(
        <button
            onClick={onClick}
            className="w-full bg-amber-400 py-2 rounded-xl font-bold mt-4 cursor-pointer"
        >
            {label}
        </button>
    )
}