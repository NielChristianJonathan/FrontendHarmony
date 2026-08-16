export function TitlePlaylist() {
    return (
        <div className="bg-linear-to-b from-zinc-600 to-zinc-800 py-4">
            
            {/* Gambar */}
            <div
                className="flex items-center gap-2"
            >
                <div className="size-[clamp(96px,5vw,200px)] bg-amber-400">
                </div>
                <div>
                    <h1 className="font-semibold text-white">Playlist Public</h1>
                    <h1 className="font-bold text-2xl text-white">Playlist #1</h1>
                </div>
            </div>
        </div>
    )
}