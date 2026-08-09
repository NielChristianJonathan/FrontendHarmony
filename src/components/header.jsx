import { ButtonHeader } from "./header/buttonHeader";

export function Header() {
    return(
        <div 
            className="
            flex h-12 items-center px-2 gap-4 
            md:h-16
            "
        >
            <div className="rounded-full size-[clamp(32px,5vw,42px)] bg-white ">
                <img src="" alt="" />
            </div>
            <ButtonHeader text={"Semua"}/>
        </div>
    )
}