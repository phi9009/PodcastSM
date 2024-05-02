export default function EpCardMini({episode})
{
    return(
        <div className="border-2 flex m-5 p-2">
            <div className="ep-image w-36 h-36 border m-2"></div>
            <div className="flex flex-col m-2">
                <div className="border-b-2 mb-3">
                    {episode.title}
                </div>
                <div>
                    {episode.publishdate}
                </div>
                <div>
                    {episode.blurb}
                </div>
            </div>
        </div>
    )

}