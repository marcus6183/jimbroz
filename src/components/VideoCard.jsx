import Marquee from "react-fast-marquee";

const VideoCard = ({ item }) => {
    return (
        <a
            href={`https://www.youtube.com/watch?v=${item.videoId}`}
            target="_blank"
            rel="noreferrer"
        >
            <div className="w-72 h-fit bg-white rounded-lg flex flex-col p-4 border-2 border-white shadow-[0px_5px_10px_0px_#00000024] hover:border-purple-500 duration-200 ease-in-out hover:cursor-pointer">
                <img
                    src={item.thumbnails[0].url}
                    alt={item.title}
                    className="rounded-md"
                />
                <div className="h-[1px] w-full my-1 bg-gradient-to-r from-transparent from-1% via-neutral-500 to-transparent to-99%" />
                {item.title.length > 18 ? (
                    <Marquee
                        className="w-full overflow-hidden relative"
                        pauseOnHover="true"
                        speed={30}
                        gradient={true}
                        gradientWidth={20}
                    >
                        <p className="font-bold text-xl py-2 whitespace-nowrap px-6">
                            {item.title}
                        </p>
                    </Marquee>
                ) : (
                    <div className="w-full overflow-hidden relative">
                        <p className="font-bold text-xl py-2">{item.title}</p>
                    </div>
                )}
                <p className="text-neutral-600 text-sm">{item.channelName}</p>
            </div>
        </a>
    );
};

export default VideoCard;
