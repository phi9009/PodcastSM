export default function CastCardMini ({podcast}){
    return (
        <div className="border-2 flex m-2">
            <div className="grow">
                <div className="m-3 border-b">{podcast.title}</div>
                <div className="m-3">{podcast.blurb}</div>
                
            </div>
            <div className="w-36 h-36 border m-2">

            </div>
        </div>
    )
}