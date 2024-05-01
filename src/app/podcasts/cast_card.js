

export default function CastCard ({podcast}){
    return (
        <div className="cast-card border-2 m-5 p-2 flex">
            <div className="p-2">
                <div className="border-b p-2">
                    <h3>{podcast.title}</h3>
                </div>

                <div>
                    {podcast.blurb}
                </div>
            </div>
            <div className="w-36 h-36 border p-2">
                This is a picture
            </div>
        </div>
    )
}