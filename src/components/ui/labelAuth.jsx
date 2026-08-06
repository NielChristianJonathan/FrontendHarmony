export function LabelAuth({htmlFor, label}) {
    return(
        <label 
            htmlFor={htmlFor}
            className="text-white"
        >{label}</label>
    )
}