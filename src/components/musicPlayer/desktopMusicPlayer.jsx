import { Pause, Shuffle, SkipForward, StepBack, VolumeOff } from "lucide-react";
import { Icon } from "./icon";
import { SliderMusicDesktop } from "./SliderMusic";

export function DesktopMusicPlayer() {
    return(
        <div className="hidden md:flex h-20 w-full justify-between bg-zinc-950 py-4">
            <div></div>
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center gap-12">
                    <Icon Logo={Shuffle}></Icon>
                    <Icon Logo={StepBack}></Icon>
                    <Icon Logo={Pause} size={24}></Icon>
                    <Icon Logo={SkipForward}></Icon>
                    <Icon Logo={VolumeOff}></Icon>
                </div>
                <div className="flex justify-center">
                    <SliderMusicDesktop></SliderMusicDesktop>
                </div>
            </div>
            <div className=" w-3 bg-amber-300"></div>
        </div>
    )
}