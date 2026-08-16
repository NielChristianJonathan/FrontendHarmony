import { Slider } from "../ui/slider";

export function SliderMusicDesktop() {
    return(
        <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="mx-auto w-full max-w-xs"
        >
        </Slider>
    )
}