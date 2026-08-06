export function InputAuth({type, placeholder, id, value, setValue, required=true, error=""}) {
    return(
        <div>
            {error && (
                <h1 className="text-red-500">*{error}</h1>
            )}
            <input
                type={type}
                id={id}
                value={value}
                onChange= {(e) => setValue(e.target.value)}
                required={required}
                className="w-full bg-white p-2.5 rounded-xl focus:outline-none"
                placeholder={placeholder}
            />
        </div>
    )
}