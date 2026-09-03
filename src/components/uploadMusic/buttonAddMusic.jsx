export function ButtonAddMusic({handleClick}) {
    return(
        <button
            className="bg-amber-50 ml-auto mt-auto cursor-pointer rounded py-1 px-2"
            onClick={handleClick}
        >
            Upload File
        </button>
    )
}